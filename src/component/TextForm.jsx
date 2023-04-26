import React from 'react'
import { useState } from 'react';


export default function TextForm() {
  const [text, setText] = useState("");
  // uppercase function

const handleUpClick=()=>{
  let new_text=text.toUpperCase();
  setText(new_text);
}
// Lowercase function

const handlelowClick=()=>{
  let new_text=text.toLowerCase();
  setText(new_text);
}
// clear function
const handleclearClick=()=>{
  let new_text="";
  setText(new_text);
}
// copy function

 const handleCopy = () => {
  var text = document.getElementById('mybox')
  text.select();
      navigator.clipboard.writeText(text.value);
  } 
const handleOnChange=(event)=>{
  setText(event.target.value);
}

  return (<div className="container my-5">
    <div>
        <h1 >Enter Text to Analyze</h1>
      <div className="form-floating">
  <textarea className="form-control h-100"  value={text} onChange={handleOnChange} id="mybox"  ></textarea>
</div><br />
<button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
<button className="btn btn-primary" onClick={handlelowClick}>convert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-danger mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
           
    </div>
    <div className="container my-3" >
      <h2>Your Text Summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
      </div></div>
  )
}
