import React from 'react';
import "./SubNavbar.css"

function SubNavbar({selected,setSelected,clickFunction}) {
    return (
    <div className="sub_navbar">
        <div onClick={()=>{
            setSelected(1)
            clickFunction()
            }} className="sub_navbar_div_one">
            {selected===1 ?<h1 className="sub_navbar_heading selected">Dank</h1> : <h1 className="sub_navbar_heading">Dank</h1>}
            {selected===1 && <div className="bottom"></div>}
        </div>
        <div onClick={()=>{
            setSelected(2)
            clickFunction()
            }} className="sub_navbar_div_two">
            {selected===2 ?<h1 className="sub_navbar_heading selected">Dad</h1>:<h1 className="sub_navbar_heading">Dad</h1> }
            {selected===2 && <div className="bottom"></div>}
        </div>
    </div>
);
}

export default SubNavbar;
