import React, {useRef, useState} from "react";
import './App.css';


function App() {

  const textInput = useRef();
  const [name, setName] = useState(''); // ввод в инпут
  const [product, setProducts] = useState([]); // вывод продуктов

  // const [product, setProducts] = useState(JSON.parse(localStorage.getItem('nameOfProduct'))); // вывод продуктов
  
  const [nextId, setNextId] = useState(1); // id продуктов

  const handleAddArtist = () => {
    setProducts([
          ...product,
          { id: nextId, name: nextId + ':' + ' ' + name },
      ]);
      setNextId(nextId + 1); // Увеличиваем nextId на единицу
      setName(''); // очищаем поле ввода

      // localStorage.setItem('nameOfProduct', JSON.stringify(product))

      console.log(product);
  };

  function clickDiv () {
    console.log('клик');
  }

  return (
      <>
          <h1>Список покупок:</h1>
          <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={textInput}
          />
          <button onClick={handleAddArtist} >Добавить</button>
          <ul>
              {product.map((product) => (
                  <div className="cardProduct" onClick={clickDiv} key={product.id} > {product.name} </div>
              ))}
          </ul>
      </>
  );
}

export default App;


