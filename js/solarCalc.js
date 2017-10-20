var moment = require('moment');

export class Mortal{
  constructor(day, month, year, age, gender){
    this.day = day;
    this.month = month;
    this.year = year;
    this.start = new Date(this.year, this.month, this.day);
    this.seconds = 0;
    this.age = age;
    this.expectancy = 0;
    this.gender = gender;
  }

  //Determines a persons age in seconds
  ageToSeconds(){
    let seconds = Math.floor(this.age * 31536000);
    return seconds;
  }

  //Take two dates and determine the difference, in seconds, between the two
  calcDiff(){
    let end = Date.parse(moment().format())/1000;
    let start = Date.parse(this.start)/1000;
    this.seconds = end - start;
    return this.seconds;
  }

  //Return the age of a human in Mercury years
  mercury(){
    let mercAge = (this.age / (0.24)).toFixed(2);
    return mercAge;
  }

  //Return the age of a human in Venus years
  venus(){
    let venAge = (this.age / (0.62)).toFixed(2);
    return venAge;
  }

  //Return the age of a human in Mars years
  mars(){
    let marsAge = (this.age / (1.88)).toFixed(2);
    return marsAge;
  }

  //Return the age of a human in Jupiter years
  jupiter(){
    let jupAge = (this.age / (11.86)).toFixed(2);
    return jupAge;
  }

  //life expectancy
  lifeExpectancy(){
    if ((this.gender == 'male') && (this.age < 81)){
      this.expectancy = (81 - this.age);
      return this.expectancy;
    }else if ((this.gender == 'female') && (this.age < 78)) {
      this.expectancy = (78 - this.age);
      return this.expectancy;
    }else {
      return "Congratulations! You're older than the life expectancy for your gender!";
    }
  }
}
