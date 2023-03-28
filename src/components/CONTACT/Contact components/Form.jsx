import React, { useState }  from 'react'
import './form.css'
const Form = () => {
    const [name, setName] = useState("");
  return (
    <form>
    
        <input
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)         
          }
        />
        <input
          type="tel" 
          placeholder="Enter your phone no."
         
        //   onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email" 
          placeholder="Enter your email"
         
        />
        <button className="button-48"><span className="text">Submit</span></button>


    </form>
  )
}

export default Form