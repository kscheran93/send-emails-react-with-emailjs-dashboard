import React, { useState } from "react";
import emailjs from 'emailjs-com';

function App() {
  const [data,setData] =useState({
    subject:'',
    email:'',
    message:''
  });
const {subject,email,message}= data;
  
  const changeHandle=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const chnageSubmit =(e)=>{
   e.preventDefault();
   emailjs.sendForm('Yservice_l7xinoa', 'template_849hm2l', e.target, 'user_hUcN55etFp6n85LRvqyKh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  
  return (
    <div>
      <center>
      <h1>React Email project</h1>
      <form onSubmit={chnageSubmit} autoComplete='off'>
       <label>Subject:</label> <br/>
       <input type='text' name='subject' value={subject} onChange={changeHandle}/> <br/> <br/>
       <label>Email:</label> <br/>
       <input type='email' name='email' value={email} onChange={changeHandle}/> <br/> <br/>
       <label>Message:</label> <br/>
       <input type='text' name='message' value={message} onChange={changeHandle}/> <br/> <br/>
       <input type='submit'/>

      </form>
      </center>
    </div>
  );

  }
export default App;
