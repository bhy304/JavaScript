var BODY = document.body;

var result = document.createElement("h1"); //결과 출력
BODY.appendChild(result);

var msg = document.createElement("h3"); // 메세지 출력
BODY.appendChild(msg);

var form_tag = document.createElement("form");
BODY.appendChild(form_tag);

var input_tag = document.createElement("input");
input_tag.type = "text";
input_tag.maxLength = 4;
form_tag.appendChild(input_tag);

var button_tag = document.createElement("button");
button_tag.textContent = "입력";
form_tag.appendChild(button_tag);

var number;
var num_arr;

function random_num(){
    number = [1,2,3,4,5,6,7,8,9];
    num_arr = [];
    
    for(var i = 0; i < 4; i+=1){
        var pop_num = number.splice(Math.floor(Math.random()*(9 - i)), 1)[0];
        num_arr.push(pop_num);
    }
}

random_num();
console.log(num_arr);

var wrong_num  = 0;
form_tag.addEventListener("submit",function Async(e){ //엔터를 쳤을 때
    e.preventDefault(); 
    var answer = input_tag.value;
    //console.log(answer, num_arr, answer === num_arr.join(''));
    if (answer === num_arr.join('')){ //답이 맞았을 때 
        result.textContent = "홈런";
        input_tag.value = '';
        input_tag.focus();
        random_num(); //다음 문제 제시
        wrong_num = 0; 
    } else { //답이 틀렸을 때
        var result_arr = answer.split('');
        var strike = 0;
        var ball = 0;
        wrong_num += 1;
        msg.textContent = wrong_num + "번 틀렸습니다.";
        if (wrong_num > 10){
            result.textContent = "10회 이상 틀렸습니다! 답은 "+ num_arr.join(',')+"입니다.";
            input_tag.value = '';
            input_tag.focus();
            random_num(); //문제 다시 제시
            wrong_num = 0;
        } else {
            console.log("답이 틀리면", num_arr);
            for(var i = 0; i < 3; i += 1){
                if (Number(result_arr[i]) === num_arr[i]){ // 숫자가 같은 자리인지 확인
                    console.log("같은 자리?");
                    strike += 1;
                } else if (num_arr.indexOf(Number(result_arr[i])) > -1){ // 같은 자리는 아니지만, 숫자가 겹치는 지 확인
                    console.log("겹치는 숫자?");
                    ball += 1;
                } 
            }
            result.textContent = strike + "스트라이크 " + ball + "볼입니다!";
            input_tag.value = '';
            input_tag.focus();
        }
    }
});