import React, { Component } from "react";
import AuthController from "../../../controllers/minfo/AuthController";
import Loading from "../../components/global/Loading";
import MainButton from "../../components/global/MainButton";
import TextInput from "../../components/global/TextInput";
import styles from "./Auth.module.css";

/**
* Props of Auth Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class Auth extends Component {

    constructor(props){

        super(props);

        this.controller = new AuthController(this);

        this.state={
            page: "RegisterPage",

            mobile:"",
            password:"",
            sms_code:"",

            first_name:"",
            last_name:"",
            national_code:"",
            register_password:"",
            password_confirm:"",


            timer:0,
            timer_text:"",
        }
    }

    componentDidMount(){
    }

    onMobileInput=(v)=>{
        this.setState({mobile:v});
    }

    onMobileConfirm=()=>{
        this.controller.mobileConfirm();
    }

    onPasswordInput=(v)=>{
        this.setState({password:v});
    }

    onPasswordConfirm=()=>{
        this.controller.passwordConfirm();
    }

    onForgotLink=()=>{
        this.setState({page:"ForgotPasswordVerificationPage"});
    }

    onSmsCodeInput=(v)=>{
        this.setState({sms_code:v});
    }

    startSmsCountdown=()=>{
        this.controller.startSmsCountdown();
    }

    onSendSmsAgain=()=>{
        this.startSmsCountdown();
    }

    onSmsCodeConfirm=()=>{
        this.controller.smsCodeConfirm();
    }

    onInput=(key,v)=>{
        this.controller.onInput(key, v);
    }

    onRegisterConfirm=()=>{
        this.controller.registerConfirm();
    }
    
    render(){
        return(
            <div style={{width:"100vw", display:"flex", flexDirection:"column", alignItems:"center"}}>

                <h1 style={{marginTop:"4rem"}}>Authentication Page</h1>

                {
                    this.state.page === "Loading"?
                    <Loading style={{minHeight:"50vh"}}/>:null
                }
                {
                    this.state.page === "MobilePage"?
                    <MobilePage parent={this}/>:null
                }
                {
                    this.state.page === "PasswordPage"?
                    <PasswordPage parent={this}/>:null
                }
                {
                    this.state.page === "VerificationPage"?
                    <VerificationPage parent={this}/>:null
                }
                {
                    this.state.page === "RegisterPage"?
                    <RegisterPage parent={this}/>:null
                }
                {
                    this.state.page === "RegisterSuccessPage"?
                    <RegisterSuccessPage parent={this}/>:null
                }
                {
                    this.state.page === "ForgotPasswordVerificationPage"?
                    <ForgotPasswordVerificationPage parent={this}/>:null
                }
                {
                    this.state.page === "NewPasswordPage"?
                    <NewPasswordPage parent={this}/>:null

                }
                {
                    this.state.page === "NewPasswordSuccessPage"?
                    <NewPasswordSuccessPage parent={this}/>:null
                }
                
            </div>
        )
    }
}

/**
* Props of MobilePage Component
* @typedef MobilePageProps
* @property {Auth} parent
* 
* @extends {Component<MobilePageProps>}
*/
class MobilePage extends Component{

    render(){
        let p = this.props.parent;
        let ps = p.state;
        return(
            <>

            <div className={styles.info}>
                {"برای ثبت نام یا ورود ابتدا شماره موبایل خود را وارد نمایید."}
            </div>

            <TextInput placeholder={"شماره موبایل"}
            className={styles.btn+" blc2"}
            value={ps.mobile}
            onChange={p.onMobileInput}/>

            <MainButton  style={{marginTop:"2rem", width:"20rem"}} 
            title={"تایید"}
            onClick={p.onMobileConfirm}/>

            <p style={{direction:"rtl", width:"20rem", textAlign:"center", marginTop:"1rem", fontSize:"11px"}}>
                با ورود و یا ثبت نام در مینفو شما 
                <a> شرایط و قوانین </a>
                استفاده از سرویس های سایت مینفو و 
                <a> قوانین حریم خصوصی </a>
                آن را می‌پذیرید.
            </p>

            </>
        )
    }
}

