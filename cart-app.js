const mycart = JSON.parse(localStorage.getItem("mycart"));

function cart_item() {

    // data.clear()
    const card = document.getElementById('cart_card');
    card.innerHTML = ""

    mycart.map((val, ind) => {
        const div = document.createElement("div");
        div.className = "card_main"
        div.innerHTML = `
       <div id="card_img">
        ${"<img src='" + val.img + "'>"}
        </div>
        <div class="card-body">
            <div class="row">
                <div class="card-title">
                    ${"<h1>" + val.product_name + "</h1>"}
                    ${"<h3>" + val.price + "</h3>"}
                </div>
               
            </div>
            ${"<p>" + val.description + "</p>"}
            <div class="btn-group">
                <div class="btn">
                    <a onclick="del(${ind})">Cancel</a>
                </div>
            </div>
        </div>
        `;
        card.appendChild(div);
    })
}
cart_item();

function del(index) {
    mycart.splice(index, 1)
    console.log(index);
    localStorage.setItem("mycart", JSON.stringify(mycart));
    location.reload();
}   

// const randersubtotal = () => {
//     let totalPrice = 0, totalItem = 0;
//     cart.map((item) =>{
//         totalPrice += item.price * item.productNumber;
//         totalItem += item.productNumber;
//     });

//     subtotal.innerHTML = `
//         Subtotal (${totalItem} items): $${totalPrice.toFixed(2)}`
    
// }
// randersubtotal();

