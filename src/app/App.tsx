import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/page";
import TermsPage from "./terms/page";
import PrivacyPage from "./privacy/page";
import ContactPage from "./contact/page";
import RootLayout from "./layout";

export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </RootLayout>
        </BrowserRouter>
      </main>

      <footer className="py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Triviiia. All rights reserved.
      </footer>
    </div>
  );
}
