import AuthModel from "../../models/minfo/AuthModel";
import { secondsToTime } from "../../utils/time";
import Auth from "../../views/dynamics/minfo/Auth";

export default class AuthController{
    
    /**@param {Auth} AuthView*/
    constructor(AuthView){

        this.view = AuthView;

        this.model = new AuthModel();
    }

    mobileConfirm(){
        this.view.setState({page:"PasswordPage"})
    }

    passwordConfirm(){
        
    }

    startSmsCountdown(){

        this.clearSmsCountdown();
        this.view.state.can_send_sms_again = false;
        this.view.state.timer = env.SMS_TIMER;
        this.view.state.timer_text = secondsToTime(this.view.state.timer);
        this.view.sms_interval = setInterval(()=>{

            if(this.view.state.timer){
                this.view.setState({
                    timer : this.view.state.timer-1,
                    timer_text: secondsToTime(this.view.state.timer-1),
                });
            }else{
                this.view.setState({
                    can_send_sms_again:true
                });
                this.clearSmsCountdown();
            }
            
        }, 80)
    }

    clearSmsCountdown(){
        clearInterval(this.view.sms_interval);
    }

    smsCodeConfirm(){
        this.clearSmsCountdown();
        this.view.setState({page:"RegisterPage"})
    }

    onInput(key, v){
        this.view.state[key] = v;
        this.view.setState(this.view.state);
    }

    registerConfirm(){
        this.view.setState({page:"RegisterSuccessPage"})
    }
}