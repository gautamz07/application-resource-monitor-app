import React, { useState, useEffect } from 'react'
import './posts.css'
// const SayHello = () => {
//   return <div>Say Hello Component</div>
// }

const AppReactHooks = () => {
  const [ blogs, setBlogs ] = useState([
    { title: 'The tittle one', body: 'Lorem ipsum ...', author: 'janko blast', id: 1 },
    { title: 'The Seven Key Habits', body: 'The Seven key habits of highly effective', author: 'Kevin Durant', id: 2 },
    { title: 'The Art of the samuria', body: 'You must beleive, conceive to acheive', author: 'Lebron Freshfries', id: 3 }
  ])

  const [ name, setName ] = useState('Timothy Badley')

  const handleArticleDelete = (id) => {
    const newBlogPosts = blogs.filter(el => el.id !== id)
    setBlogs(newBlogPosts)
  }

  useEffect(() => {
    console.log('use Effect ran')
    /*
      TODO :- See how to unmount.
        - https://www.youtube.com/watch?v=0ZJgIjIuY7U - 9:00 onwards --> How to unmount and remove unwanted 

      TODO :- useMemo
        - https://react.dev/reference/react/useMemo very nice example , look into it.

      TODO :- 
        - see how to mount and unmount component 
        - how useEffect, useMemo performs with mount and unmount.
    */
    /*
      1. use effect runs on componentMount I.E. on component load.
      2. If the array below is kept empty I.E. `[]` , the useEffect will run only on component load and on WILL NOT run
        when any props are updated.
      3. By default I.E. without the dependency param (`[]`), the useEffect will also run on every prop update, eg.
        when handleArticleDelete() runs and `blogs` is updated useEffect will run BUT .. see point 4.
      4. If we update the dependency array to have a specific prop , eg. name , it will only run on :-
          - 4(a) - when component is loaded.
          - 4(b) - when prop `name` is updated using `setName()`  
    */

  }, [name])

  return (<main className='container__card'>
    {blogs.map(el => {
      return (
        <div key={el.id} className='card'>
          <h3>{el.title}</h3>
          <p>{el.body}</p>
          <small>{el.author}</small>
          <button
            className='card__btnPrimary'
            onClick={() => handleArticleDelete(el.id)}
          >
            Remove
          </button>
        </div>
      )
    })}
    <p onClick={() => setName('Manny Cotto Pcman')}>{name}</p>
  </main>)
}

export default AppReactHooks