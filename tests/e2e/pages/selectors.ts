export const selector = {

    common: {
        dropDown: "(//button[@class='dropdown-trigger'])[1]",
        create: "Save",
        update: "Update",
        editLink: "Edit",
        deleteLink: "Delete",
    },


    /*                <<<<<<<<<<<<<< Admin Section >>>>>>>>>>>>>>>>           */
    
    adminDashboard: {
        validaton: "//h1[text()='Dashboard']",
    },
    admin: {
        loginPage: {
            validation: `${'body #__next div:nth-child(2)'}`,
        },
        dashboard: {
            validation: "//h1[text()='Dashboard']",
        },
        category: {
            addNew: "New Category",
            titleField: "#category-name",
            descriptionField: "Description",
            createSuccessMessage: "Created successfully",
            dropDown: "(//button[@class='dropdown-trigger'])[1]",
            backListPage: "Categories",
        },
        brand: {
            addNew: "New Brand",
            name: "#brand-name",
            // save: "Update",
            dropDown: "(//button[@class='dropdown-trigger'])[1]",
        },
    },
    
    backend: {
        admin: {
            eamilAddress: "input[name = 'email']",
            password: "input[name = 'password']",
            login: {
    
            }
        }
    },

    /*                   <<<<<<<<<<<<<< VS Vendor Section >>>>>>>>>>>>>>>>           */

login: {
    eamilAddress: "input[name = 'email']",
    password: "input[name = 'password']",
    keepMeSignIn: "input[type='checkbox']",
    signIn: "button.w-full.inline-flex",
    userIsLoggedIn: "//h1[text()='Dashboard']",
    userIsLoggedInFailed: "#login-email-error",
    userIsLoggedOut: "p.text-xl.mt-4",
    loginCredentialsErrorMessage: "#login-email-error",
    loginEmailErrorMessage: "#login-email-error",
    loginPasswordErrorMessage: "#login-password-errors",

},
vendorDashboard: {
    validation: "//h1[text()='Dashboard']",
},
registration: {
    // Registration Page Validation
    pageValidation: "div.max-w-lg.mx-auto",
    businessDeailsPageValiation: "div.mx-auto.container",
    addressFormPageValidation: `${'form div div.max-w-3xl.mx-auto'}`,
    vendorIsRegistered: "//h1[text()='Dashboard']",
    
    signUpLink: "a.font-bold.text-indigo-500",
    vendorSignUpPage: "p.text-xl.mt-4",
    firstName: "input[name='firstName']",
    lastName: "input[name='lastName']",
    email: "input[name='email']",
    password: "(//input[@name='password'])[1]",
    confirmPassword: "(//input[@id='login-password'])[2]",
    signUpComplete: "button.w-full.inline-flex",
    
    // Business Details Form
    businessFirstName: "input[name='firstName']",
    businessLastName: "input[name='lastName']",
    countryOfCitizenship: 'text=Country of citizenshipoption Afghanistan focused, 1 of 101. 101 results availabl >> input[role="combobox"]',
    countryOfBirthday: 'text=Country of birthoption Afghanistan focused, 1 of 101. 101 results available. Use >> input[role="combobox"]',
    storeName: "[placeholder='Store name']",
    storeURLLoader: "#store-url-loader",
    nextButton: "button.inline-flex.gap-2",
    
    // Address Form
    streetAddress: "[placeholder='Insert Address']",
    apartmentsAddress: "input[name='address2']",
    country: 'text=Countryoption Afghanistan focused, 1 of 101. 101 results available. Use Up and D >> input[role="combobox"]',
    state: 'text=Districtoption Bagerhat focused, 1 of 64. 64 results available. Use Up and Down  >> input[role="combobox"]',
    city: "[placeholder='City']",
    postCode: "[placeholder='Zip Code\\/ Post Code']",
    registrationButton: "form div.flex.justify-between button:nth-child(2)",
},
signOut: {
    userMenu: "button:has-text('Open user menu')",
    signOutText: "text=Sign Out",
},


    /*                           <<<<<<<<<<<<<< CM Common Section >>>>>>>>>>>>>>>>                              */
productPage: {
    validation: "h1.text-xl",
},

product: {

    addNew: "Add Product",
    productName: "#product-name",
    productDescription: "Description",
    productCategory: "input.flex-grow.bg-transparent",
    productCategorySelect: "Clothing",
    soldBy: ".css-17wv8nz",
    vendorName: "#react-select-2-input",
    regularPrice: "#regular-price",
    salePrice: "#sale-price",
    taxClass: ".css-98q0e7",
    selectTax: "#react-select-2-option-0",
    sku: "#sku",
    stockQuantity: "#stock-quantity",
    lowStockQuantity: "#low-stock-threshold",
    shippingWeight: "#shipping-weight",
    shippingHeight: "#shipping-height",
    shippingWidth: "#shipping-width",
    shippingLength: "#shipping-length",
    shippingProfile: "//div[@id='react-select-7-placeholder']",
    updateButton: "Update"


},



    /*                           <<<<<<<<<<<<<< CS Customer Section >>>>>>>>>>>>>>>>                              */

customer: {
    registration: {
        firstName: "#reg-firstname",
        lastName: "#reg-lastname",
        email: "#reg-email",
        password: "#reg-password",
        confirmPassword: "#reg-password-confirmation",
        submitButton: "button"
    }
}
}

/* 
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ahsan.dokandev.com/register');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Andrew');
  await page.getByPlaceholder('Doe').click();
  await page.getByPlaceholder('Doe').fill('Leo');
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill('anrew.leo12331312321@example.com');
  await page.locator('#reg-password').click();
  await page.locator('#reg-password').fill('123456Aa');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('123456Aa');
  await page.getByRole('button', { name: 'Create Account' }).click();
});
*/