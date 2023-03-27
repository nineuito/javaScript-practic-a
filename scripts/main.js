const infoAboutCity = {
    name: 'New York',
    country: 'USA',
    position: 'East',
    dateOfCreated: 1600,
    isHasAccesToOcean: true
}

Object.keys(infoAboutCity).forEach(key => {
    console.log(key, infoAboutCity[key])
})

// for (const key in infoAboutCity) {
//     console.log(key, infoAboutCity[key])
// }