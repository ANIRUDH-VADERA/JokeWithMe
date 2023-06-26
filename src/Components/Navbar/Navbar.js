import React,{useState} from 'react';
import "./Navbar.css"
import FaceIcon from '@mui/icons-material/Face';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';

function Navbar() {
  
    const [hover,setHover] = useState(true);
  
    return (
    <div className="navbar">
        <div className="navbar_main">
            <h1 className="navbar-heading">Lola<span className="heading_span">Pox</span></h1>
            <div className="navbar-icon"  onMouseEnter = {()=>{setHover(false)}} onMouseLeave = {()=>{setHover(true)}}>
                {hover ? <FaceIcon fontSize="large"/> : <FaceRetouchingOffIcon fontSize="large" />}
            </div>

        </div>
    </div>
);
}

export default Navbar;
