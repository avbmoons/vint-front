import { Router } from "./router/Router";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import "./styles/App.scss";
//import { Header } from "./components/header/Header";

//const text = "some text here...";

function App() {
  return (
    <div className="App">
      <div className="App-top">
        <header className="App-header">
        <Header />
        </header>
        <main className="App-main">
          <Router />
        </main>
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
