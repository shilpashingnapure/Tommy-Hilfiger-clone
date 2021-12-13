import React from 'react'
import '../App.css'
import logo from "../imges/th-logo-white.svg" 
function Footer(){
	return (
	<div className="footer">
		<div>
			<div className="logo">
				<img src={logo}/>
				<div className="Location">
					<select>
					<option>Change Location</option>
					</select>
				</div>
			</div>
			<div className="footer--dec">
				<table>
					<thead>
						<tr>
							<th>Collection</th>
							<th>About us</th>
							<th>Press Release</th>
							<th>Follow us</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Overview</td>
							<td>Overview</td>
							<td>Overview</td>
							<td>Facebook</td>
						</tr>
						<tr>
							<td>Women</td>
							<td>Biography</td>
							<td>Press Contacts</td>
							<td>Twitter</td>
						</tr>
						<tr>
							<td>Men</td>
							<td>Management</td>
							<td></td>
							<td>Instagram</td>
						</tr>
						<tr>
							<td>Tommy Jeans</td>
							<td>Sustainability</td>
							<td><b>Careers</b></td>
							<td>YouTube</td>
						</tr>
						<tr>
							<td>Kids</td>
							<td>Brands</td>
							<td>Overview</td>
							
						</tr>
						<tr>
							<td>Tommy x Kimsoohyun</td>
							<td>Retail Stores</td>
							<td></td>
							
						</tr>
						<tr>
							<td></td>
							<td>Brand proteciton</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div className="footer--end">
			<div>
				Tommy Hilfiger Licensing, LLC. All 
				rights reserved 2021
			</div>
			<div>
				<ul className ="List-of-policy">
					<li>Privacy Policy</li>
					<li>Cookie Policy</li>
					<li>Terms of Use</li>
				</ul>
			</div>
		</div>
	</div>
	)
}

export default  Footer;