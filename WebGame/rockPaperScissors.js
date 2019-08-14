var bgPosition = 0;
var RPS = { //딕셔너리 자료구조
    rock: '0', 
    scissor: '-135px', 
    paper: '-284px' 
};

function chooseByComp(bgPosition) {
    //  Object.entries(RPS) : Object to Array
    return Object.entries(RPS).find(function(value){
        return value[1] === bgPosition;
    })[0];
}

var interval;
function intervalMaker() {
    interval = setInterval(function() {
        if (bgPosition === RPS.rock) { 
            bgPosition = RPS.scissor;
        } else if (bgPosition === RPS.scissor) { 
            bgPosition = RPS.paper;
        } else {
            bgPosition = RPS.rock;
        }
        document.querySelector("#computer").style.background = 'url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ' + bgPosition + ' 0';
    }, 100);
}
intervalMaker();

var point = {
    scissor: 1,
    rock: 0,
    paper: -1
};

document.querySelectorAll(".jsBtn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        clearInterval(interval); // clearInterval로 setInterval을 멈춘다.
        setTimeout(function() {
            intervalMaker();
        }, 1000);

        let chooseByMe = this.textContent;
        var myPoint = point[chooseByMe];
        var compPoint = point[chooseByComp(bgPosition)];
        var result = myPoint - compPoint;

        if(result === 0) {
            console.log('Tie...');
        } else if ([-1, 2].includes(result)) {
            console.log('Win!!!');
        } else {
            console.log('Lose ㅠㅠ');
        }
    });
});