class in_profile_show_log_page extends ActionHandler{
constructor(module, action, position_id){
    super(module, action);
    this.position_id = position_id;
    }
prepareArgs(){
    this.php = false;
    }
showResult(xhttp){
    var str = `
        <input type = 'button' value = '登入' onclick = "(new in_profile_show_signin_page('in_profile', 'show_signin_page', 'show_area')).run()">
        <div id = "show_area"> </div>`;//div 可以讓button 等顯示於最上面
        document.getElementById(this.position_id).innerHTML = str;//postion_id抓取index中的content值
       
        this.loadModuleScript(this.module, "show_signin_page");
        
}
}
