import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0, 9999);
        document.getSelection().removeAllRanges();//remove highlight text after copiny text
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleReversechange=()=>{
        // let newText=text.toUppercase();
        let newText=text.split('');
        let spl=newText.reverse();
        let ans=spl.join('');
        setText(ans);
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'#043743', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleReversechange}>Convert to reverse</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element) => {return element.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").filter((element) => {return element.length!=0}). length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}


// import React,{useState} from 'react';

// export default function TextForm(props) {

//     const handleUpchange=()=>{
//         console.log("cheling");
//         // let newText=text.toUppercase();
//         let newText=text.toUpperCase();
//         setText(newText);
//     }
//     const handleOnchange=(e)=>{
//         setText(e.target.value);
//         console.log("cheli12ng");

//     } 
//     const handleLochange=()=>{
//         console.log("cheling");
//         // let newText=text.toUppercase();
//         let newText=text.toLowerCase();
//         setText(newText);
//     }

//     const handleReversechange=()=>{
//         // let newText=text.toUppercase();
//         let newText=text.split('');
//         let spl=newText.reverse();
//         let ans=spl.join('');
//         setText(ans);
//     }
//     const [text,setText]=useState("text idhar dalo")
//   return (
//       <>
//        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
//     <h1>{props.heading}</h1>
//     <div className="mb-3 ">
//     <textarea className="form-control" style={{color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
    
  
//     <button className="btn btn-primary mx-3" onClick={handleUpchange}>Convert to Upeprcase</button>
//     <button className="btn btn-primary mx-3" onClick={handleLochange}>Convert to Lower</button>
    
//     </div>
//     </div>
//   <div className="container my-3">
//   <h3>  Your Text Summary 
// </h3>
// <p>
//    {text.split(" ").length} words and {text.length} No. of Characters
// </p>
// <p>
//     {0.008 * text.split(" ").length} minutes read
// </p>
// <h2>Preview</h2>
// <p>{text}</p>
// <p>{text.length()>0?text:'enter to use the changes in the  values'}</p>

//   </div>
//   </>

//   );
// }
