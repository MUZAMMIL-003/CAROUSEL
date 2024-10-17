var imgLinks = ["img 01.jpg","img 02.jpg","img 03.jpg","img 04.jpg","img 05.jpg"];
var getImg = document.getElementById("img");
var count = 0;
console.log(getImg);
console.log(count);

function fun(){

    if(count >= 4){
        count = 0;
    }else if(count <= 0){
        count = 4;
    }

    getImg.setAttribute("src", imgLinks[count]);

    if(value === '+'){
        count++
        return
    }else if(value === '-'){
        count--
        return
    }
    
    count--
}

setInterval(fun, 2000)

// getImg.setAttribute("src", imgLinks[2]);