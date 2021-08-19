import { useState } from 'react';
import { saveAs } from 'file-saver'
import skrik from './images/skrik.jpg'
import syktBarn from './images/syktbarn.jpg'

const mockImgs = [
  skrik,
  syktBarn
]

const App = () => {
  const [imgIndex, setImgIndex] = useState(0)

  const downlaodImage = () => {
    saveAs(mockImgs[imgIndex % 2], 'image.jpg')
  }

  return (
    <main>
      <h1>Kun Stig</h1>
      <img width="200" alt="AI generated image" src={mockImgs[imgIndex % 2]} />
      <button onClick={() => setImgIndex(imgIndex + 1)}>nytt bilde</button>
      <button onClick={downlaodImage}>last ned</button>
    </main>
  );
}

export default App;
