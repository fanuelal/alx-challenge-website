document.addEventListener("DOMContentLoaded", function(event) {
    
});
//for the support or comment zone popup click event
function supportMe(){
    document.getElementById('chat').style.display = "block";
    
}
//for the close suport or comment zone popup click event
function clschat(){
    document.getElementById('chat').style.display = "none";
}
//for the close suport or comment zone popup click event
function detailInfo(){
    document.getElementById('studentDetail').style.display = "block";
    document.getElementById('bgCover').style.display = "block";
}
function closeDetail(){
    document.getElementById('loginPop').style.display = "none";
    document.getElementById('regPop').style.display = "none";
    document.getElementById('studentDetail').style.display = "none";
    document.getElementById('bgCover').style.display = "none";
}
function loginPopup(){
    document.getElementById('loginPop').style.display = "block";
    document.getElementById('bgCover').style.display = "block";
}
function regPopup(){
    document.getElementById('regPop').style.display = "block";
    document.getElementById('bgCover').style.display = "block";
}
function clspopup(){
    document.getElementById('loginPop').style.display = "none";
    document.getElementById('regPop').style.display = "none";
    document.getElementById('bgCover').style.display = "none";
}
function givechoose(){
    document.getElementById('accountl').style.display = "block";
    document.getElementById('accountr').style.display = "block";
}

