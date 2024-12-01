import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import UnauthView from "./views/UnauthView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthView from "./views/AuthView";
import AuthUserView from "./views/AuthUserView";
import ReservationPage from "./components/Reservationpage";
import BookingPage from "./components/BookingPage";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Reservationpage" element={<ReservationPage />} />
      <Route path="/BookingPage" element={<BookingPage />} />

        <Route path="/" element={<UnauthView />} />
        <Route
          path="/login"
          element={<LoginView setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<RegisterView />} />
        <Route
          path="/auth"
          element={
            isAuthenticated ? <AuthView /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/auth-user"
          element={
            isAuthenticated ? <AuthUserView /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
