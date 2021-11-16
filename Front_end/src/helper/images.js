import baseUrl from '../service/baseUrl.js'

export function toDataUrl(url, callback) {
    if(!url.includes("data:image")){
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    } else {
        callback(url.replace(baseUrl, ''));
    }
};