import React from 'react'

const GetUser = () => {
  return (
   
    <div className='userBox'>
        <h2>Get User Information</h2>
        <form onSubmit={e=>{e.preventDefault(); getUser()}}>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" required/>
        </form>
    </div>
  )
}

export default GetUser;