import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("Enter the text here.");
    function handleOnClick(){
        console.log("Upper case key was clicked");
        setText(text.toUpperCase());
    }
    function handleOnChange(event){
        console.log("Handle on change was clicked");
        setText(event.target.value);
    }
    function handleOfClick(){
        setText(text.toLowerCase());
    }
    return (
        <>

            <div className="mb-3">
                <br/>
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
            <br/>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleOfClick}>Convert to lower case</button>
            </div>

        </>
    )
}
