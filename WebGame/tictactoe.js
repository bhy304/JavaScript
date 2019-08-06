var bodyTag = document.body;
var tableTag = document.createElement("table");
var tds = []; //칸들
var trs = []; //줄들
var turn = 'X';
var result = document.createElement('h1');

//비동기콜백함수
var callback = function(e){ 
    var tr_num = trs.indexOf(e.target.parentNode); 
    var td_num = tds[tr_num].indexOf(e.target); 
    console.log("행 번호=", tr_num, ", 열 번호=", td_num);

    if (tds[tr_num][td_num].textContent !== ""){ //칸이 이미 채워져있는지?
        console.log("빈 칸이 아닙니다.");
    } else { //빈칸이면
        console.log("빈 칸입니다.");
        tds[tr_num][td_num].textContent = turn;

        //모든 칸이 다 채워졌는지? 
        var full = false;
        //행 검사
        if (tds[tr_num][0].textContent === turn && tds[tr_num][1].textContent === turn && tds[tr_num][2].textContent === turn){
            full = true;
        }
        //열 검사
        if (tds[0][td_num].textContent === turn && tds[1][td_num].textContent === turn && tds[2][td_num].textContent === turn){
            full = true;
        }
        //대각선 검사
        if (tr_num - td_num === 0){ 
            if(tds[0][0].textContent === turn && tds[1][1].textContent === turn && tds[2][2].textContent === turn){
                full = true;
            }
        }
        if (Math.abs(tr_num - td_num) === 2){ 
            if(tds[0][2].textContent === turn && tds[1][1].textContent === turn && tds[2][0].textContent === turn){
                full = true;
            }
        }
        //다 채워졌다면
        if(full === true){
            result.textContent = turn + " 승리!";
            //초기화
            turn = 'X';
            tds.forEach(function (tr){
                tr.forEach(function (td){
                    td.textContent = '';
                });
            });
        } else  { //다 안 찼으면
            if (turn === 'X'){
                turn = 'O';
            } else {
                turn = 'X';
            }
        } 
    }
};
//테이블 만들기
for(var i=1; i<=3; i+=1){
    var tr = document.createElement('tr');
    trs.push(tr);
    tds.push([]);
    for(var j=1; j<=3; j+=1){
        var td = document.createElement('td');
        td.addEventListener("click", callback);
        tds[i-1].push(td);
        tr.appendChild(td);
    }
    tableTag.appendChild(tr);
}
bodyTag.appendChild(tableTag);
bodyTag.appendChild(result);
console.log("줄들:", trs, "칸들:", tds);