import { expect } from "chai";
import App from "../source/app";

describe("App", () => {
    it("shall have the ability to generate a json object for a range of years " + 
       "and identify if the year is a leap year or not", () => {
        let app = new App();
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

        expect(app.run(startYear, endYear)).to.deep.equal(expectedOutput);
    });
});
