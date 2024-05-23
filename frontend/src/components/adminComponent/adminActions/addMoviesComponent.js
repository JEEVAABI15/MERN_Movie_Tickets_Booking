import React, { Component } from 'react';

class AddMovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      releaseDate: "",
      duration: "",
      genre: "",
      theatreId: ""
    };
  }

  titleHandler = event => 
    this.setState({ 
      title: event.target.value 
  });

  descriptionHandler = event => 
    this.setState({ 
      description: event.target.value 
  });

  releaseDateHandler = event => 
    this.setState({ 
      releaseDate: event.target.value 
    });

  durationHandler = event => 
    this.setState({ 
      duration: event.target.value 
    });


  genreHandler = event => 
    this.setState({ 
      genre: event.target.value 
    });

  theatreIdHandler = event => 
    this.setState({ 
      theatreId: event.target.value 
    });

    formSubmitHandler = async event => {
      event.preventDefault();

      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found, please log in');
        return;
      }
      console.log('Token:', token); 
      console.log(this.state.title, this.state.releaseDate);
      try {
        const response = await fetch('http://localhost:8000/api/v1/movie/add', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'x-auth-token': token
          },
          body: JSON.stringify({
            title: this.state.title,
            description: this.state.description,
            releaseDate: this.state.releaseDate,
            duration: this.state.duration,
            genre: this.state.genre,
            theatreId: this.state.theatreId
          })
        });
        console.log('Response:', response);

        if (!response.ok) {
          if (response.status === 401) {
            console.error(response.status, response.statusText);
            throw new Error('Unauthorized: No token or invalid token');
          } else if (response.status === 403) {
            throw new Error('Forbidden: You do not have the required permissions');
          } else {
            throw new Error('An error occurred');
          }
        }
        
        const data = await response.json();
        console.log(data);
        alert('Movie added successfully!');
      } catch (error) {
        console.error('Error:', error);
        alert(error.message);
      }
    };

render() {
  const { title, description, releaseDate, duration, genre, theatreId } = this.state;
  return (
    <form onSubmit={this.formSubmitHandler}>
      <h3>Add Movie</h3>
      <div className='mb-3'>
        <label>Title:</label>
        <input type='text' className='form-control' placeholder='Enter movie title' value={title} onChange={this.titleHandler} required />
      </div>
      <div className='mb-3'>
        <label>Description:</label>
        <input type='text' className='form-control' placeholder='Enter movie description' value={description} onChange={this.descriptionHandler} required />
      </div>
      <div className='mb-3'>
        <label>Release Date:</label>
        <input type='date' className='form-control' value={releaseDate} onChange={this.releaseDateHandler} required />
      </div>
      <div className='mb-3'>
        <label>Duration:</label>
        <input type='number' className='form-control' placeholder='Enter movie duration in minutes' value={duration} onChange={this.durationHandler} required />
      </div>
      <div className='mb-3'>
        <label>Genre:</label>
        <input type='text' className='form-control' placeholder='Enter movie genre' value={genre} onChange={this.genreHandler} required />
      </div>
      <div className='mb-3'>
        <label>Theatre ID:</label>
        <input type='text' className='form-control' placeholder='Enter theatre ID' value={theatreId} onChange={this.theatreIdHandler} required />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary'>Add Movie</button>
      </div>
    </form>
  );
}
}

export default AddMovieComponent;
