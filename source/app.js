import LeapYearTestDataGenerator from "./leapYearTestDataGenerator";

class App {
    constructor() {
        this.generator = new LeapYearTestDataGenerator();
    }

    run(startYear, endYear) {
        console.log("start: " + startYear + " end: " + endYear);
        let testData = this.generator.generate(startYear, endYear);
        return testData;
    }
}

let app = new App();
let startYear = process.argv[4];
let endYear = process.argv[5];

app.run(startYear, endYear);

export default App;