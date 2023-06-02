require('dotenv').config();

// const LOCAL_SERVER_URL = 'http://farazi.mydokan.io:3001';
// const SERVER_URL = 'http://farazi.mydokan.io:8081';
const { URL, QUERY } = process.env;

export const endPoints = {
    serverurl: `${URL}`,


    // Order
    addToCart: `${URL}/api/v1/cart`,
    createOrder: `${URL}/api/v1/orders`,
    calculation: `${URL}/api/v1/tax/calculate`,

    getAllOrder: 'http://farazi.mydokan.io:8081/api/v1/orders',
    gelIndividualOrder: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b',
    groupOrderList: 'http://farazi.mydokan.io:8081/api/v1/order-groups/14333385266040476/orders?paymentTransferred=true',
    updateOrder: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b',
    updateOrderByGroupId: 'http://farazi.mydokan.io:8081/api/v1/order-groups/8492405730456758/orders',
    orderRefund: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b/refund',

    // Customer Payment credentials
    saveCustomerPaymentCredentials: 'http://farazi.mydokan.io:8080/api/v1/payments/cards',
    detailsCustomerPaymentCredentials: 'http://farazi.mydokan.io:8080/api/v1/payments/users/johndoe@example.com/cards',

    // Payment
    createPayment: 'http://farazi.mydokan.io:8080/api/v1/payments/',
    fundTransfer: 'http://farazi.mydokan.io:8080/api/v1/payments/transfer',
    getPaymentDetails: 'http://farazi.mydokan.io:8080/api/v1/payments/62b2d11237ee0f4b3168d1cd',
    createStripeConnect: 'http://farazi.mydokan.io:8080/api/v1/payments/stripe-connect/connect',
    createPaymentRefund: 'http://farazi.mydokan.io:8080/api/v1/payments/refund',

    // Vendor Payment credentials
    saveVendorPaymentCredentials: 'http://farazi.mydokan.io:8080/api/v1/payments/credentials',
    detailsVendorPaymentCredentials: 'http://farazi.mydokan.io:8080/api/v1/payments/users/1/credentials',
    updateVendorPaymentCredentials: 'http://farazi.mydokan.io:8080/api/v1/payments/users/2/credentials',

    // Tax Service
        // Tax Class
        getTaxClass: 'http://farazi.mydokan.io:3001/api/v1/tax/classes',
        createNewTaxClass: 'http://farazi.mydokan.io:3001/api/v1/tax/classes',
        updateNewTaxClass: 'http://farazi.mydokan.io:3001/api/v1/tax/classes/4',
        deleteTaxClass: 'http://farazi.mydokan.io:3001/api/v1/tax/classes/2?assign_to=1',
        
    // Product
    productGetAll: `${URL}/api/v1/products`,
    productUpdate: (productID: string) => `${URL}/api/v1/products/${productID}`,
    productDelete: (productID: string) => `${URL}/api/v1/products/${productID}`,

    //Category & Attribute
    categoryGetAll: `${URL}/api/v1/categories`,
    categoryCreate: `${URL}/api/v1/categories`,
    categoryDelete: (category_id: string) => `${URL}/api/v1/categories/${category_id}`,
    categoryUpdate: (categoryID: string) => `${URL}/api/v1/categories/${categoryID}`,
    attributeCreate: (categoryID: string) => `${URL}/api/v1/categories/${categoryID}/attributes`,
    attributeUpdate: (categoryID: string, attributeID: string) => `${URL}/api/v1/categories/${categoryID}/attributes/${attributeID}`,
    attributeDelete: (categoryID: string, attributeID: string) => `${URL}/api/v1/categories/${categoryID}/attributes/${attributeID}`,

    // Coupons
    getAllCoupon: `${URL}/api/v1/coupons`,
    createCoupon: `${URL}/api/v1/coupons`,
    updateCoupon: (couponID: string) => `${URL}/api/v1/coupons/${couponID}`,
    deleteCoupon: (couponID: string) => `${URL}/api/v1/coupons/${couponID}`
}