import React from 'react'
import '../App.css';
import img7 from '../imges/img7.jpg'
function About(props){
	return (
		<div className="About-us">
			<h1 className={props.class}>ABOUT US</h1>
			<div>
				<div className="About-us--1">
					<p>
						{props.p}
					</p>
					<button>{props.button}</button>

				</div>
				<div>
					<img src={props.img} width="100%" height="100%"/>
					
				</div>
			</div>
		</div>
		)
}

export default About;