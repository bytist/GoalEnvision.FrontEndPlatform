import * as React from 'react'

import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document<unknown> {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
