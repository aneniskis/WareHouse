import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Rand from "./Rand";

function Edit({ edit, cancel, bars }) {
  const [code, setCode] = useState(Rand(10000000, 99999999));
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("White");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    setCode(bars.code);
    setCalories(bars.calories);
    setFat(bars.fat);
    setName(bars.name);
    setType(bars.type);
    setQuantity(bars.quantity);
    setPrice(bars.price);
  }, [bars]);

  const changeName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  // const changeType = (event) => {
  //   setType(event.target.value);
  //   console.log(event.target.value);
  // };
  // const changeCalories = (event) => {
  //   setCalories(event.target.value);
  // };
  // const changeFat = (event) => {
  //   setFat(event.target.value);
  // };
  const handleCancel = () => {
    cancel();
  };
  const changeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      code: code,
      calories: calories,
      fat: fat,
      name: name,
      type: type,
      quantity: +quantity,
      price: +price,
    };
    edit(data);
    // setFat(0);
    // setCalories(0);
    // setName("");
    // setType("White");
    // setCode(Rand(10000000, 99999999));
  };

  return (
    <div className="modal">
      <div className="edit">
        <div className="title">
          <h2>Update goods</h2>
        </div>
        <form className="form" onSubmit={(e)=>{handleEdit(e); navigate('/products')}}>
          <div className="input">
            <label htmlFor="">EAN Code:</label>
            <input type="text" value={code} readOnly />
          </div>
          <div className="input">
            <label htmlFor="">Chocolate bars</label>
            <input type="text" value={name} onChange={changeName} readOnly />
          </div>
          {/* <div className="input">
            <label>Types of Chocolate</label>
            <select value={type} onChange={changeType} readOnly>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Ruby">Ruby</option>
              <option value="Milky">Milky</option>
            </select>
          </div> */}

          {/* <div className="input ">
          <label htmlFor="">Calories (g)</label>
          <input type="number" step="0.01" min={0} value={calories} onChange={changeCalories} />
        </div> */}
          <div className="input none ">
            <label htmlFor="">Quantity</label>
            <input
              type="number"
              step="1"
              min={0}
              value={quantity}
              onChange={changeQuantity}
            />
          </div>
          <div className="input">
            <label htmlFor="">Price</label>
            <input
              type="number"
              step="0.01"
              min={0}
              value={price}
              onChange={changePrice}
            />
          </div>
          <div className="input">
            <div className="input-btn">
              {/* <Link to='/products'></Link> */}
              {/* <button className="btn" type="submit">
            <Link className="editLink" to='/products'>Save</Link>
            </button> */}
              <button className="btn" type="submit">
                Save
              </button>
              <button
                className="btn cancel"
                type="submit"
                onClick={handleCancel}
              >
                <Link className="editLink" to="/products">
                  Cancel
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
