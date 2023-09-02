import "./styles/App.css";
import Header from "./Components/Header";
import Book from "./Pages/Book";
import Theodoi from "./Pages/Theodoi";
import Auth from "./Pages/Auth";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import DetailBook from "./Pages/DetailBook";
import NewBooks from "./Components/NewBooks";

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Book />} />
        <Route path="/Truyen/theo-doi" element={<Theodoi />} />
        <Route path="/Truyen/" element={<NewBooks />} />
        <Route path="/Truyen/:ten/:id" element={<DetailBook />} />
        <Route path="/user/dang-nhap" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
