import React from "react";
import './Hero.css'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'


 const Hero = () =>{
   
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter h-container">
                <div className=" flexColCenter hero-left">
                    <div className="hero-title">
                        <div className="oc"></div>
                        <motion.h1
                            initial={{y: "2rem", opacity: 0}}
                            animate={{y:0, opacity: 1}}
                            transition={{
                                duration: 4,
                                type: "spring"
                            }}
                        >
                            Discover <br />Most Suitable <br />Property
                        </motion.h1>
                    </div>
                    <div className=" flexColCenter hero-dis">
                        <span className="secondaryText">Find a variety of properties that suit ou very easily</span>
                        <span className="secondaryText">Forget all difficulties in finding a Resedencies for you</span>
                    </div>
                    <div className=" flexCenter searchbar">
                       <input type="text" />
                       <button className="btn">Search</button>
                    </div>
                    <div className="flexCenter states">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premimum Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Costumer</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={30}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award winning</span>
                        </div>
                    </div>
                </div>


                <div className=" flexCenter hero-right">
                   <motion.div 

                   initial={{x: "7rem" , opacity:0}}
                   animate={{x: 0, opacity: 1}}
                   transition={{
                    duration:2,
                    type:"ease-in"
                   }}
                   className="imageContainer">
                    <img src="./hero-image.png" alt="" />
                   </motion.div>
                </div>
            </div>
        </section>
    )
}
export default Hero