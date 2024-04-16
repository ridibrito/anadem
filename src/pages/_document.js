import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Anadem</title>
        <link rel="icon" href="/icone.png" />
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