/**
* Props of PasswordPage Component
* @typedef PasswordPageProps
* @property {Auth} parent
* 
* @extends {Component<PasswordPageProps>}
*/
class PasswordPage extends Component{

    render(){
        let p = this.props.parent;
        let ps = p.state;
        return(
            <>
                    
            <div className={styles.info}>
                {"برای ورود، رمزعبور حساب کاربری خودرا وارد نمایید."}
            </div>

            <TextInput placeholder={"رمز عبور"}
            className={styles.btn+" blc2"}
            value={ps.password}
            onChange={p.onPasswordInput}/>

            <a onClick={p.onForgotLink} 
            style={{direction:"rtl", textAlign:"center", marginTop:"0.5rem", fontSize:"13px"}}>
                {"فراموشی رمزعبور"}
            </a>

            <MainButton  style={{marginTop:"1rem", width:"20rem"}} 
            title={"تایید"}
            onClick={p.onPasswordConfirm}/>

            </>
        )
    }
}

/**
* Props of VerificationPage Component
* @typedef VerificationPageProps
* @property {Auth} parent
* 
* @extends {Component<VerificationPageProps>}
*/
class VerificationPage extends Component{

    componentDidMount(){
        this.props.parent.startSmsCountdown();
    }

    render(){
        let p = this.props.parent;
        let ps = p.state;
        return(
            <>
                        
            <div className={styles.info} style={{display:"inline"}}>
                {"حساب کاربری با این شماره موبایل وجود ندارد. برای ثبت نام کد ارسالی به شماره موبایل "}
                <span className={"ftc2"}>{"09118015081"}</span>
                {" را وارد نمایید."}
            </div>

            <TextInput placeholder={"کد تایید"}
            className={styles.btn+" blc2"}
            value={ps.sms_code}
            onChange={p.onSmsCodeInput}/>

            {
                ps.can_send_sms_again?

                <a style={{marginTop:"0.8rem"}}
                onClick={p.onSendSmsAgain}>
                    {"ارسال مجدد"}
                </a>
                :
                <div className={"cpnts"} style={{marginTop:"0.8rem", display:"flex", direction:"rtl"}}>
                    {"ارسال مجدد کد تا "}
                    <div style={{minWidth:"2.6rem", textAlign:"center", fontWeight:700}}>{ps.timer_text}</div>
                    {" دیگر"}
                </div>
            }

            <MainButton  style={{marginTop:"1rem", width:"20rem"}} 
            title={"تایید"}
            onClick={p.onSmsCodeConfirm}/>

            </>
        )
    }
}

/**
* Props of RegisterPage Component
* @typedef RegisterPageProps
* @property {Auth} parent
* 
* @extends {Component<RegisterPageProps>}
*/
class RegisterPage extends Component{

    render(){
        let p = this.props.parent;
        let ps = p.state;
        return(
            <>

            <div className={styles.info} style={{marginTop:"4rem"}}>
                {"ثبت نام در مینفو"}
            </div>

            <TextInput placeholder={"نام"}
            className={styles.btn+" blc2"}
            value={ps.first_name}
            onChange={(v)=>p.onInput("first_name",v)}/>

            <TextInput placeholder={"نام خانوادگی"}
            className={styles.btn+" blc2"}
            value={ps.last_name}
            style={{marginTop:"0.8rem"}}
            onChange={(v)=>p.onInput("last_name",v)}/>

            <TextInput placeholder={"کدملی"}
            className={styles.btn+" blc2"}
            value={ps.national_code}
            style={{marginTop:"0.8rem"}}
            onChange={(v)=>p.onInput("national_code",v)}/>

            <TextInput placeholder={"رمزعبور"}
            className={styles.btn+" blc2"}
            value={ps.register_password}
            style={{marginTop:"0.8rem"}}
            onChange={(v)=>p.onInput("register_password",v)}/>

            <TextInput placeholder={"تکرار رمزعبور"}
            className={styles.btn+" blc2"}
            value={ps.password_confirm}
            style={{marginTop:"0.8rem"}}
            onChange={(v)=>p.onInput("password_confirm",v)}/>

            <MainButton  style={{marginTop:"0.8rem", width:"20rem"}} 
            title={"ثبت نام"}
            onClick={p.onRegisterConfirm}/>

            </>
        )
    }
}

