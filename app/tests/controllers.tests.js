//Should use $http to call the service and utilize $httpBackend to unit test the service
//Should also use e2e test for the sorting functions on the view
describe("Customer service tests", function () {
    var customersService;

    beforeEach(module("app"));

    beforeEach(inject(function (_customersService_) {
        customersService = _customersService_;
    }));

    it("Assert first customer", function () {
        var customers = customersService.getCustomers();
        expect(customers[0].firstName).toEqual('Joseph');
        expect(customers[0].lastName).toEqual('Melito');
    });

    it("Assert first customer's order", function () {
        var customers = customersService.getCustomers();
        expect(customers[0].orders[0].product).toEqual('iPhone');
        expect(customers[0].orders[0].price).toEqual(29.99);
    });

    it("Assert second customer", function () {
        var customers = customersService.getCustomers();
        expect(customers[1].firstName).toEqual('Jon');
        expect(customers[1].lastName).toEqual('Seda');
    });

    it("Assert second customer's order", function () {
        var customers = customersService.getCustomers();
        expect(customers[1].orders[0].product).toEqual('HTC phone');
        expect(customers[1].orders[0].price).toEqual(329.99);
    });

});