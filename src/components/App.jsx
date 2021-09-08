import React from "react";
import contacts from "../contacts.jsx";
import Cardit from "./Cardit.jsx";


function App() {

 return <div>
   <h1 className="heading">My Contacts</h1>
  <Cardit name = {contacts[0].name} src ={contacts[0].imgURL} 
                phone= {contacts[0].phone} email={contacts[0].email} />

  <Cardit name = {contacts[1].name} src ={contacts[1].imgURL} 
                phone= {contacts[1].phone} email={contacts[1].email} />
  
  <Cardit name = {contacts[2].name} src ={contacts[2].imgURL} 
                phone= {contacts[2].phone} email={contacts[2].email} />
  </div>
    // for(let i=0; i<contacts.length; i++)
    // {
      
    //   array[i] = <Cardit name = {contacts[i].name} src ={contacts[i].imgURL} 
    //             phone= {contacts[i].phone} email={contacts[i].email} />
    // }
    

}

export default App;
