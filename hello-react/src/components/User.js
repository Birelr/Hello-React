import React from 'react'

function User(props) {
    console.log(props)
  return (
    <div>
        User
        <div>
            Name:{props.name}
        </div>
        <div>
            Surname:{props.surname} 
        </div>
        <div>
            Age:{props.age}
        </div>
        <hr/>
    </div>
  )
}

export default User