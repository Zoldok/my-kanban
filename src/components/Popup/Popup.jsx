import './Popup.css';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock-upgrade';

const Popup = ({
  isOpen,
  onClose,
  children,
  className = '',
  title = '',
  subtitle = '',
}) => {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Управление видимостью и анимацией
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Блокировка скролла
  useEffect(() => {
    const el = contentRef.current;
    if (!el || !isVisible) return;

    // disableBodyScroll(el, {
    //   reserveScrollBarGap: true,
    // });

    // return () => {
    //   enableBodyScroll(el);
    // };
  }, [isVisible]);

  if (!isVisible) return null;

  return createPortal(
    <div className={`popup ${isAnimating ? 'open' : ''}`}>
      <div className='popup__overlay' onClick={onClose} />
      <div className='popup__wrapper'>
        <div className={`popup__content ${className}`} ref={contentRef}>
          {(title || subtitle) && (
            <div className='popup__header'>
              {title && <h2 className='popup__title'>{title}</h2>}
              {subtitle && <p className='popup__subtitle'>{subtitle}</p>}
            </div>
          )}
          <div className='popup__body'>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
