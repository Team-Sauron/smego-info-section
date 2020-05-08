import React from 'react';

class Half extends React.Component {
  constructor(props) {
    super(props);
    const { rating, pos } = this.props;
    this.state = {
      rating, pos,
    };
  }

  render() {
    const { rating, pos } = this.state;
    return (
      <div>
        {rating > 0
          ? (
            <div>
              {pos > 0
                ? <img className="halfStar" src="http://localhost:3002/images/leftGold.png" alt="average rating as stars" />
                : <img className="halfStar" src="http://localhost:3002/images/rightGold.png" alt="average rating as stars" />}
            </div>
          )
          : (
            <div>
              {pos > 0
                ? <img className="halfStar" src="http://localhost:3002/images/leftGrey.png" alt="average rating as stars" />
                : <img className="halfStar" src="http://localhost:3002/images/rightGrey.png" alt="average rating as stars" />}
            </div>
          )}
      </div>
    );
  }
}

export default Half;
