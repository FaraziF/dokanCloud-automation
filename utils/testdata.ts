import { faker } from "@faker-js/faker";

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

    // Generated  test data
	auth: {
		adminAuthFile: 'playwright-test/.auth/adminStorageState.json',
		vendorAuthFile: 'playwright-test/.auth/vendorStorageState.json',
		customerAuthFile:'playwright-test/.auth/customerStorageState.json'
	},

    adminCredentials: {
		username: String(process.env.ADMIN_USERNAME),
		password: String(process.env.ADMIN_PASSWORD),
	},
    vendorCredentials: {
		username: String(process.env.VENDOR_USERNAME),
		password: String(process.env.VENDOR_PASSWORD),
	},
    customerCredentials: {
		username: String(process.env.CUSTOMER_USERNAME),
		password: String(process.env.CUSTOMER_PASSWORD),
	},

    commonMessage:
    {
        createSuccessMessage: 'Created successfully',
        updateSuccessMessage: 'Updated successfully',
        deleteSuccessMessage: 'Deleted successfully',
        vendorName: 'farazi',
    },

    subUrls: {
        admin: {
            login: '/admin/login',
            dashboard: '/admin',
            product: '/admin/products',
            category: '/admin/categories',
            brand: '/admin/brands',
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

    dashboard: {
        PageValidation: 'Dashboard',
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
    },
    
    category: {
        // insertName: () => faker.commerce.productAdjective() + (' (New)'),
        insertName: () => faker.helpers.unique(() => faker.random.word()),
        insertDescription: () => faker.commerce.productDescription(),
        updateName: () => faker.helpers.unique(() => faker.random.word()),
    },
    brand: {
        // insertName: () => faker.commerce.productAdjective() + (' (New)'),
        insertName: () => faker.helpers.unique(() => faker.random.word()),
        // updateName: () => faker.commerce.productAdjective() + (' (Update)'),
        updateName: () => faker.helpers.unique(() => faker.random.word()),
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
