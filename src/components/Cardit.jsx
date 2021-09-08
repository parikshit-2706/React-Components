import React from "react";


function Cardit (props)
{
  return (
  <div>
     
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img class="circle-img"
            src={props.src}
          />
        </div>
        <div className="bottom">
          <div className="info">
           <p>{props.phone}</p>
          <p>{props.email}</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}


export default Cardit;