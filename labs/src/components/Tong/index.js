import { useState } from "react";

function Sum1() {
    const [soA, setSoA] = useState(0);
    function handleChange(e) {setSoA(e.target.value)};
    const [soB, setSoB] = useState(0);
    function handleChange3(e) {setSoB(e.target.value)};
    const [sum, setSum] = useState(0);
    function total(e) {setSum(Number(soA) + Number(soB))};
    
    return(
        <div>
            <input type='number' onChange={handleChange}/>
            <input type='number' onChange={handleChange3}/>
            <button onClick={total}>Tính Tổng </button>
            <p>Số a : {soA} + số b: {soB} = {sum}</p>
        </div>
    )
}
export default Sum1;