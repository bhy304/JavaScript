var numbers = Array(45).fill().map(function(element, index){
    return  index + 1;
});
console.log(numbers);

var shuffle = [];
while (numbers.length > 0){
    var value = numbers.splice(Math.floor(Math.random() * numbers.length), 1);
    shuffle.push(value);
}
console.log(shuffle);

var bonusNumber = shuffle[shuffle.length - 1];
var winningNumbers = shuffle.splice(0, 6);
console.log("당첨 숫자들= ", winningNumbers.sort(function(p, c){return p-c;}), ", 보너스숫자= ", bonusNumber);

var winningTag = document.querySelector('#winning'); //당첨숫자
//JS로 CSS 처리
function cssStyle(n, tag, number){
    var number =  document.createElement('div');
    number.textContent = n;
    number.style.display = 'inline-block';
    number.style.border = '1px solid #fff';
    number.style.color = '#fff';
    number.style.fontWeight = 'bold';
    number.style.fontSize = '20px';
    number.style.borderRadius = '50%';
    number.style.width = '40px';
    number.style.height = '40px';
    number.style.lineHeight = '40px';
    number.style.textAlign = 'center';
    number.style.marginRight = '10px';
    var backgroundColor;
    if (n <= 10){
        backgroundColor = 'red';
    } else if (n <= 20){
        backgroundColor = 'orange';
    } else if (n <= 30){
        backgroundColor = 'yellow';
    } else if (n <= 40){
        backgroundColor = 'blue';
    } else {
        backgroundColor = 'green';
    }
    number.style.background = backgroundColor;
    tag.appendChild(number);
};
setTimeout(function Asynchronous(){
    cssStyle(winningNumbers[0], winningTag);
}, 1000); 
setTimeout(function Asynchronous(){
    cssStyle(winningNumbers[1], winningTag);   
}, 2000); 
setTimeout(function Asynchronous(){
    cssStyle(winningNumbers[2], winningTag);
}, 3000); 
setTimeout(function Asynchronous(){
    cssStyle(winningNumbers[3], winningTag);
}, 4000); 
setTimeout(function Asynchronous(){
    cssStyle(winningNumbers[4], winningTag);
}, 5000); 
setTimeout(function Asynchronous(){
    cssStyle(winningNumbers[5], winningTag);
}, 6000); 
setTimeout(function Asynchronous(){
    var bonusTag = document.querySelector('.bonus'); //보너스숫자
    cssStyle(bonusNumber, bonusTag);
}, 7000);