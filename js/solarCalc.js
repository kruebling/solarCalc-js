export class Calc{
  constructor(birthday, age, gender, country){
    this.birthday = birthday;
    this.gender = gender
    this.age = age;
    this.country = country;
  }

  //Take a person’s age in years and convert it into seconds.
  convertSeconds(years){
    let years = this.age;
    let seconds = (years * 31536000);
    return years;
  }

  //Take two dates and determine the difference, in seconds, between the two
  calc_diff(date){
    let day = (day * 86400);
    let month = (day * month);
    let year = (year)
  }

  //Return the age of a human in Mercury years
  mercury(){
    return this.age * .24
  };

  //Return the age of a human in Venus years
  venus(){
    return this.age * .62
  };

  //Return the age of a human in Mars years
  mars(){
    return this.age * 1.88
  };

  //Return the age of a human in Jupiter years
  jupiter(){
    return this.age * 11.86
  };

  //life expectancy

}
