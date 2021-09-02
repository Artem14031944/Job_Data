import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import StickyHeadTable from './components/Posts/Posts/PostsTwo';
import './App.css';
import { Route } from 'react-router-dom';
import PostItemTwo from './components/Posts/PostItem/PostItemTwo'

// http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/
// https://jsonplaceholder.typicode.com/comments

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const getPosts = async () => {
      setLoading(true);
      const res = await axios.get/*('http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/',
      {'headers': {
        //"Access-Control-Allow-Origin": "*"
        'Content-Type': 'application/x-www-form-urlencoded'
        //?postId=50
      }});//*/('http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/')
      setPosts(res.data.results);
      //console.log(res.data);
      setLoading(false);
    };

    getPosts()
  }, []);

  return (
    <div className='container'>
      <h1>Posts Data</h1>
      <Route path='/post'>
        <PostItemTwo 
          posts={posts}
          loading={loading}
        />
      </Route>
      <Route  exact path='/table'>
        <StickyHeadTable
          posts={posts}
          loading={loading}
        />
      </Route>
    </div>
  );
};

export default App;
