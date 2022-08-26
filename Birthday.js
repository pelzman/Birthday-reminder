import React from 'react';

 // eslint-disable-next-line
const Birthday = ({people, removeBtn})=> {
  
 
 return<>

 {
 people.map((person)=>{    
    const{id, name, age, image} = person;
    return <article key={id}  className='person'>       
        <img src={image} alt="name" />
       <div className='dtn'>
       <h4>{name}</h4>
        <p>{age} years</p>        
        <button  onClick={()=>removeBtn(id)}>remove</button>

        </div> 
       
            
        </article>    

 })
 
};
 </>
}
export default Birthday;