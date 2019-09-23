import React , {Component} from 'react';

class Homepage extends Component
{
	render(){
		return(
			<homepage>
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
			 
			    <ol className="carousel-indicators">
			      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			      <li data-target="#myCarousel" data-slide-to="1"></li>
			      <li data-target="#myCarousel" data-slide-to="2"></li>
			    </ol>

			    
			    <div className="carousel-inner" role="listbox">
			      <div className="item active">
			        <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="New York" width="1200" height="700"/>
			        <div className="carousel-caption">
			          <h3>New York</h3>
			          <p>The atmosphere in New York is lorem ipsum.</p>
			        </div>      
			      </div>

			      <div className="item">
			        <img src="https://www.w3schools.com/bootstrap/chicago.jpg" alt="Chicago" width="1200" height="700"/>
			        <div className="carousel-caption">
			          <h3>Chicago</h3>
			          <p>Thank you, Chicago - A night we won't forget.</p>
			        </div>      
			      </div>
			    
			      <div className="item">
			        <img src="https://www.w3schools.com/bootstrap/la.jpg" alt="Los Angeles" width="1200" height="700"/>
			        <div className="carousel-caption">
			          <h3>LA</h3>
			          <p>Even though the traffic was a mess, we had the best time playing at Venice Beach!</p>
			        </div>      
			      </div>
			    </div>

			 
			    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			      <span className="sr-only">Previous</span>
			    </a>
			    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			      <span className="sr-only">Next</span>
			    </a>
			</div>

			<div id="band" className="container text-center">
			  <h3>THE BAND</h3>
			  <p><em>We love music!</em></p>
			  <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			  <br/>
			  <div className="row">
			    <div className="col-sm-4">
			      <p className="text-center"><strong>Name</strong></p><br/>
			      <a href="#demo" data-toggle="collapse">
			        <img src="https://www.w3schools.com/bootstrap/bandmember.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
			      </a>
			      <div id="demo" className="collapse">
			        <p>Guitarist and Lead Vocalist</p>
			        <p>Loves long walks on the beach</p>
			        <p>Member since 1988</p>
			      </div>
			    </div>
			    <div className="col-sm-4">
			      <p className="text-center"><strong>Name</strong></p><br/>
			      <a href="#demo2" data-toggle="collapse">
			        <img src="https://www.w3schools.com/bootstrap/bandmember.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
			      </a>
			      <div id="demo2" className="collapse">
			        <p>Drummer</p>
			        <p>Loves drummin</p>
			        <p>Member since 1988</p>
			      </div>
			    </div>
			    <div className="col-sm-4">
			      <p className="text-center"><strong>Name</strong></p><br/>
			      <a href="#demo3" data-toggle="collapse">
			        <img src="https://www.w3schools.com/bootstrap/bandmember.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
			      </a>
			      <div id="demo3" className="collapse">
			        <p>Bass player</p>
			        <p>Loves math</p>
			        <p>Member since 2005</p>
			      </div>
			    </div>
			  </div>
			</div>

		
			<div id="tour" className="bg-1">
			  <div className="container">
			    <h3 className="text-center">TOUR DATES</h3>
			    <p className="text-center">Lorem ipsum we'll play you some music.<br/> Remember to book your tickets!</p>
			    <ul className="list-group">
			      <li className="list-group-item">September <span className="label label-danger">Sold Out!</span></li>
			      <li className="list-group-item">October <span className="label label-danger">Sold Out!</span></li> 
			      <li className="list-group-item">November <span className="badge">3</span></li> 
			    </ul>
			    
			    <div className="row text-center">
			      <div className="col-sm-4">
			        <div className="thumbnail">
			          <img src="https://www.w3schools.com/bootstrap/paris.jpg" alt="Paris" width="400" height="300"/>
			          <p><strong>Paris</strong></p>
			          <p>Friday 27 November 2015</p>
			          <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
			        </div>
			      </div>
			      <div className="col-sm-4">
			        <div className="thumbnail">
			          <img src="https://www.w3schools.com/bootstrap/newyork.jpg" alt="New York" width="400" height="300"/>
			          <p><strong>New York</strong></p>
			          <p>Saturday 28 November 2015</p>
			          <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
			        </div>
			      </div>
			      <div className="col-sm-4">
			        <div className="thumbnail">
			          <img src="https://www.w3schools.com/bootstrap/sanfran.jpg" alt="San Francisco" width="400" height="300"/>
			          <p><strong>San Francisco</strong></p>
			          <p>Sunday 29 November 2015</p>
			          <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
			        </div>
			      </div>
			    </div>
			  </div>
			  
			
			  <div className="modal fade" id="myModal" role="dialog">
			    <div className="modal-dialog">
			    
			
			      <div className="modal-content">
			        <div className="modal-header">
			          <button type="button" className="close" data-dismiss="modal">×</button>
			          <h4><span className="glyphicon glyphicon-lock"></span> Tickets</h4>
			        </div>
			        <div className="modal-body">
			          <form role="form">
			            <div className="form-group">
			              <label ><span className="glyphicon glyphicon-shopping-cart"></span> Tickets, $23 per person</label>
			              <input type="number" className="form-control" id="psw" placeholder="How many?"/>
			            </div>
			            <div className="form-group">
			              <label ><span className="glyphicon glyphicon-user"></span> Send To</label>
			              <input type="text" className="form-control" id="usrname" placeholder="Enter email"/>
			            </div>
			              <button type="submit" className="btn btn-block">Pay 
			                <span className="glyphicon glyphicon-ok"></span>
			              </button>
			          </form>
			        </div>
			        <div className="modal-footer">
			          <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
			            <span className="glyphicon glyphicon-remove"></span> Cancel
			          </button>
			          <p>Need <a href="#">help?</a></p>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

			</homepage>
		)
	}
}

export default Homepage;

