 // eslint-disable-next-line
import React, { useState, useEffect} from 'react';
 // eslint-disable-next-line
  import './App.css';
 import {data} from './data';
import  Birthday  from './Birthday';
 
 
 function App() {
const[people, setPeople]= useState(data);
 
 const removeBtn= ((id)=>{
  const newPeople = people.filter((person)=>person.id !==id)
  setPeople(newPeople)
  
 })


if(people.length===0){ 
  
  return<main>
    <section className='container'>
      <h2>no birthday left</h2>
    <button onClick={()=>setPeople(data)}>refresh</button>
    </section>
   
  </main>
}
  

 


  return <main>
    <section className='container' >
      <h2>{people.length} birthdays today</h2>
      <Birthday people={people} removeBtn={removeBtn} />      
      <button className='btn' onClick={()=>setPeople([])}>Clear All</button>
     
     </section>
    
  </main>


 }


export default App;
