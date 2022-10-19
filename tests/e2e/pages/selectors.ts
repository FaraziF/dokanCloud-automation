export const selector = {
/*                    <<<<<<<<<<<<<<<<<<<< Vendor Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>             */
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
    countryOfCitizenship: "(//div[@class='px-2'])[1]",
    countryOfBirthday: "(//div[@class='px-2'])[2]",
    storeName: "[placeholder='Store name']",
    nextButton: "button.inline-flex.gap-2",
    
    // Address Form
    streetAddress: "[placeholder='Insert Address']",
    country: ".css-10rvzng-control div #react-select-4-input",
    state: ".css-10rvzng-control div #react-select-5-input",
    city: "[placeholder='City']",
    postCode: "[placeholder='Zip Code\\/ Post Code']",
    registrationButton: "button:has-text('Register')",
},
signOut: {
    userMenu: "button:has-text('Open user menu')",
    signOutText: "text=Sign Out",

},

/*                           <<<<<<<<<<<<<< Admin Section >>>>>>>>>>>>>>>>                              */
adminDashboard: {
    validaton: "//h1[text()='Dashboard']",
},
admin: {
    loginPage: {
        validation: `${'body #__next div:nth-child(2)'}`,
    },
    dashboard: {
        validation: "//h1[text()='Dashboard']",
    }
},

backend: {
    admin: {
        eamilAddress: "input[name = 'email']",
        password: "input[name = 'password']",
        login: {

        }
    }
},
    /*                           <<<<<<<<<<<<<< Common Section >>>>>>>>>>>>>>>>                              */
productPage: {
    validation: "h1.text-2xl",
},

}