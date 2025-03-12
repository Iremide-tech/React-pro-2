import { useState } from 'react'

import './App.css'

function App() {
   const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    description: '',
   })

const handleChanges = (e) => {
   setValues({...values, [e.target.name]:[e.target.value]})
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(values)
}

const ResetFun = () => {
  setValues({firstname: '', lastname: '', email: ''})
}
  return (
    <>
      <div className='container'>
        <h1>Resume Builder</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input type='text' placeholder='Enter your name' name='fistname'
          onChange={(e) => handleChanges(e)} required value={values.firstname}
          />
             <br />
          <label htmlFor="lastname">Last Name</label>
          <input type='text' placeholder='Enter your last name' name='lastname'
           onChange={(e) => handleChanges(e)} required value={values.lastname}/> 
             <br />
           <label htmlFor="email">Email</label>
          <input type='text' placeholder='Type your email' name='email'
           onChange={(e) => handleChanges(e)} required/>
       <br />
          <label htmlFor="contact">Contact</label>
          <input type='number' placeholder='Phone no' name='contact'
           onChange={(e) => handleChanges(e)} required/>
       <br />
   <label htmlFor="gender">Gender</label>
   <input type="radio" 
    onChange={(e) => handleChanges(e)}/> Male
   <input type="radio" 
    onChange={(e) => handleChanges(e)}/> Female
   <input type="radio"
    onChange={(e) => handleChanges(e)} /> Other
         <br />
   <label htmlFor="subject">Subject</label>
   <select name="subject" id="subject"  onChange={(e) => handleChanges(e)}>
    <option value="Maths">Maths</option>
    <option value="Physics">Physics</option>
    <option value="English">English</option>
   </select>
  <br />
   <label htmlFor="description">Description</label>
   <textarea name="description" id="description" cols="30" rows="10"
    onChange={(e) => handleChanges(e)} placeholder='About you'></textarea>

<button type="submit">Submit</button>
<button type="reset" onClick={ResetFun}>Reset</button>
   </form>

      </div>
    </>
  )
}

export default App
