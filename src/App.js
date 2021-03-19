import {useState} from 'react';
import './App.css';
import {Popup} from './components/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ImageGrid} from './components/Imagegrid';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <div className="title mt-4">
        <h2>Photographer's showcase:</h2>
      </div>
      <div className="px-4">
      <ImageGrid setSelectedImage={setSelectedImg}/>
      { selectedImg &&(
        <Popup selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
        )}
        </div>
    </div>
  );
}

export default App;


