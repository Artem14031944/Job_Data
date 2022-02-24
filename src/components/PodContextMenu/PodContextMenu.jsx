import React from 'react'

 const PodContextMenu = ({ 
    baseDate, 
    activePodContextMenu, 
    setActivePodContextMenu, 
    children,
    positionY,
    positionX
    }) => {


    let podY =  positionY;
    let podX = positionX + parseInt( baseDate.modalContextMenu.contentStyle.width);

    console.log(podX)

    // Стили
    const style = {
        contentStyle: baseDate.modalContextMenu.contentStyle,
        contextModal: baseDate.modalContextMenu.style,
        contextModalActive: {
            width: baseDate.modalContextMenu.styleActive.width,
            height: baseDate.modalContextMenu.styleActive.height,
            position: baseDate.modalContextMenu.styleActive.position,
            top: `${podY ===  podY ? podY : null}px`,
            left: `${podX === podX ? podX : null}px`,
            opacity: baseDate.modalContextMenu.styleActive.opacity,
            pointerEvents: baseDate.modalContextMenu.styleActive.pointerEvents
        },
       
    };

    return (
        <div    
            style={activePodContextMenu ? style.contextModalActive : style.contextModal} 
            onClick={() => setActivePodContextMenu(false)}
        >
             <div style={style.contentStyle} onClick={e => e.stopPropagation()}>
               { children }
            </div>
        </div>
    )
};


export default PodContextMenu;