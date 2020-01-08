class in_profile_show_signinmu_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);//super
        this.position_id = position_id;
    } 
    prepareArgs() {
        this.php = false;
        this.addArgs('where_statement', '');
    }
    showResult(xhttp) {
        var content = ` 您的帳號<input type="text" name="user"><br/>
                        您的密碼<input type="text" name="user"><br/>
                        <input type='button' onclick = '(new in_profile_do_signinmu_action("in_profile", "do_signinmu_action", "show_area")).run()' value="登入">
                                    `;
        document.getElementById(this.position_id).innerHTML = content;
        this.loadModuleScript(this.module, "do_signinmu_action");
        
        
    }
}