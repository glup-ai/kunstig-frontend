import { FunctionComponent } from 'react';
import './index.css';

export const AboutUs: FunctionComponent = () => {
  return (
    <div className="page">
      <div className="video-responsive">
        <iframe
          width="1024"
          height="1024"
          src="https://www.youtube.com/embed/dwAOkDgW0Bg?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-content">
        <h1>Om prosjektet </h1>
        <p>
          Idéen til det første glup-prosjektet var klart. Vi vil lage en modell
          som kan produsere kunst for oss.
        </p>
        <p>
          I Kunstig skal vi altså lage og trene et nevralt nettverk, av typen
          GAN, som kan generere egne malerier. Basert på mange timers trening på
          annen kunst vil nettverket forsøke å lage egne bilder av samme
          kvalitet.
        </p>
        <p>
          Ved å trene nettverket med forskjellige kunstretninger og kunstnere vi
          selv liker, er håpet å sitte igjen med hvert vårt drømmemaleri på
          veggen.
        </p>
      </div>
    </div>
  );
};
