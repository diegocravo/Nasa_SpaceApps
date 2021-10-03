import Header from "./components/Header";
import Photo from "./components/Photo";

function App() {
  return (
    <div>
      <Header />
      <Photo photo="https://apod.nasa.gov/apod/image/2110/M8-Pipe_APOD_GabrielSantos_LG.jpg" />
    </div>
  );                                            
}

export default App;
