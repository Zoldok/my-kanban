import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from './components/Header/Header';
import PopupUser from './components/Popup/PopupExit';
import PopBrowse from './components/Popup/PopBrowse';
import PopNewCard from './components/Popup/PopNewCard';
import Main from './components/Main';
import PopupExit from './components/Popup/PopupExit';
import { usePopup } from './assets/hooks/usePopup';
import { GlobalStyle } from './GlobalStyle';

function App() {
  // // const [openPopupUser, setOpenPopupUser] = useState(false);
  // const popupNewCard = usePopup();
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        {/* <!-- pop-up start--> */}

        <PopBrowse />

        {/* <!-- pop-up end--> */}

        <Header />

        <Main />
      </div>
    </>
  );
}

export default App;
