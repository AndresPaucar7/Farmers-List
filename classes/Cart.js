import Product from "./Product";

class Cart{
    constructor(){
        this.products = [];
        this.total = 0;
    }
    addProduct(product){
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(i){
        if(i >=  0 && i < this.products.length){
            //remove one elment from array using the splice method
            const productRemoved = this.products.splice(i,1)[0];
            // deduct the product from total
            this.total -= this.productRemoved.price;
        }
    }
}
console.log("Testing")
module.exports = Cart;