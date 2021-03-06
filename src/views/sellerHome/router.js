import App from './App'
import addBrand from './pages/addBrand.vue'
import addModel from './pages/addModel.vue'
import addCatagory from './pages/addCatagory.vue'
import addService from './pages/addService.vue'
import orderList from './pages/orderList.vue'
import publishPhone from './pages/publishPhone.vue'
import orderDetail from './pages/orderDetail.vue'
import updateMsg from './pages/updateMsg.vue'
import payBail from './pages/payBail.vue'
import service from './pages/service.vue'
import addServices from './pages/addServices.vue'
import shopWallet from './pages/shopWallet.vue'
import viewServices from './pages/viewServices.vue'
import serviceDetail from './pages/serviceDetail.vue'
import deletePhone from './pages/deletePhone.vue'
import updateService from './pages/updateService.vue'
import entry from './pages/chooseEntry.vue'
import manageCoupon from './pages/manageCoupon.vue'
import showPhones from './pages/showPhones.vue'
import updatePhone from './pages/updatePhone.vue'
import shareuser from './pages/shareuser.vue'
import share from './pages/share.vue'


export default [{
  path: '/sellerHome',
  // redirect: '/sellerHome?nickName=Prince、&gender=1&avatarUrl=https://wx.qlogo.cn/mmopen/vi_32/ISOnrKibvcxHgSnJpwqBeicoWdPz3DheO5mj2nicwgBhf5MALRNQHBcXJ6Qg1vTaMjVpsRmnGPTV3fOxqXChhznfQ/0&openid=oFosP5Uq0wD3hyAmO07jSLMylTwk',
  component: App
},
{
  path: '/addBrand',
  component: addBrand
},
{
  path: '/addModel',
  component: addModel
},
{
  path: '/addCatagory',
  component: addCatagory
},
{
  path: '/addService',
  component: addService
},
{
  path: '/orderList/:state',
  component: orderList
},
{
  path: '/publishPhone',
  component: publishPhone
},
{
  path: '/orderDetail',
  component: orderDetail
},
{
  path: '/updateMsg',
  component: updateMsg
},
{
  path: '/payBail',
  component: payBail
},
{
  path: '/service',
  component: service
},
{
  path: '/addServices',
  component: addServices,
  meta: {
    keepAlive: true // 需要被缓存
  }
},
{
  path: '/shopWallet',
  component: shopWallet
}, 
{
  path: '/viewServices',
  component: viewServices
},
{
  path: '/serviceDetail',
  component: serviceDetail
},
{
  path: '/deletePhone',
  component: deletePhone
},
{
  path: '/updateService',
  component: updateService
}, 
{
  path: '/chooseEntry',
  component: entry
},
{
  path: '/manageCoupon',
  component: manageCoupon
},
{
  path: '/showPhones',
  component: showPhones
},
{
  path: '/updatePhone',
  component: updatePhone
},
{
  path: '/share',
  component: share
},
{
  path: '/shareuser',
  component: shareuser
}]

