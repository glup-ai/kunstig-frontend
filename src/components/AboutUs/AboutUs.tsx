import { FunctionComponent } from 'react';
import './index.css';
import { Header } from "../Header";
import { useParams } from 'react-router-dom';

export const AboutUs: FunctionComponent = () => {
  const {name} = useParams();
  console.log(name)
  let embedToken= '';
  if (name === 'portretterteRariteter'){
    embedToken = 'qqKTq2M8Hw0'
  } else if (name === 'nonfigurativAbstrusivitet'){
    embedToken = 'EV6QcgVShic'
  } else if (name === 'galaktiskeSfærer') {
    embedToken = 'AmQJN2zGk1M'
  }
  else {
    embedToken = 'qqKTq2M8Hw0'

  }


  return (
    <>
      <Header />
      <section className="page">
        <div className="video-responsive">
          <iframe
            width="1024"
            height="1024"
            src={"https://www.youtube.com/embed/" + embedToken + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="text-content">
          <h1>Om prosjektet </h1>
          <p>
            Kunstig er en AI som er trent til å lage egen kunst. Ved hjelp av en GAN-arkitektur har hen trent to
            moduler; en kunstkritiker og en kunstner. Kunstkritikeren blir trent på ekte data til å gjøre seg opp en mening
            om hva "god" kunst er. Kunstneren vet ingen ting, men prøver å lære seg å male. Maleriene sender kunstneren til kritikeren
            for tilbakemelding, og med kunstkritikerens hjelp blir kunstneren sakte men sikkert bedre.
          </p>
          <p>
            På denne nettsiden kan dere se Kunstig sine verker, og be om å få et unikt maleri laget til deg. Kunstig har
            øvd seg inneen forskjellige kunstretninger og det er mulig å utforske samtlige.
          </p>
          <p>
            Videoen dere ser til venstre er Kunstig sine malerier innen abstrakt kunst, generert i takt med noen friske noter.
          </p>
          </div>
      </section>
    </>
  );
};
