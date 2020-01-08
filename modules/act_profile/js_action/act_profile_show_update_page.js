class act_profile_show_update_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);//super
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
        this.php_action='do_select_action';
        //var value=" ";
        var txt="";
        var i;
        var name = document.getElementsByName('update');//傳所有的流水號成為陣列a
        //接收name
        for (var i = 0; i < name.length; i++) {//一個一個對照流水號
            if (name[i].checked) {//確認所點入的流水號
                txt=name[i].value;//.value抓input的value
            } 
        }//接收name
        
        this.addArgs('id', txt);//傳去select再傳回成為obj
        console.log(txt);
    }
    ajax_success(xhttp) {
        var json_str = xhttp.responseText;
        var obj = JSON.parse(json_str);
        console.log(obj['id']);
        console.log(obj['data_set']);
            var content = "<input type=hidden name='insert' value='"+obj['id']+"'>";
                content+=`活動<input type="text" name="insert" value=''/><br/>
                          日期<input type="date" name="insert" value=''/><br/>
                          地點<input type="text" name="insert" value=''/><br/>
                          
                          <input type='button' onclick = '(new act_profile_do_update_action("act_profile", "do_update_action", "show_area")).run()' value="修改">
                                    `;
                    document.getElementById(this.position_id).innerHTML = content;
                    this.loadModuleScript(this.module, "do_update_action");
            
    }
    ajax_error(msg) {
        document.getElementById(this.position_id).innerHTML = msg.status;
    }
        
    }
