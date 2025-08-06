import { useState } from "react";
// event.target -> orgin of event
function Color(){
    const [color,setColor] = useState("orange");
    return(
        <div>
        <input value={color} onChange={( event ) => setColor(event.target.value)} type="text" style={{background: color}}/>
        <h1>{color}</h1>
        </div>
    )
}
export {Color};