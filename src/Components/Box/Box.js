import "./Box.css"
import React from 'react';

function Box(props) {

  console.log(props)

  return (
    <div onClick={()=>{props.clickFunction()}} className="box">
      {props.Pending===true && <div className="loader"></div>}
      {props.isError!=null && <p className="box_para">{props.isError}</p>}
      {props.Pending!==true && props.data!==0 &&  <p className="box_para">{props.data.data.setup}</p> }  
      {props.Pending!==true && props.delievery && <p className="box_para">{props.data.data.delivery}</p> }    
    </div>
    );
}

export default Box;
