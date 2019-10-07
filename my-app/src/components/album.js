import React from 'react';

import axios from 'axios';

export default class Album extends React.Component {
	
  state = {
    images: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <React.Fragment>  
      	<div className="container">
        	<h3 className="text-center">ALBUM</h3>
    	      <ul>
    	        { this.state.images.map(image => <li>{image.title} <img src={image.thumbnailUrl} /></li>)}
    	      </ul>
  	    </div>
      </React.Fragment>  
    )
  }
}