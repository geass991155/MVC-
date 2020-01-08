class in_profile_show_signin_page extends ActionHandler{
constructor(module, action, position_id){
    super(module, action);
    this.position_id = position_id;
    }
prepareArgs(){
    this.php = false;
    }
showResult(xhttp){
    var content = ` 帳號<input type="text" name="user"><br/>
                    密碼<input type="text" name="user"><br/>
                    <input type='button' onclick = '(new in_profile_do_signin_action("in_profile", "do_signin_action", "show_area")).run()' value="登入">
                                    `;
        document.getElementById(this.position_id).innerHTML = content;
        this.loadModuleScript(this.module, "do_signin_action");
        
}
}
