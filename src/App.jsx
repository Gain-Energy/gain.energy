import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import PrivacyPage from './pages/privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perspective" element={<HomePage section="Perspective" />} />
        <Route path="/features" element={<HomePage section="Features" />} />
        <Route path="/cases" element={<HomePage section="Cases" />} />
        <Route path="/products" element={<HomePage section="Products" />} />
        <Route path="/company" element={<HomePage section="Company" />} />
        <Route path="/partners" element={<HomePage section="Partners" />} />
        <Route path="/news" element={<HomePage section="News" />} />
        <Route path="/contacts" element={<HomePage section="Contacts" />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  )
}

export default App;
