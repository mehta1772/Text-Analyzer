import React,{useState} from "react";


export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to UpperCase","success");
    }
    const handleLoClick=()=>{
        // console.log("UpperCase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to LowerCase","success");
    }
    const handleClearClick=()=>{
        // console.log("UpperCase was clicked"+text);
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared! ","success");
    }
   
    const handleCopy=()=>{
      console.log("I am copy");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to Clipboard!","success");
    }

    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("REmove Extra Spaces","success");
    }

    const handleOnChange=(event)=>{
        // console.log("OnChange")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // setText("new Text"); //correct way to change the state 
   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space </button>
    </div> 
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words,{text.length} character</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
