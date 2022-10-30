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
    console.log(this.props.children);
    return (
      <div>
        <p>
          <button
            className="btn btn-primary w-100"
            onClick={this.changeContetent}
          >
            {/* {this.props.children.props.cardTitle} */}
            {React.Children.map(
              this.props.children,
              (child) => child.props.cardTitle
            )}
          </button>
        </p>
        {this.state.showContent ? (
          <div className="collapse show">
            {React.Children.map(this.props.children, (children) => children)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
