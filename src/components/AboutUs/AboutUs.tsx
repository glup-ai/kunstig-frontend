import { FunctionComponent } from 'react';
import './index.css';
import { Header } from "../Header";

export const AboutUs: FunctionComponent = () => {
  return (
    <>
      <Header />
      <section className="page">
        <div className="video-responsive">
          <iframe
            width="1024"
            height="1024"
            src="https://www.youtube.com/embed/dwAOkDgW0Bg?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="text-content">
          <h1>Om prosjektet </h1>
          <p>
            Kunstig er en AI som er trent til å lage egen kunst. Ved hjelp av en GAN-arkitektur har den trent opp to
            moduler; en kunstkritiker og en kunstner. Kunstkritikeren blir trent på ekte data til å gjøre seg opp en mening
            om hva "god" kunst er. Kunstneren vet ingen ting, men prøver å lære seg å male. Maleriene sender kunstneren til kritikeren
            for tilbakemelding, og med kunstkritikerens hjelp blir kunstneren sakte men sikkert bedre.
          </p>
          <p>
            På denne nettsiden kan dere se Kunstig sine verker, og be om å få et unikt maleri laget til deg. Kunstig har
            øvd seg inneen forskjellige kunstretninger og det er mulig å utforske samtlige.
          </p>
          <p>
            Videoen dere ser til venstre er Kunstig sine malerier innen abstrakt kunst.
          </p>
          </div>
      </section>
    </>
  );
};
