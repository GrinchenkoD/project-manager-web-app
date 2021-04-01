import React, { useEffect, useCallback } from 'react';
import sprite from '../../icons/symbol-defs.svg';
import styles from './TemporaryMdal.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import overlayTransition from "./transitions/modalOverlayTransition.module.css"
import modalTransition from "./transitions/modalFormTransition.module.css"

const TemporaryModal = ({ onClose, onOpen,title, children }) => {
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

  return (
      <CSSTransition
      in={onOpen}
      classNames={overlayTransition}
      timeout={200}
      unmountOnExit>
      {(stage) =>(
        <div className={styles.overlay} onClick={handleOverlay}>
        <CSSTransition
          in={stage === "entered"}
          timeout={250}
          classNames={modalTransition}
          mountOnEnter
          unmountOnExit>
        <div className={styles.thumb}>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg className={styles.closeSvg}>
              <use href={sprite + '#icon-close'} />
            </svg>
          </button>
          <h3 className={styles.title}>{title}</h3>
          {children}
          <button className={styles.cancelBtn} onClick={onClose}>
            Отмена
          </button>
        </div>
      </CSSTransition>
    </div>
      )}
        
      </CSSTransition>
  );
};

export default TemporaryModal;
