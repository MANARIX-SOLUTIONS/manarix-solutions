import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DocumentHead from './components/DocumentHead';

function App() {
  return (
    <BrowserRouter>
      <DocumentHead />
      <div className="min-h-screen bg-[var(--color-neutral)]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Home />
                </main>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
