import React from 'react'

export const List = () => {
  return (
    <div>
        <ul>
            {userArg.map((item,1)=>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}
