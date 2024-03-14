import React from 'react'
import PropTypes from 'prop-types';

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
// PropTypes
User.propTypes = {
    name: PropTypes.string.isRequired, // name prop'unun string tipinde olduğunu ve zorunlu olduğunu belirtme
    age: PropTypes.number.isRequired   // age prop'unun number tipinde olduğunu ve zorunlu olduğunu belirtme
  };

  // Default Props
User.defaultProps = {
    name: 'Guest',
    surname: 'User',
    age: 18
  };

export default User