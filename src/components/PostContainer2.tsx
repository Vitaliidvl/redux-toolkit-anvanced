import React from 'react';
import { postAPI } from '../services/PostService';
import { PostItem } from './PostItem';

export const PostContainer2 = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100);
  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>this is an error</h1>}
        {/* {posts && posts.map((post) => <PostItem key={post.id} post={post} />)} */}
      </div>
    </div>
  );
};