import Vue from 'vue'
import Router from 'vue-router'
import index from '@/View/index'
import searchHot from '@/View/searchHot'
// 热门景点
import child_Hot_Spots from '@/View/child_Hot_Spots'
// 景点详情
import spots_Detailed from '@/View/spots_Detailed'
//旅游套餐
import child_Travel_Packages from '@/View/child_Travel_Packages'
// 套餐详情
import package_Details from '@/View/package_Details'
// 关于我们
import child_About_Us from '@/View/child_About_Us'
// 客户反馈
import child_Customer_feedback from '@/View/child_Customer_feedback' 
// 联系我们
import child_Contact_Us from '@/View/child_Contact_Us' 
// 旅游签证
import child_Tourist_Visa from '@/View/child_Tourist_Visa' 

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/searchHot',
      name: 'searchHot',
      component: searchHot
    },
    { //热门景点
      path: '/child_Hot_Spots',
      name: 'child_Hot_Spots',
      component: child_Hot_Spots
    },
    { //景点详情
      path: '/spots_Detailed',
      name: 'spots_Detailed',
      component: spots_Detailed
    }, 
    {  //旅游套餐
      path: '/child_Travel_Packages',
      name: 'child_Travel_Packages',
      component: child_Travel_Packages
    },
    {  //旅游套餐
      path: '/package_Details',
      name: 'package_Details',
      component: package_Details
    },
    {  // 关于我们
      path: '/child_About_Us',
      name: 'child_About_Us',
      component: child_About_Us
    },
    {  // 客户反馈
      path: '/child_Customer_feedback',
      name: 'child_Customer_feedback',
      component: child_Customer_feedback
    },
    {  // 联系我们
      path: '/child_Contact_Us',
      name: 'child_Contact_Us',
      component: child_Contact_Us
    },
    {  // 旅游签证
      path: '/child_Tourist_Visa',
      name: 'child_Tourist_Visa',
      component: child_Tourist_Visa
    }
    
    


  ]
})
