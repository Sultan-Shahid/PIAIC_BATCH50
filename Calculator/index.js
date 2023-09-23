import inquirer from "inquirer";
const question = [
    {
        name: "Num1",
        type: "number",
        message: "Enter Value in Num1 : "
    }, {
        name: "Num2",
        type: "number",
        message: "Enter Value in Num2 : "
    },
    {
        name: "Operation",
        type: "list",
        message: "Choice Operation From Below : ",
        choices: ["Addition", "Subtraction", "Multiplication", "Modulus", "Division", "Exponent"]
    }
];
async function Input_From_User() {
    try {
        var result = await inquirer.prompt(question);
        switch (result.Operation) {
            case "Addition":
                console.log(`${result.Num1} + ${result.Num2} = `, result.Num1 + result.Num2);
                break;
            case "Subtraction":
                console.log(`${result.Num1} - ${result.Num2} = `, result.Num1 - result.Num2);
                break;
            case "Multiplication":
                console.log(`${result.Num1} * ${result.Num2} = `, result.Num1 * result.Num2);
                break;
            case "Modulus":
                console.log(`${result.Num1} % ${result.Num2} = `, result.Num1 % result.Num2);
                break;
            case "Division":
                console.log(`${result.Num1} / ${result.Num2} = `, result.Num1 / result.Num2);
                break;
            case "Exponent":
                console.log(`${result.Num1} ^ ${result.Num2} = `, result.Num1 ** result.Num2);
                break;
        }
    }
    catch (error) {
        console.log("Catch Error : ", error);
    }
}
Input_From_User(); //call function
