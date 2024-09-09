const listInput = document.querySelectorAll('.group-input input');
function validateSignUp() {
    if (listInput) {
        const userName = listInput[0]
        const yourName = listInput[1]
        const pw = listInput[2]
        const pw_cf = listInput[3]
        const btnConfirmRegister = document.querySelector('.confirm-register')

        function check(isCheck) {
            let isTrue = true
            Object.keys(isCheck).forEach(key => {
                isTrue = isCheck[key]
            })
            return isTrue
        }

        const checks = {
            0: true,
            1: true,
            2: true,
            3: true
        }

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
        
        if (btnConfirmRegister) {

            btnConfirmRegister.addEventListener("click", e => {

                for (var i = 0; i < listInput.length; i++) {
                    if (checkFillEmpty(listInput[i])) {
                        showError(listInput[i],'không được bỏ trống');
                        checks[i] = false;
                    } else {
                        showSuccess(listInput[i])
                        checks[i] = true;
                    }
                }



                function checkLength(input, checkIndex, min = 3, max = 20, messError_min = "no notify", messError_max = 'no notify') {
                    if (checkIndex) {
                        if (input.value.trim().length < min) {
                            checkIndex = false;
                            showError(input,messError_min)
                        } else if (input.value.trim().length > max) {
                            checkIndex = false
                            showError(input,messError_max)
                        }
                    }
                }
                checkLength(userName, checks[0], 3, 20, "Tài khoản không được ít hơn 3 ký tự !!!"
                    , "Tài khoản không dược nhiều hơn 20 ký tự!!!")

                checkLength(yourName, checks[1], 5, 30, "Họ tên không được ít hơn 5 ký tự !!!"
                    , "Họ tên không dược nhiều hơn 30 ký tự!!!")

                checkLength(pw,checks[2],4,12,"Mật khẩu không được ít hơn 4 ký tự !!!"
                ,"Mật khẩu không dược nhiều hơn 12 ký tự!!!")
                
                if (checks[2]) {
                    if (!checkSame(pw, pw_cf)) {
                        showError(pw_cf,'Mật khẩu không trùng khớp!!')
                        checks[3] = false;
                    } else {
                        showSuccess(pw_cf);
                        checks[3] = true;
                    }
                }
                
                if (check(checks)) {
                    localStorage.setItem('account_ct188',JSON.stringify({user_name:userName.value,password:pw.value}))
                    document.querySelector('.form-register').onsubmit = function () {
                        return true
                    }
                }
            })

        }
    } else {
        console.log("khong tin thay danh sach input")
    }
}
validateSignUp()
