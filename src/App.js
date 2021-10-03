import Header from "./components/Header";
import Home from "./components/Home";
import Photo from "./components/Photo";
import TemporaryDrawer from "./components/TemporaryDrawer"

function App() {
  return (
    <div>
      <TemporaryDrawer />
      <Home />
      {/* <Photo photo="https://apod.nasa.gov/apod/image/2110/M8-Pipe_APOD_GabrielSantos_LG.jpg" /> */}
    </div>
  );                                            
}

export default App;
