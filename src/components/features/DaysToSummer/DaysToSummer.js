import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  calculateDays() {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth();
    let nextSummerYear = yearNow;

    if (monthNow >= 9) {
      nextSummerYear = yearNow + 1;
    }

    const summerBegins = new Date(`06/20/${nextSummerYear}`);
    const summerEnds = new Date(`09/23/${nextSummerYear}`);
    console.log(dateNow, summerBegins);
    let textToDisplay = '';
    let daysLeft;
    if(dateNow.getTime() == summerBegins.getTime()) {
      textToDisplay = '1 day left till summer!';
    } else if (dateNow.getTime() > summerBegins.getTime() && dateNow.getTime() <= summerEnds.getTime()) {
      textToDisplay = '';
    } else {
      daysLeft = Math.ceil((summerBegins.getTime() - dateNow.getTime())/(1000*3600*24));
      textToDisplay = daysLeft + ' days left till summer!';
    }

    return textToDisplay;
  }


  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.daysToSummer}>
          {this.calculateDays()}
        </h3>
      </div>
    );
  }
}

export default DaysToSummer;
