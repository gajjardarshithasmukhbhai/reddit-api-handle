import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios'
import Api from './apicalls.js'
class Darshit extends React.Component{
render()
{
	return(
			<div>
				<h1 class="text text-center text-capitalize text-danger">I am API calling</h1>	
				<Api/>
			</div>
	);
}
}


ReactDOM.render(<Darshit/>,document.getElementById("root"));