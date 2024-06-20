import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UserManagement from "./pages/UserManagement.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/user-management" element={<UserManagement />} />
        <Route exact path="/analytics" element={<Analytics />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;