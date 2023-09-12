import { useState } from "react";

function Sum1() {
    const [soA, setSoA] = useState(0);
    function handleChange(e) {setSoA(e.target.value)};
    const [soB, setSoB] = useState(0);
    function handleChange3(e) {setSoB(e.target.value)};
    let sum = Number(soA) + Number(soB);
    
    return(
        <div>
            <input type='number' onChange={handleChange}/>
            <input type='number' onChange={handleChange3}/>
            <button>Tính Tổng</button>
        </div>
    )
}
export default Sum1;