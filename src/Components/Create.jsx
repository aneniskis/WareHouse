import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Rand from "./Rand";


function Create({ create, totalAll }) {
  const [code, setCode] = useState(Rand(10000000, 99999999));
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("White");
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()
  
  

  const changeName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const changeType = (event) => {
    setType(event.target.value);
    console.log(event.target.value);
  };
  const changeCalories = (event) => {
    setCalories(event.target.value);
  };
  const changeFat = (event) => {
    setFat(event.target.value);
  };
  const changeQuantity = (event)=>{
    setQuantity(event.target.value)
  }
  const changePrice = (event)=> {
    setPrice(event.target.value)
  }

  const handleCreate = (e) => {
    e.preventDefault();
    const data = {
      code: code,
      calories: calories,
      fat: fat,
      name: name, 
      type: type,
      quantity: +quantity,
      price:  +price
    };
    create(data)
    setFat(0);
    setCalories(0)
    setName('')
    setType('White')
    setCode(Rand(10000000, 99999999))
    setQuantity(0)
    setPrice(0)

  };


  
  return (
    <div className="create">
      <div className="title">
        <h2>Add new goods</h2>
      </div>
      <form className="form" onSubmit={(e) =>{ handleCreate(e); navigate("/products") }}>
        <div className="input">
          <label htmlFor="">EAN Code:</label>
          <input type="text" value={code} readOnly />
        </div>
        <div className="input">
          <label htmlFor="">Chocolate bars</label>
          <input type="text" value={name} onChange={changeName} required />
        </div>
        <div className="input">
          <label>Types of Chocolate</label>
          <select value={type} onChange={changeType}>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Ruby">Ruby</option>
            <option value="Milky">Milky</option>
          </select>
        </div>
        <div className="input ">
          <label htmlFor="">Calories (g)</label>
          <input type="number" step="0.01" min={0} value={calories} onChange={changeCalories} />
        </div>
        <div className="input ">
          <label htmlFor="">Fat (g)</label>
          <input type="number" step="0.01" min={0} value={fat} onChange={changeFat} />
        </div>
        <div className="input none ">
          <label htmlFor="">Quantity</label>
          <input type="number" step="1" min={0} value={quantity} onChange={changeQuantity} />
        </div>
        <div className="input">
          <label htmlFor="">Price</label>
          <input type="number" step="0.01" min={0} value={price} onChange={changePrice} required />
        </div>
        <div className="input">
          <div className="input-btn">
            <button className="btn" onClick={e=> navigate("/products") }>
              Cancel
            </button>
          </div>
        </div>
        <div className="input">
          <div className="input-btn">
            <button className="btn" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
