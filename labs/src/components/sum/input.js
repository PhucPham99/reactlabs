
// khai báo các attb của trường
let InputForm = (e) => {
    let { type1, value1, placeholder1, onChange1, type2, value2, placeholder2, onChange2, onClick} = e;

return (
    // tạo thẻ dựa trên các khai báo
<div>
    <input 
        type={type1}
        value={value1}
        placeholder={placeholder1}
        onChange={onChange1}
        />
    
    <input
        type={type2}
        value={value2}
        placeholder={placeholder2}
        onChange={onChange2}
    />
   {/* tạo event cộng 2 số */}
    <button onClick={onClick}>Cộng</button>
</div>

);
};
export default InputForm

