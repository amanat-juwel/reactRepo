import React , {Component} from 'react';
import{
  NavLink
} from 'react-router-dom';

const style = {
	color: 'red',
	fontWeight: 'bold'
}

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
				        <li><NavLink activeStyle={style} to="/">HOME</NavLink></li>
				        <li><a href="#band">BAND</a></li>
				        <li><a href="#tour">TOUR</a></li>
				        <li><NavLink activeStyle={style}  to="/contact">CONTACT</NavLink></li>
				        <li><NavLink activeStyle={style}  to="/register">REGISTER</NavLink></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			</header>
		)
	}
}

export default Header;

