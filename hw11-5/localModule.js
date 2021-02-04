function Calculator(n1, n2, operation) {
  if (
    n1 === undefined ||
    n2 === undefined ||
    isNaN(n1) ||
    isNaN(n2) ||
    n1.toString().trim() == "" ||
    n2.toString().trim() == ""
  )
    return "input must be Number";
  switch (operation) {
    case "+":
      return `${n1} + ${n2} = ${n1 + n2}`;
    case "-":
      return `${n1} - ${n2} = ${n1 - n2}`;
    case "*":
      return `${n1} * ${n2} = ${n1 * n2}`;
    case "/":
      return `${n1} / ${n2} = ${n1 / n2}`;
    default:
        return "Unknown Operator";
  }
}
module.exports = Calculator;
