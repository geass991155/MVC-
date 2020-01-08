class visitor_profile_show_management_page extends ActionHandler{
constructor(module, action, position_id){
    super(module, action);
    this.position_id = position_id;
    }
prepareArgs(){
    this.php = false;
    }
showResult(xhttp){
    var str = `
        <input type = 'button' value = '登入' onclick = "(new in_profile_show_signinmu_page('in_profile', 'show_signinmu_page', 'show_area')).run()">
        <input type = 'button' value = '加入會員' onclick = "(new member_profile_show_insert_page('member_profile', 'show_insert_page', 'show_area')).run()">
        <input type = 'button' value = '活動查詢' onclick = "(new act_profile_do_select_action('act_profile', 'do_select_action', 'show_area')).run()">
        <br>
        <div id = "show_area"> </div>
        `;//div 可以讓button 等顯示於最上面
        document.getElementById(this.position_id).innerHTML = str;//postion_id抓取index中的content值
        this.loadModuleScript("member_profile", "show_insert_page");//載入所抓取的onclick的檔案
        this.loadModuleScript("act_profile", "do_select_action");
        this.loadModuleScript("in_profile", "show_signinmu_page");
        }
}
