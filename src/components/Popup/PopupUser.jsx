import Popup from './Popup';
import './PopupUser.css';

const PopupUser = ({ isOpen, onClose, onExitClick }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} className='popup-user size-popup'>
      <div className='popup-user__body'>
        <a href='#' className='pop-new-card__close' onClick={onClose}>
          &#10006;
        </a>
        <p className='pop-user-set__name'>Ivan Ivanov</p>
        <p className='pop-user-set__mail'>ivan.ivanov@gmail.com</p>
        <div className='pop-user-set__theme'>
          <p>Темная тема</p>
          <input type='checkbox' className='checkbox' name='checkbox' />
        </div>
        <button type='button' className='_hover03' onClick={onExitClick}>
          Выйти
        </button>
      </div>
    </Popup>
  );
};

export default PopupUser;
