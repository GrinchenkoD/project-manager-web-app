import React, { useEffect, useCallback } from 'react';
import sprite from '../../icons/symbol-defs.svg';
import styles from './TemporaryMdal.module.css';
import { CSSTransition } from 'react-transition-group';
import overlayTransition from './transitions/modalOverlayTransition.module.css';
import modalTransition from './transitions/modalFormTransition.module.css';
import { createPortal } from 'react-dom';

const TemporaryModal = ({ onClose, onOpen, title, children }) => {
  const handleKey = useCallback(
    event => {
      if (event.key === 'Escape') {
        return onClose && onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  const handleOverlay = useCallback(
    ({ target, currentTarget }) => {
      if (target === currentTarget) {
        onClose && onClose();
      }
    },
    [onClose],
  );

  return createPortal(
    <CSSTransition
      in={onOpen}
      classNames={overlayTransition}
      timeout={200}
      unmountOnExit
    >
      {stage => (
        <div className={styles.overlay} onClick={handleOverlay}>
          <CSSTransition
            in={stage === 'entered'}
            timeout={250}
            classNames={modalTransition}
            mountOnEnter
            unmountOnExit
          >
            <div className={styles.thumb}>
              <button className={styles.closeBtn} onClick={onClose}>
                <svg className={styles.closeSvg}>
                  <use href={sprite + '#icon-close'} />
                </svg>
              </button>
              <h3 className={styles.title}>{title}</h3>
              {children}
              <button className={styles.cancelBtn} onClick={onClose}>
                Скасувати
              </button>
            </div>
          </CSSTransition>
        </div>
      )}
    </CSSTransition>,
    document.getElementById('modalRoot'),
  );
};

export default TemporaryModal;
