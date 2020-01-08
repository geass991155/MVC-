class in_profile_show_management_page extends ActionHandler{
constructor(module, action, position_id){
    super(module, action);
    this.position_id = position_id;
    }
prepareArgs(){
    this.php = false;
    }
showResult(xhttp){
    var str = `
        <input type='button' value='活動管理' onclick="(new act_profile_show_management_page('act_profile','show_management_page','all_in')).run()">
        <input type='button' value='會員管理' onclick="(new member_profile_show_management_page('member_profile','show_management_page','all_in')).run()">
        <div id='all_in'></div>
        `;//div 可以讓button 等顯示於最上面
        document.getElementById(this.position_id).innerHTML = str;//postion_id抓取index中的content值
        this.loadModuleScript("act_profile", "show_management_page");
        this.loadModuleScript("member_profile", "show_management_page");//載入所抓取的onclick的檔案
        }
}