import React,{useState} from 'react'

function Form(props) {
    const [text, settext] = useState("")
    return (
        <div>
            <form action="javascript:;">
                <div class="form-group">
                    <label for="email">Email Username:</label>
                    <input type="text" class="form-control" placeholder="Enter username" id="email" onChange={(text)=>{
                        settext(text.target.value)
                    }}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={()=>{
                    props.changename(text)
                }}>Submit</button>
                </form>
        </div>
    )
}

export default Form
