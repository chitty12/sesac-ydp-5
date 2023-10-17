import React, { useEffect, useState } from 'react';
import './styles/postItem.scss';

export default function PostItem(postList) {
  const [post, setPost] = useState([]);

  console.log(post.length);
  console.log(postList.post);
  useEffect(() => {
    const fakepost = postList.post;

    setTimeout(() => {
      setPost(fakepost);
    }, 4000);
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      {post.length === 0 ? (
        <div className="loading">Loading</div>
      ) : (
        post.map((value, idx) => {
          return (
            <ul className="post" key={idx + 1}>
              <li className="postTitle">
                No. {value.id} - <span>{value.title}</span>
              </li>

              <li className="postBody">{value.body}</li>
            </ul>
          );
        })
      )}
    </div>
  );
}
