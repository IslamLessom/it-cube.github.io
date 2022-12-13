import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../../firebase-config'
import trash from '../../assets/images/delete.png'

import "./Home.css"
import ModalView from '../Content/Modal/ModalView'
import { async } from '@firebase/util'

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
  })

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
  }

  const viewPost = async(id) => {
    
  }

  return (
    <>
      {postLists.map((post, index) => {
        return (
          <div className='post' key={index}>
            <div className='editor'>
              <div className='edit'>
                <Link to={`/update/${post.id}`}>
                {auth.lastNotifiedUid === 'uhQNDHD6QTMnziRYqN7eqAPS3gh2' && (
                  <button>edit</button>
                )}
                  
                </Link>
                
              </div>
              <div className='view'>
                <ModalView  onClick={() => { viewPost(post.id) }} />
              </div>
              <div className="delete">
                {auth.lastNotifiedUid === 'uhQNDHD6QTMnziRYqN7eqAPS3gh2' && (
                  <button onClick={() => { deletePost(post.id) }}><img src={trash} /></button>
                )}
              </div>
            </div>

            <div className='post-header'>
              <div className='images'>
                {post.imageList.map((url, index) => {
                  if (index === post.imageList.length - 1) {
                    return (
                      <>
                        < img key={index} src={url} />
                      </>
                    )
                  }
                })}

              </div>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
            </div>
            <div className='post-text-container'>
              {post.postText}
            </div>
            <div className='author'>
              <h3>@{post.author.name}</h3>
            </div>
          </div>
        )
      })}
    </>

  )
}

export default Home