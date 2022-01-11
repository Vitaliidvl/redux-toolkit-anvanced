import React, { FC } from 'react';
import { IPost } from '../models/IPost';

export const PostItem: FC<{
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}> = ({ post, remove, update }) => {
  const removeHandle = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const updateHandle = (event: React.MouseEvent) => {
    const title = prompt() || '';
    update({ ...post, title });
  };
  return (
    <div className="post" onClick={updateHandle}>
      {post.id}. {post.title}
      <button onClick={removeHandle}>Delete</button>
    </div>
  );
};
