function plus(x,y){
  return x+y;
}

function minus(x,y){
  return x-y;
}

function multiple(x,y){
  return x*y;
}

function divide(x,y){
  return x/y;
}

function sum(kor, eng, mat){
  return kor+eng+mat;
}

function avg(kor, eng, mat){
  return sum(kor,eng,mat)/3;  
}

export {sum, avg};
export default {plus, minus, multiple, divide, sum, avg};
