import Calendar from '../Calendar/Calendar';
import Popup from './Popup';

const PopNewCard = ({ isOpen, onClose }) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Личный кабинет'
      subtitle='Укажите номер телефона. Мы отправим Вам одноразовый код для входа в Личный кабинет'
      className='size-popup'
      // className='popup-user'
    >
      <div className='pop-new-card' id='popNewCard'>
        <div className='pop-new-card__container'>
          <div className='pop-new-card__block'>
            <div className='pop-new-card__content'>
              <h3 className='pop-new-card__ttl'>Создание задачи</h3>
              <a href='#' className='pop-new-card__close' onClick={onClose}>
                &#10006;
              </a>
              <div className='pop-new-card__wrap'>
                <form
                  className='pop-new-card__form form-new'
                  id='formNewCard'
                  action='#'
                >
                  <div className='form-new__block'>
                    <label for='formTitle' className='subttl'>
                      Название задачи
                    </label>
                    <input
                      className='form-new__input'
                      type='text'
                      name='name'
                      id='formTitle'
                      placeholder='Введите название задачи...'
                      autofocus
                    />
                  </div>
                  <div className='form-new__block'>
                    <label for='textArea' className='subttl'>
                      Описание задачи
                    </label>
                    <textarea
                      className='form-new__area'
                      name='text'
                      id='textArea'
                      placeholder='Введите описание задачи...'
                    />
                  </div>
                </form>

                <Calendar />
              </div>
              <div className='pop-new-card__categories categories'>
                <p className='categories__p subttl'>Категория</p>
                <div className='categories__themes'>
                  <div className='categories__theme _orange _active-category'>
                    <p className='_orange'>Web Design</p>
                  </div>
                  <div className='categories__theme _green'>
                    <p className='_green'>Research</p>
                  </div>
                  <div className='categories__theme _purple'>
                    <p className='_purple'>Copywriting</p>
                  </div>
                </div>
              </div>
              <button className='form-new__create _hover01' id='btnCreate'>
                Создать задачу
              </button>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default PopNewCard;

// <div className={`popup-wrapper ${isOpen ? 'active' : ''}`}>
//   <div className='popup-content' onClick={(e) => e.stopPropagation()}>
//     <div className='pop-new-card' id='popNewCard'>
//       <div className='pop-new-card__container'>
//         <div className='pop-new-card__block'>
//           <div className='pop-new-card__content'>
//             <h3 className='pop-new-card__ttl'>Создание задачи</h3>
//             <a href='#' className='pop-new-card__close' onClick={onClose}>
//               &#10006;
//             </a>
//             <div className='pop-new-card__wrap'>
//               <form
//                 className='pop-new-card__form form-new'
//                 id='formNewCard'
//                 action='#'
//               >
//                 <div className='form-new__block'>
//                   <label for='formTitle' className='subttl'>
//                     Название задачи
//                   </label>
//                   <input
//                     className='form-new__input'
//                     type='text'
//                     name='name'
//                     id='formTitle'
//                     placeholder='Введите название задачи...'
//                     autofocus
//                   />
//                 </div>
//                 <div className='form-new__block'>
//                   <label for='textArea' className='subttl'>
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className='form-new__area'
//                     name='text'
//                     id='textArea'
//                     placeholder='Введите описание задачи...'
//                   />
//                 </div>
//               </form>

//               <Calendar />
//             </div>
//             <div className='pop-new-card__categories categories'>
//               <p className='categories__p subttl'>Категория</p>
//               <div className='categories__themes'>
//                 <div className='categories__theme _orange _active-category'>
//                   <p className='_orange'>Web Design</p>
//                 </div>
//                 <div className='categories__theme _green'>
//                   <p className='_green'>Research</p>
//                 </div>
//                 <div className='categories__theme _purple'>
//                   <p className='_purple'>Copywriting</p>
//                 </div>
//               </div>
//             </div>
//             <button className='form-new__create _hover01' id='btnCreate'>
//               Создать задачу
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