/**
* Props of RegisterSuccessPage Component
* @typedef Props
* @property {Auth} parent
* 
* @extends {Component<Props>}
*/
class RegisterSuccessPage extends Component{

    render(){
        let p = this.props.parent;
        let ps = p.state;
        return(
            <>

            <div className={styles.info}>
                <img style={{width:"4rem", marginBottom:"2rem"}} src={"/svg2/success_green.svg"}/>
                {"به مینفو خوش آمدید."}
            </div>
            
            <MainButton  style={{marginTop:"4rem", width:"20rem"}} 
            title={"ورود"}
            onClick={this.onSmsCodeConfirm}/>

            </>
        )
    }
}

/**
* Props of ForgotPasswordVerificationPage Component
* @typedef Props
* @property {Auth} parent
* 
* @extends {Component<Props>}
*/
class ForgotPasswordVerificationPage extends Component{

    render(){
        let p = this.props.parent;
        let ps = p.state;
        return(
            <>
                    
            <div className={styles.info}>
                {"برای تغییر رمزعبور ابتدا کد ارسالی به شماره موبایل خود را وارد نمایید."}
            </div>

            <TextInput placeholder={"کد تایید"}
            className={styles.btn+" blc2"}
            value={this.state.sms_code}
            onChange={this.onSmsCodeInput}/>

            {
                this.state.can_send_sms_again?

                <a style={{marginTop:"0.8rem"}}
                onClick={this.onSendSmsAgain}>
                    {"ارسال مجدد"}
                </a>
                :
                <div className={"cpnts"} style={{marginTop:"0.8rem", display:"flex", direction:"rtl"}}>
                    {"ارسال مجدد کد تا "}
                    <div style={{minWidth:"2.6rem", textAlign:"center", fontWeight:700}}>{this.state.timer_text}</div>
                    {" دیگر"}
                </div>
            }

            <MainButton  style={{marginTop:"1rem", width:"20rem"}} 
            title={"تایید"}
            onClick={this.onSmsCodeConfirm}/>

            </>
        )
    }
}

/**
* Props of NewPasswordPage Component
* @typedef Props
* @property {Auth} parent
* 
* @extends {Component<Props>}
*/
class NewPasswordPage extends Component{

    render(){
        let p = this.props.parent;
        let ps = p.state;
        return(
            <>

            <div className={styles.info}>
                {"رمزعبور جدید حساب کاربری خود را وارد نمایید."}
            </div>

            <TextInput placeholder={"رمزعبور جدید"}
            className={styles.btn+" blc2"}
            value={this.state.sms_code}
            onChange={this.onSmsCodeInput}/>

            <TextInput placeholder={"تکرار رمزعبور جدید"}
            className={styles.btn+" blc2"}
            value={this.state.sms_code}
            style={{marginTop:"0.8rem"}}
            onChange={this.onSmsCodeInput}/>

            <MainButton  style={{marginTop:"2rem", width:"20rem"}} 
            title={"تایید"}
            onClick={this.onSmsCodeConfirm}/>

            </>
        )
    }
}

/**
* Props of NewPasswordSuccessPage Component
* @typedef Props
* @property {Auth} parent
* 
* @extends {Component<Props>}
*/
class NewPasswordSuccessPage extends Component{

    render(){
        let p = this.props.parent;
        let ps = p.state;
        return(
            <>

            <div className={styles.info}>
                <img style={{width:"4rem", marginBottom:"2rem"}} src={"/svg2/success_green.svg"}/>
                {"رمزعبور حساب کاربری شما با موفقیت تغییر کرد."}
            </div>

            <MainButton  style={{marginTop:"4rem", width:"20rem"}} 
            title={"ادامه"}
            onClick={this.onSmsCodeConfirm}/>

            </>
        )
    }
}