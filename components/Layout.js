import Head from 'next/head';
import PropTypes from 'prop-types';
import Hero from './Hero';
import NavList from './NavList';

export const siteName = 'Frasers';
export const siteTitle =
  'Frasers Gourmet Hideaway | Oak Harbor | Pacific Northwest';

const theme = {
  maxWidth: '1200px',
  smallScreen: '460px',
  mediumScreen: '769px',
  largeScreen: '1008px',
};

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Head>
        {/* <html lang='en' /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Full service steak and seafood restaurant in Oak Harbor, Washington | Serving Pacific Northwest inspired dishes using fresh and local ingredients."
        />
        <meta
          name="keywords"
          content="gourmet, best, northwest, restaurant, steak, seafood, pasta, dessert, fine, dining, dinner, happy, hour, cocktail, wine, beer, oak, harbor, whidbey, island, washington, wa, dine in, dine-in, takeout, table, service,"
        />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YS529TE94E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YS529TE94E');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' /> */}
      </Head>
      <header className="header">
        {home ? (
          <>
            <div className="nav-spacer" />
            <Hero />
          </>
        ) : (
          <>
            <div className="nav-spacer" />
          </>
        )}
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <span>© 2020 Frasers Gourmet Hideaway |</span>
        <span className="no-wrap">
          &nbsp;Built by:&nbsp;
          <a
            className="light-text"
            href="https://github.com/ryan3738"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ryan Fraser
          </a>
        </span>
        <nav className="nav-list">
          <NavList />
        </nav>
      </footer>
      <style jsx>{`
        .container {
          /* effects max width of layout */
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* max-width: 100%; */
          /* min-width: 200px; */
          padding: 0;
          margin: 0 auto;
        }

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .header {
          width: 100%;
          /* display: flex; */
          /* flex-direction: column; */
          /* align-items: center; */
        }

        .footer {
          height: auto;
          width: 100%;
          background-color: var(--surface-color);
          padding: 1em;
          /* white-space: no-wrap; */
        }
        /* .light-text {
          color: var(--text-color);
        } */

        .no-wrap {
          white-space: nowrap;
        }

        .nav-spacer {
          height: 4em;
        }

        .nav-padding {
          padding: 4em 0 0;
        }
        .nav-link {
          /* font-size: 0.5rem; */
          padding: 1em;
          margin: auto;
          text-decoration: underline;
          white-space: nowrap;
        }
        .nav-list {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
      `}</style>

      <style global jsx>{`
        :root {
          --black-color: #0b0a0a;
          --background-color: var(--black-color);
          --surface-color: rgba(255, 255, 255, 0.03);
          --primary-color: #c6a938;
          --primary-color-desaturated: #f3e08d;
          /* Have option for internet explorer without f6*/
          --secondary-color: #1a1a1a;
          --white-color: #ffffffde;
          --text-color: var(--white-color);
          /* 87% */
          --high-emphasis-text: #ffffffde;
          /* 60% */
          --medium-emphasis-text: #ffffff99;
          /* 38% */
          --text-disabled: #ffffff61;
          --color-facebook: #3b5998;
          --color-instagram: #fb3958;
          --small-screen: 460px;
          --medium-screen: 769px;
        }
        .medium-emphasis {
          color: var(--medium-emphasis-text);
        }

        /* media queries */
        @media only screen and (min-width: ${theme.largeScreen}) {
          html,
          body {
            font-size: 112.5%;
          }
        }
      `}</style>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.any,
  home: PropTypes.bool,
};
