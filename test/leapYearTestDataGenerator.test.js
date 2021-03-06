import { expect } from "chai";
import LeapYearTestDataGenerator from "../source/leapYearTestDataGenerator";
import LeapYearsFrom2017To2161 from "./leapYearsFrom2017To2161";

describe("LeapYearTestDataGenerator", () => {
    it("shall have the ability to generate a json object for a range of years " + 
       "and identify if the year is a leap year or not", () => {
        let generator = new LeapYearTestDataGenerator();
        const startYear = 1804;
        const endYear = 1808;
        let expectedOutput = [
            {
                year: 1804,
                isLeapYear: true
            },
            {
                year: 1805,
                isLeapYear: false
            },{
                year: 1806,
                isLeapYear: false
            },{
                year: 1807,
                isLeapYear: false
            },{
                year: 1808,
                isLeapYear: true
            }
        ];

        expect(generator.generate(startYear, endYear)).to.deep.equal(expectedOutput);
    });

    it("shall return the appropriate test values for years 2017 to 2161", () => {
      let generator = new LeapYearTestDataGenerator();
        const startYear = 2017;
        const endYear = 2161;
        let expectedOutput = LeapYearsFrom2017To2161;

        expect(generator.generate(startYear, endYear)).to.deep.equal(expectedOutput);
    });
});
