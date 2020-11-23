import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Hook3 = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idbuttonclick, setIdbuttonclick] = useState(1)

    const handler = () => {
        setIdbuttonclick(id)
    }

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${idbuttonclick}`)
      .then((res) => {
         setPost(res.data)
      })
      .catch((err) => {
          console.log(err)
      })
        
    },[idbuttonclick])

   return(
       <div>
       <input type="text" value={id} onChange={e => setId(e.target.value)} />
       <button type="button" onClick={handler}>Fetch Post</button>
       <div>{post.title}</div>
          {/* <ul>
              {posts.map((post) => <li key={post.id}>{post.title}</li>)}
          </ul> */}
       </div>
   )
}

export default Hook3