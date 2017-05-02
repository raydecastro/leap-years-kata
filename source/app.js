import LeapYearTestDataGenerator from "./leapYearTestDataGenerator";

class App {
    constructor() {
        this.generator = new LeapYearTestDataGenerator();
    }

    run(startYear, endYear) {
        let testData = this.generator.generate(startYear, endYear);
        return testData;
    }
}

let app = new App();
let startYear = process.argv[2];
let endYear = process.argv[3];

app.run(startYear, endYear);

export default App;