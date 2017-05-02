import Year from "./year";

class LeapYearTestDataGenerator {
    generate(startYear, endYear) {
        let output = []; 
        let y = new Year();
        for (let year = startYear; year <= endYear; year += 1) {
            y.year = year;
            
            output.push({
                year: y.year,
                isLeapYear: y.isLeapYear()
            });
        }

        return output;
    }
}

export default LeapYearTestDataGenerator;