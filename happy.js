
var happyPower = 2;

var numbersTested;

var isNumberHappy = function (numberToTest)
{
    var result = recurseNumber(numberToTest, []);

    result.startingValue = numberToTest;
    return result;
}

var recurseNumber = function (numberToTest, steps)
{
    var step = {
        value: numberToTest,
        equation: "",
        duplicate: false
    };

    // TODO: Base of steps instead
    var inArray = numbersTested.indexOf(numberToTest);
    numbersTested.push(numberToTest);

    if (numberToTest < 2) // Negative numbers are always happy :) Shouldn't get here though
    {
        step.equation = "and so on...";
        steps.push(step);

        return {
            steps: steps,
            happy: true
        }
    }
    if (inArray != -1)
    {
        step.duplicate = true;
        steps[inArray].duplicate = true;

        steps.push(step);

        console.log(steps);

        return {
            steps: steps,
            happy: false
        }
    }

    var remainder = numberToTest
    var result = 0;

    while (remainder > 0)
    {
        var lastDigit =  remainder % 10;
        remainder = remainder / 10 | 0;
        result += Math.pow(lastDigit, happyPower)
        step.equation = addToCurrentEquation(step.equation, lastDigit);
    }

    // Add to current list
    steps.push(step);

    // Recurse until numbersTested
    return recurseNumber(result, steps);
}

function addToCurrentEquation(existing, numberToAdd)
{
    var addition =  numberToAdd + "&sup2;";

    if (existing)
        return addition + " + " + existing;
    else
        return addition;
}
