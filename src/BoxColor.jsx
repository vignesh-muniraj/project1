import { use } from "react";
import { useState } from "react";
function BoxColor() {
  const [color, setColor] = useState("");
  const styles = {
    background: color,
  };
  const [colors,setColors] = useState(["pink", "purple", "plum", "orange","yellow"]);

  return (
    <div>
    {/* Task 2.2 - Update the background the input */}
    <input
    value={color}
    style={styles}
    onChange={(event) => setColor(event.target.value)}
    type="text"
    />
    {/* Task 3.2 - Uses colors - Display Color Box */}
    <button onClick={()=> setColors(colors.concat(color))}>➕ Add</button>

      {/* Task 3.1 - Uses colors - Display Color Box */}
       {colors.map((clr)=>(
      <ColorBox color={clr} />
      ))}
      {/*<ColorBox clr="red"/>*/}
    </div>
  );
}

function ColorBox({color}) {
  const boxStyles = {
    background: color,
    height: "25px",
    width: "225px",
    marginTop: "8px",
  };

  return <div style={boxStyles}></div>;
}
export { BoxColor };
