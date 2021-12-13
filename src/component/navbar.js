import React,{useState} from 'react'
import '../App.css'
import brand from '../imges/th-logo.svg'
function Navbar(){
	const [crossIcon , set_crossIcon] = useState(false) 

	function Icon_cross(){
		// e.preventDefault();
		console.log(crossIcon)
		set_crossIcon(!crossIcon)
	}
	return (
		<div className="navbar">
			<div className="flex nav_lst">
				<div onClick={Icon_cross} className = {crossIcon ? 'icon_bar icon_cross' : 'icon_bar'}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div>Collection</div>
				<div>About us</div>
				<div>Press Release</div>
				<div>Careers</div>

			</div>
			<div className="nav_logo">
				<img className="img_logo" src={brand} width="50%"/>
			</div>
			<div className="flex search">

				<div>Find a store</div>
				<div></div>
				<div>
					<svg class="search__icon" width="13px" height="13px" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                		<g fill="#9D9D9D">
                    	<path d="M5.6651,10.3286 C3.0931,10.3286 1.0001,8.2366 1.0001,5.6646 C1.0001,3.0926 3.0931,1.0006 5.6651,1.0006 C8.2371,1.0006 10.3301,3.0926 10.3301,5.6646 C10.3301,8.2366 8.2371,10.3286 5.6651,10.3286 L5.6651,10.3286 Z M12.9091,12.2016 L10.0051,9.2976 C10.8311,8.3126 11.3301,7.0466 11.3301,5.6646 C11.3301,2.5416 8.7891,0.0006 5.6651,0.0006 C2.5411,0.0006 0.0001,2.5416 0.0001,5.6646 C0.0001,8.7876 2.5411,11.3286 5.6651,11.3286 C7.0471,11.3286 8.3141,10.8306 9.2981,10.0046 L12.2021,12.9086 L12.9091,12.2016 Z"></path>
                		</g>
            		</svg>
				</div>
			</div>
		</div>
	)
}
export default Navbar;