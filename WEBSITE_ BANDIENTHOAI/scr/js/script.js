const listProduct = document.querySelectorAll(".products-container .product")
const productPreview = document.querySelector(".products-preview")

var dataCart=JSON.parse(localStorage.getItem("cart"))
var listCart
dataCart==null?listCart=[]:listCart=dataCart

const iconCart = document.querySelector(".header .cart .quantity")

const renderQuantityCart = ()=>{
  const quantity= listCart.length
  iconCart.innerHTML=quantity
  if(quantity==0){
    iconCart.style.display="none"
  }
}
renderQuantityCart()

if(productPreview){
  const btnClose = productPreview.querySelector(".icon-close")
  listProduct.forEach(items => {
    Toggle(items, btnClose, productPreview, "active")
    items.addEventListener("click", e => {
      const _name = items.querySelector("h3").innerHTML
      const _price = items.querySelector(".price").innerHTML
      const _img = items.querySelector("img").src
      insertValueInPreview(productPreview, _name, _price, _img)
      const btnAddCart = productPreview.querySelector(".cart")
      btnAddCart.addEventListener("click", e => {
        addCart(_name, _img, _price)
        window.location.reload();
      })
    })
  })
}

function insertValueInPreview(body, name, price, img) {
  //gan ten san pham
  body.querySelector("h3").innerHTML = name

  //gan gia san pham
  body.querySelector(".price").innerHTML = `${price}`

  //gan anh san pham
  body.querySelector('img').src = img
}
function addCart(name, img, price) {
  const cartItem = { name, img, price };
  listCart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(listCart));
}

function renderCart() {
  const listCartPage = document.querySelector(".list-cart tbody")
  if(listCartPage){
    listCart.forEach(items=>{
      const wrap = document.createElement("tr")
      const content = `<td class="img-product">
                  <img src="${items.img}" alt="">
                  <span class="_name">${items.name}</span>
                </td>
                <td>
                  ${items.price}  
                </td>
                <td>
                  <input class='num' type="number" value="1" min="1">
                </td>
                <td><button>Xóa</button></td>`
            wrap.innerHTML=content
            listCartPage.append(wrap)
          })
        }
}
renderCart()

const cart_delete=()=>{
  const listItemsCart=document.querySelectorAll(".list-cart tr button")
  if(listItemsCart){
    listItemsCart.forEach(items=>{
      items.addEventListener("click",e=>{
        const _name=items.parentElement.parentElement.querySelector("._name")
        listCart= listCart.filter((items)=>items.name!=_name.innerHTML)
        localStorage.setItem("cart",JSON.stringify(listCart))
        window.location.reload();
      })
    })
  }
}

cart_delete()

// const cart_total_price = document.querySelector('cart-total-price');
const number_product = document.querySelector('.num');
  function total_cart() {
    var total = 0;
    for(let i=0; i<listCart.length; i++) {
      var price = listCart[i].price.trim();
      price = price.substring(0, price.indexOf(' ')).replaceAll('.','');
      total = total + (parseFloat(price)*number_product.value);
      var content = total.toString();
      var j = content.length;
      var count=0;
      for(; j>1; j--) {
        count += 1;
        if(count%3 === 0) {
          content = content.substring(0,j-1) + '.' + content.substring(j-1);
        }
      }
      document.querySelector('.cart-total-price').textContent = content + " VND";
    }
  }

  total_cart()