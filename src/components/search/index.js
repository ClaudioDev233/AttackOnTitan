import { useState, useEffect } from "react";

export default function Search(){


const [resourceType, setResourceType] = useState('posts')



  const [items, setItem] = useState([])

 useEffect(() =>{
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then((response) => response.json())
  .then((json) => setItem(json));
 },[resourceType])

  return (
    <>
      <div>
        <button onClick={()=> setResourceType('posts')}>Posts</button>
        <button onClick={()=> setResourceType('users')}>Users</button>
        <button onClick={()=> setResourceType('comments')}>Comments</button>
      </div>
      <div>{ resourceType === 'posts' 
      ? items.map(item => {
        return <pre>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </pre>
      })  
      : (resourceType === 'users' 
      ? items.map(item =>{
        return <pre><h1>{item.username}</h1>
      </pre>}) 
      : items.map(item => {
        return <pre><h1>{item.email}</h1></pre>
      }))}</div>
    </>
   ) }