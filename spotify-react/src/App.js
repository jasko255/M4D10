import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import ArtistDetails from './components/ArtistDetails'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Route path="/" component={ Main } /> 
        <Route path="/artist/:artistId/" component={ArtistDetails} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
