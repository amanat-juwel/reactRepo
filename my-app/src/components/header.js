import React , {Component} from 'react';
import{
  Link
} from 'react-router-dom';

class Header extends Component
{
	render(){
		return(
			<header>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>                        
				      </button>
				      <a className="navbar-brand" href="#myPage">Logo</a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav navbar-right">
				        <li><Link to="/">HOME</Link></li>
				        <li><a href="#band">BAND</a></li>
				        <li><a href="#tour">TOUR</a></li>
				        <li><Link to="/contact">CONTACT</Link></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			</header>
		)
	}
}

export default Header;

