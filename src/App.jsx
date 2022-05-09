import { useEffect, useState } from 'react';
import Create from './Components/Create';
import getNewId from './Components/id'
import List from './Components/List';
import Edit from './Components/Edit';

import './crud.scss'
import { BrowserRouter, Link, Route,  Routes} from 'react-router-dom';
import View from './Components/View';


function App() {

const initialState = ()=> JSON.parse(localStorage.getItem('bars'))|| []
const [bars, setBars] = useState(initialState);
const [modal, setModal] = useState(0)
const [view, setView] = useState([])
const [modalChocho, setModalChoco] = useState(0)
const [editID, seteditID] = useState(0)
// const [priceHistory, setPriceHistory] = useState([])

useEffect(()=> {
  localStorage.setItem('bars', JSON.stringify(bars))
})
////////////////// show modal 
const show = id => {
  setModal(id);
}
/////////////////// cancelint 
const cancel = ()=>{
  setModal(0)
}
////////// susikuriam elementa ir i local storage
const create = (data)=> {

  let priceH = [];
  let quantityH = [];
  
  const bar = {
    code: data.code, 
    calories: data.calories,
    fat: data.fat,
    name: data.name,
    type: data.type,
    quantity:data.quantity,
    price: data.price,
    id: getNewId(),
    history: [...priceH, data.price],
    historyQuantity : [...quantityH, data.quantity]
  }
  // const history = [...priceHistory, bar]
  // setPriceHistory(history)
  // console.log(priceHistory)

  const newData = [...bars, bar];
  localStorage.setItem('bars', JSON.stringify(newData))
  setBars(newData)
}
/////////////////////////////////////
/////////////// editinam //////////

const edit =(data)=> {
  const barsCopy = [...bars, data];
  // setPriceHistory(barsCopy)
//  (data.history).push(data.price)
  barsCopy.forEach((elem, i)=> {

    if(elem.id===modal){
      barsCopy[i].code = data.code;
      barsCopy[i].calories = data.calories;
      barsCopy[i].fat = data.fat;
      barsCopy[i].name = data.name;
      barsCopy[i].type = data.type;
      barsCopy[i].quantity = data.quantity;
      barsCopy[i].price = data.price;
      barsCopy[i].history = [...barsCopy[i].history, data.price]
      barsCopy[i].historyQuantity = [...barsCopy[i].historyQuantity, data.quantity]
      if(barsCopy[i].history.length>5){
        barsCopy[i].history.shift()
      }
      if( barsCopy[i].historyQuantity.length>5){
        barsCopy[i].historyQuantity.shift()

      }
     
    }
    
  })
  
  localStorage.setItem('bars', JSON.stringify(barsCopy))
  setBars(z1 =>{
    barsCopy.forEach((target, i )=>{
      if(target.id === modal){
        z1[i].code= data.code;
        z1[i].calories= data.calories;
        z1[i].fat= data.fat;
        z1[i].name= data.name;
        z1[i].type= data.type;
        z1[i].quantity= data.quantity;
        z1[i].price= data.price;
        
      }
    })
    return z1;
  })
  cancel()
}

///////////////////////
//////////////////// gauti bars
const getBars = ()=>{
  return bars.filter(elem=>elem.id===modal)[0]

}



// const getScooter = ()=>{
//   console.log(paspirtukai.filter(elem=>elem.id===modal)[0])
//   return paspirtukai.filter(elem=>elem.id===modal)[0]
// }
//////////// delettinam bar

const deleteBar = id=> {
  const newData = bars.filter(elem=> elem.id!==id);
  localStorage.setItem('bars', JSON.stringify(newData))
  setBars(newData)
}
////////////////////////////////
const preview = (id)=>{
  const newData = bars.filter(elem=> elem.id===id)
  setView(newData[0])
  setModalChoco(1)

}
const cancelView = ()=> {
  setModalChoco(0)
}

const editId = (id)=>{
  seteditID(id)
 
}

  return (
  <BrowserRouter>
  <main>
      <header className="top">
        <h1>Warehouse</h1>
      </header>
      <div className='link'>
       {/* <Link to='/'></Link> */}
       <Link className='linkRoute' to='/products'>Products</Link>
       <Link className='linkRoute' to='/products/create'>Create</Link>
       {/* <Link className='linkRoute'to='/products/Edit' >Edit</Link> */}
      </div>
      <section className="mainContent">
        <Routes>
        {/* <Route path='/'></Route> */}
        <Route path='/products'element={<List bars={bars} deleteBar={deleteBar} show={show} preview={preview} editId={editId} ></List>}></Route>
        <Route path='/products/create' element={<Create create={create}></Create>}></Route>
        <Route path={`/products/:${editID}/edit`} element={modal ? <Edit cancel={cancel} bars={getBars()} edit={edit} ></Edit> : null}></Route>
        <Route path={`/products/:${editID}`} element={
        modalChocho ? <View view={view} cancelView={cancelView}></View> :null
      }></Route>
        </Routes>
        
        {/* <Create create={create}></Create> */}
        {/* <List bars={bars} deleteBar={deleteBar} show={show} ></List> */}
        {/* <List paspirtukai={paspirtukai} deleteScooter={deleteScooter} show={show} totalKm={totalKm} deletekm={deletekm} sortBy={sortBy}  ></List> */}
      </section>
      {/* {
        modal ? <Edit cancel={cancel} bars={getBars()} edit={edit} ></Edit> : null
      } */}
      {/* {
        modalChocho ? <View view={view} cancelView={cancelView}></View> :null
      } */}
      
    </main>
    </BrowserRouter>
    
  );
}

export default App;
