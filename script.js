console.log('script work!');
let amount = 5000;
let interest = 0.09;
let totalInterest = 0;
let yearInt = 0;
for (let i = 0; i <5;i++) {
        totalInterest += amount *interest;
        amount -= 5000 /5;
        console.log(totalInterest);   
}