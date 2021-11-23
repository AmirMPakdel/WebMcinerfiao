
export default class Observer{

    static observers = {
        
        onUserFetched:[],
    }

    static add(name, func){

        this.observers[name].push(func);
    }

    static remove(name, func){

        this.observers[name].forEach((e,i) => {
            
            if(e === func){
                observers[name].splice(i, 1);
            }
        });
    }
    
    static execute(name, params){
    
        this.observers[name].forEach(func => {
            
            if(typeof func === "function"){
                func(params);
            }
        });
    }
}