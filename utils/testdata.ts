import { faker } from "@faker-js/faker";

export const user ={
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
    
}
let passwordValue = faker.internet.password();

export const data = {
    commonMessage:
    {
        createSuccessMessage: 'Created successfully',
        updateSuccessMessage: 'Updated successfully',
        deleteSuccessMessage: 'Deleted successfully',
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
            productPage: '/vendor/products',
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
            sku: () => faker.helpers.unique(() => faker.random.alpha(10)),
            updateName: () => faker.commerce.productName() + (' (Update)'),
        },
    },
    
    category: {
        insertName: () => faker.commerce.productAdjective() + (' (New)'),
        insertDescription: () => faker.commerce.productDescription(),
        updateName: () => faker.commerce.productAdjective() + (' (Update)'),
    },
    brand: {
        insertName: () => faker.commerce.productAdjective() + (' (New)'),
        updateName: () => faker.commerce.productAdjective() + (' (Update)'),
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
        }
    }
}
