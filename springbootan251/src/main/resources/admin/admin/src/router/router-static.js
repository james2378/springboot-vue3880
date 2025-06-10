import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import discusszhaopingangwei from '@/views/modules/discusszhaopingangwei/list'
    import news from '@/views/modules/news/list'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import examquestion from '@/views/modules/examquestion/list'
    import biyesheng from '@/views/modules/biyesheng/list'
    import discussqiuzhixinxi from '@/views/modules/discussqiuzhixinxi/list'
    import exampaper from '@/views/modules/exampaper/list'
    import storeup from '@/views/modules/storeup/list'
    import users from '@/views/modules/users/list'
    import zhaopingangwei from '@/views/modules/zhaopingangwei/list'
    import qiye from '@/views/modules/qiye/list'
    import forum from '@/views/modules/forum/list'
    import gangweiyingpin from '@/views/modules/gangweiyingpin/list'
    import discusskongzhongxuanjianghui from '@/views/modules/discusskongzhongxuanjianghui/list'
    import gerenjianli from '@/views/modules/gerenjianli/list'
    import xinxizixun from '@/views/modules/xinxizixun/list'
    import mianshihuifu from '@/views/modules/mianshihuifu/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import qiuzhixinxi from '@/views/modules/qiuzhixinxi/list'
    import xianshangmianshi from '@/views/modules/xianshangmianshi/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'
    import kongzhongxuanjianghui from '@/views/modules/kongzhongxuanjianghui/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/discusszhaopingangwei',
        name: '招聘岗位评论',
        component: discusszhaopingangwei
      }
          ,{
	path: '/news',
        name: '招聘资讯',
        component: news
      }
          ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
          ,{
	path: '/examquestion',
        name: '试题管理',
        component: examquestion
      }
          ,{
	path: '/biyesheng',
        name: '毕业生',
        component: biyesheng
      }
          ,{
	path: '/discussqiuzhixinxi',
        name: '求职信息评论',
        component: discussqiuzhixinxi
      }
          ,{
	path: '/exampaper',
        name: '试卷管理',
        component: exampaper
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/users',
        name: '管理员',
        component: users
      }
          ,{
	path: '/zhaopingangwei',
        name: '招聘岗位',
        component: zhaopingangwei
      }
          ,{
	path: '/qiye',
        name: '企业',
        component: qiye
      }
          ,{
	path: '/forum',
        name: '论坛管理',
        component: forum
      }
          ,{
	path: '/gangweiyingpin',
        name: '岗位应聘',
        component: gangweiyingpin
      }
          ,{
	path: '/discusskongzhongxuanjianghui',
        name: '空中宣讲会评论',
        component: discusskongzhongxuanjianghui
      }
          ,{
	path: '/gerenjianli',
        name: '个人简历',
        component: gerenjianli
      }
          ,{
	path: '/xinxizixun',
        name: '信息咨询',
        component: xinxizixun
      }
          ,{
	path: '/mianshihuifu',
        name: '面试回复',
        component: mianshihuifu
      }
          ,{
	path: '/exampaperlist',
        name: '试卷列表',
        component: exampaperlist
      }
          ,{
	path: '/qiuzhixinxi',
        name: '求职信息',
        component: qiuzhixinxi
      }
          ,{
	path: '/xianshangmianshi',
        name: '线上面试',
        component: xianshangmianshi
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/examrecord',
        name: '考试记录',
        component: examrecord
      }
          ,{
	path: '/kongzhongxuanjianghui',
        name: '空中宣讲会',
        component: kongzhongxuanjianghui
      }
        ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
