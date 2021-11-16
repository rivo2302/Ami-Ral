
import https from './https.js'


class Map {
    
// climat: object contenant l'inforamtion du climat

    all() {
        return https.post('/region/list/fr');
    }

    get(id, langue) {
        return https.get('/region/getDetails/'+langue+'/'+id);
    }
}
export default new Map()