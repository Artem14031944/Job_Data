import React from 'react';

const NotData = ({ baseDate }) => {

    // Контент
    const text = baseDate.notData.text;
    const textBtn =  baseDate.notData.style.button.text;


    // Стили
    const style = {
        container: baseDate.notData.style.container,
        text: baseDate.notData.style.text,
        button: baseDate.notData.style.button,
        blockContent: baseDate.notData.style.blockContent,
    };


    return (
        <div style={style.container}>
            <div style={style.blockContent}>
                <h2 style={style.text}>{text}</h2>
                {/* <button style={style.button}>{textBtn}</button> */}
            </div>
           
        </div>
    )
};



export default NotData;
