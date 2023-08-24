import React, { useState } from "react";
import background from "C:/Users/MY-PC/Desktop/ReactApp/react-app/src/images/background.jpg";

export default function Testform(props) {
  const upcase = () => {
    let txt = text.toUpperCase();
    inpb(txt);
  };
  const lwcase = () => {
    let txt = text.toLowerCase();
    inpb(txt);
  };
  const cleartxt = () => {
    inpb("");
  };
  const handleval = (event) => {
    inpb(event.target.value);
  };
  const [copy, copytxt] = useState("copy");
  const copytext = () => {
    navigator.clipboard.writeText(text);
    copytxt("copied!");
    setInterval(() => {
      copytxt("copy");
    }, 2500);
  };
  const [text, inpb] = useState("");
  return (
    <div>
      <div className="container background">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <h2 className="form-label my-4">{props.title}</h2>
              <textarea
                className="form-control my-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter Your Text Here"
                value={text}
                onChange={handleval}
              ></textarea>
              <div className="counter">
                <p>
                  {text.split(" ").length} Words and {text.length} Character
                </p>
              </div>
              <div className="convert-button">
                <button className="btn btn-secondary my-3" onClick={upcase}>
                  Convert To Upper Case
                </button>
                <button
                  className="btn btn-secondary my-3 mx-2"
                  onClick={lwcase}
                >
                  Convert To Lower Case
                </button>
                <button
                  className="btn btn-secondary my-3 mx-2"
                  onClick={cleartxt}
                >
                  Clear Text
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Preview</h2>
            <textarea
              className="form-control txtarea my-3"
              rows="3"
              value={text}
              disabled
            ></textarea>
            <button className="copybtn my-3 mx-2" onClick={copytext}>
              {copy}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
