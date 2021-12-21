console.log("hello")

sub1 = document.getElementById("sub1");
sub2 = document.getElementById("sub2");
sub3 = document.getElementById("sub3");
sub4 = document.getElementById("sub4");
showresult = document.getElementById("showresult");
resultbtn = document.getElementById("result");
console.log(resultbtn.innerHTML)
function result() {
    console.log("result")
    a = sub1.value;
    b = sub2.value;
    c = sub3.value;
    d = sub4.value;
    e = Number(a) + Number(b) + Number(c) + Number(d)
    f = e / 4;
    console.log(e)


    showresult.innerHTML = `Out of 400 You get ${e} . The percentage is ${f} 
<div class="button">
<button class="btn  btnC" onclick="clear1()"><b> clear</b></button>
</div>
        `


}

function clear1() {
    console.log("clear is running")
    sub1.value = "";
    sub2.value = "";
    sub3.value = "";
    sub4.value = "";
    showresult.innerHTML = "";
}










