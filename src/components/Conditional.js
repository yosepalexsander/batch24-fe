import {useState} from 'react'

import styles from './Conditional.module.css';

/**
 * Component created for implement conditional rendering
 * and also describe how is declarative programming
 * @returns 
 */

function Conditional() {

  // initialization state
  const [user, setUser] = useState({
    name: "",
    status: "guest"
  });

  // function for handling state based on change event
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // function for handling state based on change event
  const handleSubmit  = (e) => {
    setUser({
      ...user,
      status: "user"
    })
  }

  return (
    <div>
      <p className={user.status === "guest" ? styles.red : styles.blue}>Dumb Apps</p>
      {user.status === "guest" ? (
        <>
          <p>Welcome Guest</p>
          <form onSubmit={handleSubmit}>
            <input value={user.name} name="name" onChange={handleChange}/>
            <input type="submit" value="Login"/>
          </form>
        </>
      ) : (
        <>
          <h1>Welcome {user.name}</h1>
          <p>Have a nice day!!</p>
        </>
      )}
    </div>
  )
}

export default Conditional
