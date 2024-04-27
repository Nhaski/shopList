import React, {useState} from "react";
import './App.css';
import { click } from "@testing-library/user-event/dist/click";



function App () {

let textInput = React.createRef(); 
let firstname;
let lastname;

const [outFirstName, setOutFirstName] = useState('');
const [outLastName, setOutLastName] = useState('');

function InputFirstName(event) {
  firstname = event.target.value;
}

function InputLastName(event) {
  lastname = event.target.value;
}

function klick() {
  // setOutFirstName(firstname);
  setOutLastName(textInput.current.value);
  console.log(textInput.current.value);
}


  return (
    <div className="wrapper">
      <div className="header"> Это шапка сайта</div>

      <div className="leftBox"> 
        <p>Регистрация</p>
        <input className="lastName" placeholder="Название продукта" ref={textInput} />
        {/* <input className="age" type="number" min={0} max={100} placeholder="Введите возраст" /> */}
        <button className="registration" onClick={klick}> Добавить в корзину </button>
      
      </div>

      <div className="rightBox"> 
        <p>Список покупока</p>
        <p> Покупки: {outLastName} </p>
        
        
      </div>
    </div>
  )
}

export default App;
