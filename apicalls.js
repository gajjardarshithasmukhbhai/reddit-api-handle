import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios'

//api calling of the website https://www.reddit.com/r/space.json
class Api extends React.Component{
	componentWillMount()
	{
		this.reddit();
	}
	constructor(props)
	{
		super(props);
		this.state={
			posts:[],
			subr:'space'
		}
		this.reddit=this.reddit.bind(this);
	}
	reddit()
	{
		axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
		.then(rew=>{
			const post=rew.data.data.children.map(wer=>wer.data);
			this.setState({
				posts:post,
			})
		})
	}
render()
{
	return(
			<div>
				<ul>
				
					{
						this.state.posts.map(data=>
							<li key={data.id}>{data.title}</li>
						)
					}
				</ul>
			</div>
	);
}
}

export default Api;