import { Faker, faker } from '@faker-js/faker';
import { data } from './testdata';

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
            name: faker.commerce.productAdjective() + faker.datatype.uuid() + " update",
            slug: faker.helpers.unique(() => faker.random.alpha(10)),
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
            slug: "slug-update"
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
    saveDraftSubscription: () => {
        return {
            name: faker.commerce.productAdjective() + "update",
            description: faker.commerce.productDescription(),
            isFreePlan: false,
            price: 20,
            setupFee: 10,
            status: "draft",
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


                                                    /* Vendors */
    editVendorGeneralSettings: () => {
        return {
            vatId: "",
            storeName: "vendor.one",
            businessRegistrationNumber: "",
            legalBusinessName: "",
            mobile: "013485840",
            email: "farazi+vendor1@wedevs.com",
            status: "active",
            firstName: "Vendor",
            lastName: "One",
        }
    },
    editVendorAddressSettings: () => {
        return {
            country: "US",
            city: "Tallahassee",
            postCode: "32306",
            state: "Florida",
            address1: "Florida State University",
            address2: "Road:1, House:2",
        }
    },
    editVendorSocialSettings: () => {
        return {
            facebook:"https://www.facebook.com/",
            twitter:"https://twitter.com/"
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
            password: '!!@@1122QQqq',
            passwordConfirmation: '!!@@1122QQqq'
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
            defaultDimensionUnit: "mm",
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
            socialLinks: {
              facebook: "https://www.facebook.com/weDevs",
              twitter: "https://twitter.com/weDevs",
              instagram: "",
              linkedin: "https://www.linkedin.com/company/wedevs",
              youtube: "",
              pinterest: ""
            },
            colors: {
                accent: "#e60000",
                brand: "#c24c4c"
              },
            iconId: `${env('ICON_ID')}`,
            logoId: `${env('LOGO_ID')}`,
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

    // SEO Settings
    saveSEOGeneral: () => {
        return {
            title: "Sell your products on Jamuna Future Park",
            siteUrl: env('URL'),
            description: "Our sellers and their millions of amazing products help make Jamuna Future Park one of the fastest-growing eCommerce platforms in the World. Whether you’re a small business or a global brand, our innovative solutions simplify the selling experience and help deliver growth at scale. Let’s grow together!\n"
        }
    },
    saveSocialShare: () => {
        return {

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
            google:"google-site-verification: google8506dd51509a20b9.html",
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
            amount: faker.datatype.number({ min: 1, max: 10 },),
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
            amount: faker.datatype.number({ min: 1, max: 10 },),
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
    productCreate: ( ) => {
        return {
            "vendor":
            {
                "id": env('STORE_OWNER_ID'),
                "storeName": env('STORE_OWNER_NAME'),
                "creatorId": env('CDREATOR_ID'),
                "country": "BD",
                "slug":env('STORE_OWNER_NAME'),
                "active": true
            },
            title: faker.commerce.productName() + faker.datatype.uuid(),
            sku: faker.helpers.unique(() => faker.random.alpha(5)),
            priceType: "single",
            price: faker.commerce.price(),
            // price: 290,
            // salePrice: 275,
            tieredPrice: false, // required
            collectTax: false,
            taxClassId: "",
            description: faker.commerce.productDescription(),
            type: "standard",
            hasVariation: false, // required
            // category: category_id,  // category id
            category: env('CATEGORY_ID'),  // category id
            status: "published",
            manageStock: true,
            stockQuantity: "100",
            lowStockThreshold: "90",
            media: [],
            mediaIds: [],
            shippingProfileId: "",
            hideFromStoreFront: false, //required
            allowOnPos: true, //required
        }
    },
    productUpdate: () => {
        return {
            "vendor":
            {
                "id": env('STORE_OWNER_ID'),
                "storeName": env('STORE_OWNER_NAME'),
                "creatorId": env('CDREATOR_ID'),
                "country": "BD",
                "slug":env('STORE_OWNER_NAME'),
                "active": true
            },
            title: faker.commerce.productName() + " Update",
            sku: faker.helpers.unique(() => faker.random.alpha(10)),
            priceType: "single",
            price: faker.commerce.price(),
            // salePrice: "190",
            slug: faker.helpers.unique(() => faker.random.alpha(10)),
            tieredPrice: false, // required
            collectTax: true,
            taxClassId: 3,
            description: faker.commerce.productDescription(),
            type: "standard",
            hasVariation: false, // required
            // category: category_id, // category id
            category: env('CATEGORY_ID'), // category id
            status: "published",
            manageStock: true,
            stockQuantity: "100",
            lowStockThreshold: "90",
            media: [],
            mediaIds: [],
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
                    // productId: env('PRODUCT_ID'),
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
              id: 45,
              firstName: "Customer",
              lastName: "One",
              email: "farazi+customer1@wedevs.com",
              active: true,
              role: "customer",
              defaultAddressId: "37",
              isTest: true,
              defaultAddress: {
                marketplaceId: "1",
                id: "37"
            },
            },
            paymentMethod: "cod",
            requiresShipping: true,
            shipping: {
              id: 37,
              userId: "45",
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
              id: 37,
              userId: "45",
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
            rates: []
          }
    },





    /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< Vendor Section>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */


    saveShippingPreference: () => {
        return {
            weightUnit: "kg",
            dimensionUnit: "mm",
            profileType: "custom"
        }
    },
    getShippingProfileID: () => {
        return {
            name: faker.helpers.unique(() => faker.random.alpha(2)),
            mode: "weight",
            handlingTimeInDays: 3,
            cutOffTime: "15:43",
        }
    },
    createShippingProfile: () => {
        return {
            locations: [
                {
                  country: "Afghanistan",
                  continent: "Asia",
                  filteredStates: [
                    "Badakhshan"
                  ],
                  filteredZipCodes: []
                }
              ],
              transitTimeDayStart: 2,
              transitTimeDayEnd: 3,
              handlingFee: 2,
              costAppliedOn: "item",
              defaultCost: 3,
              weightCost: 4,
              shippingTypeId: 1,
              saved: false,
              minAmountForFree: 0,
              category: "domestic",
        }
    },
    updateShippingProfile: () => {
        return {
            name: "kl update",
            mode: "weight",
            handlingTimeInDays: 3,
            cutOffTime: "15:43:00"
        }
    },
    updateShippingWeighRule: () => {
        return {
            name: "kl update",
            mode: "weight",
            handlingTimeInDays: 2,
            cutOffTime: "15:43:00",

            category: "domestic",
            costAppliedOn: "item_qty",
            createdAt: "2023-11-30T10:30:32Z",
            defaultCost: 9,
            handlingFee: 9,
            id: 11,
            locations: [
              {
                continent: "Asia",
                country: "Afghanistan",
                filteredStates: [
                  "Badakhshan"
                ],
                "filteredZipCodes": []
              }
            ],
            minAmountForFree: 0,
            shippingProfileId: 22,
            shippingTypeId: 1,
            transitTimeDayEnd: 5,
            transitTimeDayStart: 3,
            updatedAt: "2023-11-30T10:47:11Z",
            weightCost: 9
        }
    },
    vendorSaveBasicSettings: () => {
        return {
            logo: {
                id: "655c326660a862432a6117f2",
                _id: "655c326660a862432a6117f2",
                name: "mart_log.png",
                path: "c4ca4238a0b923820dcc509a6f75849b/2023/11/clp7u80en000q0ulz0ydv1na0-mart_log.png",
                size: 39264,
                mimetype: "image/png"
              },
              about: "<p>Introducing our Elegant Versatility Midi Dress – a timeless piece designed to seamlessly transition from day to night with grace and style.</p>",
              banner: {
                id: "655c326560a862432a6117f0",
                _id: "655c326560a862432a6117f0",
                name: "mart-2.png",
                path: "c4ca4238a0b923820dcc509a6f75849b/2023/11/clp7u801n000p0ulzf22ifzko-mart-2.png",
                size: 113161,
                mimetype: "image/png"
              }
        }
    },
    vendorSaveStoreDetails: () => {
        return {
            showOnWidgets: true,
            weeklyTiming: {
              sunday: {
                isOpen: true,
                times: [
                  {
                    opensAt: "8:00 am",
                    closesAt: "5:00 pm"
                  }
                ]
              },
              monday: {
                isOpen: false,
                times: [
                  {
                    opensAt: "8:00 am",
                    closesAt: "5:00 pm"
                  }
                ]
              },
              tuesday: {
                isOpen: false,
                times: [
                  {
                    opensAt: "8:00 am",
                    closesAt: "5:00 pm"
                  }
                ]
              },
              wednesday: {
                isOpen: false,
                times: [
                  {
                    opensAt: "8:00 am",
                    closesAt: "5:00 pm"
                  }
                ]
              },
              thursday: {
                isOpen: false,
                times: [
                  {
                    opensAt: "8:00 am",
                    closesAt: "5:00 pm"
                  }
                ]
              },
              friday: {
                isOpen: false,
                times: [
                  {
                    opensAt: "8:00 am",
                    closesAt: "5:00 pm"
                  }
                ]
              },
              saturday: {
                isOpen: false,
                times: [
                  {
                    opensAt: "8:00 am",
                    closesAt: "5:00 pm"
                  }
                ]
              }
            }
        }
    },
    vendorSaveDefaultAddress: () => {
        return {
            country: "US",
            state: "New York",
            address1: "New York",
            address2: "Road-12, A-34",
            latitude: 0,
            longitude: 0,
            city: "New York",
            postCode: "1084950",
            email: "farazi+vendor1@wedevs.com",
            phone: "01347589437985",
            label: "Home1"
        }
    },
    vendorAddNewLocation: () => {
        return {
            country: "US",
            state: "New Mexico",
            address1: "New Mexico",
            address2: "A-324",
            latitude: 34.9727305,
            longitude: -105.0323635,
            city: "New Mexico",
            postCode: "1220493",
            email: "farazi+vendor1@wedevs.com",
            phone: "01234783895",
            label: "Main"
        }
    },
    vendorUpdateLocation: () => {
        return {
            country: "US",
            state: "New Mexico",
            address1: "New Mexico",
            address2: "A-324",
            latitude: 34.972731,
            longitude: -105.032364,
            city: "New Mexico",
            postCode: "1220493",
            email: "farazi+vendor1@wedevs.com",
            phone: "01234783895",
            label: "Main1"
        }
    },
    vendorInviteNewMember: () => {
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
    vendorUpdateManualPayout: () => {
        return {
            type: "manual",
            options: {
              schedule: ""
            },
            payoutMethods: [
              {
                name: "PayPal",
                configParams: [
                  "email"
                ],
                isDefaultMethod: true,
                configParamsValue: {
                  "email": "farazi.test@gmail.com"
                }
              }
            ],
            defaultPayoutMethod: "PayPal"
        }
    },
    vendorUpdateAutomaticPayout: () => {
        return {
            type: "automatic",
            options: {
              schedule: "onceAWeekConfig"
            },
            payoutMethods: [
              {
                name: "PayPal",
                configParams: [
                  "email"
                ],
                isDefaultMethod: true,
                configParamsValue: {
                  email: "farazi.test@gmail.com"
                }
              }
            ],
            defaultPayoutMethod: "PayPal"
        }
    },
    vendorUpdateProfile: () => {
        return {
            firstName: "Vendor",
            lastName: "One",
            email: `${env('VENDOR_USERNAME')}`,
            gender: "male",
            mobile: "01438765834",
            imageId: `${env('VENDOR_PROFILE_IMAGE_ID')}`,
        }
    },

    enableVendorLiveChat: () => {
        return {
            isEnabled: true,
            config: {
            provider: "fb-messenger",
            pageId: "1855001814797311",
            number: "",
            color: "#3670a6",
            prefilledMessage: ""
            },
        }
    },





 /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Customer Section <<<<<<<<<<<<<<<<<<<<<< */

 customerRegistration: () => {
    return {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "email": faker.internet.exampleEmail(),
        "password": "bogase7935@jalunaki.comA1",
        "passwordConfirmation": "bogase7935@jalunaki.comA1"
    }
 },

 customerSaveProfile: () => {
    return {
        "firstName": "Customer",
        "lastName": "One",
        "email": "farazi+customer1@wedevs.com",
        "birthDate": "1980-12-05",
        "gender": "male",
        "mobile": faker.phone.imei(),
        "image": {
          "name": "apple.png",
          "_id": "656efe816cb432df43e8e9de",
          "path": "c4ca4238a0b923820dcc509a6f75849b/2023/12/clps7nw9b00080sj3ep2m6drc-apple.png",
          "size": 27695,
          "mimetype": "image/png",
          "uploaded": true
        }
    }
 },

 customerAddNewAddress: () => {
    return {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "address1": "Mirpur 10 Roundabout",
        "address2": "A-324",
        "country": "BD",
        "state": "Dhaka",
        "city": "Dhaka",
        "postCode": "1216",
        "phone": faker.phone.imei(),
        "label": faker.helpers.unique(() => faker.random.alpha(2)),
        "isDefault": false,
        "latitude": 23.8069245,
        "longitude": 90.36869779999999
    }
 },
 customerEditAddress: () => {
    return {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "address1": "Mirpur 10 Roundabout",
        "address2": "A-324",
        "country": "BD",
        "state": "Dhaka",
        "city": "Dhaka",
        "postCode": "1216",
        "phone": faker.phone.imei(),
        "label": faker.helpers.unique(() => faker.random.alpha(10)),
        "isDefault": false,
        "latitude": 23.8069245,
        "longitude": 90.36869779999999
    }
 }

}