import './App.css';
import { useEffect,useState } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
const [items,setItems] = useState([]);
const [user,setUser] = useState('Arrabiata');
const [cart,setCart] = useState([]); 
const [product,setProduct] = useState({})


useEffect(()=>{
  
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${user}`)
  .then(res=> res.json())
  .then(data=> {
    setItems(data.meals)
  })
},[user])

function handleInput(event) {
 const userVal = event.target.value;
  setUser(userVal)
}

console.log(user);


const handleCart = (data) => {

const totalCart = [...cart,data];
setCart(totalCart);
setProduct(data)

}
const {strCategory,strMeal,strMealThumb} = product;


  return (
    <div className="App">
      <Header handle={handleInput}></Header>
      <div className="row">
          <div className="row p-5 col-9">
                {items.map(item => <Products handleCart={handleCart} item={item} key={item.idMeal}></Products>)}
           </div>
       <div className="col-3 mt-5" style={{borderLeft: '2px solid lightgray'}}>
         <h1>total added : {cart.length}</h1>
         <div className="card">
            <img src={strMealThumb} className="card-img-top img-responsive" alt="..."/>
         <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
             <p className="card-text">category: {strCategory}</p>
           
         </div>
       </div>
       </div>
      </div>
      
    </div>
  );
}

export default App;
