module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s|\^2|\+|\*/g, '');
  let arr = equation.split("x");
  let a,b,c;

    if(arr[0] == "") {
      a = 1;
    }else if(arr[0] == "-") {
      a = -1;
    }else{
      a = +arr[0];
    }

    if(arr[1] == "") {
      b = 1;
    }else if(arr[1] == "-") {
      b = -1;
    }else{
      b = +arr[1];
    }

    if(arr[2]=="") {
      c=1;
    }else if(arr[2]=="-") {
      c = -1;
    }else{
      c = +arr[2];
    }


  let D = b*b - 4*a*c;
  let rootD = Math.sqrt(D);
  let x1 = Math.round((-b + rootD)/(2*a));
  let x2 = Math.round((-b - rootD)/(2*a));

  if(x1>x2){
    let n = x1;
    x1 = x2;
    x2 = n;
  }

  return [x1, x2];
}
