import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { CONFIG } from "./config";

function App() {
  return (
    <div className="App">
      <Header config={CONFIG} imSiracTivy={5} />
      <Main
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
        }
      />
      <Footer />
    </div>
  );
}

export default App;
