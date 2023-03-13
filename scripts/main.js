function isGetBeer(age) {
    if (age < 18) {
        return 'Вы не можете купить пиво!';
    } else {
        return 'Вы можете купить пиво';
    }
}

console.log(isGetBeer(18));