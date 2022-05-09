import React from 'react';
import Bars from './Bars';

function List({bars, deleteBar, show, preview, editId}) {
  return (
    <div className="list">
    <div className="header">
      <h2>List of Chocolate</h2>
    </div>
    <div className="category">
      <div className="categoryTwo">
        <p>Product (50g)</p>
        <p>EAN</p>
        <p>Type</p>
        <p>Quantity</p>
        <p>Price (&#8364;) </p>
        <p>Active</p>
        <div className="sortBy">
        <div className="sortEnd">
        {/* <label htmlFor="">Sort by:</label>
        <select name="" id="" >
          <option value="-">-</option>
          <option value="totalRideKilometres" >Most km</option>
          <option value="lastUseTime" >Date</option>
          <option value="isBusy">Status</option>
          <option value="registrationCode">Reg. code</option>
        </select> */}
        </div>
        
      </div>
      </div>
    </div>
    <ul className="listScooter">
        {
            bars.map((elem) => <Bars elem={elem} key={elem.id} deleteBar={deleteBar} show={show} preview={preview} editId={editId} ></Bars>)
        }
      
    </ul>
    {/* <div className="bottom">
      <p>Happy customers drove a total of kilometers</p>
    </div> */}
  </div>
  )
}

export default List