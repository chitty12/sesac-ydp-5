import React, { useEffect, useState } from 'react';

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
      {post.length === 0 ? (
        <div>Loading</div>
      ) : (
        post.map((value, idx) => {
          return (
            <ul
              key={idx + 1}
              style={{
                margin: '20px auto',
                listStyle: 'none',
                background: 'skyblue',
              }}
            >
              <li>
                No. {value.id} - {value.title}
              </li>

              <li>{value.body}</li>
            </ul>
          );
        })
      )}
    </div>
  );
}
