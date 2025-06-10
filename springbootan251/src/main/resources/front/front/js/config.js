
var projectName = '毕业生信息招聘平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '考试记录',
	url: '../examrecord/list.html'
}, 
{
	name: '错题本',
	url: '../examrecord/wrong.html'
},
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '空中宣讲会',
	url: './pages/kongzhongxuanjianghui/list.html'
}, 
{
	name: '招聘岗位',
	url: './pages/zhaopingangwei/list.html'
}, 
{
	name: '求职信息',
	url: './pages/qiuzhixinxi/list.html'
}, 

{
	name: '论坛信息',
	url: './pages/forum/list.html'
}, 
{
	name: '试卷列表',
	url: './pages/exampaper/list.html'
}, 
{
	name: '招聘资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbootan251/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"企业","menuJump":"列表","tableName":"qiye"}],"menu":"企业管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"空中宣讲会","menuJump":"列表","tableName":"kongzhongxuanjianghui"}],"menu":"空中宣讲会管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"招聘岗位","menuJump":"列表","tableName":"zhaopingangwei"}],"menu":"招聘岗位管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"毕业生","menuJump":"列表","tableName":"biyesheng"}],"menu":"毕业生管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"个人简历","menuJump":"列表","tableName":"gerenjianli"}],"menu":"个人简历管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"求职信息","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"信息咨询","menuJump":"列表","tableName":"xinxizixun"}],"menu":"信息咨询管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"岗位应聘","menuJump":"列表","tableName":"gangweiyingpin"}],"menu":"岗位应聘管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"线上面试","menuJump":"列表","tableName":"xianshangmianshi"}],"menu":"线上面试管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"面试回复","menuJump":"列表","tableName":"mianshihuifu"}],"menu":"面试回复管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试卷管理","tableName":"exampaper"}],"menu":"试卷管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试题管理","tableName":"examquestion"}],"menu":"试题管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"管理员","tableName":"users"}],"menu":"管理员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"论坛管理","tableName":"forum"}],"menu":"论坛管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"招聘资讯","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"考试记录","tableName":"examrecord"},{"buttons":["新增","查看","修改","删除"],"menu":"错题本","tableName":"examfailrecord"},{"buttons":["新增","查看","修改","删除"],"menu":"试卷列表","tableName":"exampaperlist"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"空中宣讲会列表","menuJump":"列表","tableName":"kongzhongxuanjianghui"}],"menu":"空中宣讲会模块"},{"child":[{"buttons":["查看","咨询","应聘"],"menu":"招聘岗位列表","menuJump":"列表","tableName":"zhaopingangwei"}],"menu":"招聘岗位模块"},{"child":[{"buttons":["新增","查看"],"menu":"求职信息列表","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息模块"}],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"空中宣讲会","menuJump":"列表","tableName":"kongzhongxuanjianghui"}],"menu":"空中宣讲会管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"招聘岗位","menuJump":"列表","tableName":"zhaopingangwei"}],"menu":"招聘岗位管理"},{"child":[{"buttons":["查看","审核"],"menu":"信息咨询","menuJump":"列表","tableName":"xinxizixun"}],"menu":"信息咨询管理"},{"child":[{"buttons":["查看","审核","线上面试"],"menu":"岗位应聘","menuJump":"列表","tableName":"gangweiyingpin"}],"menu":"岗位应聘管理"},{"child":[{"buttons":["查看"],"menu":"线上面试","menuJump":"列表","tableName":"xianshangmianshi"}],"menu":"线上面试管理"},{"child":[{"buttons":["查看","审核"],"menu":"面试回复","menuJump":"列表","tableName":"mianshihuifu"}],"menu":"面试回复管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试卷管理","tableName":"exampaper"}],"menu":"试卷管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试题管理","tableName":"examquestion"}],"menu":"试题管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"考试记录","tableName":"examrecord"},{"buttons":["新增","查看","修改","删除"],"menu":"错题本","tableName":"examfailrecord"},{"buttons":["新增","查看","修改","删除"],"menu":"试卷列表","tableName":"exampaperlist"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"空中宣讲会列表","menuJump":"列表","tableName":"kongzhongxuanjianghui"}],"menu":"空中宣讲会模块"},{"child":[{"buttons":["查看","咨询","应聘"],"menu":"招聘岗位列表","menuJump":"列表","tableName":"zhaopingangwei"}],"menu":"招聘岗位模块"},{"child":[{"buttons":["新增","查看"],"menu":"求职信息列表","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息模块"}],"roleName":"企业","tableName":"qiye"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"个人简历","menuJump":"列表","tableName":"gerenjianli"}],"menu":"个人简历管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"求职信息","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息管理"},{"child":[{"buttons":["查看"],"menu":"信息咨询","menuJump":"列表","tableName":"xinxizixun"}],"menu":"信息咨询管理"},{"child":[{"buttons":["查看"],"menu":"岗位应聘","menuJump":"列表","tableName":"gangweiyingpin"}],"menu":"岗位应聘管理"},{"child":[{"buttons":["查看","面试回复"],"menu":"线上面试","menuJump":"列表","tableName":"xianshangmianshi"}],"menu":"线上面试管理"},{"child":[{"buttons":["查看"],"menu":"面试回复","menuJump":"列表","tableName":"mianshihuifu"}],"menu":"面试回复管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"考试记录","tableName":"examrecord"},{"buttons":["查看"],"menu":"错题本","tableName":"examfailrecord"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"空中宣讲会列表","menuJump":"列表","tableName":"kongzhongxuanjianghui"}],"menu":"空中宣讲会模块"},{"child":[{"buttons":["查看","咨询","应聘"],"menu":"招聘岗位列表","menuJump":"列表","tableName":"zhaopingangwei"}],"menu":"招聘岗位模块"},{"child":[{"buttons":["新增","查看"],"menu":"求职信息列表","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息模块"}],"roleName":"毕业生","tableName":"biyesheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
