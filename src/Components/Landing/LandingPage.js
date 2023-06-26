import "./LandingPage.css"
import React, { useState,useEffect } from 'react';
import SubNavbar from '../Navbar/SubNavbar.js'
import Box from "../Box/Box.js"
import gif1 from "../images/gif1.gif"
import gif2 from "../images/gif2.gif"
import gif3 from "../images/gif3.gif"
import gif4 from "../images/gif4.gif"
import gif5 from "../images/gif5.gif"
import img_1 from "../images/img_1.jpg"
import axios from "axios";
function LandingPage() {

  const [selected, setSelected] = useState(1);
  const [gif,setGif] = useState(0);
  const [Class,setClass] = useState("main_content_img");
  const [showdelievery,setShowdelievery] = useState(false);
  const [timesclicked,setTimesclicked] = useState(0);
  const [jokes,setJokes] = useState(0);
  const [isPending, setIsPending] = useState(true);
  const [error,setError] = useState(null);

  const fetchData = async () => {
      try {
        var results = ""
          results = await axios("https://v2.jokeapi.dev/joke/Any", {
              params: {
                type : "twopart"
              }
          });
          setJokes(results);
          setIsPending(false); 
      }
      catch (err) {
        setError(err);
      }
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = ()=> {
      setTimesclicked((prevValue)=>{return(prevValue+1)});
      setShowdelievery(true); 
      timesclicked===1 && setIsPending(true);
      timesclicked===1 && setTimesclicked(0)
      timesclicked===1 && setShowdelievery(false);
      timesclicked===1 && fetchData();
      if(selected===1)
      {
        var rndInt = Math.floor(Math.random() * 3) + 1
      }
      else
      {
        rndInt = Math.floor(Math.random() * 2) + 1
        rndInt = rndInt + 3
      }
      if(rndInt===1)
      {
        setGif(1);
      }
      else if(rndInt===2)
      {
        setGif(2);
      }
      else if(rndInt===3) 
      {
        setGif(3);
      }
      else if(rndInt===4) 
      {
        setGif(4);
      }
      else if(rndInt===5) 
      {
        setGif(5);
      }

  }

  const handleClick2 = ()=> {
    setTimesclicked(0);
    setShowdelievery(false);
    setIsPending(true);
    fetchData();
    if(selected===1)
    {
      var rndInt = Math.floor(Math.random() * 3) + 1
    }
    else
    {
      rndInt = Math.floor(Math.random() * 2) + 1
      rndInt = rndInt + 3
    }
    if(rndInt===1)
    {
      setGif(1);
    }
    else if(rndInt===2)
    {
      setGif(2);
    }
    else if(rndInt===3) 
    {
      setGif(3);
    }
    else if(rndInt===4) 
    {
      setGif(4);
    }
    else if(rndInt===5) 
    {
      setGif(5);
    }
  }

  return (
    <div className="LandingPage">
      <SubNavbar clickFunction={handleClick2} selected={selected} setSelected={setSelected} />
      <div className="main_content">
        <Box  
        clickFunction={handleClick}
        isError = {error} Pending={isPending} data={jokes} delievery={showdelievery} />
        <div className="img_div">
          {gif===0 &&  <img alt="gif" className={Class} src={img_1} />}
          {gif===1 &&  <img alt="gif" className={Class} src={gif1} />}
          {gif===2 &&  <img alt="gif" className={Class} src={gif2} />}
          {gif===3 &&  <img alt="gif" className={Class} src={gif3} />}
          {gif===4 &&  <img alt="gif" className={Class} src={gif4} />}
          {gif===5 &&  <img alt="gif" className={Class} src={gif5} />}
          <h1 onClick={()=>{handleClick()}} className="img_heading">Click Me</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
