import React from "react";
import addicon from './images/addicon.png'

function Addmovies() {

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="card1">
        <div className="header1">
          <div className="container">
            <div className="row">
              <div className="col-1">
                <button class="btn btn-primary">Back</button>
              </div>
              <div className="col">
                <h6>Add a New Movie</h6>
                <h5> Rohini Theater</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="body1">
          <div className="container">
            <div className="row">
              <div className="col">
                <h6>Screen Name</h6>
                <input type="text" class="form-control" placeholder="Enter the Screen Name" />
              </div>
              <div className="col">
                <h6>Morning Show Time</h6>
                <input type="text" class="form-control" placeholder="Enter the Morning Show Time" />
              </div>
            </div><br />
            <div className="row">
              <div className="col">
                <h6>Movie Name</h6>
                <input type="text" class="form-control" placeholder="Enter the Movie name" />
              </div>
              <div className="col">
                <h6>Afternoon Show Time</h6>
                <input type="text" class="form-control" placeholder="Enter the Afternoon Show Time" />
              </div>
            </div><br />
            <div className="row">
              <div className="col">
                <h6>Movie Released Date</h6>
                <input type="date" class="form-control" placeholder="Enter the Movie Released Date" />
              </div>
              <div className="col">
                <h6>Evening show time</h6>
                <input type="text" class="form-control" placeholder="Enter the Evening show time" />
              </div>
            </div><br />
            <div className="row">
              <div className="col">
                <h6>Number Of Shows per Day</h6>
                <input type="text" class="form-control" placeholder="Enter the Number Of Shows per Day" />
              </div>
              <div className="col">
                <h6>Night show time</h6>
                <input type="text" class="form-control" placeholder="Enter the Night show time" />
              </div>
            </div><br />
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <h6>Cost of First Class Ticket</h6>
                    <input type="text" class="form-control" placeholder="Enter the Cost of First Class Ticket" />
                  </div>
                </div><br />
                <div className="row">
                  <div className="col">
                    <h6>Cost of Second Class Ticket</h6>
                    <input type="text" class="form-control" placeholder="Enter the Cost of Second Class Ticket" />
                  </div>
                </div><br />
                <div className="row">
                  <div className="col">
                    <h6>Cost of Last Class Ticket</h6>
                    <input type="text" class="form-control" placeholder="Enter the Cost of Last Class Ticket" />
                  </div>
                </div>
              </div>
              <div className="col">
                <h6>Add Poster</h6>
                <input type="file" id="upload" hidden /><br />
                <div className="card2 text-center" >
                  <label style={{ textAlign: "center" }} for="upload" ><img src={addicon} alt="" height="30px" /></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer1">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-2">
                <button className="btn btn-primary"> Cancel</button>
              </div>
              <div className="col-2">
                <button className="btn btn-primary"> Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Addmovies;