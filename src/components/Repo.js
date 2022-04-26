import React from 'react'

const Repo = ({name,href}) => {
  return (
    <a href={href}>{name}</a>
  )
}

export default Repo