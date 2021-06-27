import React from 'react';
import styles from './HappyHourAd.scss';

import PropTypes from 'prop-types';


export class HappyHourAd extends React.Component {
  constructor(){
    super();
    setInterval(() => {
      this.forceUpdate();
    } , 1000);

  }
  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  getTimeLeft() {
    const currentTime = new Date();
    let description;
    if(currentTime.getHours() >= 12 && currentTime.getHours() < 13) {
      description = this.props.promoDescription;
    } else {
      description = this.getCountdownTime();
    }
    return description;
  }

  render() {
    console.log(this.props);
    const {title} = this.props;

    return(
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>
          { this.getTimeLeft() }
        </div>
      </div>
    );
  }
}
HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;
