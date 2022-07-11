import React from 'react'

export default function Signup() {
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <input type="password" name="password" placeholder="re-enter password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
