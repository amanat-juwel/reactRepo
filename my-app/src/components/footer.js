import React , {Component} from 'react';

class Footer extends Component
{
	render(){
		return(
			<footer className="text-center">
			  <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
			    <span className="glyphicon glyphicon-chevron-up"></span>
			  </a>
  			  <p>COPYRIGHT 2019</p> 
			</footer>
		)
	}
}

export default Footer;

