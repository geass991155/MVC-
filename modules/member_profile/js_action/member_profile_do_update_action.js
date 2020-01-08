class member_profile_do_update_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
        this.php_aciton='do_update_action';
        var name=document.getElementsByName('insert');
        var row =["id","name","pass","email","tel","addr","act"];//把欄位名丟入陣列
        
        for (var i = 0; i < name.length; i++) {
            this.addArgs(row[i],name[i].value);
        }
        console.log(name[0].value);
        console.log(name[1].value);
        console.log(name[2].value);
        console.log(name[3].value);
        
    }
    ajax_success(xhttp) {
        document.getElementById(this.position_id).innerHTML = "修改成功";
    }
    ajax_error(msg) {
        document.getElementById(this.position_id).innerHTML = msg.status;
    }

}