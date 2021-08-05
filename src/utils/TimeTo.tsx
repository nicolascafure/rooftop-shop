import dayjs from 'dayjs'
import { IProduct } from '../interfaces/iShopStore'
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
declare module 'dayjs' {
    interface Dayjs {
        toNow(boolean:boolean) :any
    }
}

const timeTo=(product:IProduct)=>{
    if(product.offer ===null){
      return
    }else{
     return  dayjs(product?.offer.expires_at).toNow(true)}
  }

  export default timeTo