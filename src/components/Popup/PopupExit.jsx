import Popup from './Popup';

const PopupExit = ({ isOpen, onClose, onConfirm }) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Выйти из аккаунта?"
      className="popup-exet"
    >
      <div className="popup-exit__body">
        <div className="popup-exit__actions">
          <button
            className="popup-exit__yes _hover01"
            onClick={handleConfirm}
            type="button"
          >
            Да, выйти
          </button>
          <button
            className="popup-exit__no _hover03"
            onClick={onClose}
            type="button"
          >
            Нет, остаться
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default PopupExit;
