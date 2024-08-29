import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Agents from "./Pages/Agents";
import Properties from "./Components/Properties";
import PropertiesDetail from "./Pages/PropertiesDetail";
import Fav from "./Components/Fav";

function App() {
  return (
    <>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/hakkimizda" element={<About></About>}></Route>
    <Route path="/ilanlar" element={<Properties></Properties>}></Route>
    <Route path="/ilanlar/:slug" element={<PropertiesDetail></PropertiesDetail>}></Route>
    <Route path="/temsilciler" element={<Agents></Agents>}></Route>
    <Route path="/iletisim" element={<Contact></Contact>}></Route>
    <Route path="/favorilerim" element={<Fav></Fav>}></Route>
  </Routes>
  <Footer></Footer>
    </>
  )
}
export default App
