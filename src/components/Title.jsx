import { useState } from "react";

function Title(){
    let [count, setCount] = useState(0);

    return (
      <>
        <h2>Count = {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
      </>
    );
}

export default Title;