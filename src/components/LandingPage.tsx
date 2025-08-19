import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Story from './Story';
import Benefits from './Benefits';
import SocialProof from './SocialProof';
import Offer from './Offer';
import FAQ from './FAQ';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Meta Pixel */}
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
            fbq('init', '30870081482636578');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=30870081482636578&ev=PageView&noscript=1"
        />
      </noscript>

      <Header />
      <Hero />
      <Story />
      <Benefits />
      <SocialProof />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;