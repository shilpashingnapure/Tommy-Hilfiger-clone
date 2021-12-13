import React,{useEffect} from 'react'
import '../App.css';

function Header(){

	
	return (
		<div>
			<div className="header">
				<div className="header__text">
					<h1 className="bigger-text">TOMMY HILFIGER</h1>
					<p>
						A globally-renowned designer fashion brand with an ever-optimistic take on iconic pop culture and classic American-<br/>
						cool styles, celebrated for premium and iconic designs.
					</p>
				</div>
			</div>
			<div className="text">
				<div>
					<p>
						The chilly weather is here to stay. But winter woes
						are a thing of the past with our latest collection filled with festive outfits,
						the softest snuggle-worthy items,
						and cold-climate classics. 
					</p>
				</div>
			</div>
		</div>
		)
}

export default Header;