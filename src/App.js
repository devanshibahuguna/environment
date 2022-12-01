import Analytics from "./Analytics";
import Footer from "./Footer";
import Home from "./Home";
import Measures from "./Measures";
import Navbar from "./Navbar";

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Measures/>
      <Analytics/>
      <Footer/>
    </div>
  );
}
export default App;
