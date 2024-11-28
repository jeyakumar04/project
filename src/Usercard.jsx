import React from 'react'
import myImage from  './asset/IMG_8045.jpg'

const UserData=[{

  name:"Jeyakumar",
  city:"Madurai",
  description:"Full-stack Developer",
  skills:["HTML","CSS","BOOTSTRAP","JAVASCRIPT","REACT","UI UX"], 
  online:true, profile:"./src/asset/IMG_8045",

},

{

  name:"durai",
  city:"sivagangai",
  description:"frontend-developer",
  skills:["HTML","CSS","BOOTSTRAP","JAVASCRIPT","REACT","UI UX"], 
  online:true, profile:"./src/asset/IMG_8045",

}, ];

function  User(props){
  

   return ( <div className='card-container'>

<span className= {props.online?"pro online":"pro offline"}>  
  {props.online?"online":"offline"}
</span>

    <img className='image' src = {myImage}   alt="" />

    <h3> {props.name} </h3>

    <h3> {props.city} </h3>

    <p> {props.description}</p>

    <div className='button'>

      <button className="primary"> Message </button>

      <button className='primary outline'> Following </button>
       
             </div>
      <div className='skills'> 

  <h6> Skills </h6>
  <ul>
    {props.skills.map((skill,index)=>(
      <li key={index}>{skill}</li>
    ))}
  </ul>

  </div>

  </div>
);
};
const Usercard = () => {
  return( 
  <>
{
UserData.map((user,index)=>(
  <User key={index}
  name={user.name}
  city={user.city}
  description={user.description}
  skills={user.skills}
  online={user.online}
  profile={user.profile}
  /> 
))

}

  </>
);
};

export default Usercard



// ( 
 


 
//   <User name="Jeyakumar" city="madurai" description="frontend-developer"
//   skills={["HTML","CSS","BOOTSTRAP","JAVASCRIPT",
//     "REACT","UI UX"]} online={true} profile="./src/asset/IMG_8045"/>
   
//     )