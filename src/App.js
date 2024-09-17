import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Favoritos from "./pages/Favoritos";
import Populares from "./pages/Populares"

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pelicula/:id" component={DetailPage}/>
        <Route exact path="/favoritos" component={Favoritos}/>
        <Route exact path="/populares" component={Populares}/>
      </Switch>
      <Footer />
    </>
  );
}
export default App;
