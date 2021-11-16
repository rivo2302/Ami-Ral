import https from './https.js'


class Plantes {
    
// plante : object contenant l'inforamtion du plante

    register(plante) {

        
        return https.post('/plante/add',plante);
    }
    
    getOne(langage,id_plante) {

        return https.get(`/plante/getDetails/${langage}/${id_plante}`)
    }
    getAll(langage,nbr_list,start1) {
        var start
        if(start1 ==undefined || start1 == null){
            start = 0
        }else{
            start = start1
        }
        return https.get(`/plante/list/${langage}/${nbr_list}/${start}`)
    }
   delete(id) {

        return https.delete(`/plante/${id}`)
    }
    Update(plante) {

        return https.put(`/plante/update/${plante.id}`,plante)
    }
  
}
export default new Plantes()