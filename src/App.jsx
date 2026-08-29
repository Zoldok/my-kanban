import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from './components/Header/Header';
import PopupUser from './components/Popup/PopupUser';
import PopBrowse from './components/Popup/PopBrowse';
import PopNewCard from './components/Popup/PopNewCard';
import Main from './components/Main';

function App() {
  return (
    <>
      <div class='wrapper'>
        {/* <!-- pop-up start--> */}

        <PopupUser />

        <PopNewCard />

        <PopBrowse />

        {/* <!-- pop-up end--> */}

        <Header />

        <Main />
      </div>
    </>
  );
}

export default App;
