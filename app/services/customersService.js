app.service('customersService', function () {
    this.getCustomers = function () {
        return customers;
    };

    this.insertCustomer = function (firstName, lastName, city) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.deleteCustomer = function (id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    this.getCustomer = function (id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                return customers[i];
            }
        }
        return null;
    };

    this.insertOrder = function (productName, unitPrice, quantity, customerId) {
        var currentCustomer = this.getCustomer(customerId);

        currentCustomer.orders.push({
            product: productName,
            price: unitPrice,
            quantity: quantity
        });
    };

    var customers = [
        {
            id: 1, firstName: 'Joseph', lastName: 'Melito', address: '123 1st blvd', city: 'Los Angeles',
            orders: [
                { product: 'iPhone', price: 29.99, quantity: 1 },
                { product: 'Screen protector', price: 9.99, quantity: 1 },
                { product: 'Movie ticket', price: 5.99, quantity: 1 }
            ]
        },
        {
            id: 2, firstName: 'Jon', lastName: 'Seda', address: '456 2nd blvd', city: 'Dallas',
            orders: [
                { product: 'HTC phone', price: 329.99, quantity: 1 },
                { product: 'Smartphone case', price: 129.99, quantity: 4 },
                { product: 'Turkey', price: 89.99, quantity: 5 },
            ]
        },
        {
            id: 3, firstName: 'Michael', lastName: 'Chance', address: '789 3rd blvd', city: 'New York',
            orders: [
                { product: 'Batman suit', price: 59.99, quantity: 1 },
                { product: 'Flying stars', price: 49.99, quantity: 1 },
                { product: 'IBM laptop', price: 49.99, quantity: 1 },
                { product: 'Eggs', price: 49.99, quantity: 1 }
            ]
        },
        {
            id: 4, firstName: 'Bob', lastName: 'Adrian', address: '1011 4th blvd', city: 'Chicago',
            orders: [
                { product: 'Hockey', price: 9.99, quantity: 5 },
                { product: 'Bread', price: 19.99, quantity: 1 }
            ]
        }
    ];

});