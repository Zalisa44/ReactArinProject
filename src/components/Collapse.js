import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
  }

  changeContetent = () => {
    this.setState({
      showContent: !this.state.showContent,
    });
  };
  render() {
    return (
      <div>
        <p>
          <button
            className="btn btn-primary w-100"
            onClick={this.changeContetent}
          >
            Link with href
          </button>
        </p>
        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
