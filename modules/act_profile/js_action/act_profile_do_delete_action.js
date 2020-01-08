class act_profile_do_delete_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
        var name = document.getElementsByName('select');
        var txt="";
        for (var i = 0; i < name.length; i++) {//一個一個對照流水號
            if (name[i].checked) {//確認所點入的流水號
                txt=name[i].value;//.value抓input的value
            } 
        }
        this.addArgs("id", txt);//在ActionHandler中
    }
     ajax_success(xhttp) {
                var json_str = xhttp.responseText;
                console.log(json_str)
                document.getElementById(this.position_id).innerHTML = "成功";//innerHRML 改變html 的畫面
            }
    ajax_error(msg) {
        document.getElementById(this.position_id).innerHTML = msg.status;
    }

}