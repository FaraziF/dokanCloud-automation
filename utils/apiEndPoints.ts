import internal from "stream";


const env = require('../env')

require('dotenv').config();

// const LOCAL_SERVER_url = 'http://farazi.mydokan.io:3001';
// const SERVER_url = 'http://farazi.mydokan.io:8081';
const url = env('URL');

// const orderUrl = env('ORDER_URL');
// const userUrl = env('USER_URL');


export const endPoints = {
    serverurl: `${url}`,


                        /* <<<<<<<<<<<<<<<<<<<< Admin All End points >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

    // Dashboard
    getSetupGuide: `${url}/api/v1/admin/setup-guide`,
    getadminDashbaordTodayReport: `${url}/api/v1/reports/admin/dashboard/today`,
    getadminDashbaordHourlyReport: `${url}/api/v1/reports/admin/dashboard/hourly-sales`,
    getadminDashbaordTodosReport: `${url}/api/v1/reports/admin/dashboard/todos`,

    // Brands
    getAllBrands: `${url}/api/v1/brands`,
    createBrands:  `${url}/api/v1/brands`,
    searchBrand: (brandName: string) => `${url}/api/v1/brands?search=${brandName}`,
    editBrand:  (brandID: string) =>  `${url}/api/v1/brands/${brandID}`,
    deleteBrand:  (brandID: string) =>  `${url}/api/v1/brands/${brandID}`,
    paginationFilterBrand:  `${url}/api/v1/brands?page=2`,

    // Orders
    getAllOrders:`${url}/api/v1/admin/orders?include=orderGroup`,
    getPaginationPageOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=completed&page=2`,
    getCompletedOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=completed`,
    getProcessingOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=processing`,
    getPendingOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=pending`,
    getFailedOrder: `${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=failed`,
    getCanceledOrder:`${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=canceled`,
    getRefundedOrder:`${url}/api/v1/admin/orders?include=orderGroup&filters[orderStatus]=refunded`, 
    getPaginationOrder:`${url}/api/v1/admin/orders?include=orderGroup&page=2`, 
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
    getPaginationSubscription:`${url}/api/v1/subscriptions/plans?page=2`,
    createNewSubscription:`${url}/api/v1/subscriptions/plans`,
    editCreatedSubscription: (subscriptionID: number) => `${url}/api/v1/subscriptions/plans/${subscriptionID}`,
    saveDraftSubscription: (subscriptionID: number) => `${url}/api/v1/subscriptions/plans/${subscriptionID}`,
    deleteCreatedSubscription:(subscriptionID: number) => `${url}/api/v1/subscriptions/plans/${subscriptionID}`,
    
    // Payouts
    getAllPayouts:`${url}/api/v1/admin/withdrawals`,
    getPendingPayouts:`${url}/api/v1/admin/withdrawals?filters[status]=pending`,
    getCompletedPayouts:`${url}/api/v1/admin/withdrawals?filters[status]=accepted`,
    getCancelledPayouts:`${url}/api/v1/admin/withdrawals?filters[status]=cancelled`,
    getRejectedPayouts:`${url}/api/v1/admin/withdrawals?filters[status]=rejected`,
    getUpcommingPayouts:`${url}/api/v1/admin/upcoming-withdrawals?filters[status]=upcoming`,
    getSearchPayouts:`${url}/api/v1/vendors?search=vendor&paginate=0`,
    getPaginationPayouts:`${url}/api/v1/admin/withdrawals?page=2`,

    // vendors
    getAllVendors:`${url}/api/v1/admin/vendors`,
    getVerifiedVendors:`${url}/api/v1/admin/vendors?filters[active]=true`,
    getPendingVendors:`${url}/api/v1/admin/vendors?filters[active]=false`,
    getInactiveVendors:`${url}/api/v1/admin/vendors?filters[status]=inactive`,
    getVacationVendors:`${url}/api/v1/admin/vendors?filters[status]=vacation`,
    getSuspendedVendors:`${url}/api/v1/admin/vendors?filters[status]=suspended`,
    getHoldPayoutVendors:`${url}/api/v1/admin/vendors?filters[status]=hold_payout`,
    getSearchVendors:`${url}/api/v1/admin/vendors?filters[search]=${env('VENDOR_STORE_NAME')}`,
    getPaginationVendors:`${url}/api/v1/admin/vendors?page=2`,
    getVendorIndividualProduct:`${url}/api/v1/admin/products?filters[vendorId]=${env('VENDOR_ID')}`,
    getIndividualVendor:`${url}/api/v1/admin/vendors/${env('VENDOR_ID')}`,
    editIndividualVendorGeneralSettings:`${url}/api/v1/admin/vendors/${env('VENDOR_ID')}/general`, // vendor.200 id: 6207
    getIndividualVendorSubscriptionSettings:`${url}/api/v1/admin/vendors/${env('VENDOR_ID')}`,
    editIndividualVendorAddressSettings:`${url}/api/v1/admin/vendors/${env('VENDOR_ID')}/address`,
    editIndividualVendorSocialSettings:`${url}/api/v1/admin/vendors/${env('VENDOR_ID')}/social`,


    // customers
    getAllCustomer: `${url}/api/v1/admin/customers`,
    getPaginationPageCustomerData: `${url}/api/v1/admin/customers?filters[isActive]=true&page=2`,
    getActiveCustomer: `${url}/api/v1/admin/customers?filters[isActive]=true&page=1`,
    getInactiveCustomer: `${url}/api/v1/admin/customers?filters[isActive]=false&page=1`,
    createNewCustomer: `${url}/api/v1/admin/customers`,
    editCreatedCustomer: (customerID: number) => `${url}/api/v1/admin/customers/${customerID}`,
    searchCustomer: (customerEmail: string) => `${url}/api/v1/admin/customers?search=${customerEmail}`,
    resetCreatedCustomer: (customerID: number) => `${url}/api/v1/admin/customers/${customerID}/password`,
    deactivatedCreatedCustomer: (customerID: number) => `${url}/api/v1/admin/customers/${customerID}`,
    markAsCustomer: (customerID: number) => `${url}/api/v1/users/${customerID}/mark-as-test`,
    unmarkAsCustomer: (customerID: number) => `${url}/api/v1/users/${customerID}/mark-as-test`,
    activateCustomer: (customerID: number) => `${url}/api/v1/admin/customers/${customerID}`,
    
   // integrations
   getAllIntegrations: `${url}/api/v1/admin/integrations`,
   getLiveChat: `${url}/api/v1/admin/integrations/live-chat`,
   getMailchimp: `${url}/api/v1/admin/integrations/mailchimp`,
   getSMS: `${url}/api/v1/admin/integrations/sms`,
   getAnalytics: `${url}/api/v1/admin/integrations/analytics`,
   getMarketplaceMigrator: `${url}/api/v1/subscriptions/plans?filters[isFreePlan]=true&filters[status]=published`,


    // pages
    getAllPages:`${url}/api/v1/pages`,
    createPage:`${url}/api/v1/pages`,
    editPages: (pageID) => `${url}/api/v1/pages/${pageID}`,
    searchPage: (pageName: string) => `${url}/api/v1/pages?search=${pageName}`,
    deletePages: (pageID) => `${url}/api/v1/pages/${pageID}`,
    getPaginationPages: `${url}/api/v1/pages?page=2&perPage=10`,

    // Themes
    getAllThemes: `${url}/api/v1/themes`,

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
    addCustomDomain: `${url}/api/v1/settings/domain`,
    getRefreshCustomDomain: `${url}/api/v1/settings/domain/refresh`,
    editCustomDomain: `${url}/api/v1/settings/domain`,
    removeCustomDomain: `${url}/api/v1/settings/domain`,

    getBrandSettings: `${url}/api/v1/settings/brand`,
    updateBrand: `${url}/api/v1/settings/brand`,
    

    // team settings
    getAllTeamMember: `${url}/api/v1/team/admin/members`,
    getPaginationPageTeamMember: `${url}/api/v1/team/admin/members?page=2`,
    getActiveTeamMember: `${url}/api/v1/team/admin/members?page=1&filters[status]=active`,
    getInactiveTeamMember: `${url}/api/v1/team/admin/members?page=1&filters[status]=inactive`,
    getInvitedTeamMember: `${url}/api/v1/team/admin/invitations?page=1&filters[status]=invited`,
    getAllInvitedTeamMember: `${url}/api/v1/team/admin/invitations?filters[status]=invited`,
    inviteNewTeamMember: `${url}/api/v1/team/admin/members/invite`,
    getInvitedTeamMemeberToken: `${url}/admin/team/invitations?token=`,
    searchTeamMember: (invitedTeamMemberEmail: string) => `${url}/api/v1/team/admin/members?search=${invitedTeamMemberEmail}`,
    editInvitedTeamMember: (invitedTeamMemberID: string) => `${url}/api/v1/team/admin/members/${invitedTeamMemberID}`,
    resendInvitationInvitedTeamMember: `${url}/api/v1/team/admin/invitations/resend`,
    removeInvitedNewTeamMember: (invitedTeamMemberEmail: string) => `${url}/api/v1/team/admin/invitations/${invitedTeamMemberEmail}`,

  // plans and bills
  getPlansAndBillsDetails: `${url}/api/v1/admin/billing/details`,
  getChoosePlans: `${url}/api/v1/admin/billing/plans`,

    // payment settings
    getStripePaymentSettings:`${url}/api/v1/settings/payment`,
    updateStripePaymentSettings: `${url}/api/v1/settings/payment`,
    getPaypalPaymentSettings:`${url}/api/v1/settings/payment`,
    updatePaypalPaymentSettings: `${url}/api/v1/settings/payment`,
    updateCashOnDeliveryPaymentSettings: `${url}/api/v1/settings/payment`,
    enableTestGateway: `${url}/api/v1/settings/payment`,


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
    
    //
    getPolicies: `${url}/api/v1/settings/policies`,


    // Profile
    getAdminProfile: `${url}/api/v1/user/my-account/profile`,







    // Customer order part
    addToCart: `${url}/api/v1/cart`,
    createOrder: `${url}/api/v1/orders`,
    calculation: `${url}/api/v1/tax/calculate`,


    // gelIndividualOrder: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b',
    // groupOrderList: 'http://farazi.mydokan.io:8081/api/v1/order-groups/14333385266040476/orders?paymentTransferred=true',
    // updateOrder: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b',
    // updateOrderByGroupId: 'http://farazi.mydokan.io:8081/api/v1/order-groups/8492405730456758/orders',
    // orderRefund: 'http://farazi.mydokan.io:8081/api/v1/orders/52d17a1e-8578-4d67-9c95-6a774553fb7b/refund',

  /*   // Customer Payment credentials
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
 */


    // Tax Service
    getTax: `${url}/api/v1/tax/country/${env('TAX_COUNTRY')}`,
        
    // Admin Product
    getAllProduct: `${url}/api/v1/admin/products`,
    getAllProductFilterPagination: `${url}/api/v1/admin/products?page=2`,
    getAllPublishedProduct: `${url}/api/v1/admin/products?filters[status]=published`,
    getAllPublishedProductFilterPagination: `${url}/api/v1/admin/products?filters[status]=published&page=2`,
    getAllDraftProduct: `${url}/api/v1/admin/products?filters[status]=draft`,
    getAllDraftProductFilterPagination: `${url}/api/v1/admin/products?filters[status]=draft&page=2`,
    // individualProductGet: `${url}/api/v1/products/${env('PRODUCT_ID')}`,
    individualProductGet: `${url}/api/v1/products/${env('PRODUCT_ID')}`,
    searchIndividualProduct:(productTitle: string) => `${url}/api/v1/admin/products?search=${productTitle}`,
    createProduct: `${url}/api/v1/admin/products`,
    productUpdate: (productID: string) => `${url}/api/v1/admin/products/${productID}`,
    productDelete: (productID: string) => `${url}/api/v1/admin/products/${productID}`,
    exportProduct: `${url}/api/v1/admin/products/export`,
    // getCategoryFilter: `${url}/api/v1/admin/products?filters[category]=${env('CATEGORY_ID')}`,
    getCategoryFilter: `${url}/api/v1/admin/products?filters[category]=${env('CATEGORY_ID')}`,
    getStandardProductTypeFilter: `${url}/api/v1/admin/products?filters[type]=standard`,
    getDigitalProductTypeFilter: `${url}/api/v1/admin/products?filters[type]=digital`,
    getInStockProductTypeFilter: `${url}/api/v1/admin/products?filters[stockStatus]=available`,
    getOutOfStockProductTypeFilter: `${url}/api/v1/admin/products?filters[stockStatus]=out_of_stock`,
    getOnBackorderProductTypeFilter: `${url}/api/v1/admin/products?filters[stockStatus]=on_backorder`,
    getLowStockProductTypeFilter: `${url}/api/v1/admin/products?filters[stockStatus]=low_stock`,
    getUnmanagedProductTypeFilter: `${url}/api/v1/admin/products?filters[stockStatus]=unmanaged`,
    getVendorShippingProfile: `${url}/api/v1/shipping/vendors/${env('VENDOR_ID')}/profiles`,

    //Category & Attribute
    categoryGetAll: `${url}/api/v1/categories`,
    categoryCreate: `${url}/api/v1/categories`,
    categoryDelete: (category_id: string) => `${url}/api/v1/categories/${category_id}`,
    categoryUpdate: (categoryID: string) => `${url}/api/v1/categories/${categoryID}`,
    attributeCreate: (categoryID: string) => `${url}/api/v1/categories/${categoryID}/attributes`,
    attributeUpdate: (categoryID: string, attributeID: string) => `${url}/api/v1/categories/${categoryID}/attributes/${attributeID}`,
    attributeDelete: (categoryID: string, attributeID: string) => `${url}/api/v1/categories/${categoryID}/attributes/${attributeID}`,

    
    // Customer
    getProductIDbyCustomer: (productID: string) => `${url}/api/v1/products?search=${productID}`,
    directProduct: `https://jamuna-future-park.ondokan.com/products/digital-product?_rsc=4ifhs`,
    getShipping: `${url}/api/v1/shipping/profiles/7`,
    // getSubscription: `${url}/api/v1/vendor/subscriptions?tenant=jamuna-future-park`
    getSubscription: `${url}/api/v1/vendor/subscriptions`,
    pay: `${url}/api/v1/order-groups`,





                                /* <<<<<<<<<<<<<<<<< Vendor ALL End Points >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
    
    // Dashboard
    getVendorDashbaordTodayReport: `${url}/api/v1/reports/vendor/dashboard/today`,
    getVendorDashbaordHourlyReport: `${url}/api/v1/reports/vendor/dashboard/hourly-sales`,
    getVendorDashbaordTodosReport: `${url}/api/v1/reports/vendor/dashboard/todos`,
                                
    // Products
    vendorProductGetAll: `${url}/api/v1/vendor/products`,
    // vendorIndividualProductGet: `${url}/api/v1/vendor/products/${env('PRODUCT_ID')}`,
    vendorIndividualProductGet: `${url}/api/v1/vendor/products/${env('PRODUCT_ID')}`,
    vendorSearchIndividualProduct:(productTitle: string) => `${url}/api/v1/vendor/products?search=${productTitle}`,
    vendorCreateProduct: `${url}/api/v1/vendor/products`,
    vendorProductUpdate: (productID: string) => `${url}/api/v1/vendor/products/${productID}`,
    vendorProductDelete: (productID: string) => `${url}/api/v1/vendor/products/${productID}`,
    getVendorPublishedProduct: `${url}/api/v1/vendor/products?filters[status]=published`,
    getVendorDraftProduct: `${url}/api/v1/vendor/products?filters[status]=draft`,
    getVendorPaginationProduct: `${url}/api/v1/vendor/products?page=2`,

    // order
    vendorGetAllOrders:`${url}/api/v1/vendor/orders?include=orderGroup`,
    vendorGetPaginationPageOrder: `${url}/api/v1/vendor/orders?include=orderGroup&filters[orderStatus]=completed&page=2`,
    vendorGetCompletedOrder: `${url}/api/v1/vendor/orders?include=orderGroup&filters[orderStatus]=completed`,
    vendorGetProcessingOrder: `${url}/api/v1/vendor/orders?include=orderGroup&filters[orderStatus]=processing`,
    vendorGetPendingOrder: `${url}/api/v1/vendor/orders?include=orderGroup&filters[orderStatus]=pending`,
    vendorGetFailedOrder: `${url}/api/v1/vendor/orders?include=orderGroup&filters[orderStatus]=failed`,
    vendorGetCanceledOrder:`${url}/api/v1/vendor/orders?include=orderGroup&filters[orderStatus]=canceled`,
    vendorGetRefundedOrder:`${url}/api/v1/vendor/orders?include=orderGroup&filters[orderStatus]=refunded`, 
    vendorGetSingleOrder: (singleOrderID: string) => `${url}/api/v1/vendor/orders/${singleOrderID}`,
    vendorSearchOrder: (orderNo: number) => `${url}/api/v1/vendor/orders?include=orderGroup&filters[search]=${orderNo}`,
    vendorGetPaymentID: (singleOrderID: string) => `${url}/api/v1/orders/${singleOrderID}/payments`,
    vendorUpdateShippingAddress: (singleOrderID: string) =>`${url}/api/v1/vendor/orders/${singleOrderID}/shipping`,
    vendorUpdateBillingAddress: (singleOrderID: string) =>`${url}/api/v1/vendor/orders/${singleOrderID}/billing`,
    vendorPutOnHoldOrder:(singleOrderID: string) => `${url}/api/v1/vendor/orders/${singleOrderID}/on-hold`,
    vendorRemoveHoldOrder:(singleOrderID: string) => `${url}/api/v1/vendor/orders/${singleOrderID}/remove-hold`,
    vendorCancelOrder:(singleOrderID: string) => `${url}/api/v1/vendor/orders/${singleOrderID}/cancel`,

    vendorCreateShipment: `${url}/api/v1/shipments`,
    vendorChargeOrder: (singleOrderID: string) => `${url}/api/v1/orders/${singleOrderID}/charges`,
    vendorRefundOrder: (singleOrderID: string) => `${url}/api/v1/vendor/orders/${singleOrderID}/refunds`,


    // Shipping
    vendorGetShippingPreferences: `${url}/api/v1/settings/vendor/shipping`,
    vendorSaveShippingPreferences: `${url}/api/v1/settings/vendor/shipping`,
    vendorGetShippingProfile: `${url}/api/v1/shipping/vendor/profiles`,
    vendorGetIndividualProfileID: `${url}/api/v1/shipping/vendor/profiles`,
    vendorCreateShippingProfile: (shippingProfileID: string) => `${url}/api/v1/shipping/profiles/${shippingProfileID}/weight-rules`,
    vendorViewIndividualShippingProfile: (shippingProfileID: string) => `${url}/api/v1/shipping/vendor/profiles/${shippingProfileID}`,
    vendorUpdateIndividualShippingWeightRule: (shippingProfileID: string, weightRuleID: string) => `${url}/api/v1/shipping/profiles/${shippingProfileID}/weight-rules/${weightRuleID}`,
    vendorGetShippingAddress: `${url}/api/v1/shipping/vendor/addresses`,

    // Payout
    vendorGetPayout: `${url}/api/v1/settings/vendor/payout`,
    vendorGetPayoutSummary: `${url}/api/v1/vendor/balances/summary?with_upcoming=true`,
    vendorGetCompare: `${url}/api/v1/vendor/balances/compare?from=2023-01-01&to=2023-11-30`,
    vendorGetDashboardBalance: `${url}/api/v1/vendor/balance-in?recent=true&limit=5`,
    vendorGetDashboardWithdraw: `${url}/api/v1/vendor/withdrawals?recent=true&limit=5`,
    vendorGetBalanceIN: `${url}/api/v1/vendor/balance-in`,
    vendorGetWithdraws: `${url}/api/v1/vendor/withdrawals`,
    
    // Vendor Coupons
    vendorGetAllCoupon: `${url}/api/v1/vendor/coupons`,
    vendorGetActiveCoupon: `${url}/api/v1/vendor/coupons?filters[status]=active`,
    vendorGetDraftCoupon: `${url}/api/v1/vendor/coupons?filters[status]=draft`,
    vendorGetExpiredCoupon: `${url}/api/v1/vendor/coupons?filters[status]=expired`,
    
    createCoupon: `${url}/api/v1/vendor/coupons`,
    getIndividualCoupon: (couponID: string) => `${url}/api/v1/vendor/coupons/${couponID}`,
    searchCoupon: (coupon_title: string) => `${url}/api/v1/vendor/coupons?search=${coupon_title}`,
    updateCoupon: (couponID: string) => `${url}/api/v1/vendor/coupons/${couponID}`,
    deleteCoupon: (couponID: string) => `${url}/api/v1/vendor/coupons/${couponID}`,

    // General Settings
    vendorGetBasicSettings: `${url}/api/v1/settings/vendor/general`,
    vendorSaveBasicSettings: `${url}/api/v1/settings/vendor/general`,
    
    vendorGetStoreDetailsSettings: `${url}/api/v1/settings/vendor/store-details`,
    vendorSaveStoreDetailsSettings: `${url}/api/v1/settings/vendor/store-details`,
    vendorGetDefaultAddressId: `${url}/api/v1/vendor/addresses`,
    vendorUpdateDefaultStoreAddress: (defaultAddressId: string) => `${url}/api/v1/vendor/addresses/${defaultAddressId}`,
    vendorAddNewLocation: `${url}/api/v1/vendor/addresses`,
    vendorUpdateLocation: (locationId: string) => `${url}/api/v1/vendor/addresses/${locationId}`,
    vendorDeleteLocation: (locationId: string) => `${url}/api/v1/vendor/addresses/${locationId}`,

    // team settings
    vendorGetAllTeamMember: `${url}/api/v1/team/vendor/members`,
    vendorGetActiveTeamMember: `${url}/api/v1/team/vendor/members?filters[status]=active`,
    vendorGetInactiveTeamMember: `${url}/api/v1/team/vendor/members?filters[status]=inactive`,
    vendorGetInvitedTeamMember: `${url}/api/v1/team/vendor/invitations?filters[status]=invited`,
    vendorInviteNewTeamMember: `${url}/api/v1/team/vendor/members/invite`,
    vendorSearchTeamMember: (invitedTeamMemberEmail: string) => `${url}/api/v1/team/vendor/members?search=${invitedTeamMemberEmail}`,
    vendorResendInvitationInvitedTeamMember: `${url}/api/v1/team/vendor/invitations/resend`,
    vendorRemoveInvitedNewTeamMember: (invitedTeamMemberEmail: string) => `${url}/api/v1/team/vendor/invitations/${invitedTeamMemberEmail}`,

    // Payment
    vendorGetPaymentGatwey: `${url}/api/v1/vendor/gateways`,
    vendorGetPayment: `${url}/api/v1/settings/payment`,
    
    // Payout
    vendorGetPayoutSettings: `${url}/api/v1/settings/vendor/payout`,
    vendorUpdateManualPayout: `${url}/api/v1/settings/vendor/payout`,
    vendorAutomaticPayout: `${url}/api/v1/settings/vendor/payout`,

    // plans & bills
    getVendorPlansAndBills: `${url}/api/v1/vendor/onboarding/plans`,
    getVendorSubscription: `${url}/api/v1/vendor/subscriptions`,
    
    // live chat
    getVendorLiveChat: `${url}/api/v1/vendor/integrations/live-chat`,
    enableVendorLiveChat: `${url}/api/v1/vendor/integrations/live-chat`,

    //profile
    vendorGetProfile: `${url}/api/v1/user/my-account/profile`,
    vendorSaveProfile: `${url}/api/v1/user/my-account/profile`,
 
    




    /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Customer <<<<<<<<<<<<<<<<<<<<<<<<<<< */

    customerRegister: `${url}/api/v1/auth/register`,
    customerGetAccountDetails: `${url}/api/v1/user/my-account/profile`,
    customerSaveAccountDetails: `${url}/api/v1/user/my-account/profile`,

    // my orders
    customerGetAllOrders: `${url}/api/v1/orders/me?per_page=4`,
    customerGetPaidOrders: `${url}/api/v1/orders/me?filters[status]=paid&per_page=4`,
    customerGetUnpaidOrders: `${url}/api/v1/orders/me?filters[status]=unpaid&per_page=4`,
    customerGetRefunedOrders: `${url}/api/v1/orders/me?filters[status]=refunded&per_page=4`,
    customerGetAwaitingShipmentOrders: `${url}/api/v1/orders/me?filters[status]=awaiting_shipment&per_page=4`,
    customerGetCompletedOrders: `${url}/api/v1/orders/me?filters[status]=completed&per_page=4`,
    customerGetOrderDetails: `${url}/api/v1/orders/${env('CUSTOMER_ORDER_ID')}`,
    customerGetOrderPagination: `${url}/api/v1/orders/me?page=2&per_page=4`,

    // review management
    customerGetPendingReview: `${url}/api/v1/reviews/pending?page=1&limit=10`,
    customerGetReviewHistory: `${url}/api/v1/reviews?page=1&limit=10`,

    //addresses
    customerGetAddresses: `${url}/api/v1/user/addresses`,
    customerAddNewAddresses: `${url}/api/v1/user/addresses`,
    customerEditNewAddresses: (customerID: number) => `${url}/api/v1/user/addresses/${customerID}`,
    customerDeleteNewAddresses: (customerID: number) => `${url}/api/v1/user/addresses/${customerID}`,

    // home
    customerGetCategoriesStore: `${url}/api/v1/categories`,
    customerGetPopularStore: `${url}/api/v1/vendors?filter=popular`,
    customerGetBestSellerStore: `${url}/api/v1/vendors?filter=best-seller`,
    customerGetFeaturedStore: `${url}/api/v1/vendors?filter=featured`,
    customerGetNewStore: `${url}/api/v1/vendors?filter=newest`,
    customerGetSearchProduct: `${url}/api/v1/products?search=hoodie`,


}