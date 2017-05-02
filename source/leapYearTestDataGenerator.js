import Year from "./year";

class LeapYearTestDataGenerator {
    generate(startYear, endYear) {
        let output = []; 

        for (let year = startYear; year <= endYear; year += 1) {
            let y = new Year(year);
            
            output.push({
                year: y.year,
                isLeapYear: y.isLeapYear()
            });
        }

        return output;
    }
}

export default LeapYearTestDataGenerator;