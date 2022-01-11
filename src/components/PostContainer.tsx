import React, { useState } from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import { PostItem } from './PostItem';

export const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const {
    data: posts,
    isLoading,
    error,
  } = postAPI.useFetchAllPostsQuery(limit);

  const createHandle = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const removeHandle = (post: IPost) => {
    deletePost(post);
  };

  const updateHandle = (post: IPost) => {
    updatePost(post);
  };
  return (
    <div>
      <div className="post__list">
        <button onClick={createHandle}>Add new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>this is an error</h1>}
        {posts &&
          posts.map((post) => (
            <PostItem
              remove={removeHandle}
              update={updateHandle}
              key={post.id}
              post={post}
            />
          ))}
      </div>
    </div>
  );
};
