import Document, {Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return <Html lang="en">
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>

        <body>
            <Main />
        </body>

        <NextScript />

        </Html>
    }
}