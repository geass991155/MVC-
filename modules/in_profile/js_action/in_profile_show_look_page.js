class in_profile_show_look_page extends ActionHandler{
constructor(module, action, position_id){
    super(module, action);
    this.position_id = position_id;
    }
prepareArgs(){
    this.php = false;
    }
showResult(xhttp){
    var str = `
        <input type='button' value='活動查詢' onclick="(new act_profile_do_select_action('act_profile','do_select_action','all_in')).run()">
        <input type='button' value='加入活動' onclick="(new member_profile_show_update_list('member_profile','show_update_list','all_in')).run()">
        <div id='all_in'></div>
        `;//div 可以讓button 等顯示於最上面
        document.getElementById(this.position_id).innerHTML = str;//postion_id抓取index中的content值
        this.loadModuleScript("member_profile", "show_update_list");//載入所抓取的onclick的檔案
        this.loadModuleScript("act_profile", "do_select_action");
        }
}