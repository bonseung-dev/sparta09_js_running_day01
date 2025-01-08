let uninitialized;
console.log(uninitialized); // 결과값 <undefined>
// 변수가 선언만 되었기 때문에 기본값은 undefined가 출력

const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const로 선언한 값은 재할당이 불가능


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 인덱스는 0부터 시작하므로 0 , 1, 2, 3 4번째 값인 19


let mySchedule = "";
console.log(mySchedule || false); // < false > mySchedule은 문자열이므로 false
console.log(!!mySchedule); // < false >  느낌표를 2개(!!) 사용하여 값을 불리언 값으로 명시적으로 변환할 수 있습니다