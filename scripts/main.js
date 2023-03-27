const userProfile = {
    name: 'Oleh',
    commentsQty: 21,
    hasSegnedAgreement: false
}

const userInfo = () => {
    const { name, commentsQty } = userProfile
    if (!commentsQty) {
        return `User ${name} has no comments`;
    }

    return `User ${name} has ${commentsQty} comments`;
}

console.log(userInfo(userProfile))

console.log()