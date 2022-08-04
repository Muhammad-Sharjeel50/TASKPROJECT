import React,{useState,useEffect} from 'react';
import './App.css';

function AppTask() {
  //filter by year
  const [Box , Chkbox]= useState([]);
  const HandleSearchbox = (items) =>{
  const checkedbox = Box.items.year;
  const newCheck = [...Box];

  if(checkedbox == items.year){
    return(
    <div>
        <img src={items.image} alt="image" />
        <h1>{items.name}</h1>
        <h2>{items.brand}</h2>
        <h3>{items.size}</h3>
        <h4>{items.category}</h4>
        <h5>{items.price}</h5>
        <h6>{items.year}</h6>
        </div>
    )
  }
  else{
    alert("Filter year only upto 2017")
  }
  Chkbox(checkedbox);
  }
//For delete
 const [NormalValue , SetNormalvalue] = useState([]);

 const Delete = ((items) =>{
  
     if(Searchhere == items.name){
        items.filter((items)=>{
           SetNormalvalue(items.name)
        })
     }
    })
 
  // For Search here
  const [Searchhere , GetSearchhere] = useState("");
  const Search = (e)=>{
    GetSearchhere(e.target.value);
  }
  // Get JSON DATA
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('products.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[]);
  return (
    <div className="App">
     {
       data && data.length>0 && data.map((items)=>{
        <>
        <div>
          <input type="text" onChange={Searchhere} value={NormalValue} />
          <button onClick={Search}>Search</button>
          <button onClick={Delete}>Delete</button>
        </div>
        <div>
        <img src={items.image} alt="image" />
        <h1>{items.name}</h1>
        <h2>{items.brand}</h2>
        <h3>{items.size}</h3>
        <h4>{items.category}</h4>
        <h5>{items.price}</h5>
        <h6>{items.year}</h6>
        </div>
        <div>
         
          <input type="checkbox" name="2022" onChange={()=>HandleSearchbox(items.year)} />
          <input type="checkbox" name="2021" onChange={()=>HandleSearchbox(items.year)} />
          <input type="checkbox" name="2019" onChange={()=>HandleSearchbox(items.year)} />
          <input type="checkbox" name="2018" onChange={()=>HandleSearchbox(items.year)} />
          <input type="checkbox" name="2017" onChange={()=>HandleSearchbox(items.year)} />
        </div>
        </>
       })

     }
    </div>
  );
}

export default AppTask;