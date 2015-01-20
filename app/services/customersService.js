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

    this.deleteOrder = function (orderId) {
        for (var i = customers.length - 1; i >= 0; i--) {
            for (var j = customers[i].orders.length - 1; j >= 0; j--) {
                if (customers[i].orders[j].orderId === orderId) {
                    customers[i].orders.splice(j, 1);
                    break;
                }
            }
        }
    };

    var customers = [
        {
            id: 1, firstName: 'Joseph', lastName: 'Melito', address: '123 1st blvd', city: 'Los Angeles',
            orders: [
                { orderId: 1, product: 'iPhone', price: 29.99, quantity: 1 },
                { orderId: 2, product: 'Screen protector', price: 9.99, quantity: 1 },
                { orderId: 3, product: 'Movie ticket', price: 5.99, quantity: 1 }
            ]
        },
        {
            id: 2, firstName: 'Jon', lastName: 'Seda', address: '456 2nd blvd', city: 'Dallas',
            orders: [
                { orderId: 4, product: 'HTC phone', price: 329.99, quantity: 1 },
                { orderId: 5, product: 'Smartphone case', price: 129.99, quantity: 4 },
                { orderId: 6, product: 'Turkey', price: 89.99, quantity: 5 },
            ]
        },
        {
            id: 3, firstName: 'Michael', lastName: 'Chance', address: '789 3rd blvd', city: 'New York',
            orders: [
                { orderId: 7, product: 'Batman suit', price: 59.99, quantity: 1 },
                { orderId: 8, product: 'Flying stars', price: 49.99, quantity: 1 },
                { orderId: 9, product: 'IBM laptop', price: 49.99, quantity: 1 },
                { orderId: 10, product: 'Eggs', price: 49.99, quantity: 1 }
            ]
        },
        {
            id: 4, firstName: 'Bob', lastName: 'Adrian', address: '1011 4th blvd', city: 'Chicago',
            orders: [
                { orderId: 11, product: 'Hockey', price: 9.99, quantity: 5 },
                { orderId: 12, product: 'Bread', price: 19.99, quantity: 1 }
            ]
        }
    ];

});