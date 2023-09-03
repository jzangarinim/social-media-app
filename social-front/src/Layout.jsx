import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import User from "./pages/User.jsx";

export default function Layout() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
