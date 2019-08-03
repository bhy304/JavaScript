var BODY = document.body;
var word = document.createElement('div');

word.textContent = '제로초';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
form.append(input);

var button = document.createElement('button');
button.textContent = '입력';
form.append(button);

var result = document.createElement('div');
document.body.append(result);

// button.addEventListener("click", function callback(){
form.addEventListener("submit", function callback(event){
/* 
<form>태그의 기본동작은 다른 페이지로 이동하면서 새로고침된다. 
form의 기본동작을 막기 위해서는 event.preventDefault()를 사용하면 된다. 
*/
    event.preventDefault(); 
    if(word.textContent[word.textContent.length - 1] === input.value[0]) {
        result.textContent = '딩동댕';
        word.textContent = input.value;
        input.value = '';
        input.focus();
    } else {
        result.textContent = '땡';
        input.focus();
    }
});