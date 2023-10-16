import { faker } from "@faker-js/faker";

const env = require('../env')
/* export const user ={
    admin: {
        email: '',
        password: '',
    },
    vendor: {
        email: '',
        password: '',
        invalidEmail: '',
        invalidPassword: ''

    }
    
} */
let passwordValue = faker.internet.password();

interface user {
	username: string;
	password: string;
}

interface admin {
	username: string;
	password: string;
}

export { admin, user };

export const data = {

    /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Generated  test data <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
	auth: {
		adminAuthFile: 'playwright-test/.auth/adminStorageState.json',
		vendorAuthFile: 'playwright-test/.auth/vendorStorageState.json',
		customerAuthFile:'playwright-test/.auth/customerStorageState.json'
	},

    adminCredentials: {
		username: String(env('ADMIN_USERNAME')),
		password: String(env('ADMIN_PASSWORD')),
	},
    vendorCredentials: {
		username: String(process.env.VENDOR_USERNAME),
		password: String(process.env.VENDOR_PASSWORD),
	},
    customerCredentials: {
		username: String(process.env.CUSTOMER_USERNAME),
		password: String(process.env.CUSTOMER_PASSWORD),
	},



 /*  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Common Test <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
    dashboard: {
        PageValidation: 'Dashboard',
    },

    commonLink: {
        allProduct: 'All Products'
    },

    commonMessage:{
        createSuccessMessage: 'Created successfully',
        updateSuccessMessage: 'Updated successfully',
        deleteSuccessMessage: 'Deleted successfully',
        // vendorName: 'farazi',
        vendorName: 'jamuna-future-park',
    },

    product: {
        pageValidation: 'Products',
        standard: {
            productName: () => faker.commerce.productName() + (' (Standard)'),
            productDescription: () => faker.commerce.productDescription(),
            regularPrice: () => (faker.finance.amount(100, 200, faker.helpers.arrayElement([1, 2]))),
            sku: () => faker.helpers.unique(() => faker.random.alpha(10)),
            updateName: () => faker.commerce.productName() + (' (Update)'),
            // updateName: () => faker.helpers.unique(() => faker.random.word()),
        },
        createMessage: 'Created Successfully',
        editMessage: 'Product updated successfully',
    },

    /*  <<<<<<<<<<<<<<<<<<<<<<<<<<< Sub URL section <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

    subUrls: {
        admin: {
            login: '/admin/login',
            dashboard: '/admin',
            product: '/admin/products',
            category: '/admin/categories',
            brand: '/admin/brands',
            order: '/admin/orders',
            subscription: '/admin/subscriptions',
            payouts: '/admin/payouts',
            vendor: '/admin/vendors',
            customer: '/admin/customers',
            page: '/admin/pages',
            generalSettings: '/admin/settings/general',
            teamSettings: '/admin/settings/team',
            paymentSettings: '/admin/settings/payment',
            payoutSettings: '/admin/settings/payout',
            shippingSettings: '/admin/settings/shipping',
            notificationSettings: '/admin/settings/notification',
            taxSettings: '/admin/settings/tax',
            seoSettings: '/admin/settings/seo',
            policiesSettings: '/admin/settings/policies',
        },
        vendor: {
            dashboard: '/vendor',
            product: '/vendor/products',
            login: '/vendor/login',
        },
        customer: {
            registerPage: '/register',
            loginPage: '/login',
        },
        storefront: {
            shopPage: '/shop',
        },
    },

    /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Admin Section <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    
    category: {
        pageValidation: 'Categories',
        // insertName: () => faker.commerce.productAdjective() + (' (New)'),
        insertName: () => faker.helpers.unique(() => faker.random.word()),
        insertDescription: () => faker.commerce.productDescription(),
        updateName: () => faker.helpers.unique(() => faker.random.word()),
        imageUpload: "/Users/faraziforhad/MyDevice/Programming/Automation/playwright-test/utils/images/avocado.png",

    },
    brand: {
        pageValidation: 'Brands',
        // insertName: () => faker.commerce.productAdjective() + (' (New)'),
        insertName: () => faker.helpers.unique(() => faker.random.word()),
        // updateName: () => faker.commerce.productAdjective() + (' (Update)'),
        updateName: () => faker.helpers.unique(() => faker.random.word()),
    },

    attribute: {
        type: {
            text: 'text',
            textarea: 'textarea',
            multiselect: 'multiselect',
            select: 'select',
            checkbox: 'checkbox',
            radio: 'radio'
        },
        option: {
            colors: ["red", "green", "black"],
            size: ["L", "M", "S", "XL", "XXL", "XXXL"]
        }
    },

    order: {
        pageValidation: 'Orders'
    },

    subscription: { 
        pageValidation: 'Subscription Plans', 
        titleField: 'pro subscription pack',
        descriptionField: 'this is new subscription pack',
        priceField: '20',
        setupFee: '10',
        billingCycle: '5',
        selectTrailPriod: '5',
        selectTrailPriod2: 'week',
        percentageCommissions: '5',
        flatCommissions: '10',
        numberOfPhysicalProducts: '10',
        numberOfDigitalProducts: '10',
        numberOfVendorStaff: '5',
        createSuccessMessage: 'Subscription plan is created successfully',
        // edit
        descriptionUpdateField: 'this is new subscription pack update description',
        updateSuccessMessage: 'Subscription plan has been updated successfully',
        deleteSuccessMessage: 'Subscription plan deleted successfully',


    },

    payout: {
        pageValidation: 'Payout Requests'
    },

    vendors: {
        pageValidation: 'Vendors'
    },

    customersPage: {
        pageValidation: 'Customers'
    },

    designPage: {
        pageValidation: 'Pages'
    },
    
    generalSettings: {
        pageValidation: 'General Settings'
    },

    teamSettings: {
        pageValidation: 'Team'
    },

    paymentSettings: {
        pageValidation: 'Payment Settings'
    },

    payoutSettings: {
        pageValidation: 'Payout Options'
    },
    
    shippingSettings: {
        pageValidation: 'Shipping Settings'
    },

    notificationSettings: {
        pageValidation: 'Notifications'
    },

    taxSettings: {
        pageValidation: 'Tax',
        className: 'New Tax Class',
        classNameUpdate: 'Update Tax Class',
        validateSuccessMessage: 'Tax class created successfully.',

        renameValidation: 'Rename Tax Class',
        updateValidateSuccessMessage: 'Tax class updated successfully.',

        deleteValidationSuccessMessage: 'Tax class deleted successfully.',

        countrySearch: 'afg',
        countryValidation: 'Afghanistan',
        taxName: 'aftaxname',

        manageSuccessMessageValidation: 'Tax rates have been saved successfully.',

        stateName: 'kabul',

    },

    seoSettings: {
        pageValidation: 'SEO Settings'
    },

    policiesSettings: {
        pageValidation: 'privacy-policy'
    },


    

    


    //                                     <<<<<<  Customer Data Section  >>>>>>>>

    customer: {
        customerInfo: {
            firstName: () => faker.name.firstName('male'),
            lastName: () => faker.name.lastName('male'),
            emailDomain: '@gmail.com',
            email: faker.internet.email(),
            // password: String(process.env.CUSTOMER_PASSWORD),
            password: passwordValue,
            confirmPassword: passwordValue,
        },

        loginSuccessfully: 'Login Successful',
    }
}
