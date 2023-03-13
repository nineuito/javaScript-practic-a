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


function isCanBuyBeer(age, money, paymentMethod) {
    const priceOfBeer = 4.99;
    let result = '';

    if (age >= 18) {
        result += 'Твой возраст подходит, ';
    } else {
        result += 'Твой возраст не подходит, ';
    }
    
    if (money >= priceOfBeer) {
        result += 'у тебя достаточно денег ';
    } else {
        result += 'у тебя не достаточно денег для покупки ';
    }

    if (paymentMethod === 'card') {
        result += 'и ты можешь расплатиться картой.'
    } else if (paymentMethod === 'cash') {
        result += 'и ты можешь расплатиться наличными.'
    } else {
        result += 'Выбери метод оплаты "card" или "cash"';
    }


    if (age === false || money === false) {
        result = 'Ты не можешь купить пиво.'
    }

    return result;
}


console.log(isCanBuyBeer(3, 3, 'card'))