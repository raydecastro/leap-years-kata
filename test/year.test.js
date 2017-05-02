import { expect } from "chai";
import Year from "../source/year";

describe("Year", () => {
    it("shall have ability to check if a year is a leap year", () => {
        let year = new Year(1804);

        expect(year.isLeapYear()).to.be.true;
    });

    it("shall return true for isLeapYear() method when year = 1808", () => {
        let year = new Year(1808);

        expect(year.isLeapYear()).to.be.true;
    });

    it("shall return false for isLeapYear() method when year = 1805", () => {
        let year = new Year(1805);

        expect(year.isLeapYear()).to.be.false;
    });
})