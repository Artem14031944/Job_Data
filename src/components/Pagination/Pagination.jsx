import React from 'react'

const Pagination = ({ 
    totalPosts, 
    postsPerPage,
    paginate, 
    baseDate, 
    prevPage, 
    nextPage,
    currentPage,
    }) => {

    
    const styles = {
        container: baseDate.table.pagination.style.container,
        ul:baseDate.table.pagination.style.ul,
        li:baseDate.table.pagination.style.li,
        liActive:baseDate.table.pagination.style.liActive,
        p:baseDate.table.pagination.style.p,
        button:baseDate.table.pagination.style.button,
    };

    const prev = baseDate.table.pagination.style.button.text[0].name;
    const next = baseDate.table.pagination.style.button.text[1].name;

    const pageNumbers = [];


    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    };
  
    return (
        <div style={styles.container}>
            <button 
                style={styles.button} 
                onClick={prevPage}
                disabled={currentPage <= 1 ? true : false}
            >
                {prev}
            </button>
            <ul style={styles.ul}>
                {
                    pageNumbers.map((number, index) => {
                       return(
                            <li 
                                key={index} 
                                style={number === currentPage ? styles.liActive : styles.li} 
                                onClick={() => paginate(number)}
                            > 
                                <p  style={styles.p}>{number}</p>
                            </li>
                       ) 
                    })
                }
            </ul>
            <button 
                style={styles.button} 
                disabled={(totalPosts/postsPerPage - .1 ) < currentPage ?  true : false} 
                onClick={nextPage}
            >
                {next}
            </button>
        </div>
    )
};

export default Pagination;
