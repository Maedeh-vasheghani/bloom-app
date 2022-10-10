import React from 'react'
type profilePicParams = {
  profilePic : string
}


export default function ProfilePicture({profilePic} : profilePicParams) {
  return (
    <>
    <img className="w-12 h-12 bg-gris rounded-full" src={`/src/assets/profilpics/${profilePic}`} alt="" /> 
    </>
  )
}
