import { faker } from '@faker-js/faker'
import { data } from './testdata'
import { Z_UNKNOWN } from 'zlib';

const env = require('../env')
let emailAddress: any;

const basicAuth = (email: any, password: any) => 'Basic ' + Buffer.from(email + ':' + password).toString('base64');

export const payloads = {
    
    
    // user auth
    adminAuth: {
        Authorization: basicAuth(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD),
    },

                                                    /* >>>>>> Category AND Attribute Section <<<<<<<<< */
    categoryCreate: () => {
        return {
            // name : faker.commerce.productAdjective() + faker.datatype.uuid(),
            name : faker.commerce.productAdjective() + faker.datatype.uuid(),
        }
    },
    categoryUpdate: () => {
        return {
            name: faker.commerce.productAdjective() + faker.datatype.uuid(),
        }
    },
    attributeCreate: () => {
        return {
            name: faker.commerce.productAdjective() + faker.datatype.uuid(),
            type: data.attribute.type.multiselect,
            options: data.attribute.option.colors,
            isRequired: true,
            isFilterable: true,
            isVisible: true
        }
    },
    attributeUpdate: () => {
        return {
            name: faker.commerce.productAdjective() + faker.datatype.uuid(),
            type: data.attribute.type.radio,
            options: data.attribute.option.size,
            isRequired: true,
            isFilterable: true,
            isVisible: true
        }
    },
                                                    /* >>>>>> Brands Section <<<<<<<<< */

    createBrands: () => {
        return {
            name: faker.commerce.productAdjective(),
            description: faker.commerce.productDescription(),
        }
    },
     editBrand: () => {
        return {
            name: faker.commerce.productAdjective() + " Update",
            description: faker.commerce.productDescription(),
        }
     },
 

                                                    /* Subscription section */
    createSubscription: () => {
        return {
            name: faker.commerce.productAdjective(),
            description: faker.commerce.productDescription(),
            isFreePlan: false,
            price: 20,
            setupFee: 10,
            status: "published",
            isTaxable: false,
            capabilities:{
                products:{
                    enabled:true,
                    publishProductDirectly:true,
                    physicalProductQuantity:20,
                    digitalProductQuantity: 18
                },
                storeSettings:{
                    enabled:true,
                    canCreateCoupon:false,
                    canAllowMultipleAddress:false,
                    vendorStaffQuantity: 20
                },
                seo:{
                    enabled:true,
                    canApplyStoreSEO:true,
                    canApplyProductSEO: true
                },
                report:{
                    enabled:true
                }
            },
            trialPeriodConfig:{
                enabled: false,
                value: 1,
                unit: "day"
            },
            billingCycleConfig:{
                frequency: 1,
                unit:"day",
                expireCycle:1
            },
            commissionConfig:{
                type:"flat",
                flat:
                    {
                    percent:2,
                    fixed:10,
                    }
            },
        }
    },
    editSubscription: () => {
        return {
            name: faker.commerce.productAdjective() + "update",
            description: faker.commerce.productDescription(),
            isFreePlan: false,
            price: 20,
            setupFee: 10,
            status: "published",
            isTaxable: false,
            capabilities:{
                products:{
                    enabled:true,
                    publishProductDirectly:true,
                    physicalProductQuantity:20,
                    digitalProductQuantity: 18
                },
                storeSettings:{
                    enabled:true,
                    canCreateCoupon:false,
                    canAllowMultipleAddress:false,
                    vendorStaffQuantity: 20
                },
                seo:{
                    enabled:true,
                    canApplyStoreSEO:true,
                    canApplyProductSEO: true
                },
                report:{
                    enabled:true
                }
            },
            trialPeriodConfig:{
                enabled: false,
                value: 1,
                unit: "day"
            },
            billingCycleConfig:{
                frequency: 1,
                unit:"day",
                expireCycle:1
            },
            commissionConfig:{
                type:"flat",
                flat:
                    {
                    percent:2,
                    fixed:10,
                    }
            },
        }
    },


                                                    /* Customers */

    createCustomers: () => {
        return {
            email: faker.internet.exampleEmail(),
            firstName: faker.internet.userName(),
            lastName: faker.internet.userName(),
            mobile: faker.phone.imei(),
            password: 'aA123456',
            passwordConfirmation: 'aA123456'
        }
    },
    editCustomers: () => {
        return {
            email: faker.internet.email(),
            firstName: faker.internet.userName() + "update",
            lastName: faker.internet.userName() + "Update",
            mobile: faker.phone.imei(),
        }
    },
    resetPassword: () => {
        return {
            password: 'aA123456',
            passwordConfirmation: 'aA123456'
        }
    },

                                                    /* page section */
    createPage: () => {
        return {
            name: faker.lorem.word(),
            slug: faker.lorem.word() + faker.datatype.uuid(),
            mode: 'editor',
            content: faker.lorem.paragraph(),
        }
    },
    editPage: () => {
        return {
            name: faker.lorem.word() + "update",
            slug: faker.lorem.word() + " update",
            mode: 'editor',
            content: faker.lorem.paragraph() + "update",
        }
    },


                                                    /* Menu section */
    createMenu: () => {
        return {
            name: faker.helpers.unique(() => faker.random.alpha(10)),
            items: [
                {
                    href: "home",
                    id: "ca49d775-6cd5-4635-b05a-d9437e5373e7",
                    isChecked: true,
                    label: "Home",
                    resourceName: "Home",
                    type: "Page",
                }
            ]
        }
    },
    editMenu: () => {
        return {
            name: faker.lorem.word() + " Update",
            items: [
                {
                    href: "home",
                    id: "ca49d775-6cd5-4635-b05a-d9437e5373e7",
                    isChecked: true,
                    label: "Home",
                    resourceName: "Home",
                    type: "Page",
                }
            ]
        }
    },

                                                    /* Settings Section */
    updateMarketplaceDEtails: () => {
        return {
            marketplaceDetails: {
                name: "Farazi",
                siteEmail: "farazi@wedevs.com",
                currency: "USD",
                timezone: "America/Los_Angeles",
                siteLanguage: "en",
                allowGuestCheckout: true
            },
        }
    },
    updateStoreVisibility: () => {
        return {
            storeVisibility: "public",
            storeIndexing: false
        }
    },
    updateUnits: () => {
        return {
            unitSystem: "metric",
            defaultWeightUnit: "kg",
            orderPrefix: "INV-"
        }
    },
    updateBusinessDetails: () => {
        return {
            businessDetails: {
                country: "US",
                city: "Santa Clarita",
                state: "California",
                addressLine1: "California's Great America",
                postCode: "95054",
                legalBusinessName: "Jamuna Future Park",
                phoneNo: faker.phone.imei(),
              }
        }
    },
    updateBrand: () => {
        return {
            logo: {
                _id: "65043018256a3a40044b3752",
                name: "Screenshot 2023-09-15 at 4.20.07 PM.png",
                size: 48340,
                mimetype: "image/png",
                path: "42a4d9bd5b31070602bc35b6a4e1a85a/2023/09/clmkg8xwv00bt0rikhp5g31sk-Screenshot-2023-09-15-at-4.20.07-PM.png"
              },
              icon: {
                _id: "6504302c256a3a40044b3756",
                name: "Screenshot 2023-09-15 at 4.20.39 PM.png",
                size: 54058,
                mimetype: "image/png",
                path: "42a4d9bd5b31070602bc35b6a4e1a85a/2023/09/clmkg9dkn00bu0rik23bqcxl7-Screenshot-2023-09-15-at-4.20.39-PM.png"
              },
              colors: {
                brand: "#7dd900",
                accent: "#7cee00"
              },
              socialLinks: {
                facebook: "https://www.facebook.com/weDevs",
                twitter: "https://twitter.com/weDevs",
                instagram: "",
                linkedin: "https://www.linkedin.com/company/wedevs",
                youtube: "https://www.youtube.com/user/wedevs",
                pinterest: ""
              }
        }
    },

    inviteNewMember: () => {
        return {
            email: faker.internet.exampleEmail(),
            mobile: faker.phone.imei(),
            designation: faker.commerce.department(),
            status: "active",
            permissions: [
                "product.view",
                "product.create",
                "product.update",
                "product.delete",
            ]
        }
    },
    editInvitedMember: () => {
        return {
            status: "inactive",
        }
    },

    resendInvitationInvitedTeamMember: () => {
        email: `${URL}/api/v1/team/admin/invitations/resend`
    },


    updateStripeTestCredentials: () => {
        return {
            stripe: {
                title: "Stripe Checkout",
                description: "This is a stripe payment gateway",
                enabled: true,
                testMode: true,
                test: {
                  clientId: env('STRIPE_TEST_CLIENT_ID'),
                  secretKey: env('STRIPE_TEST_SECRET_KEY'),
                  publishableKey: env('STRIPE_TEST_PUBLISH_KEY'),
                  webhookSecret: env('STRIPE_TEST_WEBHOOK_SECRET'),
                  webhookId: env('STRIPE_TEST_WEBHOOK_ID')
                }
            }
        }
    },
    updatePaypalTestCredentials: () => {
        return {
            paypal: {
                title: "Paypal Payment Gateway",
                description: "This is a paypal payment gateway",
                enabled: true,
                testMode: true,
                test: {
                  clientId: env('PAYPAL_SANDBOX_CLIENT_ID'),
                  secretKey: env('PAYPAL_SANDBOX_SECRET_KEY')
                }
              }
        }
    },
    updateCashOnDElivery: () => {
        return {
            cashOnDelivery: {
                enabled: true,
                config: {}
            }
        }
    },
    
    enableOrderConfirmationNotification: () => {
        return {
            isEnabled: true
        }
    },
    enableOrderCanceledNotification: () => {
        return {
            isEnabled: true
        }
    },
    enableOrderRefundNotification: () => {
        return {
            isEnabled: true
        }
    },
    enableShippingConfirmationNotification: () => {
        return {
            isEnabled: true
        }
    },
    enableShippingUpdateNotification: () => {
        return {
            isEnabled: true
        }
    },

    addTaxCountry: () => {
        return {
            name: env('TAX_NAME'),
            country: env('TAX_COUNTRY'),
            onShipping: true,
            onDigital: true,
            taxRates: [
                {
                taxClassId: 20,
                rate: 2,
                effectiveRate: 2
                },
                {
                taxClassId: 1,
                rate: 3,
                effectiveRate: 3
                }
            ]
        }
    },
    mangeSameTaxCountry: () => {
        return {
            name: env('TAX_NAME'),
            country: env('TAX_COUNTRY'),
            onShipping: true,
            onDigital: true,
            taxRates: [
                {
                taxClassId: 20,
                rate: 4,
                effectiveRate: 2
                },
                {
                taxClassId: 1,
                rate: 3,
                effectiveRate: 3
                }
            ]
        }
    },
    mangeDifferentTaxCountry: () => {
        return {
            data: [
                {
                  name: "ewr",
                  compound: true,
                  priority: 1,
                  taxRates: [
                    {
                      taxClassId: 20,
                      rate: 5,
                      effectiveRate: 6.08
                    },
                    {
                      taxClassId: 1,
                      rate: 6,
                      effectiveRate: 7.12
                    }
                  ],
                  country: env('TAX_COUNTRY'),
                  state: env('COUNTRY_STATE'),
                  onDigital: true,
                  onShipping: true,
                  override: true
                }
              ],
              delete: []
        }
    },
    editStateTaxCountry: () => {
        return {
            data: [
                {
                  name: "ewr update10",
                  compound: true,
                  priority: 1,
                  taxRates: [
                    {
                      taxClassId: 20,
                      rate: 50,
                      effectiveRate: 6.08
                    },
                    {
                      taxClassId: 1,
                      rate: 60,
                      effectiveRate: 7.12
                    }
                  ],
                  country: env('TAX_COUNTRY'),
                  state: env('COUNTRY_STATE'),
                  onDigital: true,
                  onShipping: true,
                  override: true
                }
              ],
              delete: []
        }
    },

    addTaxClasses: () => {
        return {
            name: "demo1"
        }
    },
    renameTaxClasses: () => {
        return {
            name: "demo1 update"
        }
    },

    saveSEOGeneral: () => {
        return {
            title: "Sell your products on Jamuna Future Park",
            siteUrl: env('URL'),
            description: "Our sellers and their millions of amazing products help make Jamuna Future Park one of the fastest-growing eCommerce platforms in the World. Whether you’re a small business or a global brand, our innovative solutions simplify the selling experience and help deliver growth at scale. Let’s grow together!\n"
        }
    },
    saveAdvanceSEO: () => {
        return {
            richMarkupType: "website",
            noindex: false,
            nofollow: false,
            nosnippet: false,
            noarchive: false,
            noimageindex: false,
            maxSnippet: -1,
            maxImagePreview: "standard",
            maxVideoPreview: -1,
            metaDescription: ""
        }
    },
    saveSiteVerification: () => {
        return {
            googleVerificationId: "",
            bingWebmasterId: "",
            baiduVerificationId: "",
            yandexVerificationId: "",
            pinterestVerificationId: "",
            nortonVerificationId: ""
        }
    },


    updateShippingAddress: () => {
        return {
            // id: "3",
            label: "Office",
            firstName: "Customer",
            lastName: "One",
            country: "BD",
            state: "Dhaka",
            city: "Dhaka",
            address1: "Mirpur DOHS",
            address2: "A-3",
            postCode: "1216",
            phone: "017834758943",
            latitude: "23.836468",
            longitude: "90.369539",
        }
    },
    updateBillingAddress: () => {
        return {
            // id: 3,
            // userId: "24",
            label: "Office",
            firstName: "Customer",
            lastName: "One",
            country: "BD",
            state: "Dhaka",
            city: "Dhaka",
            address1: "Mirpur DOHS",
            address2: "A-10",
            postCode: "1216",
            phone: "017834758943",
        }
    },
    createShipment: (singleOrderID: string, lineItemId: number) => {
        return {
            carrier: "Sundarban Courier",
            trackingNumber: "0237648732",
            trackingUrl: "",
            status: "ready_for_pickup",
            notifyCustomer: true,
            shipmentItems: [
            {
                lineItemId: lineItemId,
                quantity: 1
            }
            ],
            orderId: singleOrderID,
        }
    },
    chargeOrder: (orderTotalAmount: number) => {
        return {
            amount:orderTotalAmount,
            paymentMethod:"cod"
        }
    },
    refundOrder: (lineItemId: number, subtotal: number, productTax: number, orderTotalAmount: number, paymentID: string) => {
        return {
            lineItems: [
                {
                  id: Number(lineItemId),
                  quantity: 1,
                  amount: subtotal,
                  tax: productTax
                }
              ],
              note: "need another one",
              reStockItems: true,
              payments: [
                {
                  id: paymentID,
                  amount: orderTotalAmount
                }
              ],
        }
    },










                                                    /* >>>>>> Coupon Section <<<<<<<<< */
    createCoupon: () => {
        return {
            title: faker.helpers.unique(() => faker.random.alpha(10)),
            // title: faker.commerce.productAdjective(),
            codes: [faker.helpers.unique(() => faker.random.alpha(10))],
            type: 2,
            amount: faker.datatype.number({ min: 1, max: 10 },).toString(),
            status: 1,
            freeShipping: false
        }
    },

    updateCoupon: () => {
        return {
            // title: faker.commerce.productAdjective(),
            // title: faker.helpers.unique(() => faker.random.alpha(10)),
            // codes: [faker.helpers.unique(() => faker.random.alpha(10))],
            type: 1,
            amount: faker.datatype.number({ min: 1, max: 10 },).toString(),
            status: 1,
            freeShipping: false
        }
    },

                                                    /* >>>>>>>> Product Section <<<<<<<< */
    stroreOwner: () => {
        return {
            vendor:
            {
                "id": env('STORE_OWNER_ID'),
                "storeName": env('STORE_OWNER_NAME'),
                "creatorId": env('STORE_OWNER_ID'),
                "country": "BD",
                "active": true
            }
        }
    },
    productCreate: (category_id ) => {
        return {
            "vendor":
            {
                "id": env('STORE_OWNER_ID'),
                "storeName": env('STORE_OWNER_NAME'),
                "creatorId": env('CDREATOR_ID'),
                "country": "BD",
                "active": true
            },
            title: faker.commerce.productName() + faker.datatype.uuid(),
            sku: faker.helpers.unique(() => faker.random.alpha(10)),
            priceType: "single",
            price: faker.commerce.price(),
            // price: 290,
            // salePrice: 275,
            tieredPrice: false, // required
            collectTax: true,
            taxClassId: 3,
            description: faker.commerce.productDescription(),
            type: "standard",
            hasVariation: false, // required
            category: category_id,  // category id
            status: "published",
            manageStock: true,
            stockQuantity: "100",
            lowStockThreshold: "90",
            shippingProfileId: "",
            hideFromStoreFront: false, //required
            allowOnPos: true, //required
        }
    },
    productUpdate: (category_id) => {
        return {
            "vendor":
            {
                "id": env('STORE_OWNER_ID'),
                "storeName": env('STORE_OWNER_NAME'),
                "creatorId": env('CDREATOR_ID'),
                "country": "BD",
                "active": true
            },
            title: faker.commerce.productName() + " Update",
            sku: faker.helpers.unique(() => faker.random.alpha(10)),
            priceType: "single",
            price: faker.commerce.price(),
            // salePrice: "190",
            tieredPrice: false, // required
            collectTax: true,
            taxClassId: 3,
            description: faker.commerce.productDescription(),
            type: "standard",
            hasVariation: false, // required
            category: category_id, // category id
            status: "published",
            manageStock: true,
            stockQuantity: "100",
            lowStockThreshold: "90",
            shippingProfileId: "",
            hideFromStoreFront: false, //required
            allowOnPos: true, //required
        }
    },


                                                /* >>>>>>>>> Order <<<<<<< */
    addToCart: () => {
        return {
            lineItems: [
                {
                    productId: env('PRODUCT_ID'),
                    quantity: 1
                }
            ]
        }
    },

    calculate: () => {
        return {
            country: "BD",
            state: "Dhaka",
            products: [
                {
                    id: "6503fb87256a3a40044aea38",
                    productType: "physical",
                    taxClassId: 2,
                    shippingCost: 0,
                    productCost: 517,
                }
            ]
        }
    },

    checkout: (_cartID: string) => {
        return {
            cartId: _cartID,
            customer: {
              id: 24,
              firstName: "Customer",
              lastName: "One",
              email: "farazi+customer1@wedevs.com",
              active: true,
              isAdmin: false,
              role: "customer",
              defaultAddressId: "3"
            },
            paymentMethod: "cod",
            shipping: {
              id: 3,
              userId: "24",
              label: "Office",
              firstName: "Customer",
              lastName: "One",
              country: "BD",
              state: "Dhaka",
              city: "Dhaka",
              address1: "Mirpur DOHS",
              address2: "",
              postCode: "1216",
              phone: "017834758943",
            },
            billing: {
              id: 3,
              userId: "24",
              label: "Office",
              firstName: "Customer",
              lastName: "One",
              country: "BD",
              state: "Dhaka",
              city: "Dhaka",
              address1: "Mirpur DOHS",
              address2: "",
              postCode: "1216",
              phone: "017834758943",
        
            }
          }
    }





}