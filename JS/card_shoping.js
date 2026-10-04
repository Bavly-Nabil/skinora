// additem
function drawCartProductsUI( allProducts = []){
    let CART_shop = document.querySelector(".CART-shop");
    let product = JSON.parse(localStorage.getItem('productsIncart')) || allProducts;
   let productUI = product.map((item) => {
    let itemqty = item.qty || 1;
      return` 
      
       <div class="CARTItem">
                        <img src="${item.imageUrl}" alt="${item.title}">
                        <div class="TEXT-CART">
                            <h2>${item.title}</h2>
                            <P>Price : ${item.price} </P>
                            <P>Category : ${item.category}</P>
                        </div>
                        <div class="ICON-CART">
                            <i class="fa-brands fa-x-twitter" onclick="removeItem(${item.id})"></i>
                            <button class="btn_cart">order now</button>
                        </div>
                        <div class="inpI">
                            <i class="fa fa-plus" onclick="increaseqty(${item.id})"></i>
                            <P class="pLenth">${itemqty}</P>
                            <i class="fa-solid fa-minus mins" onclick="decreaseQty(${item.id})"></i>
                        </div>
                    </div><br>
    `
    
    
    }
)
if(CART_shop){CART_shop.innerHTML = productUI.join("");}
 let totalH2 = document.querySelector(".totalH2");
     let totalPrice =  product.reduce((acc,item) => {
                let itemTotal = Number(item.price) * (item.qty || 1) ;
               return acc + itemTotal ;
         },0);
        if(totalH2){totalH2.innerHTML = totalPrice;}
         
  } 
  //+




  //////
  function increaseqty(id){
    let products = JSON.parse(localStorage.getItem('productsIncart')) || [];
    products = products.map((item) => {
        if (item.id === id){
            item.qty = (item.qty || 1)+1;
        }
        return item;
    }
);
         
    localStorage.setItem('productsIncart', JSON.stringify(products));
            drawCartProductsUI();
  }
  function decreaseQty(id){
    let products = JSON.parse(localStorage.getItem('productsIncart')) || [];
     products = products.map((item) => {
        if(item.id === id){
            if((item.qty || 1) > 1) {
                item.qty -= 1;
            }}
            return item
     })
    
       localStorage.setItem('productsIncart', JSON.stringify(products));
       drawCartProductsUI();
    
    }
    drawCartProductsUI();

  // love item 
  
  function loveProductsUI( allProducts = []){
    let order_love = document.querySelector(".CART-love");
    let product = JSON.parse(localStorage.getItem("loveItem")) || allProducts;
   let productLove = product.map((item) => {
    
      return` 
      
       <div class="CARTItem">
                        <img src="${item.imageUrl}" alt="${item.title}">
                        <div class="TEXT-CART">
                            <h2>${item.title}</h2>
                            <P>Price : ${item.price} </P>
                            <P>Category : ${item.category}</P>
                        </div>
                        <div class="ICON-CART">
                            <i class="fa-brands fa-x-twitter"  onclick="removeLove(${item.id})"></i>
                            <button class="btn_cart">order now</button>
                        </div>
                    </div>
    `
    
    })
    order_love.innerHTML = productLove.join("");
  } 
  loveProductsUI();

  // clear product 
  
  function removeItem(id){
    let clearItem = localStorage.getItem('productsIncart');
    if(clearItem){
        let productItem = JSON.parse(clearItem);
        let FelterCard= productItem.filter((item) => item.id !== id);
        localStorage.setItem('productsIncart' , JSON.stringify(FelterCard));
       drawCartProductsUI(FelterCard)}}


  function removeLove(id){
    let clearLove = localStorage.getItem("loveItem");
    if(clearLove){
        let productI = JSON.parse(clearLove);
        let Feltersproduct = productI.filter((item) => item.id !== id);
        localStorage.setItem("loveItem" , JSON.stringify(Feltersproduct));
       loveProductsUI(Feltersproduct)}}  
    /// length.product

    
