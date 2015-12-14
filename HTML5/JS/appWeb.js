//sessionStorage 关闭浏览器就会清除数据
//function saveStorage(id) {
//    var target = document.getElementById(id);
//    var str = target.value;
//    //保存数据
//    sessionStorage.setItem("message",str);
//}

//function loadStorage(id) {
//    var target = document.getElementById(id);
//    //读取数据
//    var msg = sessionStorage.getItem("message");
//    target.innerHTML = msg;
//}

//localStorage 永久保存
//function saveStorage(id) {
//    var target = document.getElementById(id);
//    var str = target.value;
//    //保存数据
//    localStorage.setItem("message",str);
//}

//function loadStorage(id) {
//    var target = document.getElementById(id);
//    //读取数据
//    var msg = localStorage.getItem("message");
//    target.innerHTML = msg;
//}

function saveStorage(id) {
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    //保存数据
    localStorage.setItem(time, data);
    alert("数据已存储");
    loadStorage('msg1');
}

function loadStorage(id) {
    var result = "<table border = '1'>";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        result += "<tr><td>" + value + "</td><td>" + date + "</td></tr>";
    }
    result += "</table>";
    var target = document.getElementById(id);
    target.innerHTML = result;
}

function clearStorage(id) {
    localStorage.clear();
    alert("数据已经删除");
    loadStorage('msg1');
}