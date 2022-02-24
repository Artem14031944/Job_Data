import React from 'react';

const ContextMenu = ({ 
    baseDate, 
    activeContextMenu, 
    setActiveContextMenu, 
    children,
    positionX,
    positionY
    }) => {

    // Стили
    const style = {
        contextModal: baseDate.modalContextMenu.style,
        contextModalActive: {
            width: baseDate.modalContextMenu.styleActive.width,
            height: baseDate.modalContextMenu.styleActive.height,
            position: baseDate.modalContextMenu.styleActive.position,
            top: `${positionY === positionY ? positionY : null}px`,
            left: `${positionX === positionX ? positionX : null}px`,
            opacity: baseDate.modalContextMenu.styleActive.opacity,
            pointerEvents: baseDate.modalContextMenu.styleActive.pointerEvents
        },
        contentStyle: baseDate.modalContextMenu.contentStyle
    };

    return (
        <div style={activeContextMenu ?  style.contextModalActive : style.contextModal} onClick={() => setActiveContextMenu(false)}>
             <div style={style.contentStyle} onClick={e => e.stopPropagation()}>
               { children }
            </div>
        </div>
    )
};

export default ContextMenu;
