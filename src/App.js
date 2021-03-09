import "./App.css";

import Header from "./component/CompHeader";
import Footer from "./component/CompFooter";
import CompContent from './component/CompContent'
import Slider from "./component/CompSlider";

function App() {
  return (
    <div>
      <Header />
      <Slider/>
      <CompContent />
      <Footer />
    </div>
  );
}

export default App;
