import React, { useEffect , useState } from 'react';
import loadingimg from "./images/loadingimg.gif"
import "./App.css"
function App (){
  const [state, setState] = useState([]);
  const [render,setRender] =useState(true);
  const [flag,setFlag] = useState(false);
  const [loading,setLoading] = useState(true);

 //for  fetching the data 
  useEffect(()=>{
    setState([])
    fetch("https://reqres.in/api/users?delay=3")
    .then(res=>res.json()) 
    .then(data =>{ setLoading(false) //loading Function 
     return data.data.map(item=>setState(da=>da.concat(item)))})
  },[])

 const [id,setIndex]=useState();
 const [reRender,setReRender]=useState(false);
 const [reLastRender,setLastRender] =useState(false);


 //function implimantation for clicking image or user deatils
  function Fetch(){
  return(
    <>
     <div className="page">
        <div className="row">
           <h1>{state[id].first_name} {state[id].last_name}</h1>
           <div className="imgg"><img src={state[id].avatar}/></div>
           <h2>{state[id].email}</h2>
      </div> 
    </div> 
    </>
    ) 
  }


  // funtion implementation for sort by first name
 function firstNameSort(){
     state.sort((a,b)=>
     {
        if(a.first_name>b.first_name){
           return 1;
      }
      else if(a.first_name<b.first_name)
      {
        return -1;
      }
      else
      {
        return 0;
      }
    })
  //  return start;
    // console.log(state);

    return  state.map((item,index)=>{
           return (
             <>
                 <div onClick={()=>Show(index)} key={index} className="col-md-4 info gy-3 gx-2">
                   <div className="imgmain"><img src={item.avatar}/></div>
                    <div>
                      <div>{item.first_name} {item.last_name}</div>
              
                    </div>
                </div>
             </>
      ) 
    })
  }


  // fcunctionimplementation for sortnig by last name
function lastNameSort(){
    state.sort((a,b)=>{
      if(a.last_name>b.last_name)
      {
       return 1;
     }
     else if(a.last_name<b.last_name)
     {
       return -1;
     }
     else
     {
       return 0;
     }
   })
 //  return start;
   // console.log(state);
 return  state.map((item,index)=>{     
     return (
       <>
     <div onClick={()=>Show(index)} key={index} className="col-md-4 info gy-3 gx-2">
           <div className="imgmain"><img src={item.avatar}/></div>
           <div>
             <div>{item.first_name} {item.last_name}</div>
             
           </div>
       </div>
        </>
     ) 
   })
 }


//This is function None in Sort by Option {  if you want use this function you can make it uncomment this function and 116, 124 line } 

//  function None(){
//   setLastRender(false)
//   setReRender(false);
//   setRender(true);
//   // setRestart(true);
//  }

//function  for sorting by first-name to show
 function reFirstShow(){
  // setRestart(false);
   setRender(false);
   setLastRender(false)
   setReRender(true);
 }

 //function  for sorting by last-name to show
 function reLastShow(){
  // setRestart(false);
  setRender(false);
  setReRender(false)
   setLastRender(true);
 }

//It opens a new page of user which shows user detail
  function Show(ind){
   setFlag(true);
   setIndex(ind); 
  }

  //This is the funtion for loading and and displays a loading spinner
  function Loading(){
    return(
      <>
      <h3>...Loading</h3>
      <img className="imag" src={loadingimg}/>
      </>
    )
  }

 
//  useEffect(()=>{
//    setLoading(false);
//  },[render])

//here start rendering displays images and first name and las and 
 function start(){
 return  state.map((item,index)=>{
           return (
             <>
                 <div onClick={()=>Show(index)} key={index} className="col-md-4 info gy-3 gx-2">
                     <div className="imgmain"><img src={item.avatar}/></div>
                         <div>
                            <div>{item.first_name} {item.last_name}</div>
            
                      </div>
                </div>
             </>
    ) 
  })
 }
 // console.log(state);
  return (
    <>
        <div className="container-fluid App">
            {/* <p>sort by</p> */}
               <div className="sort-menu">
                  <span className="sort-by">Sort By :</span>
                       <div className="sort">
                           <button onClick={reFirstShow}>First_name</button>
                           <button onClick={reLastShow}>Last_name</button>
                             {/* <button onClick={None}>None</button> */}
                       </div >
               </div>
                  <div className="row allInfo">
                    {
                      loading?Loading():""
                    }
                  {
                    render?start():""
                  }
                  {
                    reRender?firstNameSort():""
                  }
                  {
                    reLastRender?lastNameSort():""
                  }
                </div>
         </div>


    {
      flag?Fetch():""
    }
    </>
  )
    
 //This is just a dropdown 
//   <select className = "sort">
//     <option value="firstname">first_name</option>
//     <option value="last_name">last_name</option>
// </select>
}
export default App;