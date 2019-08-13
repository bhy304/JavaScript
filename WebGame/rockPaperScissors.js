var bgPosition = 0;
var RPS = { //딕셔너리 자료구조
    rock: '0', 
    scissor: '-135px', 
    paper: '-284px' 
};

//console.log(Object.entries(RPS)); //Object to Array
function chooseByComp(bgPosition) {
    return Object.entries(RPS).find(function(value){
        return value[1] === bgPosition;
    })[0];
}

setInterval(function() {
    if (bgPosition === RPS.rock) { //0
        bgPosition = RPS.scissor;
    } else if (bgPosition === RPS.scissor) { //-135
        bgPosition = RPS.paper;
    } else {
        bgPosition = RPS.rock;
    }
    document.querySelector("#computer").style.background = 'url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ' + bgPosition + ' 0';
}, 100);

document.querySelectorAll(".jsBtn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        let chooseByMe = this.textContent;
        console.log(chooseByMe, chooseByComp(bgPosition));
    });
});