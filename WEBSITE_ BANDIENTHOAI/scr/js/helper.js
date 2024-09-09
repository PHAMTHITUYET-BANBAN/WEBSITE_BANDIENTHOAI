

const Toggle = (btnShow,btnClose,body,nameClass="active")=>{
    btnShow.addEventListener('click',e=>{
        body.classList.add(nameClass)
        btnClose.addEventListener("click",e=>{
            body.classList.remove(nameClass)
        })
      })
}

function stickyHeader(tag,height,active,behindHead){
    window.addEventListener("scroll",e=>{
        if(window.pageYOffset>height){
            tag.classList.add(active)
            if(behindHead){
                behindHead.style.marginTop=`${active}px`
            }
        }else{
            tag.classList.remove(active)
            if(behindHead){
                behindHead.style.marginTop=`0`
            }
        }
    })
}

function slectOne (list,nameClass,active){
    list.forEach(items=>{
      items.addEventListener('click',e=>{
         document.querySelectorAll(nameClass).forEach(value=>{
          value.classList.remove(active)
         })
        items.classList.add(active)
      })  
    })
  }

  function checkFillEmpty(input){
    return input.value=="";
  }
  function checkSame(input_1,input_2 ){
    return input_1.value ==input_2.value;
  }