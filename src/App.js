
import './App.css';
import Prediction from './components/prediction';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AboutZodiac from './components/AboutZodiac/aboutzodiac';
import PageAnimation from './components/PageAnimation/pageAnimation';
// import {ReactComponent as Virgo} from './SVG/virgo.svg';


function App() {
  // const [overlayOpen, setOverlayOpen] = useState(false);
  // const [overlayClicked, setOverlayClicked] = useState(false)

  // const handleOverlayClick = () => {
  //   setOverlayClicked(!overlayClicked);
  //   setOverlayOpen(!overlayOpen);


  return (
    <div className="App  relative h-fit w-screen">
      <BrowserRouter>
        <div className='max-w-[1800px] h-fit mx-auto'>
          <div className={`h-screen w-full relative`}>
            <PageAnimation />

            <Routes>
              <Route path="*" element={<Prediction />}></Route>
              <Route path="/:name" element={<AboutZodiac />}></Route>

            </Routes>


          </div>

        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
