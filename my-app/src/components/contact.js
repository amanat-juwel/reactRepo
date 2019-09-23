import React , {Component} from 'react';

class Contact extends Component
{
	render(){
		return(
			<contact>
				<div id="contact" className="container">
				  <h3 className="text-center">Contact</h3>
				  <p className="text-center"><em>We love our fans!</em></p>

				  <div className="row">
				    <div className="col-md-4">
				      <p>Fan? Drop a note.</p>
				      <p><span className="glyphicon glyphicon-map-marker"></span>Chicago, US</p>
				      <p><span className="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
				      <p><span className="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p>
				    </div>
				    <div className="col-md-8">
				      <div className="row">
				        <div className="col-sm-6 form-group">
				          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
				        </div>
				        <div className="col-sm-6 form-group">
				          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
				        </div>
				      </div>
				      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
				      <br/>
				      <div className="row">
				        <div className="col-md-12 form-group">
				          <button className="btn pull-right" type="submit">Send</button>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
			</contact>
		)
	}
}

export default Contact;

