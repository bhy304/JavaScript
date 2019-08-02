var req = new XMLHttpRequest();
req.open("GET", "./image_list.json");
req.onreadystatechange = function(){
    if(this.readyState == 4){
        //console.log(this.response);
        var data = JSON.parse(this.response);
        for(var i = 0; i < data.length ; i ++){
            var div = document.createElement("div");
            //이미지클릭시 이미지 선택 기능
            div.onclick = function(){
             /* if(this.getAttribute("class").indexOf("image-selected") == -1 ){
                    this.setAttribute("class","image image-selected");
                } else {
                    this.setAttribute("class","image");
                } */
                this.classList.toggle("image-selected"); 
            }
            div.setAttribute("class","image");
            //이미지 자세히 보기 기능
            div.onmouseover = function(){
                var element = this;
                this.timerId = setTimeout(function(){
                    element.classList.add("image-magnified");
                }, 1000);
            }
            div.onmouseout = function(){
                clearTimeout(this.timerId);
                this.classList.remove("image-magnified");
            }

            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}
req.send();

//이미지 전체 선택 기능
function selectAll(btn){
    var images = document.getElementsByClassName("image");
    for(var i=0; i < images.length; i++){
        if(btn.value == "Unselect All"){
            images[i].classList.remove("image-selected");
        } else {             
            images[i].classList.add("image-selected");
        }
    }
    if(btn.value == "Unselect All"){
        btn.value = "Select All";
    } else {             
        btn.value = "Unselect All";
    }
}

//사진슬라이드쇼 기능
function slideShow(btn){
    var images = document.getElementsByClassName("image");
    var index = 0;
    images[index].classList.add("image-magnified");
    
    var intervalId = setInterval( function(){
        images[index].classList.remove("image-magnified");
        index++;
        if(index < images.length){
            images[index].classList.add("image-magnified");
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}