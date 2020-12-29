import { ColorModeScript } from "@chakra-ui/react";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="public/fonts/PokemonSolid.ttf"
            as="font"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <ColorModeScript initialColorMode="light" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
