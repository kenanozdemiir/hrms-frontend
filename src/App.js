import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Content from "./layouts/Content";


function App() {
  return (
    <div className="App">
     <Header/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
