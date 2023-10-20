import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Login from "./components/Login";
import Register from "./components/Register";
import Favorites from "./pages/Favorites";
import NewRecipe from "./pages/NewRecipe";
import View from "./pages/View";
import { CookiesProvider } from "react-cookie";

function App() {


  return (

    <CookiesProvider>
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/viewrecipe/:id" element={<View />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/newRecipe" element={<NewRecipe />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CookiesProvider>
    // <><h1>hello</h1></>
  )
}

export default App;
