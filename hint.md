@Toooman
remotionでインタラクティブ動画
React
remotion
投稿日 2024年12月25日
はじめに
この記事は、リンクアンドモチベーションのAdventCalendarで投稿した記事の続きの内容となります。
Reactを用いて動画を生成できるremotionというライブラリを用いて、以下の2つのインタラクティブな機能を実装する方法をご紹介します。

目次
動画の各チャプターの時間とタイトルを一覧で表示する
各チャプターをクリックするとその時間まで飛べるようにする
スキップボタン
次のチャプターまで再生時間を飛ばすボタン
remotionの使い方


remotion公式ドキュメントのGetting Started のページでは、 基本的な動画の作り方やremotionのインストールの仕方などが書いてありますが、作った動画をどのようにWebページで再生するかはほとんど記述がありません。

以下のリポジトリは、remotionの動画コンポーネントをNext.jsのプロジェクトで再生するテンプレートなので、こちらをforkして実装していきます。



このリポジトリをそのままビルドすると、フォームに入力したテキストが動画上に表示されるというデモページが出来上がります。

リポジトリ内のファイルを見ると、
remotion/MyComp/Main.tsxが動画コンポーネントの本体で、以下のようにコンポーネントベースで動画を構成しています。（<AbsoluteFill>などの要素の意味はremotion APIを参照してください）

  return (
    <AbsoluteFill className="bg-white">
      <Sequence durationInFrames={transitionStart + transitionDuration}>
        <Rings outProgress={logoOut}></Rings>
        <AbsoluteFill className="justify-center items-center">
          <NextLogo outProgress={logoOut}></NextLogo>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={transitionStart + transitionDuration / 2}>
        <TextFade>
          <h1
            className="text-[70px] font-bold"
            style={{
              fontFamily,
            }}
          >
            {title}
          </h1>
        </TextFade>
      </Sequence>
    </AbsoluteFill>
  );
このコンポーネントを、app/page.tsxの以下の部分で再生しています。

          <Player
            component={Main}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={{
              // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
              // but not over inline styles
              width: "100%",
            }}
            controls
            autoPlay
            loop
          />
inputPropsというパラメータを通じて、動画コンポーネント内と再生側で値の受け渡しができます。inputPropsはこのサンプルページでも利用されており、フォームに入力したテキストをinputPropsを通して動画コンポーネントに渡すことで、即座に動画上に表示できています。

動画上にボタンを配置する方法
今回試した方法は以下の2つです。

Playerコンポーネントの外にz-indexを調整したボタンを重ねる (page.tsx)
動画コンポーネントの中にボタンを配置する (Main.tsx)
結果的に、1はうまくいかず、2の方で進めることになりました。
以下で詳しく説明します。

1. Playerコンポーネントの外にz-indexを調整したボタンを重ねる
こちらのセクションでは、フルスクリーンモードの上に要素を重ねようとした試みについて書いており、remotion自体には関係のない話なので、興味のない方は飛ばしてください

以下のように、page.tsxのreturn内で以下のように要素を配置する方法です。（とても簡単に書いています）

return (
    <button style={{zIndex: 1}}>ボタン</button> 
    <Player>
)
しかしこの方法には、プレイヤーをフルスクリーンにした際にボタンが隠れてしまうという問題点があります。

フルスクリーン状態では、何が起こっているのでしょうか？

何らかの要素がフルスクリーンになった際に、開発者ツールで要素を確認すると、以下の画像のようにtop-layerという表示がされます。
image.png

Top layerは、Top layer (最上位レイヤー) - MDN Web Docs 用語集: ウェブ関連用語の定義 | MDNにおいて以下のように説明されています。

最上位レイヤーは、ビューポートの幅と高さ全体にわたり、ウェブ文書内に表示される他のすべてのレイヤーの最上位に位置する固有のレイヤーです。これは、ページ上の他のすべてのコンテンツの上に現れるべき要素を含むために、ブラウザーによって作成されます。

つまり、z-indexをいくら大きく設定しても、top-layerより上に表示することはできないということです。

この問題に対処するために、popover属性というものを用いてみました。

ポップオーバー要素は、最上位レイヤー内の他のすべての要素の上に現れ、親要素の position や overflow のスタイル付けの影響を受けません。

具体的な実装としては、動画がフルスクリーンになったことを検知し、showPopoverメソッドとhidePopoverメソッドによってpopover要素の表示を切り替えました。

これにより、動画をフルスクリーンにした際に、その上にさらに要素を重ねて表示することに成功しました。

しかし！

popover要素をクリックすることができませんでした。
様々なデバッグを重ねても、解決しませんでした。

そのため、この実装方法はインタラクティブ動画には適さないことがわかりました。

2. 動画コンポーネントの中にボタンを配置する (Main.tsx)
もう一つの方法として、以下のように、動画コンポーネントの中にボタンを配置しました。

return (
    <AbsoluteFill className="bg-white">
    <button>
      <Sequence durationInFrames={transitionStart + transitionDuration}>
      // 省略
      </Sequence>
    </AbsoluteFill>
  );
この実装方法であれば、動画内にボタンが含まれるため、フルスクリーンになった際もきちんと表示されます。

しかし、こちらの方法にも問題があります。
それは、以下の画像のようにボタンを下の方に配置すると、再生バーに阻まれてクリックできないというものです。
image.png

現状この問題は解決できておらず、わかっていることとしては以下となります。

remotionのライブラリ自体のCSSを上書きするのは難しそう
コントロールバー部分のクラスが用意されていないため
Custom Controls for the Playerというページを参考にして、サンプルコードをもとにコントロールバーを実装することは可能だが、動画コンポーネントの外に配置することになるため、フルスクリーンモードにした際に方法1と同様の問題が発生する
こちらについては、解決できたら追加で記事を出します！

目次
今回は、以下のようにボタンを押したら目次（Chapter一覧）が表示され、各項目をクリックするとその時間まで再生位置が移動する機能を実装しました。

image.png

動画コンポーネント(Main.tsx)とpage.tsxでは、以下のように値を受け渡しています。


スキップボタン
次に、押すと次のチャプターに移動するボタンを実装しました。

これを実現するには、現在の再生時間を取得し、それに応じて移動する時間を変更させる必要があります。

動画コンポーネント(Main.tsx)内でコードを変更させるには、remotionで提供されている、useCurrentFrame()を用います。

  const currentFrame = useCurrentFrame();
そして以下のコードによって、チャプター情報と現在の再生時間（フレーム）から次のチャプターを見つけます。

  const getNextChapterFrame = () => {
    // 現在のフレームより後の最初のチャプターを見つける
    const nextChapter = chapters.find(chapter => chapter.cumulativeFrames > currentFrame);
    return nextChapter ? nextChapter.cumulativeFrames : null;
  };
最後に、こちらのreturn内でボタンを表示します。

{getNextChapterFrame() !== null && (
    <button onClick={() => skipToFrames(getNextChapterFrame())}>
        次のチャプターにスキップ
    </button>
)}
実際に再生位置を変化させるのは、目次の章で紹介したものと同じ方法で実装しました。

おわりに
ググって解決策が出てこない世界！難しい！
エンジニア力のレベル上げができている感じがします〜
引き続き、インタラクティブ動画の調査・実装を頑張っていきます〜