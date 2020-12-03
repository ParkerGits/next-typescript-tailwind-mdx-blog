import React from 'react'
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function PostList() {
  let mathPosts = []
  let programmingPosts = []
  posts.map((post) => {
    const { topic } = post;
    if(topic == "Programming"){
      programmingPosts.push(post);
    }
    else if(topic == "Math"){
      mathPosts.push(post)
    }
  })
  return (
    <>
    <h3>Programming 👨‍💻</h3>
    <ul id="programming-list" className="list-none">
      {programmingPosts.map((post) => (
          <li><Post key={post.slug} post={post} /></li>
        ))}
    </ul>
    <h3>Math 🔢</h3>
    <ul id="math-list" className="list-none">
      {mathPosts.map((post) => (
          <li><Post key={post.slug} post={post} /></li>
        ))}
    </ul>
    </>
  );
}