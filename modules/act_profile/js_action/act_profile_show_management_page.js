class act_profile_show_management_page extends ActionHandler{
constructor(module, action, position_id){
    super(module, action);
    this.position_id = position_id;
    }
prepareArgs(){
    this.php = false;
    }
showResult(xhttp){
    var str = `
        <input type = 'button' value = '活動新增' onclick = "(new act_profile_show_insert_page('act_profile', 'show_insert_page', 'show_area')).run()">
        <input type = 'button' value = '活動修改' onclick = "(new act_profile_show_update_list('act_profile', 'show_update_list', 'show_area')).run()">
        <input type = 'button' value = '活動刪除' onclick = "(new act_profile_show_delete_list('act_profile', 'show_delete_list', 'show_area')).run()">
        <input type = 'button' value = '活動查詢' onclick = "(new act_profile_do_select_action('act_profile', 'do_select_action', 'show_area')).run()">
        <div id = "show_area"> </div>
        `;//div 可以讓button 等顯示於最上面
        document.getElementById(this.position_id).innerHTML = str;
        this.loadModuleScript(this.module, "do_select_action");
        this.loadModuleScript(this.module, "show_insert_page");
        this.loadModuleScript(this.module, "show_delete_list");
        this.loadModuleScript(this.module, "show_update_list");
        }
}