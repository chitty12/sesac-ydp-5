import React, { useEffect, useState } from 'react';

export default function PostItem(postList) {
  const [post, setPost] = useState('Loading');

  console.log(post);
  useEffect(() => {
    const fakepost = postList.post;
    console.log(fakepost);
    setTimeout(setPost(fakepost), 2000);
  }, []);

  console.log(postList.post);

  return (
    <div>
      <h1>Post List</h1>

      {post.length > 0 ||
        post.map((value, idx) => {
          return (
            <ul key={idx + 1}>
              <li>{value.id}</li>
              <li>{value.title}</li>
              <li>{value.body}</li>
            </ul>
          );
        })}
    </div>
  );
}
