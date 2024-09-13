import { BrowserRouter as  Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";

const goods = [
  {id: 1, title: "Xiaomi", price: "30000"},
  {id: 2, title: "Samsung", price: "50000"},
  {id: 3, title: "iPhone", price: "80000"},
];

const Rout = () => (
  <Router>
    <nav>
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='/about'>О нас</NavLink>
      <NavLink to='/telephons'>Телефоны</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/goods/:id" element={<DetailPage goods={goods} />} />
      <Route path="*" element={<ListPage goods={goods} />} />
    </Routes>
  </Router>
)

export default Rout;