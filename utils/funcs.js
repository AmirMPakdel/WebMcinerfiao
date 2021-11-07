
const moment = require("jalali-moment");

/** for multiselect fields
 * @param {string} value 
 * @param {Array} array
 * @returns {Boolean}
 */
export function existsInArray(value, array){

    if(isNaN(Number(value))){

        if(array.indexOf(value) !== -1){
            return true;
        }else{
            return false;
        }

    }else{

        if(value && (array.indexOf(value.toString()) !== -1 || array.indexOf(Number(value)) !== -1)){
            return true;
        }else{
            return false;
        }
    }
}

/** for multiselect fields
 * @param {string} value 
 * @param {Array} array
 * @returns {Array}
 */
export function toggleMultiSelect(value, array){
    let i = array.indexOf(value);
    if(i !== -1){
        array.splice(i, 1);
        return array;
    }else{
        array.push(value);
        return array;
    }
}

export function getCurrentMiladiDate() {
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy+"/"+mm+"/"+dd;
    return moment.from(today,"YYYY/MM/DD").locale('fa').format('YYYY/MM/DD')
}

export function shamsi2Miladi(shamsi, seperator){

    let res =  moment.from(shamsi, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');

    if(seperator){
        res = res.split("/").join(seperator);
    }

    if(res === "Invalid date"){
        return false;
    }

    return res;
}

export function getUrlPart(order){
    let array = window.location.href.split("/");
    return(array[order+2]);
}

export function getParamByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}