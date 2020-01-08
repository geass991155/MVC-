class visitor_profile_show_insert_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);//super
        this.position_id = position_id;
    } 
    prepareArgs() {
        this.php = false;
        this.addArgs('where_statement', '');
    }
    showResult(xhttp) {
        var content = ` 帳號<input type="text" name="insert" /><br/>
                        密碼<input type="text" name="insert" /><br/>
                        生日<input type="text" name="insert" /><br/>
                        電話<input type="text" name="insert" /><br/>
                        住址<input type="text" name="insert" /><br/>
                        <input type='button' onclick = '(new visitor_profile_do_insert_action("visitor_profile", "do_insert_action", "show_area")).run()' value="新增">
                                    `;
        //content += ['id'] + ' ' + ['name'] + ' ' + ['email'] + ' ' + ['tel'] + ' ' + ['addr'];
        //index為索引,0時就有id name email
        document.getElementById(this.position_id).innerHTML = content;
        this.loadModuleScript(this.module, "do_insert_action");
        
        
    }
}