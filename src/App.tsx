import { BrowserRouter as Router } from 'react-router-dom';
import { useUIStore } from './store/useUIStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import AnimatedRoutes from './AnimatedRoutes';
import './App.css';

function App() {
  const { isLoading, setLoading } = useUIStore();

  return (
    <>
      {isLoading && <Preloader onComplete={() => setLoading(false)} />}
      <Router>
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <div className={`app ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            <Navbar />
            <main>
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </>
  );
}

export default App;
