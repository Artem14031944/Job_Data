import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({baseDate}) {


    const styles = {
        header: baseDate.header.headerStyles.headerContainer,
        nav: baseDate.header.headerStyles.nav,
        ul: baseDate.header.headerStyles.ul,
        li: baseDate.header.headerStyles.li,
        a: baseDate.header.headerStyles.a,
        button: baseDate.header.headerStyles.button,
      };
  
    return (
        <>
        {
          baseDate.header.logo ? <div><NavLink to={`./`}><img  src={baseDate.header.logo} alt={""}/></NavLink></div> : null 
        }

        {
          baseDate.header.link ?
          <nav style={styles.nav}>
           {
              baseDate.header.link.map((item, index) => 
                <ul key={index} style={styles.ul}>
                  <li 
                    style={styles.li} 
                    // onClick={()=> console.log(item.name,'- Click')}
                  >
                    <NavLink style={styles.a} to={`/${item.name.toLowerCase()}`}>{item.name}</NavLink>
                  </li> 
                </ul>
              )
            } 
          </nav>: null
        }

        {
         baseDate.header.button.name ? 
          <div>
            {
              baseDate.header.button.name.map((item, index)=> 
                <button 
                  key={index} 
                  style={styles.button}
                  onClick={()=> console.log('Click')}
                >
                  {item.name}
                </button> 
              ) 
            }
          </div>: null
        }
      </>
    )
}
