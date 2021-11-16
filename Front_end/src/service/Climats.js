
import https from './https.js'


class Climats {
    
// climat: object contenant l'inforamtion du climat

    register(climat) {

        
        return https.post('/climat/create',climat);
    }
    getOne(langage,id) {

        return  https.get(`/climat/getDetails/${langage}/${id}`)
    }
    getAll(langage,nbr_list) {

        return  https.get(`/climat/list/${langage}/${nbr_list}`)
    }
    delete(id) {

        return https.delete(`/climat/${id}`)
    }
    Update(climat) {

        return https.put(`/climat/update/${climat.id}`,climat)
    }
}
export default new Climats()