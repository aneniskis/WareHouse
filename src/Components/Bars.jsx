import React, { useState } from "react";
import { Link} from "react-router-dom";

function Bars({ elem, deleteBar, show, preview, editId }) {
  const [active, setActive] = useState(0);

  const activeChange = () => {
    setActive((old) => (old === 0 ? 1 : 0));
    console.log(active);
  };
  const handleDelete = (id) => {
    deleteBar(id);
  };
  return (
    <li>
      <div className="scooter">
        <div className="scooterOne">
          <span>{elem.name}</span>
          <span>{elem.code}</span>
          <span>{elem.type}</span>
          <span>{elem.quantity}</span>
          <span>{elem.price}</span>
          <span className="check">
            <input
              type="checkbox"
              name=""
              id=""
              checked={active}
              onChange={activeChange}
            />
          </span>

          <div className="button">
            <Link to={`/products/:${elem.id}`}>
              <button
                className="view"
                disabled={!active}
                onClick={() => {
                  preview(elem.id);
                  editId(elem.id);
                }}
              >
                View
              </button>
            </Link>
            <Link to={`/products/:${elem.id}/edit`}>
              {" "}
              <button
                className="edit"
                onClick={() => {
                  show(elem.id);
                  editId(elem.id);
                }}
                disabled={!active}
              >
                Edit
              </button>
            </Link>
            <button
              className="delete"
              disabled={!active}
              onClick={() => handleDelete(elem.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Bars;
