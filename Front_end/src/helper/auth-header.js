
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export function authHeader() {
    var token = Vue.$cookies.get('admin')? true : false
    if (token){
        let persons = Vue.$cookies.get('admin');
        
        if (persons && persons.token){
            return { 'Authorization': 'Accessing ' + persons.token };
        } else {
            return {};
        }
    }else{
        return {};
    }
   
}