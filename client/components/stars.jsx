import React from 'react';
import Half from './halfStar';
import styles from '../styles.css';


class Stars extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      product,
    };
  }

  render() {
    const { product } = this.state;
    let rating = product.Rating;
    const ratingArr = new Array(10).fill(0);
    for (let i = 0; i < ratingArr.length; i += 1) {
      ratingArr[i] = rating;
      rating -= 0.5;
    }
    const left = [];
    const right = [];
    for (let j = 0; j < ratingArr.length; j += 1) {
      if (j % 2 === 0) {
        left.push(ratingArr[j]);
      } else {
        right.push(ratingArr[j]);
      }
    }
    rating = [left, right];

    return (
      <div className={`${styles.stars}`}>
        {rating[0].map((each, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={`${styles.star}`} key={`${product.ID}${idx}`}>
            <Half className={`${styles.halfStar}`} key={`${product.ID}a`} rating={rating[0][idx]} pos={1} />
            <Half className={`${styles.halfStar}`} key={`${product.ID}b`} rating={rating[1][idx]} pos={0} />
          </div>
        ))}
      </div>
    );
  }
}

export default Stars;
