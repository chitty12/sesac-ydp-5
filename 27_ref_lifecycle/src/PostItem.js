import React, { useEffect, useState } from 'react';

export default function PostItem(postList) {
  const [post, setPost] = useState([]);

  console.log(post);
  console.log(postList.post);
  useEffect(() => {
    const fakepost = postList.post;
    console.log(fakepost);
    setTimeout(() => {
      setPost(fakepost);
    }, 4000);
  }, []);

  return (
    <div>
      {post.length > 1 ? (
        <h1>Loading</h1>
      ) : (
        post.map((value, idx) => {
          <h1>Post List</h1>;
          return (
            <ul key={idx + 1}>
              <li>{value.id}</li>
              <li>{value.title}</li>
              <li>{value.body}</li>
            </ul>
          );
        })
      )}
    </div>
  );
}
