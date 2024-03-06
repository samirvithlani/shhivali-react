import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const id = useParams().id
  return (
    <div>
        <h1>DETAIL</h1>
        <h2>{id}</h2>
    </div>
  )
}
