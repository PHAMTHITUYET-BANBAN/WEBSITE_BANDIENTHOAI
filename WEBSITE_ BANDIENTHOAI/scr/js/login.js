
function login(){
    const userName =document.querySelectorAll(".group-input input")[0]
    const pw =document.querySelectorAll(".group-input input")[1]
    const confirmLogin=document.querySelector(".btn-login")
    const account = (localStorage.getItem("account_ct188")) ?  (localStorage.getItem("account_ct188")): null

    function showError(input,mess_error='no caption') {
        input.style.border = "1px solid red"
        const mess=input.parentElement.querySelector(".mess-error")
        mess.innerHTML=mess_error;
        input.focus()
    }

    function showSuccess(input) {
        input.style.border = "1px solid rgba(128, 128, 128, 0.548)"
        const mess=input.parentElement.querySelector(".mess-error")
        mess.innerHTML=''
    }

    confirmLogin.addEventListener("click",e=>{
        if(account!=null){
            const accountLogin =JSON.parse(account)
            if(accountLogin.user_name==userName.value.trim()){
                showSuccess(userName);
                if(accountLogin.password!=pw.value.trim()){
                    showError(pw,"Sai mật khẩu !!!")
                }else{
                    showSuccess(pw)
                    alert("Đăng nhập thành công")
                    document.querySelector('.form-login').onsubmit = function () {
                        return true
                    }
                }
            }else{
                showError(userName,"Tài Khoản không Tồn tại!!!")
            }
        }else{
            alert("chua co tai khoan nao duoc dang ky ")
        }
    })
    
}

login();