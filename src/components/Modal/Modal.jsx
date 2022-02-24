import React from 'react';

const ModalWindow = ({ baseDate, active, setActive, children }) => {

    // Стили
    const styles = {
        modal: baseDate.modal.style,
        modalActive: baseDate.modal.styleActive,
        contentStyle: baseDate.modal.contentStyle
    };

    return (
        <div style={active ?  styles.modalActive : styles.modal} onClick={() => setActive(false)}>
            <div style={styles.contentStyle} onClick={e => e.stopPropagation()}>
               {children}
            </div>
        </div>
    );
};

export default ModalWindow;
