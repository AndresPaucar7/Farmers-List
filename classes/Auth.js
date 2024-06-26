const { Customer } = require("..");

class Auth{
    constructor(){
        this.customers = [];
    }
    Register(name, email, shippingAddress){
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    }

    login(email){
        for(const customer of this.customers){
            if(customer.email === email){
                return customer;
            }
        }
        return null;
    }
}

module.exports = Auth;