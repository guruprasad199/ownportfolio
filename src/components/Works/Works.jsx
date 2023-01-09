import React, { useContext } from "react";
import "./Works.css";
import Shopify from "../../img/Shopify.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked for All these
          </span>
          <span>Brands & Clients</span>
          <spane style={{fontSize:'19px'}}>
            Worked on react js in Deqode solutions, Block chain, Coforge and few own projects 
            <br />
             Some backend work on Node js
            <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSsA8ITobiSzaibKNo6MxSerFRguSSpyKNtEpZMYf-SIgaKND7ueaNnzcWZFBCR0an-Q&usqp=CAU"} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width:'200px', height:'200px', borderRadius:'50%'}} src={"https://t3.ftcdn.net/jpg/02/26/79/92/360_F_226799287_8n8CvXnx7aiLeroZvyCbIrIntDSUkkDj.jpg"} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={"https://www.allstarstrader.com/_next/static/media/astHomeLogo.a976e419.svg"} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width:'200px', height:'200px', borderRadius:'50%'}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujjYoWn5Pv8g1tuuE0UjwGk0PSGV3AVKz_dTDbALZ6w&s"} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
