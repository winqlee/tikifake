import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Section from "./components/section/Section";
import Book from "./components/book/Book";
import Cart from "./components/cart/Cart";

function App() {
  const location = useLocation();
  const handleRouteChange = location.pathname.startsWith("/book");
  const handleRouteChange1 = location.pathname.startsWith("/gioHang");
  return (
    <div>
      <Header></Header>
      <div className="bg-[#F5F5FA] flex xl:px-40">
        <div
          className={`hidden xl:block ${
            handleRouteChange || handleRouteChange1 ? "xl:hidden" : ""
          }`}
        >
          <Nav></Nav>
        </div>
        <div className="pt-3">
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/gioHang" element={<Cart />} />
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
