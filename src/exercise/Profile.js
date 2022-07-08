import React from 'react'
import '../exercise/Profile.css'

export default function Profile(props) {
    const {IconName, Name, color, likes} = props

  return (
    <>
    <div className='Profile-main'>
    <div className={`boxpro box-${color}`}>
      <span className='iconpro'>{IconName}</span>
    </div>
    <span className='txtpro'>{Name}</span>
    <span className={`prog bgc-${color} width-${likes}`}></span>
    </div>
    </>
  )
}