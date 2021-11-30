import AuthModel from "../../models/minfo/AuthModel";
import { secondsToTime } from "../../utils/time";
import Validation from "../../utils/validation";
import Auth from "../../views/dynamics/minfo/Auth";

export default class AuthController{
    
    /**@param {Auth} AuthView*/
    constructor(AuthView){

        this.view = AuthView;

        this.model = new AuthModel();
    }

    mobileConfirm(){

        let res = this.mobilePageInputCheck();

        if(res){

            let params = {
                phone_numbers : this.view.state.mobile
            }

            this.model.getPhoneNumberCheck(params, (err, data)=>{

                if(data.result_code === env.SC.SUCCESS){

                    this.view.setState({page:"VerificationPage"});

                }else if(data.result_code === env.SC.REPETITIVE_PHONE_NUMBER){

                    this.view.setState({page:"PasswordPage"});
                }
            });
        }
    }

    mobilePageInputCheck(){

        let mobile_res = Validation.phoneNumber(this.view.state.mobile);

        if(mobile_res.valid){

            this.view.setState({
                mobile_error:false,
            });

            return true;

        }else{

            this.view.setState({
                mobile_error:mobile_res.message,
            });

            return false;
        }
    }

    passwordConfirm(){

        let res = this.passwordPageInputCheck();

        if(res){

            let vs = this.view.state;
            let params={
                phone_number: vs.mobile,
                password: vs.password
            }

            this.model.getLoginWithPassword(params, (err, data)=>{

                if(data.request_code === env.SC.SUCCESS){

                    window.location.href = env.PATHS.USER_DASHBOARD;

                }else{

                    this.view.setState({
                        password_error : "رمزعبور وارد شده اشتباه است."
                    });
                }
            });
        }

    }

    passwordPageInputCheck(){
        
        let password_res = Validation.password(this.view.state.password);

        if(password_res.valid){

            this.view.setState({
                password_error:false,
            });

            return true;

        }else{

            this.view.setState({
                password_error:password_res.message,
            });

            return false;
        }
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