function isGetBeer(age) {
    if (age < 18) {
        return 'Вы не можете купить пиво!';
    } else {
        return 'Вы можете купить пиво';
    }
}

console.log(isGetBeer(18));

function isHaveEnoughMoney(money) {
    const priceBeer = 3.99;

    if (money >= priceBeer) {
        return 'У вас достаточно денег для покупки пива.';
    } else {
        return 'У вас не досточно денег для покупки пива.';
    }
}

console.log(isHaveEnoughMoney(10));


function isCanBuyBeer ()