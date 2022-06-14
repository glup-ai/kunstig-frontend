import {FunctionComponent, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {GalleryAsyncState} from "../../utils/types";
import {fetchImagePaths} from "../../utils/async";
import {SomethingWentWrong} from "../SomethingWentWrong";
import {ModelsAsyncContext} from "../../context/ModelAsync";
import Tilt from "react-parallax-tilt";
import "./showcase.scss";

const getModelName = (param: string, models: string[]): string | undefined => {
  try {
    return models[parseInt(param)]
  }
  catch {
    return undefined
  }
}

interface DisplayImageProps {
  img: string;
}

const DisplayImage = ({ img }: DisplayImageProps) => {

  return (<Tilt
    className="displayImage"
    tiltMaxAngleX={2}
    tiltMaxAngleY={2}
  >
    <img src={img} alt="Kunstverk generert av AI-modellen Kunstig"/>
  </Tilt>)
}

export const Showcase: FunctionComponent = () => {
  const { name } = useParams();

  const [showcaseAsyncState, setShowcaseAsyncState] = useState<GalleryAsyncState>({
    error: false,
    data: undefined
  });
  const [currentIndex, setCurrentIndex] = useState(0)

  const {modelsAsyncState} = useContext(ModelsAsyncContext);
  const modelName = getModelName(
    name,
    modelsAsyncState?.data?.filter(model => model.name !== "munch")?.map(model => model.name)
  )
  const images = showcaseAsyncState?.data?.images

  useEffect(() => {
    const id = setInterval(() => setCurrentIndex((previousIndex) => {
      if(previousIndex < images?.length - 1) {
        return previousIndex + 1
      }
      return 0
    }), 15000);
    return () => {
      clearInterval(id);
    };
  }, [images]);

  useEffect(() => {
    fetchImagePaths(setShowcaseAsyncState, modelName)
  }, [modelName])

  return (
      <section className="galleryContainer">
        {images?.length > 0 &&  (
          <div className="showcaseImg">
            <DisplayImage img={images[currentIndex]}/>
          </div>
        )
        }
        {showcaseAsyncState.error && <div className="galleryErrorContainer"><SomethingWentWrong/></div>}
      </section>
  );
}