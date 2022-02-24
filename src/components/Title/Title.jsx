import React from 'react';
import ModalWindow from '../Modal/Modal';

export default function Title({ baseDate, active, setActive }) {

    // Стили
    const styles = {
        containerTitle: baseDate.title.containerTitle.style,
        blockText: baseDate.title.titleText.style,
        h2: baseDate.title.titleText.titleTextStyles.title,
        p: baseDate.title.titleText.titleTextStyles.text,
        buttonBlock: baseDate.title.buttonBlock.style,
        button: baseDate.title.buttonBlock.buttonStyle,
        buttonLink: baseDate.title.buttonBlock.buttonLinkStyle,
        buttonLinkImg: baseDate.title.buttonBlock.buttonLinkImg.style,
        input : baseDate.boxMenu.search.input
      }
    return (
        <div style={styles.containerTitle}>
        {
          baseDate.title.titleText ? 
            <div style={styles.blockText}>
              {/* Зоголовок */}
              <h2 style={styles.h2}>
                {baseDate.title.titleText.title}
              </h2>
                {/* Текст */}
              <p style={styles.p}>
                {baseDate.title.titleText.text}
              </p>
              <div style={styles.buttonBlock}>
                 {/* Кнопки */}
                {baseDate.title.buttonBlock.button.map((item, index) => {
                  return (
                    <>
                      {
                        <button 
                          onClick={item.type === 'button' ? () => setActive(true) : null}
                          style={item.type === 'link' ? styles.buttonLink : styles.button} 
                          key={index}
                        >
                         {/* Иконка а кнопке */}
                        {
                        item.img === true ?  
                          <div style={styles.buttonLinkImg}>
                            <img src={baseDate.title.buttonBlock.buttonLinkImg.img} alt={""} /> 
                          </div> : null
                        }
                        {item.name}
                      </button>
                      }
                    </>
                  )
                })}
              </div>
            </div> 
            : null
        }
         {/* Картинка */}
        { 
          baseDate.title.titleImg ? <div><img src={baseDate.title.titleImg} alt={""}/></div> : null
        }
        {
         // Модальное окно
          baseDate.modal ?  <ModalWindow 
                              baseDate={baseDate} 
                              active={active} 
                              setActive={setActive}
                            > 
                              <h3 style={styles.h2}>Title</h3>
                              <p style={styles.p}>
                                {baseDate.title.titleText.text}
                              </p>
                              <form action="">
                                <div>
                                  <input type="text" style={styles.input} placeholder="Ввидите ваше имя..." /> 
                                </div>
                                <div>
                                  <input type="text" style={styles.input} placeholder="Ввидите ваш пороль..." /> 
                                </div>
                                <button style={styles.button}>Push</button>
                              </form>
                            </ModalWindow> : null
        }
      </div>
    );
};
