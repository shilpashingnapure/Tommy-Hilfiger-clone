import React from 'react'
import '../App.css';
import img8 from '../imges/img8.jpg'
function Careers(){
	return (
		<div className="Careers-section">
			<h1>TOMMY HILFIGER CAREERS</h1>
			<div className="Careers-section--1">
				<img src={img8}/>
			</div>	

			<div className="Careers-section--2">
				<div>
					<p>
						Tommy Hilfiger employs over 17,000 associates spread across more than 90 
						countries worldwide. They come from all walks of life and actively 
						promote a diverse culture that champions outspoken individuality and 
						uncompromised creativity.
					</p>
					<div className="btn btn--blue btn--ghost">
						<span className="btn_text">discover careers</span>
					</div>
					
				</div>
			</div>	

		</div>
		)
}

export default Careers;