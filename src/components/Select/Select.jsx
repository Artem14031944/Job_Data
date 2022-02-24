import React from 'react';

const Select = ({ onChange, value, style, all, bag, baseDate, textSelect }) => {

    const styles = {
        containerSelect: baseDate.boxMenu.select.container.styleContainer,
        span: baseDate.boxMenu.select.container.p.style,
        strong: baseDate.boxMenu.select.container.strong.style,
    };

    return (
        <div style={styles.containerSelect}>
            <div>
                <select 
                    onChange={onChange} 
                    value={value} 
                    style={style}
                >
                    {
                        all[0] === "Все" ?   null : <option value={bag ? 123 : ""}>Все</option>
                    }
                   
                    {all.map((n, i) => <option key={i}>{n}</option>)}
                </select>
                <span style={styles.span}> - {textSelect}</span>
            </div>
        </div>
   
    )
};

export default Select;
