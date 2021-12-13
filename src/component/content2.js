import React from 'react'
import '../App.css';
import img3 from "../imges/img3.jpg"
import img4 from "../imges/img4.jpg"
function Content2(){
	return (
		
		<div className="Large2_img">
				<div className="Seasonal_div">
					<h1>SEASONAL HIGHLIGHTS</h1>
				</div>
				<div className="Imgs_div">
					<div className="big_img--1">
						<img src={img3} />
						<div>
							<div className="btn--2 btn--white">
								<span className="btn--2_text">discover women's</span>
							</div>
						</div>
					</div>
					<div className="big_img--2">
						<img src={img4} />
						<div>
							<div className="btn--2 btn--white">
								<span className="btn--2_text">discover men's</span>
							</div>
						</div>
					</div>
				</div>
		</div>

		)
}

export default Content2;