document.addEventListener('DOMContentLoaded', () => {
    const input = [];
    const output = {};

    const getInput = document.getElementById("input");
    getInput.addEventListener('click', () => {
        let getInputValues = prompt("Please enter in your grades separated by commas");
        if (!getInputValues){
            alert("No input was provided");
            return;
        }
        const grades = getInputValues.split(',').map(grade => parseFloat(grade.trim()));
        input.push(...grades);
    });

    const gradeAnalyzer = document.getElementById("gradeAnalyzer");
    gradeAnalyzer.addEventListener('click', () => {
        let sum = 0;
        let total = 0;

        // this finds the total 
        for (let i = 0; i < input.length; i++) {
            total += parseFloat(input[i]);
        }
        // this finds the average grade
        for (let i = 0; i < input.length; i++) {
            sum += parseFloat(input[i]);
        }
        let averageGrade = sum / input.length;

        // this finds the highest grade
        highestGrade = Math.max(...input);

        // this finds the lowest grade
        lowestGrade = Math.min(...input);

        // this finds out if you are passing
        let passing;
        if (averageGrade >= 60) {
            passing = true;
        }
        else {
            passing = false;
        }

        // this pushes the values into the empty JSON object.
        output["total"] = total;
        output["average"] = averageGrade.toFixed(1);
        output["highest"] = highestGrade.toFixed(1);
        output["lowest"] = lowestGrade.toFixed(1);
        output["passing"] = passing;
        console.log(JSON.stringify(output, null, 4));
    });

});
