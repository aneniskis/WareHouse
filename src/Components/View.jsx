import React, { useState } from "react";
import pic from "../img/choco-bars.jpg";
import bounty from "../img/bounty.jpg";
import snickers from "../img/snickers.jpg";
import milky from "../img/milky.jpg";
import mars from "../img/mars.png";
import bingo from "../img/bingo.jpg";
import manija from "../img/manija.jpg";
import twix from "../img/twix.jpg";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BarChart from "./BarChart";
import QuantityChart from "./QuantityChart";

function View({ view, cancelView }) {
  const [tabIndex, setTabIndex] = useState(0);

  const getPic = () => {
    if (view.name.toLowerCase() === "bounty") {
      return bounty;
    } else if (view.name.toLowerCase() === "snickers") {
      return snickers;
    } else if (view.name.toLowerCase() === "mars") {
      return mars;
    } else if (view.name.toLowerCase() === "bingo") {
      return bingo;
    } else if (view.name.toLowerCase() === "manija") {
      return manija;
    } else if (view.name.slice(0, 5).toLowerCase() === "milky") {
      return milky;
    } else if (view.name.toLowerCase() === "twix") {
      return twix;
    } else {
      return pic;
    }
  };

  return (
    <div className="popUp">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Products details</Tab>
          <Tab>Price History</Tab>
          <Tab>Quantity history</Tab>
        </TabList>

        <TabPanel>
          <div className="details">
            <img src={getPic()} alt="none" />
            <div className="content">
              <h2>{view.name}</h2>
              <p>EAN: {view.code}</p>
              <p>Types of Chocolate: {view.type}</p>
              <p>Calories: {view.calories}g </p>
              <p>Fat: {view.fat}g</p>
              <p>Quantity: {view.quantity}</p>
              <p>Price (&#8364;): {view.price}</p>
            </div>
            <Link to="/products">
              <FontAwesomeIcon
                className="font"
                onClick={() => cancelView()}
                icon={faTimes}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="choco">
            <BarChart view={view}></BarChart>
            <Link to="/products">
              <FontAwesomeIcon
                className="font"
                onClick={() => cancelView()}
                icon={faTimes}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="choco">
            <QuantityChart view={view}></QuantityChart>
            <Link to="/products">
              <FontAwesomeIcon
                className="font"
                onClick={() => cancelView()}
                icon={faTimes}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default View;
