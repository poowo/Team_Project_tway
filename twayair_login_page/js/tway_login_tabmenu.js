var num = 1; // 초기값
function gallery(imgNum) {
    if(imgNum){ // 다음
        num++;
        if(num==10) {return;}

    }
    var imgTag = document.getElementById("img");
    console.log(imgTag);
    imgTag.setAttribute("src","./images/capture/cp_img"+num+".PNG")
}