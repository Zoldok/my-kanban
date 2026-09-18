import { useState } from 'react';
import PopupUser from '../Popup/PopupUser';
import { usePopup } from '../../assets/hooks/usePopup';
import PopupExit from '../Popup/PopupExit';
import PopNewCard from '../Popup/PopNewCard';
import Popup from '../Popup/Popup';

const Header = () => {
  const popupUser = usePopup();
  const popupExit = usePopup();
  const popupNewCard = usePopup();

  // для нового попапа 1
  const [isOpen, setIsOpen] = useState(false);
  // для нового попапа 1 END

  // Функция для открытия попапа выхода
  const handleExitClick = () => {
    popupUser.close(); // Закрываем PopupUser
    popupExit.open(); // Открываем PopupExit
  };

  // Функция подтверждения выхода
  const handleConfirmExit = () => {
    console.log('Пользователь вышел');
    // Здесь логика выхода
    // например: logout(), redirect('/login')
    popupExit.close();
  };

  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__block'>
            <div className='header__logo _show _light'>
              <a href='' target='_self'>
                <img src='images/logo.png' alt='logo' />
              </a>
            </div>
            <div className='header__logo _dark'>
              <a href='' target='_self'>
                <img src='images/logo_dark.png' alt='logo' />
              </a>
            </div>

            {/* <div onClick={() => setIsOpen(true)}>Popup</div> */}

            {/*   // для нового попапа 1  */}
            {/* <Popup
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title='Личный кабинет'
              subtitle='Укажите номер телефона. Мы отправим Вам одноразовый код для входа в Личный кабинет'
            >
              <div>
                <p>Содержимое попапа</p>
                <button onClick={() => setIsOpen(false)}>Закрыть</button>
              </div>
            </Popup> */}
            {/* new popup   // для нового попапа 1 END */}

            <nav className='header__nav'>
              <button
                className='header__btn-main-new _hover01'
                onClick={popupNewCard.open}
              >
                <a onClick={popupNewCard.open}>Создать новую задачу</a>
              </button>

              <div className='header__user _hover02' onClick={popupUser.open}>
                Ivan Ivanov
              </div>
            </nav>
          </div>
        </div>
      </header>

      <PopupUser
        isOpen={popupUser.isOpen}
        onClose={popupUser.close}
        onExitClick={handleExitClick}
      />
      <PopupExit
        isOpen={popupExit.isOpen}
        onClose={popupExit.close}
        onConfirm={handleConfirmExit}
      />

      <PopNewCard isOpen={popupNewCard.isOpen} onClose={popupNewCard.close} />
    </>
  );
};

export default Header;
