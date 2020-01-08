class member_profile_do_insert_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);//super呼叫父類別中的建構子
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
        var name = document.getElementsByName('insert');//page那的name抓取值
        //接收name
        var txt = "";
        var value="";
        var row =["name","pass","email","tel","addr","act"];//
        for (var i = 0; i < name.length; i++) {
            this.addArgs(row[i],name[i].value);
        }
        /*this.addArgs(row[0],name[0].value);           
        this.addArgs(row[1],name[1].value);
        this.addArgs(row[2],name[2].value);
        this.addArgs(row[3],name[3].value);*/
        //txt = name[0].value;//value接收ID
        
    }//接收name
    ajax_success(xhttp) {
                var json_str = xhttp.responseText;
                console.log(json_str)
                document.getElementById(this.position_id).innerHTML = "成功";
            }
    ajax_error(msg) {
        document.getElementById(this.position_id).innerHTML = msg.status;
    }

}