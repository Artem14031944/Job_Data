import React from 'react';
import classes from './PostItem.module.css';
import Loading from '../Loading/Loading';

const PostItem = ({ posts, loading }) => {

    if(loading) {
        return <Loading />
    };

    let page = window.location.href.split('/')[4].toString();

    return (
        <ul className={classes.PostItem}>
            {posts.lenght>0 && 
                <li>
                    {posts[page].id} 
                    {posts[page].name}
                    {posts[page].body}
                    {posts[page].email}
                </li>
            }
        </ul> 
    )
};

export default PostItem;