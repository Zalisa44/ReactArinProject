import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  // static defaultProps={
  //   cardTitle:'Default card title'
  // }
  render() {
    return (
      <div className="card w-100">
        <img src={this.props.pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cartText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  cardTitle: "Default title",
};

Card.propTypes = {
  children: PropTypes.element,
};

export default Card;
