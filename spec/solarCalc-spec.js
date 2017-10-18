import { Mortal } from './../js/solarCalc.js';

describe('Mortal', () => {
  let test;
  beforeEach(() => {
    test = new Mortal(1, 2, 1992, 25);
  });

  //day, month, year, gender, country
  it('creates a new mortal', () => {
    expect(test.age).toEqual(25);
  });

  it('calculates the mortals age in seconds', () => {
    expect(test.ageToSeconds()).toEqual(788400000);
  });

  it('calculates the time in seconds between two given moments', () => {
    let start = {year:1992, month:2, day:1};
    let end = {year:2017, month:10, day:16};
    expect(test.calcDiff(start, end)).toEqual(811382400);
  });

  it('converts a mortals age from Earth years to Mercury years', () => {
    expect(test.mercury()).toEqual(6.00);
  });

  it('converts a mortals age from Earth years to Venus years', () => {
    expect(test.venus()).toEqual(15.50);
  });

  it('converts a mortals age from Earth years to Mars years', () => {
    expect(test.mars()).toEqual(47.00);
  });

  it('converts a mortals age from Earth years to Jupiter years', () => {
    expect(test.jupiter()).toEqual(296.50);
  });
});
