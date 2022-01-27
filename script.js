// console.log('script work!');
// let amount = 5000;
// let interest = 0.09;
// let totalInterest = 0;
// let yearInt = 0;
// for (let i = 0; i <5;i++) {
//         totalInterest += amount *interest;
//         amount -= 5000 /5;
//         console.log(totalInterest);   
// }
const amount = document.querySelector('.amount');
const interest = document.querySelector('.interest');
const years = document.querySelector('.years');
const totalPayment = document.querySelector('.totalPayment');
const interestPayment = document.querySelector('.interestPayment');
const monthlyPayment = document.querySelector('.monthlyPayment');
const calculateBtn = document.querySelector('.calculateBtn');

function calculateResults(event) {
        event.preventDefault();
        let amountValue = parseInt(amount.value, 10);
        let interestValue = parseFloat(interest.value) / 100;
        let yearsValue = parseInt(years.value);
        let totalInterest = 0;
        let amountConst = amountValue;
        for(let i = 0; i < yearsValue;i++) {
                totalInterest += amountValue * interestValue;
                amountValue -= amountConst / yearsValue;
        }
        const totalPayment = amountConst + totalInterest;
        viewResults(totalPayment,totalInterest,yearsValue);
}
function viewResults(totalPayValue,interest,years) {
        if(!totalPayValue || !interest || !years){
                document.querySelector('#ereur').style.display = 'inline-block';
        }else {
                totalPayment.textContent = totalPayValue;
                interestPayment.textContent = interest;
                monthlyPayment.textContent = totalPayValue / (years * 12);
                document.querySelector('#ereur').style.display = 'none';
        }
}
calculateBtn.addEventListener('click',calculateResults);