import React, { useState, useEffect } from 'react';
import { baseDate } from "./data/dataArrTest";
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import Loading from './components/Posts/Loading/Loading';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Table  from './components/Table/Table';


const history = createBrowserHistory()

function App({ goods }) {
  
  // Данные
  // const all = baseDate.table.rows.length;

  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);
  const [active, setActive] = useState(false);
  const [activeContextMenu, setActiveContextMenu] = useState(false);
  const [activePodContextMenu, setActivePodContextMenu] = useState(false);
  const [polName, setPolName] = useState("Все");

  useEffect(()=> {
    const getPosts = async () => {
      if(polName === "Все") {
        setPost(baseDate.table.rows)
      }
      else if(polName === "Ж") {
        setPost(baseDate.table.rows.filter(i => i.pol === "Ж"));  
      }
      else if(polName === "М") {
        setPost(baseDate.table.rows.filter(i => i.pol === "М"));
      };
     
    };
    getPosts();
  }, [polName]);

  // Индекс номер страницы первой и последний 
  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  let currentPosts = posts.slice(firstPostsIndex, lastPostsIndex);

  // Функции для переключение страниц
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  // Если нет данных, то вызвыает лоадер
  if(!baseDate) {
    return <Loading/> 
  };


  return (
    <Router history={history}>
      <div style={baseDate.wrapper}>
        {
          baseDate ?   
          <div style={baseDate.container}>
            <div style={baseDate.header.headerStyles.headerContainer}>
            <Header baseDate={baseDate}/>
            </div>

            <Switch>
              <>
                <div style={baseDate.title.style}>
                  <Route 
                    exact 
                    path={'/'} 
                    render={props => <Title 
                                        baseDate={baseDate} 
                                        active={active}
                                        setActive={setActive}
                                        {...props}
                                      />}
                  />
                  <Route  
                    path={'/table'}  
                    render={props => <Table 
                                        baseDate={baseDate}  
                                        posts={posts}
                                        active={active}
                                        setPost={setPost}
                                        setActive={setActive}
                                        activeContextMenu={activeContextMenu}
                                        setActiveContextMenu={setActiveContextMenu}
                                        activePodContextMenu={activePodContextMenu}
                                        setActivePodContextMenu={setActivePodContextMenu}
                                        goods={goods} 
                                        currentPosts={currentPosts}
                                        postsPerPage={postsPerPage}
                                        setPostsPerPage={setPostsPerPage}
                                        currentPage={currentPage}
                                        totalPosts={posts.length}
                                        paginate={paginate}
                                        nextPage={nextPage}
                                        prevPage={prevPage}
                                        setPolName={setPolName}
                                        {...props}
                                      />}
                    propertyAsKey='name'
                  />
                </div>
              </>
            </Switch>
           
          </div> 
          : <Loading/>
        }
      </div>
    </Router >
  );
};

export default App;
