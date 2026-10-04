let icon = document.querySelector(".icon");
let btn_cart = document.querySelector(".btn_cart");
let CART_IMG = document.querySelector(".CART-IMG3");
let CART_IMG2 = document.querySelector(".CART-IMG2");


let product = [
     {
        id : 1,
        imageUrl : "./imegs/BOTANICAL-CR.png",
        title : "BOTANICAL",
        price : "220",
        category : "Cream",
         },
     {
        id : 2,
        imageUrl : "./imegs/SUN-BLOCK.png",
        title : "SUN BLOCK",
        price : 180,
        category : "Ceram",

    },
     {
        id : 3,
        imageUrl : "./imegs/DEPIWHITE.png",
        title : "DEPIWHITE",
        price : "595",
        category : "Cream",
         },
     {
        id : 4,
        imageUrl : "./imegs/ARGAN.png",
        title : "Argan",
        price : "200",
        category : "oil",
         },
     {
        id : 5,
        imageUrl : "./imegs/SERUM-VC.png",
        title : "vitamin c",
        price : 250,
        category : "serum",
     },
     {
        id : 6,
        imageUrl : "./imegs/NIACINAMIDE.png",
        title : "Niacinamide",
        price : "410",
        category : "serum",
     },
     {
        id : 7,
        imageUrl : "./imegs/BOTANICAL-CR.png",
        title : "BOTANICAL",
        price : "220",
        category : "Cream",
     },
     {
        id : 8,
        imageUrl : "./imegs/BOTANICAL-CR.png",
        title : "BOTANICAL",
        price : "220",
        category : "Cream",
     },
     {
        id : 9,
        imageUrl : "./imegs/BOTANICAL-CR.png",
        title : "BOTANICAL",
        price : "220",
        category : "Cream",
     }
]
////// test ]



function products(){
    let productUI = product.map ((item) =>{
        return `
        
                <div class="CART1">
                        <img src="${item.imageUrl}" alt="BOTANICAL-CR">
                        <div class="TEXT-CART">
                            <h2>${item.title}</h2>
                            <P>Price : ${item.price} </P>
                            <P>Category : ${item.category}</P>
                        </div>
                        <div class="ICON-CART">
                            <i class="fa-solid fa-heart"></i>
                            <button class="btn_cart">Add io cart</button>
                        </div>
                    </div>`
     })
  CART_IMG.innerHTML = productUI.join("");


}
products()


/// if {login , loug aout}

let links = document.querySelector('#loginAout');
let userInfo = document.querySelector('#user_info');
let user = document.querySelector('#user');
let logout = document.querySelector('#logout');

   let userName = localStorage.getItem("username");
if(userName){
    links.remove(),
    userInfo.style.display = 'flex'
    user.innerHTML = localStorage.getItem("username");
}

logout.addEventListener('click', function(){
    localStorage.clear();
    setTimeout(() =>{
        window.location= 'register.html'

    },1500)
})

//// {search All product}

let searchInput = document.getElementById("search");
let searchType = document.getElementById("searchType");

// داله عرض المنتجات تقبل مصفوفه المنتجات ك parameter
function drawProducts(items = product){
   let productUI = items.map((item) =>{
      return`
                  <div class="CART1">
                        <img src="${item.imageUrl}" alt="${item.title}">
                        <div class="TEXT-CART">
                            <h2>${item.title}</h2>
                            <P>Price : ${item.price} </P>
                            <P>Category : ${item.category}</P>
                        </div>
                        <div class="ICON-CART">
                            <i class="fa-solid fa-heart heart-icon" onclick="ifLove(${item.id})"></i>
                            <button class="btn_cart" onclick="ifLogin(${item.id})">Add io cart</button>
                        </div>
                    </div>`

   })
   CART_IMG.innerHTML = productUI.join("");
}
drawProducts(product);
//داله تصفيه البحث

function searchProducts(value){
   let type = searchType.value;
   let filteredProducts = product.filter((item) =>{
      if(type === "category"){
         return item.category.toLowerCase().includes(value.toLowerCase().trim());
      }
       if(type === "title"){
         return item.title.toLowerCase().includes(value.toLowerCase().trim());
      }
   })
   drawProducts(filteredProducts);
}
searchInput.addEventListener("keyup", function (){
   searchProducts(this.value);
})

// [IF login (to card) & register]
let addedItem = localStorage.getItem('productsIncart') ? JSON.parse(localStorage.getItem('productsIncart')) :[];
function ifLogin(id){
   let lastName = localStorage.getItem("username");
   if(lastName){
  let choosemItem = product.find((item) => item.id==id);
//   let badgeDom = document.getElementById("badge");
  addedItem = [...addedItem , choosemItem];
  localStorage.setItem('productsIncart', JSON.stringify(addedItem));
//   badgeDom.style.display = "block";
//   badgeDom.innerHTML = addedItem.length;
      checproduct();
}
   //   console.log(localStorage.getItem("username"));
else{
   window.location = "register.html";
}}
// love item
let adLove = localStorage.getItem("loveItem") ? JSON.parse(localStorage.getItem("loveItem")) :[];
function ifLove(id){
   let fristName = localStorage.getItem("username");
   if(fristName){
  let cleckItem = product.find((item) => item.id==id);

  adLove = [...adLove , cleckItem];
  localStorage.setItem("loveItem", JSON.stringify(adLove));
  checproduct();
}
else{
   window.location = "register.html";
}}
// let hamra = localStorage.getItem('productsIncart')
let cardShop = document.querySelector(".cardShop1"); 
function checproduct(){
   let productsIncartp = localStorage.getItem('productsIncart') ? JSON.parse(localStorage.getItem('productsIncart')) :[];
   let loveItemp = localStorage.getItem("loveItem") ? JSON.parse(localStorage.getItem("loveItem")) :[];
   let totalLength = productsIncartp.length + loveItemp.length ;
   if( totalLength > 0 ){
       if(cardShop) cardShop.style.display= "flex";
       let badgeOne = document.querySelector(".badgeOne");
         badgeOne.innerHTML = totalLength;
      //  badgeOne.innerHTML = productsIncartp.length;
      //  badgeOne.innerHTML = loveItemp.length;

      // badgeOne.innerHTML = (productsIncartp.length && loveItemp.length);
       
   }else {
      if (cardShop) cardShop.style.display = "none";
   }}
      checproduct();
   
      if(cardShop){
         cardShop.addEventListener("click", function(){
          window.location = "cardShoping.html";})
      }
       

