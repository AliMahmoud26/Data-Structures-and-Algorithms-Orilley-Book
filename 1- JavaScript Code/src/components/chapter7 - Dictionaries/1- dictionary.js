const dictionary = {
    name: 'Ali',
    age: 22,
    country: 'Egypt'
}

console.log(dictionary.name);
console.log(dictionary['age']);

dictionary.language = 'Arabic'
console.log(dictionary);
console.log(dictionary['language']);

delete dictionary.country;
console.log(dictionary);


