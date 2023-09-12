import React from "react";
import InputForm from "./input";// kết nối 2 file
function App2(){
    let [value1, setValue1] = React.useState("");//khởi tạo state cho thẻ input
    let [value2, setValue2] = React.useState("");
    let [sum, setSum] = React.useState(0);
    //định nghĩa hàm và cập nhật state cho sự kiện thay đổi giá trị
function handleChage1(event) {setValue1(event.target.value)};
function handleChage2(event) {setValue2(event.target.value)};
function handleClick() {
    let tong = Number(value1) + Number(value2);
    setSum(tong);
}
return(
    <div>
    <InputForm
        type1="text"
        value1={value1}
        placeholder1="Nhập số thứ nhất: "
        onChange1={handleChage1}
        type2="text"
        value2={value2}
        placeholder2="Nhập số thứ hai: "
        onChange2={handleChage2}    
        onClick={handleClick}
      />
        <p>Kết quả: {sum}</p>
    </div>
);
};
 export default App2 // phải nhớ mở cửa cho các file kết nối

