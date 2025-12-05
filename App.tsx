import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { HopeMessage } from './components/HopeMessage';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Schedule />
        <HopeMessage />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;