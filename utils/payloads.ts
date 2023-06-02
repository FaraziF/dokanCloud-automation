import { faker } from '@faker-js/faker'
import { data } from './testdata'

export const payloads = {
                                                    /* >>>>>> Category AND Attribute Section <<<<<<<<< */
    categoryCreate: () => {
        return {
            // name : faker.commerce.productAdjective() + faker.datatype.uuid(),
            name : faker.commerce.productAdjective(),
        }
    },
    categoryUpdate: () => {
        return {
            name: faker.commerce.productAdjective() + " Update",
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
            "vendor":
            {
                "id": process.env.STORE_OWNER_ID,
                "storeName": process.env.STORE_OWNER_NAME,
                "creatorId": process.env.STORE_OWNER_ID,
                "country": "BD",
                "active": true
            }
        }
    },
    productCreate: () => {
        return {
            title: faker.commerce.productName(),
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
            category: "642aa88d58f53fa5e5c6d93f",  // category id
            status: "published",
            manageStock: true,
            stockQuantity: "100",
            lowStockThreshold: "90",
            shippingProfileId: "",
            hideFromStoreFront: false, //required
            allowOnPos: true, //required
        }
    },
    productUpdate: () => {
        return {
            title: faker.commerce.productName(),
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
            category: "642aa88d58f53fa5e5c6d93f", // category id
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
                    productId: "642d5554960dd4ef3b8b6c4f",
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
                    id: "642aa99858f53fa5e5c6d99a",
                    productType: "physical",
                    taxClassId: 1,
                    shippingCost: 0,
                    productCost: 190
                }
            ]
        }
    }

}