import React from 'react';

const Jumbotron = () => {
    return (
        <div className="container">
            <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Fluid jumbotron</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <h3>Card title</h3>
          </div>
          <div className="card-body">
            <p className="card-text">Card content</p>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <h3>Card title</h3>
          </div>
          <div className="card-body">
            <p className="card-text">Card content</p>
          </div>
        </div>
      </div>
    );
};

export default Jumbotron;