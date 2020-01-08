class member_profile_show_management_page extends ActionHandler{
constructor(module, action, position_id){
    super(module, action);
    this.position_id = position_id;
    }
prepareArgs(){
    this.php = false;
    }
showResult(xhttp){
    var str = `
        <input type = 'button' value = '新增' onclick = "(new member_profile_show_insert_page('member_profile', 'show_insert_page', 'show_area')).run()">
        <input type = 'button' value = '修改' onclick = "(new member_profile_show_update_list('member_profile', 'show_update_list', 'show_area')).run()">
        <input type = 'button' value = '刪除' onclick = "(new member_profile_show_delete_list('member_profile', 'show_delete_list', 'show_area')).run()">
        <input type = 'button' value = '查詢' onclick = "(new member_profile_do_select_action('member_profile', 'do_select_action', 'show_area')).run()">
        <div id = "show_area"> </div>
        `;//div 可以讓button 等顯示於最上面
        document.getElementById(this.position_id).innerHTML = str;//postion_id抓取index中的content值
        this.loadModuleScript(this.module, "show_insert_page");//載入所抓取的onclick的檔案
        this.loadModuleScript(this.module, "show_update_list");
        this.loadModuleScript(this.module, "show_delete_list");
        this.loadModuleScript(this.module, "do_select_action");
}
}
