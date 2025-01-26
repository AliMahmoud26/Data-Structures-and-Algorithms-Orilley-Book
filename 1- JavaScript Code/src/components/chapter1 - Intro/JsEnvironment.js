// For Loop
for (let i = 0; i < 6; i++) {
    console.log(i);
}

// If Condition
let mid = 25;
let high = 50;
let low = 1;
let current = 13;
let found = -1;

if (current < mid) {
    mid = (current - low) / 2
} else {
    mid = (current + high) / 2
}

console.log(mid);

// Switch Statement
let monthNum = '6';
switch (monthNum) {
    case '1':
        monthNum = "January";
        break;
    case '2':
        monthNum = "February";
        break;
    case '3':
        monthNum = 'March';
        break;
    case '4':
        monthNum = 'April';
        break;
    case '5':
        monthNum = 'May';
        break;
    case '6':
        monthNum = 'June';
        break;
    default:
        console.log('Bad Input')
}

console.log(monthNum(6))