var count = 0;



var sub = document.getElementById("minus");
sub.addEventListener('click',function(){
    count = count - 1;
    var res = document.getElementById("count");
    res.textContent = count;
});

var add = document.getElementById("plus");
add.addEventListener('click',function(){
    count = count + 1;
    var res = document.getElementById("count");
    res.textContent = count;
});

