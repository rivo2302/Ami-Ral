import https from './https.js'
import http from './http.js'

class Admin {
    
// admin : object contenant l'inforamtion de l'admin

    login(admin) {
        return http.post('/user/login',admin);
    }
    
    register(admin) {

        return http.post('/user/signup',admin)

    }
    test(){
        return http.get('/test')
    }
    getOne(id) {

        return https.post('/auth/show',{id:id , type:'Administrateur'})
    }
    
    delete(id) {

        return https.delete(`/auth/delete/${id}`)
    }
    
    Update(admin) {

        return https.put(`/auth/update/${admin.id}`,admin)
    }
  
}
export default new Admin()