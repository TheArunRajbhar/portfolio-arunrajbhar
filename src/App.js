import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { Helmet } from 'react-helmet';

function App() {

  return (
    <div >
    <Helmet>
     <title>Arun Rajbhar</title>
    <meta name="title" content="Arun Rajbhar" />
    <meta
      name="description"
      content="Arun Rajbhar, a dedicated Full Stack Developer in Mumbai, Maharashtra. Specializing in creating dynamic digital experiences. Explore my portfolio for innovative solutions. Let's connect and discuss your next project."
    />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Arun Rajbhar" />
    <meta
      property="og:image"
      content="https://portfolio-arunrajbhar.vercel.app/portfolio.jpeg"
    />
     <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Arun Rajbhar",
        "alternateName": ["AR"],
        "url": "https://portfolio-arunrajbhar.vercel.app/"
      }
    </script>
    </Helmet>
      <Main />
    </div>
  );
}

export default App;
