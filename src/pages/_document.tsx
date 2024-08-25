import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="he">
      <Head>
        <title>אתר בעברית</title>
        <meta name="description" content="אתר לדוגמה שנבנה עם Next.js 14." />
        <html lang="he" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
