/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ★★★ この部分を丸ごと追加します ★★★
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['14rem', { lineHeight: '1' }],
        '13xl': ['16rem', { lineHeight: '1' }],
      },
      fontFamily: {
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
      }
    },
  },
  plugins: [],
};