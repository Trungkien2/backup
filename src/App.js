import { CopyRight, FooterLd, Header,Navbar, Slider } from './component';
import variables from './variable.scss';
import './App.scss';
import CardContainer from './container/cardContainer/CardContainer';
import ConsumerContainer from './container/consumer/ConsumerContainer';
import About from './component/About';
import Tuyendung from './component/Tuyendung';


function App() {
  
  return (
    <div className="App">
    <Header  />
    <Navbar/>
    <Slider/>
    <CardContainer/>
    {/* <ConsumerContainer/> */}
    <About/>
    <Tuyendung/>
    <FooterLd/>
    <CopyRight/>
    </div>
  );
}

export default App;
