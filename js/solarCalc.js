export class Calc{
  constructor(birthday, age, gender,){
    this.birthday = birthday;
    this.gender = gender
    this.age = age;
  }

  //Take a person’s age in years and convert it into seconds.
  convertSeconds(years){
    let years = (years * 31536000);
    return years;
  }

  //Take two dates and determine the difference, in seconds, between the two
  calc_diff(){
    let start = moment(this.birthday);
    let end = moment()
    var difference = moment.duration(start.diff(end));
    var seconds = duration.asSeconds();
    return seconds;
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

}
