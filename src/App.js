import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Favoritos from "./pages/Favoritos";
import Populares from "./pages/Populares";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import Upcoming from "./pages/Upcoming";

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pelicula/:id" component={DetailPage}/>
        <Route exact path="/favoritos" component={Favoritos}/>
        <Route exact path="/populares" component={Populares}/>
        <Route exact path="/upcoming" component={Upcoming}/>
        <Route exact path="/search" component={SearchResults}/>
        <Route exact path="*" component={NotFound}/>
      </Switch>
      <Footer />
    </>
  );
}
export default App;
