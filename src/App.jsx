import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Book from "./pages/Book";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateBooking from "./pages/UpdateBooking";
import LoggedInHome from "./pages/LoggedInHome";

function App() {
  return (
    <div id>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loggedInHome" element={<LoggedInHome />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateBooking" element={<UpdateBooking />} />
      </Routes>
    </div>
  );
}

export default App;
