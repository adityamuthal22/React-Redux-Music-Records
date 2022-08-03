import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMusicRecords } from '../Redux/AppReducer/action';
import styled from 'styled-components';
import { Link, useLocation, useSearchParams } from 'react-router-dom';


const MusicRecords = () => {
    const dispatch =useDispatch();
    const MusicRecords =useSelector((store)=> store.AppReducer.musicRecords)
   const [searchParams] =useSearchParams()
   const location=useLocation();

 useEffect(()=>{
    if(location || MusicRecords.length ===0){
      const sortBy =searchParams.get("sortBy")
      const queryParams ={
         params:{
            genre:searchParams.getAll("genre"),
            _sort:sortBy && "year",
            _order:sortBy
         }
      }
        dispatch(getMusicRecords(queryParams))
    }
 },[location.search])
//  console.log(MusicRecords)
    return (

      <>
      {
         MusicRecords.length > 0 && 
         MusicRecords.map((album) =>{
            return <div key={album.id}>
               <MusicRecordWrapper key={album.id}>
                  <Link to={`/music/${album.id}`}>
               <div>{album.name}</div>
               <div><img src={album.img} alt={album.id} /></div>
              <div>{album.genre}</div>
               <div>{album.year}</div>
               </Link>
               </MusicRecordWrapper>
            </div>
         })
      }
      </>

  )
}

export default MusicRecords;

const MusicRecordWrapper =styled.div`
width:300px;
border:1px solid green;
`