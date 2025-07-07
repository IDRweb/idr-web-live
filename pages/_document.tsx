import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { useRef } from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <noscript>You need to enable JavaScript to run this website.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
