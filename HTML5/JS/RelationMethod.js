function saveStorage() {
    var data = new Object;
    data.name = document.getElementById('name').value;
    data.age = document.getElementById('age').value;
    data.tel = document.getElementById('tel').value;
    var str = JSON.stringify(data);
    localStorage.setItem(data.name, str);
    alert("保存成功");
}

function findStorage(id) {
    var find = document.getElementById(id).value;
    var result = localStorage.getItem(find);
    if (result == null) {
        alert("此数据不存在");
        return false;
    }
    var str = JSON.parse(result);
    var target = document.getElementById("msg");
    target.innerHTML = "<br/>姓名：" + str.name + "<br/>年龄：" + str.age + "<br/>电话：" + str.tel;
}

function clearStorage(id) {
    var find = document.getElementById(id).value;
    localStorage.removeItem(find);
    alert("删除成功");
}

