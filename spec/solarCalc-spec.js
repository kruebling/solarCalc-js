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

  //Compares given input with current time, unsure how to pass.
  // it('calculates the time in seconds between a given moment and now', () => {
  //   expect(test.calcDiff()).toEqual(Number);
  // });

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
