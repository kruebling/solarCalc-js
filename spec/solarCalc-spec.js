import { Mortal } from './../js/solarCalc.js'

describe('Mortal', () => {

  //day, month, year, gender, country
  it('creates a new mortal and calculates its age', () => {
    let keegan = new Mortal(1, 2, 1992, 'male', 'U.States');
    expect(keegan.age).toEqual(25)
  });
});
