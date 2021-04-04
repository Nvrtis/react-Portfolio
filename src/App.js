import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactPage from './pages/contact'
import PortfolioPage from './pages/portfolio'
import HomePage from './pages/home'
import Nav from './components/Nav/nav'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App() {
  return (
    // <Router>
    //   <Header/>
    //   <Nav />
    //   <Switch>
    //     <Route path="/Contact">
    //       <ContactPage />
    //     </Route>
    //     <Route path="/portfolio">
    //       <PortfolioPage />
    //     </Route>
    //     <Route path="/">
    //       <HomePage />
    //     </Route>
    //   </Switch>
    //   <Footer/>
    // </Router>
  );
}

export default App;
