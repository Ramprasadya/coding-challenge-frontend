import React, { useState } from 'react'

function FormControl() {
  const [user, setUser] = useState([])
  const handleUser =()=>{
     fetch("https://jsonplaceholder.typicode.com/users").then((result)=> result.json()).then((res)=>{
      console.log(res)
      setUser(res)
     })

  }
  return (
    <div className='container' >
      <h1>Form for AD-MY-BRAND</h1>
      <form action="">
        <select name="" id="" onClick={handleUser} >
        <option value="" >select user</option>
        {
          user.map((item)=> <option key={item.id} > {item.name} </option>)
        }
        </select>
      </form>
    
    </div>
  )
}

export default FormControl