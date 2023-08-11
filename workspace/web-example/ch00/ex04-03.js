function f1(resolve){
  console.log(`2.f1 작업 시작.`);
  console.log(`3.f1 작업중...`);

  setTimeout(()=>{
    //....
    console.log(`4.f1 작업 종료`);
    resolve (`f1의 결과물`);
  }, 1000);
}

function f2(f1Result, resolve){
  console.log(`5.${f1Result}로 f2 작업 시작.`);
  console.log(`6.f2 작업중...`);
  
  setTimeout(()=>{
    //....
    console.log(`7.f2 작업 종료`);
    resolve (`.최종 결과물`);
  }, 800);
}

function test(){
  // f1(f1Result => {
  //   const result = f2(f1Result);
  // });

  f1(function(f1Result){
    f2(f1Result, function(result){
      console.log('8. '+result);
    });
  });
}

console.log('1. 테스트 시작.');
test();
console.log('9. 테스트 완료.');