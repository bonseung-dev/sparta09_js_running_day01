// 학교에서 시험을 보았는데 전산 문제로 한 문제의 답이 전부 오답처리가 된 바람에 학생들의 점수를 전부 3점씩 올려주어야 합니다.

// scores에 있는 학생들의 점수를 반복문을 통해 3점씩 올리게 고쳐주시는데 4번 문제를 통해 만든 계산기 함수를 통해 더해주세요.


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

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function scoreUpdate(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  for(i = 0; i < scores.length; i++){ // scores의 값을 처음부터 하나씩 돌기 위해 scores.length
    scores[i] = calculator(scores[i], "+", 3);  // 아까 calculator를 활용하여 num1 매개 변수 자리에 score[i]의 값을 하나씩 넣기 + 3
  }
}

scoreUpdate(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]