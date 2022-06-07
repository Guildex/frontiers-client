import Document, { type DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(
      // eslint-disable-next-line @typescript-eslint/naming-convention
      (App) => (props) => sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }
}
