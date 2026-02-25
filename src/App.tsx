import { useState, useEffect } from 'react';
import Home from './pages/Home';
import SitePlan from './pages/SitePlan';
import Systems from './pages/Systems';
import Team from './pages/Team';
import Budget from './pages/Budget';
import Coupons from './pages/Coupons';
import StageBooking from './pages/StageBooking';
import StallBooking from './pages/StallBooking';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentPath, setCurrentPath] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case 'home':
        return <Home navigate={setCurrentPath} />;
      case 'site-plan':
        return <SitePlan navigate={setCurrentPath} />;
      case 'systems':
        return <Systems navigate={setCurrentPath} />;
      case 'team':
        return <Team navigate={setCurrentPath} />;
      case 'budget':
        return <Budget navigate={setCurrentPath} />;
      case 'coupons':
        return <Coupons navigate={setCurrentPath} />;
      case 'stage-booking':
        return <StageBooking navigate={setCurrentPath} />;
      case 'stall-booking':
        return <StallBooking navigate={setCurrentPath} />;
      default:
        return <Home navigate={setCurrentPath} />;
    }
  }

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-md mx-auto shadow-2xl pb-20">
      {renderPage()}
      <BottomNav currentPath={currentPath} navigate={setCurrentPath} />
    </div>
  );
}
