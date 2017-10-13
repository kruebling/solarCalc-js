var moment = require('moment');

export class Mortal{
  constructor(day, month, year, gender, country){
    this.day = day;
    this.month = month;
    this.year = year;
    this.gender = gender;
    this.country = country;
    this.age = moment([this.year, this.month, this.day]).fromNow(true);
  }

  //Determines a persons age in seconds
  ageToSeconds(){
    let seconds = (this.age * 31536000);
    return seconds;
  }

  //Take two dates and determine the difference, in seconds, between the two
  calcDiff(){
    let start = this.age
    let end = moment()
  }

  //Return the age of a human in Mercury years
  mercury(){
    return (this.age * (0.24));
  }

  //Return the age of a human in Venus years
  venus(){
    return (this.age * (0.62));
  }

  //Return the age of a human in Mars years
  mars(){
    return (this.age * (1.88));
  }

  //Return the age of a human in Jupiter years
  jupiter(){
    return (this.age * (11.86));
  }

  //life expectancy

}
