function SignUp()
{
    document.querySelector(".login-form-container").style.cssText ="display: none;";
    document.querySelector(".signup-form-container").style.cssText ="display: block;";
    document.querySelector(".container").style.cssText ="background:linear-gradient(to bottom, rgb(155, 212, 191), #71CEAC);";
    document.querySelector(".button-2").style.cssText ="display: block; margin-left:80px;";
    document.querySelector(".button-1").style.cssText ="display: none;";
}

function login()
{
    document.querySelector(".login-form-container").style.cssText ="display: block;";
    document.querySelector(".signup-form-container").style.cssText ="display: none;";
    document.querySelector(".container").style.cssText ="background:linear-gradient(to bottom, rgb(166, 248, 166), green);";
    document.querySelector(".button-2").style.cssText ="display: none;";
    document.querySelector(".button-1").style.cssText ="display: block; margin-left:80px;";
} 