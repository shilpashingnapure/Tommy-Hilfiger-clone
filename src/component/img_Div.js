import React from 'react'
import '../App.css'
import img5 from '../imges/img5.jpg'
function Img_Div(){
	return (
		<div>
			<div className="Big-img">
				<img src={img5} width="100%" height="100%"/>
				<h1>FOR KIDS</h1>
			</div>
			<div className="Kid-section">
				<div>
					<p>
						Make sure the kids always look and feel their best. 
						Our take on festive favorites is sure to beat the winter blues.
					</p>
					<div className="btn btn--blue btn--ghost">
						<span className="btn_text">explor</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Img_Div;