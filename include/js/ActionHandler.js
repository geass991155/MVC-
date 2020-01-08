class ActionHandler {
    constructor(module, js_action) {//在onclick new到進入檔案用constructor建構它們的值('', '', ''),super拉到的值回到ActionHander做了建構子
        this.module = module;
        this.js_action = js_action;//js的檔名有對應的php prepareArgs() {}就只要有this.php = true 便會過去沒有要再加上this.php_action = ' '
        this.php_action = js_action;
        this.args = null;
    }
    run() {//呼叫php
        this.prepareArgs();//執行使用到prepareArgs的內值
        if (!this.php) {//不需要使用到.php檔就用下列的函數
            //this.prepareArgs();
            this.showResult(xhttp);
            return;
        }
        var xhttp = new XMLHttpRequest();//產生AJAX物件,XMLHpRequest()在不重新加载頁面的情况下更新網页,在頁面已加载後從服務器請求數據、接收數據、發送數據
        var self = this;//抓外面的class,因為被function包住會抓不到ajax_success(xhttp);
        xhttp.onreadystatechange = function () {//onreadystatechange指明要處理傳回值的 JavaScript 函式名稱,當xttp屬性改變時,onreadystatechange就調用該函數
            var responseText;
            if (this.readyState === 4 && this.status === 200) {
                self.ajax_success(xhttp);
            } else {
                self.ajax_error(xhttp);
            }
        };//取得post
        xhttp.open("POST", "module_dispatcher.php?module=" + this.module + "&action=" + this.php_action, true);//呼叫對應的檔案
        //xhttp.open("傳值的方式POST GET","要傳的地方","是否同步true未傳值料繼續執行")
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//設置訊息
        xhttp.send(this.args);//send(this.args)用POST傳值,取網址尾端(最後)的值,send送的值,傳直給php
        //xhttp.send(傳入open)
    }
//避免重新載入、執行兩次
    loadScript(src, id) {
        var script = document.getElementById(id);//htnl的參數id
        if (script === null) {//將組合完的檔案名
            script = document.createElement("script");//新增元素 再html的script或head是元素
            script.src = src;//點後面是他的參數 ,html中綠體字的src
            script.id = id;
            document.head.appendChild(script);//加入index.html載入 head是html的hand語法
        }
    }
    loadModuleScript(module, action) {//取得module,action的值
        var id = module + "_" + action;
        var src = "modules/" + module + "/js_action/" + id + ".js";
        this.loadScript(src, id);
    }
    addArgs(id, value) {//value 去給Id值給php比對資料
        if (this.args === null)//網址尾端的值判斷,未傳入任何資料地一次傳入執行if
            this.args = id + "=" + value;//id各欄位的代號
        else//要是已傳過資料會用加(&)的方式加上資料
            this.args += "&" + id + "=" + value;
    }
}



