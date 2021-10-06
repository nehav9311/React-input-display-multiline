import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (name) => {
    alert(`Submitted name: ${name}`);
  };

  handleChange = (e) => {
    this.setState({
      names: e.target.value
    });
  };

  render() {
    return (
      <section className="flex">
        <div className="content flex">
          <div className="sandbox flex">
            <div className="directions"></div>

            <form id="nameForm" className="names flex">
              <div className="form-group">
                <TextField
                  variant="filled"
                  id="names"
                  name="hard"
                  value={this.state.names}
                  onChange={this.handleChange}
                  wrap="hard"
                  multiline
                />
              </div>
            </form>

            <div className="nametags flex">
              <div className="nametags-group flex">
                {this.state.names
                  .split("\n")
                  .filter((n) => n) // to filter out empty names
                  .map((name, index) => (
                    <div
                      key={index}
                      type="button"
                      className="nametag"
                      onClick={() => this.handleSubmit(name)}
                    >
                      {name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
