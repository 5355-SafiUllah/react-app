import React from "react";
import contactimg from "C:/Users/MY-PC/Desktop/ReactApp/react-app/src/images/contactimg.png";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={contactimg} width={450} />
          </div>
          <div className="col-sm-6">
            <form>
              <h2>We Are Here To Help You!</h2>
              <div class="form-group">
                <label className="my-3">Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Name"
                />
                <label className="my-3">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
                <br />
                <label className="my-3">Your Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-info">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
