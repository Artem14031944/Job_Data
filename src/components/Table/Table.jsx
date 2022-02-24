import React,{ useState } from 'react';
import Loading from '../../components/Posts/Loading/Loading';
import Search from '../Search/Search';
import TableData from '../Table/TableData/TableData';


export default function Table({ 
        baseDate, 
        active,
        setActive,
        propertyAsKey, 
        goods, 
        posts,
        setPost,
        currentPosts, 
        postsPerPage, 
        setPostsPerPage,
        totalPosts, 
        paginate, 
        currentPage,
        activePodContextMenu,
        setActivePodContextMenu,
        prevPage, 
        setPolName,
        activeContextMenu,
        setActiveContextMenu,
        nextPage }) {

    // Хранилище 
    const [value, setValue] = useState('');
    const [valueNum, setValueNum] = useState('');
    
    // Данные массива
    const dataContactsRows = baseDate.table.rows;

    // Стили
    const style = {
        boxMenu: baseDate.boxMenu.style,
        p: baseDate.boxMenu.countersLength,
        strong: baseDate.boxMenu.countersLength.number,
        containerTable: baseDate.boxMenu.containerTable,
        allLength: baseDate.boxMenu.countersLength.allLength,
        input : baseDate.boxMenu.search.input
    };

    // Текст инпутам
    const textPlaceholder = type => {
        if(type === 'name') {
            return baseDate.boxMenu.search.text[0].name
        } else if (type === 'num') {
            return baseDate.boxMenu.search.text[1].name
        }
    };
    
    // Если нет данных, то вызвыает загрузку
    if(!baseDate) {
        return <Loading/> 
    }; 


    return (
        <>
            { 
                baseDate ?
                    <div style={style.containerTable}>
                       
                        <div style={style.boxMenu}>
                          <Search   // Поиск по ФИО
                            baseDate={baseDate} 
                            value={value} 
                            setValue={setValue} 
                            placeholder={textPlaceholder(baseDate.boxMenu.search.text[0].type)}
                          />
                          <Search  // Ввод количество
                            baseDate={baseDate} 
                            value={valueNum}
                            setValue={setValueNum} 
                            placeholder={textPlaceholder(baseDate.boxMenu.search.text[1].type)}
                           />
                        </div>
                        <TableData  //  Содержимое таблицы
                            baseDate={baseDate} 
                            active={active}
                            posts={posts}
                            setPost={setPost}
                            setActive={setActive}
                            dataContactsRows={dataContactsRows}
                            activeContextMenu={activeContextMenu}
                            setActiveContextMenu={setActiveContextMenu}
                            activePodContextMenu={activePodContextMenu}
                            setActivePodContextMenu={setActivePodContextMenu}
                            value={value} 
                            valueNum={valueNum}
                            propertyAsKey={propertyAsKey}
                            goods={goods}
                            currentPosts={currentPosts}
                            postsPerPage={postsPerPage}
                            setPostsPerPage={setPostsPerPage}
                            totalPosts={totalPosts}
                            paginate={paginate}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            currentPage={currentPage}
                            setPolName={setPolName}
                        />
                    </div>
                    :  <Loading/>  // Загрузка
            }  
        </>
    );
}
