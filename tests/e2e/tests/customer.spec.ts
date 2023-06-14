import { Page, test, expect } from "@playwright/test";
import { data } from "../../../utils/testdata";
import { CustomerPage } from "../pages/customerPage";


// let page: Page;

test.describe('Customer Functionality Test', () => {
    test.use({ storageState: data.auth.customerAuthFile });

    let customerPage: CustomerPage;
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext({});
        page = await context.newPage();
        customerPage = new CustomerPage(page);
    });

    test.afterAll(async () => {
        await page.close();
    });

    /* 
    test.skip('Customer Registration', async ({ page }) => {
        const customerPage = new CustomerPage(page)
        await customerPage.customerRegistration(data.customer.customerInfo)
    })
    */

    test('Customer Order', async({ page }) => {
        // await page.goto(data.subUrls.storefront.shopPage)

            await page.goto('https://farazi.dokandev.com/shop');
            // await page.getByRole('navigation').getByRole('link', { name: 'Shop' }).click();
            // await page.waitForURL('https://farazi.dokandev.com/shop')
            // await page.getByRole('button', { name: 'Add to Cart' }).click();
            // await page.getByRole('img', { name: 'product-image' }).nth(1).click();
            await page.locator('.w-full > .relative > .overflow-hidden > .flex').first().click();
            await expect(page.getByText('Quantity')).toBeVisible();
            // await page.getByText('Quantity').isVisible();
            
            // await customerPage.goToCart();
            await page.getByRole('button', { name: 'Add To Cart' }).click();
            await page.getByRole('heading', { name: 'Successfully added to your cart' }).click();
            await page.getByRole('heading', { name: 'You also maybe interested' }).click();
            // page.on('dialog', dialog => dialog.accept());

            // // Start waiting for popup before clicking. Note no await.
            // const popupPromise = page.waitForEvent('popup');
            // // await page.getByText('open the popup').click();
            // await page.getByRole('button', { name: 'Add To Cart' }).click();
            // const popup = await popupPromise;
            // // await popup.goto('https://wikipedia.org');
            // await popup.getByRole('button', { name: 'Go to Cart' }).click();


            await page.getByRole('button', { name: 'Go to Cart' }).click();
            await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
            // await page.getByPlaceholder('youremail@example.com').click();
            // await page.getByPlaceholder('youremail@example.com').fill('farazi.test@gmail.com');
            // await page.getByRole('button', { name: 'Continue as Guest' }).click();
            await page.getByPlaceholder('First name').click();
            await page.getByPlaceholder('First name').fill('farazi');
            await page.getByPlaceholder('First name').press('Tab');
            await page.getByPlaceholder('Last Name').fill('test');
            await page.locator('.css-98q0e7').click();
            await page.locator('#react-select-2-input').fill('ban');
            await page.locator('#react-select-2-option-14').click();
            // await page.waitForTimeout(1000)
            // await page.getByRole('button', { name: 'Clear' }).click();
            // await page.getByPlaceholder('Enter address').click();
            // await page.keyboard.type('Uttara', { delay: 100 });
            // await page.keyboard.press("Enter")
            // await page.getByText('Uttara Dhaka, Bangladesh');
            
            await page.getByRole('button', { name: 'Clear' }).click();
            // await page.getByPlaceholder('Enter address').click();
            await page.getByPlaceholder('Enter address').type('Uttara Dhaka', { delay: 100 });
        // await page.getByPlaceholder('Enter address').fill('Uttara ');
        // await expect(page.locator('/html/body/div[4]')).toBeVisible() 
        // await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
        // expect(page.getByText("UttaraDhaka, Bangladesh", { exact: true }).click())
        // expect(page.getByText('UttaraDhaka, Bangladesh').nth(1).click())
        //body > div:nth-child(32) > div:nth-child(1)
        ///html/body/div[3]/div[1]
        await page.locator("body > div:nth-child(32) > div:nth-child(1)").click()

        // await page.waitForTimeout(1000)
            // await page.pause();
            await page.getByPlaceholder('Postal Code').click();
            await page.getByPlaceholder('Postal Code').fill('1216');
            // await page.getByPlaceholder('xxx xxx xxxx').click();
            // await page.getByPlaceholder('xxx xxx xxxx').fill('017384573487598');
            await page.getByRole('button', { name: 'Continue to Payment' }).click();
            await expect(page.locator("div.space-y-5.mt-4")).toBeVisible();
            await page.getByRole('button', { name: 'Continue to Payment' }).click();
            // await page.locator('.grid > div:nth-child(3)').click();
            // await page.locator('div:nth-child(4) > div:nth-child(2) > .mt-4 > .grid > div').first().click();
            // await page.getByPlaceholder('Card Number').click();
            // await page.getByPlaceholder('Card Number').fill('4242 4242 4242 4242');
            // await page.getByPlaceholder('MM/YY').click();
            // await page.getByPlaceholder('MM/YY').fill('12/25');
            // await page.getByPlaceholder('CVV').click();
            // await page.getByPlaceholder('CVV').fill('121');
            // await page.getByPlaceholder('Name on card').click();
            // await page.getByPlaceholder('Name on card').fill('standard');
            // await page.locator('.grid > div:nth-child(3)').click();
            // await page.getByRole('button', { name: 'Pay' }).click();
            await page.locator("(//div[contains(@class,'relative cursor-pointer')])[1]").click();
            await page.locator("//div[@class='pt-4']//button[1]").click();
            await (expect(page.getByText("Thank you for shopping with us. Your order has been placed! You will soon get an order confirmation email with tracking ID.", { exact: true }))).toBeVisible()
            // await page.locator('[id="__next"] div').filter({ hasText: 'Thank you for shopping with us. Your order has been placed! You will soon get an' }).nth(4).click();
            // await page.getByText('Thank you for shopping with us. Your order has been placed! You will soon get an').click();

    })
})