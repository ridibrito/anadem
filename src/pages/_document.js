import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/footer";

const FB_PIXEL_ID = "3880645752172054";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" className="!scroll-smooth">
        <Head>
          <title>Anadem - Direito Médico e Bioético</title>
          <meta
            name="description"
            content="Somos uma S.A. (Sociedade Anônima) que promove o debate sobre problemas relacionados ao exercício profissional da medicina e da odontologia. Além disso, oferecemos blindagem jurídica para profissionais da Saúde, por meio de escritórios de advocacia credenciados especializados em Direito Médico e Odontológico."
          />
          <meta
            name="facebook-domain-verification"
            content="b2fphkly8l3b3v7q70uf1prc3lr2xv"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:3917676,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'pageLoad');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <link rel="icon" href="/icone.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}
