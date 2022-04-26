import React from 'react'
import Repo from './Repo';

const Repos = ({repo,href}) => {
  return (
    <Repo href={href} name={repo.name} />
  )
}

export default Repos