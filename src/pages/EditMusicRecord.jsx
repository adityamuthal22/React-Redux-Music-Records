import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMusicRecords, updateMusicRecord } from '../Redux/AppReducer/action';

const EditMusicRecord = () => {
  const {id} =useParams();
  const dispatch=useDispatch();
  const musicRecords =useSelector((store)=>store.AppReducer.musicRecords)
  
  const [musicName,setMusicName] =useState("")
  const [artistName,setArtistName] =useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(musicName && artistName){
      const payload ={
        name:musicName,
        artist:artistName,
      }
      dispatch(updateMusicRecord(id,payload))
      .then(()=>{
        dispatch(getMusicRecords())
      })
    }
  }

    useEffect(()=>{
      if(id){
        const currentMusic =musicRecords.find((album)=>album.id === id);
       if(currentMusic) {
        setMusicName(currentMusic.name)
        setArtistName(currentMusic.artist)
       }
      }
    },[id,musicRecords])
console.log(musicName,artistName)

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <h1>Edit Page</h1>
      <div>
        <label>Edit Music Name</label>
        <input value={musicName}
        onChange={(e)=>setMusicName(e.target.value)}
         />
      </div>
      <div>
        <label>Edit Artist Name</label>
        <input 
        value={artistName}
        onChange={(e)=>setArtistName(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Update</button>
      </div>
    </div>
    </form>
  )
}

export default EditMusicRecord