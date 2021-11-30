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

                if(data.result_code === env.SC.SUCCESS){

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

    sendVerificationCode(cb){

        let params = {
            phone_number : this.view.state.mobile
        }

        this.model.getSendVerificationCode(params, (err, data)=>{

            if(typeof cb === "function")cb();

            if(data.result_code === env.SC.SUCCESS){

                this.startCountdown();

            }else if(data.result_code === env.SC.USER_ALREADY_VERIFIED){

                //TODO: what to do?

            }else{

                //TODO: what about other stuff?
            }
        });
    }

    startCountdown(){

        this.clearSmsCountdown();
        this.view.state.can_send_sms_again = false;
        this.view.state.timer = env.SMS_TIMER;
        this.view.state.timer_text = secondsToTime(this.view.state.timer);
        
        this.view.setState({
            timer : this.view.state.timer,
            timer_text: secondsToTime(this.view.state.timer),
        });

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

    verificationConfirm(){

        let res = this.verificationPageInputCheck();

        if(res){

            let params = {
                code: this.view.state.verification_code,
            }

            this.model.getCheckVerificationCode(params, (err, data)=>{

                if(data.result_code === env.SC.SUCCESS){
                    
                    this.clearSmsCountdown();

                    this.view.setState({page:"RegisterPage"});

                }else if(data.result_code === env.SC.INVALID_VERIFICATION_CODE){

                    this.view.setState({
                        verification_code_error: "کد تایید وارد شده اشتباه است."
                    });
                }

            });
        }
    }

    verificationPageInputCheck(){

        let res = Validation.verificationCode(this.view.state.verification_code);

        if(res.valid){

            this.view.setState({
                verification_code_error:false,
            });

            return true;

        }else{

            this.view.setState({
                verification_code_error:res.message,
            });

            return false;
        }
    }

    onInput(key, v){
        this.view.state[key] = v;
        this.view.setState(this.view.state);
    }

    subdomainInputCheck=()=>{

        clearTimeout(this.subdomain_input_timeout);

        this.subdomain_input_timeout = setTimeout(()=>{

            this.view.setState({subdomain_status:"loading", subdomain_message:""});

            let params = {username:this.view.state.subdomain};

            this.model.getCheckUsername(params, (err, data)=>{

                console.log(data);
                if(data.result_code===env.SC.SUCCESS){

                    this.view.setState({subdomain_status:"success", subdomain_message:"این نام قابل رزرو است"});

                }else if(data.result_code===env.SC.REPETITIVE_USERNAME){

                    this.view.setState({subdomain_status:"error", subdomain_message:"این نام قبلا ثبت شده است"});
                }
            })

        }, 1000);
    }

    RegisterPageInputCheck(){


    }

    registerConfirm(){
        this.view.setState({page:"RegisterSuccessPage"})
    }
}