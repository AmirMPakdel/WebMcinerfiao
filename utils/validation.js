import { perisanNum2eng } from "./persian";

export class IsValid {

    static phoneNumberIsValid(str, options={}){
        
        if(typeof str !== "string"){
            return false;
        }
        if(str.length != 11){
            return false;
        }
        if(str[0] !== "0" && str[1] !== "9"){
            return false;
        }
        return true;
    }

    static passwordIsValid(str, options={}){

        if(typeof str !== "string"){
            return false;
        }
        if(str.length < 8 || str.length > 64){
            return false;
        }
        return true;
    }
}

export class InputFilter {

    static phoneNumberInputFilter(str, options={}){

        if(typeof str !== "string") return "";

        let new_t = str.match(/^[0-9]+$/);
        
        if(new_t && new_t.join){
            return new_t.join("");
        }
     
        return false;
    }

    static passwordInputFilter(str, options={}){

        return str;
    }
}

export default class Validation{

    static phoneNumber(str, options={}){

        let res = IsValid.phoneNumberIsValid(str, options);

        if(res){
            return {valid:true, message:""}
        }else{
            return {valid:false, message:"شماره موبایل وارد شده نامعتبر است."}
        }
    }

    static password(str, options={}){

        let res = IsValid.passwordIsValid(str, options);

        if(res){
            return {valid:true, message:""}
        }else{
            return {valid:false, message:"رمزعبور وارد شده نامعتبر است."}
        }
    }
}

export function onlyPersianChar(str){

    if(str==="" || str===null || str===undefined){
        return true;
    }

    let p = /^[\u0600-\u06FF\s]+$/;

    if (!p.test(str)) {
        return false;
    }

    return true;
}

export function onlyNumber(str){

    if(str==="" || str===null || str===undefined){
        return true;
    }

    let num = perisanNum2eng(str); 
    num = Number(num);

    if(isNaN(num)){
        return false;
    }
    
    return true;
}

export function persianWithNum(str){

    if(str==="" || str===null || str===undefined){
        return true;
    }

    let p = /^[\u0600-\u06FF\s 0-9]+$/;

    if (!p.test(str)) {
        return false;
    }

    return true;
}


export function checkCodeMeli(code)
{
   var L=code.length;
 
   if(L<8 || parseInt(code,10)==0) return false;
   code=('0000'+code).substr(L+4-10);
   if(parseInt(code.substr(3,6),10)==0) return false;
   var c=parseInt(code.substr(9,1),10);
   var s=0;
   for(var i=0;i<9;i++)
      s+=parseInt(code.substr(i,1),10)*(10-i);
   s=s%11;
   return (s<2 && c==s) || (s>=2 && c==(11-s));
   return true;
}

export const persian_input_valid = function(t){

   let p = /^[\u0600-\u06FF\s]+$/;
   if (!p.test(str)) {
       return false;
   }else{
       return true;
   }
}

export const mobile_validation = function(t){

   if(typeof t !== "string") return false;

   if(t.length >= 100) return false;

   if(t.length>=11 && t.length<=13) return true;
}

export const password_validation = function(t){

   if(typeof t !== "string") return false;

   if(t.length >= 100) return false;

   if(t.length >= 8) return true;
}