// 연산자와 함수, 조건문을 토대로 계산기 함수를 하나 만들어 보려고 합니다.
// 함수에 숫자 , 연산자 , 숫자 세 개의 매개변수를 넣었을 때 해당 연산자를 기준으로 연산을 해서 값을 반환하는 함수를 만들어주세요.

// 예시


function calculator(num1, operator, num2) {

  // 코드를 작성해주세요.
  switch(operator) { // switch문을 사용해서 operator 값에 따라 return값 다르게 하기?
    case "+":
        return num1 + num2; // + 라면 더하기 연산자

    case "-":
        return num1 - num2; // - 라면 빼기 연산자
    case "*":
        return num1 * num2; // * 라면 곱하기 연산자
    case "/":
        return num1 / num2;
    default:
        return "오류";
  }
}
// +, -, *, / 를 매개변수2에 넣으면 계산기 실행하기? for, while, switch...



console.log(calculator(3, "+", 6)); // 결과값 9
console.log(calculator(11, "-", 6)); // 결과값 5
console.log(calculator(6, "*", 3)); // 결과값 18
console.log(calculator(15, "/", 3)); // 결과값 5
console.log(calculator(11, "%", 3));  
