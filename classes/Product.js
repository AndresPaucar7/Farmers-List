class Product {
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
    }


    display() {
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
    }
}
const carrots = new Product("Carrots", 4, "Bushel of carrots that have been freshly harvested for you");
carrots.inStock;
console.log(carrots.display());

module.exports = Product;