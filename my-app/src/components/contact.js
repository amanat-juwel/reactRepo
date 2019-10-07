import React , {Component} from 'react';

class Contact extends Component
{
	constructor(props) {
	    super(props);
	    this.state = {
	    	contactInfo:{
	    		'address':'Chicago, USA',
	    		'phone': "+00 1515151515",
	    		'email': "mail@mail.com"
	    	},
	    	pagename: "CONTACT"
	    };
	}
	changeAddress = () => {
	    this.setState({
	    	contactInfo:{address: "New york, USA"},
	    	pagename: 'Message Sent Successfully'
	    });
	}
	render(){
		return(
			<React.Fragment>  
				<div id="contact" className="container">
				  <h3 className="text-center">{ this.state.pagename }</h3>
				  <p className="text-center"><em>We love our fans!</em></p>

				  <div className="row">
				    <div className="col-md-4">
				      <p>Fan? Drop a note.</p>
				      <p><span className="glyphicon glyphicon-map-marker"></span>{ this.state.contactInfo.address }</p>
				      <p><span className="glyphicon glyphicon-phone"></span>Phone: { this.state.contactInfo.phone }</p>
				      <p><span className="glyphicon glyphicon-envelope"></span>Email: { this.state.contactInfo.email }</p>
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
				          <button className="btn pull-right" type="submit" onClick={this.changeAddress}>Send</button>
				        </div>
				      </div>
				      
				    </div>
				  </div>
				</div>
			</React.Fragment> 
		)
	}
}

export default Contact;

