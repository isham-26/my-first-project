import React, { useState } from "react"
export default function TextForm(props) {
  const[text,setText]=useState('enter your text')
  function changeUpcase(){
    let upcase=text.toUpperCase()
      setText(upcase)
  }
  function handOnChange(event){
       setText(event.target.value)
  } 
  function ChangeClear(){
    setText('')
  } 
  function handleCopy(){
    let text=document.getElementById('my-box')
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  function handleExtarSpaces(){
    let newtext=text.split(/[ ]+/)
    setText(newtext.join(" "))
  }
  function countWords(text){
    let wc = text.split(" ").length;
    text.split(" ").forEach((word) => {
        if(!word.length){
            wc -= 1;  
        }
    });

    return wc;
}
  return (
    <>
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-2">
        <label for="my-box" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"onChange={handOnChange}
          id="my-box" value={text}
          rows="8"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary"onClick={changeUpcase}>change to uppercase</button>
      <button type="button" className="btn btn-primary mx-2"onClick={ChangeClear}>clearText</button>
      <button type="button" className="btn btn-primary mx-2"onClick={handleCopy}>copyText</button>
      <button type="button" className="btn btn-primary mx-2"onClick={handleExtarSpaces}>removeExtarSpaces</button>

    </div>
    <div className="container">
      <h1>Your Text Summery</h1>
      <p>{countWords(text)} words , {text.length}, cherecters,{0.008*text.split(" ").length} min reading time </p>
    </div>
    </>
  );
}
