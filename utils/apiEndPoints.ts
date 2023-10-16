const env = require('../env')

require('dotenv').config();

// const LOCAL_SERVER_url = 'http://farazi.mydokan.io:3001';
// const SERVER_url = 'http://farazi.mydokan.io:8081';
const url = env('URL');


export const endPoints = {
    serverurl: `${url}`,


                        /* Admin All End points*/

    // Dashboard
    getadminDashbaordTodayReport: `${url}/api/v1/reports/admin/dashboard/today`,
    getadminDashbaordHourlyReport: `${url}/api/v1/reports/admin/dashboard/hourly-sales`,
    getadminDashbaordTodosReport: `${url}/api/v1/reports/admin/dashboard/todos`,

    // Brands
    getAllBrands: `${url}/api/v1/brands`,
    createBrands:  `${url}/api/v1/brands`,
    searchBrand: (brandName: string) => `${url}/api/v1/brands?search=${brandName}`,
    editBrand:  (brandID: string) =>  `${url}/api/v1/brands/${brandID}`,
    deleteBrand:  (brandID: string) =>  `${url}/api/v1/brands/${brandID}`,

    // Orders
    getAllOrders:`${url}/api/v1/admin/orders?include=orderGroup`,
    getPaginationPageOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=completed&page=2`,
    getCompletedOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=completed`,
    getProcessingOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=processing`,
    getPendingOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=pending`,
    getFailedOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=failed`,
    getCanceledOrder:`${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=canceled`,
    getRefundedOrder:`${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=refunded`, 
    getSingleOrder: (singleOrderID: string) => `${url}/api/v1/admin/orders/${singleOrderID}`,
    searchOrder: (orderNo: number) => `${url}/api/v1/admin/orders?include=orderGroup&filters[search]=${orderNo}`,
    getPaymentID: (singleOrderID: string) => `${url}/api/v1/orders/${singleOrderID}/payments`,
    updateShippingAddress: (singleOrderID: string) =>`${url}/api/v1/admin/orders/${singleOrderID}/shipping`,
    updateBillingAddress: (singleOrderID: string) =>`${url}/api/v1/admin/orders/${singleOrderID}/billing`,
    putOnHoldOrder:(singleOrderID: string) => `${url}/api/v1/admin/orders/${singleOrderID}/on-hold`,
    removeHoldOrder:(singleOrderID: string) => `${url}/api/v1/admin/orders/${singleOrderID}/remove-hold`,
    cancelOrder:(singleOrderID: string) => `${url}/api/v1/admin/orders/${singleOrderID}/cancel`,

    createShipment: `${url}/api/v1/shipments`,
    chargeOrder: (singleOrderID: string) => `${url}/api/v1/orders/${singleOrderID}/charges`,
    refundOrder: (singleOrderID: string) => `${url}/api/v1/admin/orders/${singleOrderID}/refunds`,
    
    // Subcription
    getAllSubscription:`${url}/api/v1/subscriptions/plans`,
    getPublishSubscription:`${url}/api/v1/subscriptions/plans?filters[status]=published`,
    getDraftSubscription:`${url}/api/v1/subscriptions/plans?filters[status]=draft`,
    createNewSubscription:`${url}/api/v1/subscriptions/plans`,
    editCreatedSubscription: (subscriptionID: number) => `${url}/api/v1/subscriptions/plans/${subscriptionID}`,
    deleteCreatedSubscription:(subscriptionID: number) => `${url}/api/v1/subscriptions/plans/${subscriptionID}`,
    
    // Payouts
    getAllPayouts:`${url}/api/v1/admin/withdrawals`,
    getPendingPayouts:`${url}/api/v1/admin/withdrawals?filters[status]=pending`,
    getCompletedPayouts:`${url}/api/v1/admin/withdrawals?filters[status]=accepted`,
    getCancelledPayouts:`${url}/api/v1/admin/withdrawals?filters[status]=cancelled`,
    getRejectedPayouts:`${url}/api/v1/admin/withdrawals?filters[status]=rejected`,
    getUpcommingPayouts:`${url}/api/v1/admin/upcoming-withdrawals?filters[status]=upcoming`,

    // vendors
    getAllVendors:`${url}/api/v1/admin/vendors`,
    getVerifiedVendors:`${url}/api/v1/admin/vendors?filters[active]=true`,
    getPendingVendors:`${url}/api/v1/admin/vendors?filters[active]=false`,

    // customers
    getAllCustomer: `${url}/api/v1/admin/customers`,
    getPaginationPageCustomerData: `${url}/api/v1/admin/customers?filters[isActive]=true&page=2`,
    getActiveCustomer: `${url}/api/v1/admin/customers?filters[isActive]=true&page=1`,
    getInactiveCustomer: `${url}/api/v1/admin/customers?filters[isActive]=false&page=1`,
    createNewCustomer: `${url}/api/v1/admin/customers`,
    editCreatedCustomer: (customerID: number) => `${url}/api/v1/admin/customers/${customerID}`,
    searchCustomer: (customerEmail: string) => `${url}/api/v1/admin/customers?search=${customerEmail}`,
    resetCreatedCustomer: (customerID: number) => `${url}/api/v1/admin/customers/${customerID}/password`,
    deactivatedCreatedCustomer: (customerID: number) => `${url}/admin/api/v1/customers/${customerID}`,
    
    
    // pages
    getAllPages:`${url}/api/v1/pages`,
    createPage:`${url}/api/v1/pages`,
    editPages: (pageID) => `${url}/api/v1/pages/${pageID}`,
    searchPage: (pageName: string) => `${url}/api/v1/pages?search=${pageName}`,
    deletePages: (pageID) => `${url}/api/v1/pages/${pageID}`,

    // Menus
    getAllMenu:`${url}/api/v1/menus`,
    createMenu:`${url}/api/v1/menus`,
    editMenu: (menuID) => `${url}/api/v1/menus/${menuID}`,
    searchMenu: (menuName: string) => `${url}/api/v1/menus?search=${menuName}`,
    deleteMenu: (menuID) => `${url}/api/v1/menus/${menuID}`,


    // General settings
    getBasicSettings: `${url}/api/v1/settings/general`,
    updateMarketplaceDetails: `${url}/api/v1/settings/marketplace-details`,
    updateStoreVisibility: `${url}/api/v1/settings/store-visibility`,
    updateUnits: `${url}/api/v1/settings/units`,

    getBusinessDetailsSettings: `${url}/api/v1/settings/general`,
    updateBusinessDetails: `${url}/api/v1/settings/business-details`,

    getDomainSettings: `${url}/api/v1/settings/domain`,

    getBrandSettings: `${url}/api/v1/settings/brand`,
    updateBrand: `${url}/api/v1/settings/brand`,
    

    // team settings
    getAllTeamMember: `${url}/api/v1/team/admin/members`,
    getPaginationPageTeamMember: `${url}/api/v1/team/admin/members?page=2`,
    getActiveTeamMember: `${url}/api/v1/team/admin/members?page=1&filters[status]=active`,
    getInactiveTeamMember: `${url}/api/v1/team/admin/members?page=1&filters[status]=inactive`,
    getInvitedTeamMember: `${url}/api/v1/team/admin/invitations?page=1&filters[status]=invited`,
    inviteNewTeamMember: `${url}/api/v1/team/admin/members/invite`,
    searchTeamMember: (invitedTeamMemberEmail: string) => `${url}/api/v1/team/admin/members?search=${invitedTeamMemberEmail}`,
    editInvitedTeamMember: (invitedTeamMemberID: string) => `${url}/api/v1/team/admin/members/${invitedTeamMemberID}`,
    resendInvitationInvitedTeamMember: `${url}/api/v1/team/admin/invitations/resend`,
    removeInvitedNewTeamMember: (invitedTeamMemberEmail: string) => `${url}/api/v1/team/admin/invitations/${invitedTeamMemberEmail}`,


    // payment settings
    getStripePaymentSettings:`${url}/api/v1/settings/payment`,
    updateStripePaymentSettings: `${url}/api/v1/settings/payment`,
    getPaypalPaymentSettings:`${url}/api/v1/settings/payment`,
    updatePaypalPaymentSettings: `${url}/api/v1/settings/payment`,
    updateCashOnDeliveryPaymentSettings: `${url}/api/v1/settings/payment`,


    // payouts
    getPayoutsSettings: `${url}/api/v1/settings/payout`,

    // shipping
    getShippingSettings: `${url}/api/v1/settings/shipping`,
    saveShippingSettings: `${url}/api/v1/settings/shipping`,
    addShippingType: `${url}/api/v1/settings/shipping`,
    editShippingType: `${url}//api/v1/shipping/types/3`, // id

    // Notification settings
    getAllNotification: `${url}/api/v1/settings/email-notifications`,
    enableOrderConfirmationNotification: `${url}/api/v1/settings/email-notifications/order-confirmation/settings`,
    enableOrderCanceledNotification: `${url}/api/v1/settings/email-notifications/order-canceled/settings`,
    enableOrderRefundNotification: `${url}/api/v1/settings/email-notifications/order-refunded/settings`,
    enableShippingConfirmationNotification: `${url}/api/v1/settings/email-notifications/shipping-confirmation/settings`,
    enableShippingUpdateNotification: `${url}/api/v1/settings/email-notifications/shipping-update/settings`,

    // tax
    getTaxSummary:`${url}/api/v1/tax/summary`,
    getTaxClasses:`${url}/api/v1/tax/classes`,
    addTaxCountry: (taxCountry: any) =>`${url}/api/v1/tax/country/${taxCountry}/same`,
    manageSameTaxCountry: (sameTaxCountry: any) =>`${url}/api/v1/tax/country/${sameTaxCountry}/same`,
    differentTaxCountry: (differentTaxCountry: any) =>`${url}/api/v1/tax/country/${differentTaxCountry}`,
    getEditAllDifferentTaxCountry: (editAllTax: any) => `${url}/api/v1/tax/country/${editAllTax}`,
    editStateTaxCountry: (editStateTax: any) => `${url}/api/v1/tax/country/${editStateTax}`,
    deleteStateTaxCountry: (taxCountry: any, deleteState: any) =>`${url}/api/v1/tax/country/${taxCountry}/state/${deleteState}`,
    deleteTaxCountry: (deleteTaxCountry: any) =>`${url}/api/v1/tax/country/${deleteTaxCountry}`,
    addTaxClasses:`${url}/api/v1/tax/classes`,
    renameTaxClasses: (taxClassID: number ) => `${url}/api/v1/tax/classes/${taxClassID}`,
    deleteTaxClasses: (taxClassID: number ) => `${url}/api/v1/tax/classes/${taxClassID}`,


    // SEO
    getSEO: `${url}/api/v1/settings/seo`,
    saveSEOGeneral: `${url}/api/v1/settings/seo/general`,
    saveSocialShare: `${url}/api/v1/settings/seo/social-share`,
    saveAdvanceSEO: `${url}/api/v1/settings/seo/advance`,
    saveSiteVerification: `${url}/api/v1/settings/seo/site-verification`,









    // Customer order part
    addToCart: `${url}/api/v1/cart`,
    createOrder: `${url}/api/v1/orders`,
    calculation: `${url}/api/v1/tax/calculate`,


    // gelIndividualOrder: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b',
    // groupOrderList: 'http://farazi.mydokan.io:8081/api/v1/order-groups/14333385266040476/orders?paymentTransferred=true',
    // updateOrder: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b',
    // updateOrderByGroupId: 'http://farazi.mydokan.io:8081/api/v1/order-groups/8492405730456758/orders',
    // orderRefund: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b/refund',

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
        // getTaxClass: 'http://farazi.mydokan.io:3001/api/v1/tax/classes',
        // createNewTaxClass: 'http://farazi.mydokan.io:3001/api/v1/tax/classes',
        // updateNewTaxClass: 'http://farazi.mydokan.io:3001/api/v1/tax/classes/4',
        // deleteTaxClass: 'http://farazi.mydokan.io:3001/api/v1/tax/classes/2?assign_to=1',
    getTax: `${url}/api/v1/tax/country/${process.env.TAX_COUNTRY}`,
        
    // Product
    productGetAll: `${url}/api/v1/admin/products`,
    individualProductGet: `${url}/api/v1/products/${process.env.PRODUCT_ID}`,
    searchIndividualProduct:(productTitle: string) => `${url}/api/v1/admin/products?search=${productTitle}`,
    createProduct: `${url}/api/v1/admin/products`,
    productUpdate: (productID: string) => `${url}/api/v1/admin/products/${productID}`,
    productDelete: (productID: string) => `${url}/api/v1/products/${productID}`,

    //Category & Attribute
    categoryGetAll: `${url}/api/v1/categories`,
    categoryCreate: `${url}/api/v1/categories`,
    categoryDelete: (category_id: string) => `${url}/api/v1/categories/${category_id}`,
    categoryUpdate: (categoryID: string) => `${url}/api/v1/categories/${categoryID}`,
    attributeCreate: (categoryID: string) => `${url}/api/v1/categories/${categoryID}/attributes`,
    attributeUpdate: (categoryID: string, attributeID: string) => `${url}/api/v1/categories/${categoryID}/attributes/${attributeID}`,
    attributeDelete: (categoryID: string, attributeID: string) => `${url}/api/v1/categories/${categoryID}/attributes/${attributeID}`,

    // Coupons
    getAllCoupon: `${url}/api/v1/coupons`,
    createCoupon: `${url}/api/v1/coupons`,
    updateCoupon: (couponID: string) => `${url}/api/v1/coupons/${couponID}`,
    deleteCoupon: (couponID: string) => `${url}/api/v1/coupons/${couponID}`,

    // Customer
    getProductIDbyCustomer: (productID: string) => `${url}/api/v1/products?search=${productID}`,
    directProduct: `https://jamuna-future-park.ondokan.com/products/digital-product?_rsc=4ifhs`,
    getShipping: `${url}/api/v1/shipping/profiles/7`,
    // getSubscription: `${url}/api/v1/vendor/subscriptions?tenant=jamuna-future-park`
    getSubscription: `${url}/api/v1/vendor/subscriptions`,
    pay: `${url}/api/v1/order-groups`,
}