import React, { useState } from "react"

const App = () =>{
    const [text,settext]=useState(false)
return(
    <div>
        <button onClick={()=>settext(true)}>ClickMe</button>
        {
            text!==false && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        }
    </div>
)
}
export default App;