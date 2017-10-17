var moment = require('moment');

export class Mortal{
  constructor(day, month, year, age, gender, country){
    this.day = day;
    this.month = month;
    this.year = year;
    this.age = age;
    this.gender = gender;
    this.country = country;
  }

  //Determines a persons age in seconds
  ageToSeconds(){
    let seconds = Math.floor(this.age * 31536000);
    return seconds;
  }

  //Take two dates and determine the difference, in seconds, between the two
  calcDiff(start, end){
    start = new Date(start.year, start.month, start.day, 0, 0, 0, 0);
    end = new Date(end.year, end.month, end.day, 0, 0, 0, 0);
    return Math.abs((start.getTime() - end.getTime()) / 1000);
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
