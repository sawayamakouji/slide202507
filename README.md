# Gemini CLIで動画自動生成

## どんなアプリ？

このプロジェクトは、[Remotion](https://www.remotion.dev/) と [GitHub Actions](https://docs.github.com/ja/actions) を使って、**テキストファイルから自動で動画を生成する**アプリです。

`scenario.md`というシンプルなテキストファイルを編集するだけで、GitHubにプッシュすると自動的に動画がレンダリングされ、ダウンロードできるようになります。プログラミングの知識が少なくても、簡単に動画を作れるように設計されています。

## 使い方



### GitHub上で手軽に利用する方法 (フォークしてブラウザで完結)

ローカル環境のセットアップなしで、GitHub上で直接 `scenario.md` を編集して動画を生成することも可能です。

1.  **このリポジトリをフォークする**
    まず、あなたのGitHubアカウントにこのリポジトリのコピーを作成します。
    *   このリポジトリのページにアクセスし、右上の「**Fork**」ボタンをクリックします。
    *   指示に従ってフォークを完了させます。あなたのGitHubアカウントに、このプロジェクトのコピーが作成されます。

2.  **フォークしたリポジトリで `scenario.md` を編集する**
    *   あなたのGitHubアカウントに作成されたフォーク済みのリポジトリページにアクセスします。
    *   `scenario.md` ファイルを見つけてクリックし、ファイルの内容を表示させます。
    *   右上の鉛筆アイコン（「Edit this file」）をクリックして、ブラウザ上で直接 `scenario.md` を編集します。
    *   動画にしたい内容を編集したら、ページ下部の「Commit changes」セクションでコミットメッセージを入力し、「Commit changes」ボタンをクリックします。

3.  **自動レンダリングの確認**
    変更をコミットすると、GitHub Actionsが自動的に動画のレンダリングを開始します。レンダリングの進捗は、リポジトリの「Actions」タブで確認できます。

この方法を使えば、`git clone` や `npm install` といったローカルでのセットアップなしに、手軽に動画生成を試すことができます。

###  シナリオを編集しよう！ (`scenario.md`)

動画の内容は、`scenario.md`というファイルで管理されています。このファイルをテキストエディタで開いて、動画にしたい内容を書いてみましょう。

`scenario.md`は、以下のような形式で書かれています。

```markdown
---
type: title
text: あなたの動画のタイトル
color: "#FF6F00"
---
type: info
title: シーンのタイトル
children: このシーンで伝えたい内容を<br />ここに書きます。
---
```

*   `---` で区切られたブロックが、動画の1つの「シーン」になります。
*   `type: title` は動画のタイトルシーン、`type: info` は情報表示シーンです。
*   `text:`, `title:`, `children:` の後に、表示したいテキストを書きます。
*   `<br />` を使うと、改行できます。

###  シーンのカスタマイズ (背景色など)

`scenario.md`の各シーンには、追加のプロパティを設定することで、見た目をカスタマイズできます。

#### 背景色の変更

現在の`scenario.md`では、`type: title` のシーンに `color` プロパティを設定することで、タイトルの文字色を変更できます。

```markdown
---
type: title
text: あなたの動画のタイトル
color: "#FF6F00"  <-- ここで色を指定します (例: 赤なら "#FF0000", 青なら "#0000FF")
---
```

**補足**: 現在のテンプレートでは、`info` や `code` タイプのシーンの背景色は固定されています。もしこれらのシーンの背景色も変更したい場合は、`src/MyVideo.tsx` や `src/components/StyledTitle.tsx` のCSS（`className`）を編集する必要があります。

### 動画の長さについて

動画の長さは、`scenario.md`に書かれた「シーンの数」によって決まります。

*   **1シーンあたりの長さ**: `src/MyVideo.tsx` ファイルの `SCENE_DURATION` という定数で、1つのシーンが何フレーム表示されるかが決まっています。現在の設定では `SCENE_DURATION = 100;` となっています。
*   **フレームレート (fps)**: Remotionのデフォルトのフレームレートは30fpsです（1秒間に30フレーム）。

したがって、1つのシーンの長さは `SCENE_DURATION / fps` で計算できます。
現在の設定では `100フレーム / 30fps = 約3.33秒` となります。

例えば、`scenario.md`に5つのシーンがある場合、動画の全体の長さは `5シーン × 約3.33秒/シーン = 約16.65秒` となります。

もし、1シーンあたりの長さを変更したい場合は、`src/MyVideo.tsx` の `SCENE_DURATION` の値を変更してください。

###  画像や音を追加したい場合

動画に画像や音を追加することも可能です。

1.  **画像や音のファイルを準備**:
    追加したい画像ファイル（例: `.png`, `.jpg`）や音声ファイル（例: `.mp3`, `.wav`）を用意します。

2.  **`public`ディレクトリに配置**:
    これらのファイルをプロジェクトの `public` ディレクトリ、またはその中のサブディレクトリ（例: `public/images`, `public/audio`）に配置します。
    Remotionは `public` ディレクトリ内のファイルを、動画レンダリング時に参照できる静的アセットとして扱います。

    例: `public/images/my_image.png`, `public/audio/my_sound.mp3`

3.  **Remotionのコンポーネントで利用**:
    `scenario.md`の各シーンに `image:` や `audio:` プロパティを追加し、`public` ディレクトリからの相対パスを指定することで、Remotionのコンポーネントが自動的にそれらの画像や音源を利用します。
    （例: `image: /images/my_image.png`, `audio: /audio/my_sound.mp3`）

#### シナリオでの指定方法

`scenario.md`の各シーンブロックに、以下のように `image:` や `audio:` プロパティを追加します。

```markdown
---
type: info
title: 画像付きのシーン
children: このシーンには画像が表示されます。
image: /images/my_image.png  <-- publicディレクトリからの相対パス
---
---
type: info
title: 音声付きのシーン
children: このシーンでは音楽が流れます。
audio: /audio/background_music.mp3  <-- publicディレクトリからの相対パス
---
---
type: info
title: 画像と音声付きのシーン
children: このシーンでは画像と音楽が同時に表示されます。
image: /images/another_image.png
audio: /audio/effect_sound.mp3
---
```

*   `image:` の後には、表示したい画像の `public` ディレクトリからの相対パスを指定します。
*   `audio:` の後には、再生したい音声ファイルの `public` ディレクトリからの相対パスを指定します。

**重要**: 画像や音声ファイルは、必ず事前に `public` ディレクトリ内に配置してください。



### 動画を自動生成しよう！ (GitHub Actions)

`scenario.md`を編集して保存したら、その変更をGitHubにプッシュするだけです。

1.  変更をコミットします。
    ```bash
    git add scenario.md
    git commit -m "feat: シナリオを更新しました"
    ```
2.  GitHubにプッシュします。
    ```bash
    git push origin main
    ```

    **もしプッシュがうまくいかない場合（エラーが出る場合）**
    「`Updates were rejected because the tip of your current branch is behind`」のようなエラーが出た場合は、GitHub上の変更があなたのPCのファイルよりも新しいため、プッシュできません。
    その場合は、まず以下のコマンドでGitHubの最新の変更をあなたのPCに取り込んでください。
    ```bash
    git pull origin main
    ```
    その後、もう一度 `git push origin main` を実行してください。

プッシュが完了すると、GitHub上で自動的に動画のレンダリングが開始されます。

###  生成された動画をダウンロードしよう！

動画のレンダリングが完了したら、以下の手順でダウンロードできます。

1.  GitHubのリポジトリページを開きます。
2.  上部にある「**Actions**」タブをクリックします。
 ![image](https://github.com/user-attachments/assets/51dac142-51af-4d2c-9882-289265f16c82)

3.  左側のサイドバーで「**Render Remotion Video**」というワークフローを選び、最新の実行コミット名（緑色のチェックマークがついているものが成功です）をクリックします。
4.  実行の詳細ページの下の方に「**Artifacts (アーティファクト)**」というセクションがあります。「**rendered-video**」という名前のファイルをダウンロードしてください。


これで、あなたの作った動画が手に入ります！

## ローカルで開発・確認したい場合

GitHubにプッシュする前に、自分のPCで動画のプレビューを確認したい場合は、以下のコマンドを実行します。

```bash
npm start
# または yarn start
```

ブラウザが自動的に開き、動画のプレビューが表示されます。変更を保存すると、リアルタイムでプレビューが更新されます。

## 動画をGoogle Driveに自動アップロードする設定

レンダリングされた動画をGitHubからダウンロードする手間を省き、Google Driveに自動でアップロードするように設定できます。この設定は、各リポジトリ（フォークしたリポジトリも含む）で個別に行う必要があります。

### 1. Google Cloud Platform (GCP) での準備

GitHub ActionsからGoogle Driveにアクセスするために、サービスアカウントと認証情報が必要です。

1.  **Google Cloud Consoleにアクセス**: `https://console.cloud.google.com/` にアクセスし、Googleアカウントでログインします。
2.  **プロジェクトの作成または選択**: 画面上部のプロジェクト選択ドロップダウンから、新しいプロジェクトを作成するか、既存のプロジェクトを選択します。
3.  **Google Drive APIを有効にする**: 左側のナビゲーションメニューから「**API とサービス**」→「**ライブラリ**」を選択し、「`Google Drive API`」を検索して有効にします。
4.  **サービスアカウントの作成**: 左側のナビゲーションメニューから「**IAM と管理**」→「**サービスアカウント**」を選択し、「**サービスアカウントを作成**」をクリックします。サービスアカウント名を入力し、「作成して続行」→「完了」をクリックします。
5.  **サービスアカウントキーの生成**: 作成したサービスアカウントのメールアドレスをクリックし、「**キー**」タブを選択します。「**鍵を追加**」→「**新しい鍵を作成**」をクリックし、キーのタイプを「**JSON**」として「**作成**」をクリックします。JSONファイルが自動的にダウンロードされます。**このファイルは機密情報なので、絶対に公開しないでください。**

### 2. Google Driveでの準備

動画をアップロードするGoogle Driveのフォルダを準備し、サービスアカウントと共有します。

1.  **アップロード先フォルダの作成または選択**: Google Driveで、動画をアップロードしたいフォルダを作成するか、既存のフォルダを選択します。
2.  **フォルダIDの取得**: フォルダを開いた際のブラウザのURLを確認します。`https://drive.google.com/drive/folders/`**`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`** の `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` の部分がフォルダIDです。
3.  **フォルダの共有設定**: フォルダを右クリックし、「**共有**」を選択します。「ユーザーやグループと共有」の欄に、先ほど作成したサービスアカウントのメールアドレス（例: `remotion-uploader@your-project-id.iam.gserviceaccount.com`）を入力し、権限を「**編集者**」として「送信」をクリックします。

### 3. GitHubリポジトリでの設定

取得した認証情報とフォルダIDをGitHubのシークレットに安全に登録します。

1.  **GitHubリポジトリのSettingsにアクセス**: あなたのリポジトリページで「**Settings**」タブをクリックします。
2.  **Secrets and variablesに移動**: 左側のサイドバーで「**Secrets and variables**」→「**Actions**」を選択します。
3.  **サービスアカウントキーの登録**: 「**New repository secret**」をクリックし、以下の情報を入力します。
    *   **Name**: `GDRIVE_SERVICE_ACCOUNT_KEY`
    *   **Secret**: ダウンロードしたJSONファイルの中身をすべて貼り付けます。
    *   「**Add secret**」をクリックします。
4.  **Google DriveフォルダIDの登録**: 再度「**New repository secret**」をクリックし、以下の情報を入力します。
    *   **Name**: `GDRIVE_FOLDER_ID`
    *   **Secret**: 取得したGoogle DriveのフォルダIDを貼り付けます。
    *   「**Add secret**」をクリックします。

### 4. GitHub Actionsワークフローの修正

最後に、`.github/workflows/render.yml`ファイルを修正して、Google Driveへのアップロードステップを有効にします。この修正は、すでにGemini CLIによって行われています。

```yaml
      - name: Upload video to Google Drive
        uses: adityamukho/google-drive-upload-action@v1.2.0
        with:
          credentials: ${{ secrets.GDRIVE_SERVICE_ACCOUNT_KEY }}
          folderId: ${{ secrets.GDRIVE_FOLDER_ID }}
          filePath: out/video.mp4
          fileName: remotion_video_${{ github.run_number }}.mp4
```

この設定が完了すると、`scenario.md`を編集してコミットプッシュするたびに、動画がレンダリングされ、指定したGoogle Driveのフォルダに自動でアップロードされるようになります。
