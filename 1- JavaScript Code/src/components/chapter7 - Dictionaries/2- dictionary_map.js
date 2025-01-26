const dictionary = new Map();

dictionary.set("name", 'Ali Mahmoud');
dictionary.set("age", 25);
dictionary.set("country", "Egypt")
dictionary.set("language", 'Arabic');

console.log(dictionary.get('name'));
console.log(dictionary.get('age'));

console.log(dictionary.has('country'));

dictionary.delete('country')

for (const [key, value] of dictionary) {
    console.log(`{${key}: ${value}}`);
}