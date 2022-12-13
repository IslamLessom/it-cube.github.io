import React, { useEffect, useState } from 'react'

import { addDoc, collection } from 'firebase/firestore'
import { auth, db, storage, app } from "../../../firebase-config"
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


import { useNavigate, useParams } from "react-router-dom"

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")

  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])

  const imageListRef = ref(storage, 'images/')

  const postsCollectionRef = collection(db, 'posts')

  const uploadImage = () => {
    if (imageUpload == null) return
    const imagesRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imagesRef, imageUpload).then(() => {
      alert('images upload')
    })
  }
  
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, url])
          })
        })
      }
    })
  }, [])

  let navigate = useNavigate()

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      imageList,
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    })
    navigate('/news')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  }, [])

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Редактировать пост</h1>
        <div className='images-file'>
          <label className="name-label">Изображение:</label>
          <div className='button'>
            <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
           
            <button onClick={uploadImage}>Добавить изображение</button>
          </div>
        </div>
        <div className='inputGp'>
          <label className="name-label">Краткое описание:</label>
          <input placeholder='Title...' onChange={(event) => { setTitle(event.target.value) }} />
        </div>
        <div className='inputGp'>
          <label className="name-label">Пост:</label>
          <textarea placeholder='Post..' onChange={(event) => { setPostText(event.target.value) }} />
        </div>
        <button className='button-reg' onClick={createPost} > Добавить пост </button>
      </div>
    </div>
  )
}

export default CreatePost