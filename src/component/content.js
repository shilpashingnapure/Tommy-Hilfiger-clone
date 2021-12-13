import React,{useEffect} from 'react'
import '../App.css';
import img2 from "../imges/img2.jpg"
import AOS from "aos"
function Content(props){
	useEffect(() => {
	  AOS.init({
	    duration : 2000
	  });
	}, []);
	
	return (
		
		<div className="Large_img_container">
			<div className="Large-img" >
				<img src={props.images} data-aos="zoom-out"/>
			</div>
			<div className="Decription">
				<div className="Decription_box" >
					<h2>{props.h2}</h2>
					<p>{props.p}</p>
					<div className="btn btn--blue btn--ghost">
						<span className="btn_text">{props.button}</span>
					</div>
				</div>
			</div>
		</div>

		)
}

export default Content;