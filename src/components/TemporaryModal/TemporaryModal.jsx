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
        <div className={styles.overlay}
        onClick={handleOverlay}>
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
<<<<<<< HEAD
                <button className={styles.cancelBtn} onClick={onClose}>
=======
                <button className={styles.cancelBtn}
                onClick={onClose}>
>>>>>>> 4a94e8b689176feaf9738a7c4b89cac1c27e09b7
                    Вiдмiна
                </button>
            </div>
        </div>
    );
};

export default TemporaryModal;