import React, {useEffect, useCallback} from 'react';
import sprite from '../../icons/symbol-defs.svg';
import styles from './TemporaryMdal.module.css'

const TemporaryModal = ({ onClose, title, children }) => {


    const handleKey = useCallback(
    (event) => {
      if (event.key === "Escape") {
        return onClose && onClose();
      }
    },
    [onClose]
  );

    useEffect(() => {
        window.addEventListener("keydown", handleKey);
        return () => {
            window.removeEventListener("keydown", handleKey);
        }
    }, []);

      const handleOverlay = useCallback(
    ({ target, currentTarget }) => {
      if (target === currentTarget) {
        onClose && onClose();
      }
    },
    [onClose]
  );

  
    
    return (
        // overlay
        <div className={styles.overlay}
        onClick={handleOverlay}>
            {/* thumb */}
            <div className={styles.thumb}>
                <button className={styles.closeBtn}
                onClick={onClose}
                >
                    <svg className={styles.closeSvg}>
                        <use href={sprite + '#icon-close'}/>
                    </svg>
                </button>
                <h3 className={styles.title}>{title}</h3>
                {children}
                <button className={styles.cancelBtn}>
                    Вiдмiна
                </button>
            </div>
        </div>
    );
};

export default TemporaryModal;