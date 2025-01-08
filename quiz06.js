// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.


function applyCoupon(cart, coupon) { // 하나하나 마다 작업이라고 할 때 작업을 명시하기 위해 함수를 만들 수 있고 함수를 수행하기 위해서 foreach를 쓴다.
  cart.items.forEach((item) => { // foreach 사용, item
    item.price -= coupon.discount; // item.price = item.price - coupon.discount 
  });
}

const userACart = { // userACart는 두 개의 아이템 보유
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

// const userBCart = userACart;
const coupon = { discount: 5000 };


const userBCart = function(userACart, newName) {
  return {
    name : newName,
    price : userACart.price,
  }
};


applyCoupon(userBCart, coupon); // 


console.log(userACart); // 유저 A의 장바구니
console.log(userBCart); // 유저 B의 장바구니

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// price의 값이 5000감소하고 동일하다

// 2.	1번의 결과에 대한 이유를 설명해보세요.
// userBCart가 userACart 참조했기 때문

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
