class Year {
    constructor(year) {
        this.year = year;
    }

    isLeapYear() {
        return (this.isDivisibleBy4() && !this.isDivisibleBy100() || this.isDivisibleBy400());
    }

    isDivisibleBy4() {
        const FOUR = 4; 
        return this.year % FOUR === 0;
    }

    isDivisibleBy100() {
        const ONE_HUNDRED = 100;
        return this.year % ONE_HUNDRED === 0; 
    }

    isDivisibleBy400() {
        const FOUR_HUNDRED = 400; 
        return this.year % FOUR_HUNDRED === 0;
    }
}

export default Year;
