export const selector = {

    common: {
        // dropDown: "(//button[@class='dropdown-trigger'])[1]",
        dropDown: "(//*[name()='svg'][@class='text-gray-600'])[1]",
        create: "Save",
        update: "Update",
        editLink: "Edit",
        deleteLink: "Delete",
        deleteButton: "Yes",
    },
    
    /*                           <<<<<<<<<<<<<< CM Common Section For Admin & Vendor >>>>>>>>>>>>>>>>                              */
    
    // productPage: {
    //     validation: "h1.text-xl",
    // },
    
    product: {
        menuLink: 'Products',
        subMenuLink: 'All Products',
        addNew: "Add Product",
        name: "#product-name",
        createPageValidation: 'Product Name',
        description: "//div[@class='ql-editor ql-blank']",
        productCategory: "//input[@placeholder='Search']", 
        productCategorySelect: "Clothing",
        status: 'Published',
        publishedTab: 'Published',
        publishedPageURLValidation: '/admin/products?filters[status]=published',
        publishedPageElementValidation: '//th[text()="Product"]',
        filter: "(//button[contains(@class,'inline-flex items-center')])[2]",
        draftStatus: 'Draft',
        draftPageURLValidation: '/admin/products?filters[status]=draft',
        all: 'All',
        search: 'Press enter to search...',
        priceCell: 'PRICE',
        statusCell: 'STATUS',
        stockCell: 'STOCK',
        actionCell: 'ACTION',
        soldBy: "//div[@id='react-select-2-placeholder']/following-sibling::div[1]",
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
        updateButton: "Update",
        pagination: '.pagination',
        create: 'Create',
    },

    order: {
        menuLink: 'All Orders',
        // detailsPreview: "(//tr[@class='cursor-pointer'])[1]",
        detailsPreview: "//tbody/tr[1]/td[1]",
    },

    subscriptions: {
        menuLink: 'Subscription Plans',
    },

    payouts: {
        menuLink: 'Payouts',
    },

    vendors: {
        menuLink: 'Vendors',
    },

    customerMenu: {
        menuLink: 'Customers',
    },

    designPage: {
        menuLink: 'Pages',
    },

    generalSettings: {
        menuLink: 'General',
    },
    teamSettings: {
        menuLink: 'Team',
        emailAddress: 'ex- abc@gmail.com',
        phoneNumber: 'ex-  +1 123 456 789',
        designation: 'ex- Marketer, Manager...',
        selectAllProduct: 'Products Select All',
        selectAllOrder: 'Orders Select All',
        selectAllCustomer: 'Customer Select All',
        selectAllVendor: 'Vendor Select All',
        selectAllSettings: 'Settings Select All',
        selectAllMisc: 'Misc Select All',
        sendInvitation: 'Send Invitation',
        invitedTabView: 'Invited',
        viewAction: "(//div[@role='button'])[1]",

        registerButton: 'Register',
        loginButton: 'Login Page',
    },

    paymentSettings: {
        menuLink: 'Payment',
    },

    payoutSettings: {
        menuLink: 'Payout',
    },

    shippingSettings: {
        menuLink: 'Shipping',
        saveButton: "//section[@class='flex justify-end']//button[1]",
        shippingLocation: '.css-98q0e7',
        saveShippingLocation: 'Save',
        
    },

    notificationSettings: {
        menuLink: 'Notification',
    },

    taxSettings: {
        menuLink: 'Tax',
    },

    seoSettings: {
        menuLink: 'SEO',
    },

    policiesSettings: {
        menuLink: 'Policies',
    },

    /*                     <<<<<<<<<<<<<<<<< AS-> Admin Section >>>>>>>>>>>>>>>>           */
    
    admin: {
        loginPage: {
            validation: `${'body #__next div:nth-child(2)'}`,
        },
        dashboard: {
            validation: "//h1[text()='Dashboard']",
        },
        category: {
            menuLink: 'Categories',
            addNew: "New Category",
            titleField: "#category-name",
            descriptionField: "Description",
            
            dropDown: "(//div[@role='button'])[1]",
            backListPage: "Categories",
            imageUploadLocation: "//button[text()='Upload']",
            deleteButton: "Delete",
        },
        brand: {
            menuLink: 'Brands',
            addNew: "Create Brand",
            name: "#brand-name",
            description: "#brand-description",
            // save: "Update",
            dropDown: "(//div[@role='button'])[1]",
            saveChanges: 'Save Changes',
        },
        subscription: {
            menuLink: 'Subscription Plans',
            addNewPlan: 'Create Plan',
            titleField: 'Eg: Sliver',
            descriptionField: '.ql-editor',
            priceField: 'Price',
            setupFee: 'Setup Fee',
            billingCycle: 'Billing Cycle',
            taxApplicable: "(//button[@role='switch'])[2]",
            taxClass: "//div[@class=' css-17wv8nz']",
            selectTaxClass: 'Reduced Rate',
            enableTrailPriod: "(//button[@role='switch'])[3]",
            selectTrailPriod: 'Trial Period',
            selectTrailPriod2: '[id="-simple-select"]',
            percentageCommissions: '5',
            flatCommissions: '250.0',
            continueSteps: 'Continue',
            numberOfPhysicalProducts: '#noofpyscialproducts',
            numberOfDigitalProducts: "(//input[@id='noofdigitalproducts'])[1]",
            couponCreation: "(//button[@role='switch'])[2]",
            allowMultipleAddress: "(//button[@role='switch'])[3]",
            numberOfVendorStaff: '2',
            createAndPublish: 'Publish',
            //Edit
            titleEditField: '.ql-editor',
            updatePlan: 'Update',
        },
        tax: {
            classTab: 'Tax Class',
            createTaxClss: "//div[@class='ms-auto']//button[1]",
            popupValidation: 'New Tax Class',
            className: 'e.g Standard',
            createButton: 'Create',

            renameLink: "(//button[contains(@class,'gap-2 shadow-sm')])[1]",
            saveButton: 'Save',

            deleteLink: "(//button[contains(@class,'gap-2 shadow-sm')]/following-sibling::button)",
            deleteValidation: "//div[contains(@class,'h-20 w-20')]",
            deleteButton: 'Yes, Delete',
            
            countryTab: 'Country',
            addCountryButton: 'Add Country',
            countryPopupValidation: 'Select Country',
            selectCountry: 'Afghanistan',
            continueButton: 'Continue',
            selectTaxClassValidation: 'Select Tax Class',
            taxClassCountryValidation: "//div[text()='Afghanistan']",
            addCountry: "//section[contains(@class,'flex flex-row-reverse')]//button[1]",

            sameTaxRate: 'Same tax rate for entire country State, Province and Zip code of a country maintain a same tax rate.',
            taxName: 'Write here',
            enableCollectTaxesOnShipping: 'Collect taxes on shipping',
            EnablecollectTaxesOnDigitalProducts: 'Collect taxes on digital products',

            manageButton: 'Manage',
            manageValidation: 'Select Tax Class',
            manageDone: 'Done',
            saveChanges: 'Save Changes',  
            manageBackButton: 'Back',          

            differentTaxRate: 'Different tax rate for state, city and zip Tax rate may varies upon State, Province, City and even Zip code.',

            addState: 'Add State',
            selectState: 'Select State',
            searchState: 'Search State...',
            continueState: 'Continue',

            additionalTaxCollection: 'Additional Tax collection',
            onShipping: 'On Shipping',
            onDigitalProduct: 'On Digital Products',
            overrideCountryTax: 'Override Country Tax',

            compoundTax: '#tax-state-compound',
            compoundState: '#tax-state-compound',

            differentStateTax: '#state-0-compound',
            save: 'Save',
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






    /*                   <<<<<<<<<<<<<< VS-> Vendor Section >>>>>>>>>>>>>>>>           */

login: {
    // eamilAddress: "input[name = 'email']",
    adminEamilAddress: "#login-email",
    vendorEamilAddress: "#login-email",
    customerEamilAddress: "#reg-email",
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






    /*                           <<<<<<<<<<<<<< CS-> Customer Section >>>>>>>>>>>>>>>>                              */

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