/**
 * Created by WH1412007 on 2017/7/4.
 */
var arr=document.getElementsByClassName("square");
function changeColor(){
    var result = getx(arr, 3);
    for(var i=0;i<3;i++){
        var color='#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
        result[i].style.backgroundColor=color;
    }

}
//随机取出arr数组中的num个值，并组合成新的数组返回
function getx(arr, num) {
    //这里数组长度不能比num小
    if(arr.length < num) {
        return;
    }
    var result = [];
    var tmp = [];
    //死循环，取出不重复的num个数
    for(var i = 0; i < num;){
        var flag = true;
        //根据数组长度，来取随机数
        var nn = Math.floor(Math.random() * (arr.length - 1)) + 1;
        //判断随机数nn是否已经取到过
        for(var t = 0; t < tmp.length; t++){
            if(tmp[t] == nn){
                flag= false;
                break;
            }
        }
        //随机数nn未取到过，则将nn放到tmp临时数组中
        if(flag == true){
            tmp[i] = nn;
            //i自增
            i++;
        }
    }
    //从arr数组中取出数据
    for(var i = 0; i < tmp.length; i++) {
        result[i] = arr[tmp[i]];
    }
    return result;
}
function endChangeColor(){
    for(var i=0;i<arr.length;i++){
        arr[i].style.backgroundColor="orange";
    }
}
function beginChange(){
    interval = setInterval("changeColor()",500);
}
function endChange() {
    endChangeColor();
    setTimeout("clearInterval(interval)", 10);
}