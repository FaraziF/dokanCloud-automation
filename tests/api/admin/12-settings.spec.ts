import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";
import { log } from "console";

let apiUtils: ApiUtils;
let invitedTeamMemberEmail: string;
let taxClassID: number;

test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('Admin setting API test', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" } });


// General Settings
test.describe("general setting", () => {
    // Basic
    test("get basic", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getBasicSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("update marketplace details", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.updateMarketplaceDetails, { data: payloads.updateMarketplaceDEtails() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("update store visibility", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.updateStoreVisibility, { data: payloads.updateStoreVisibility() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("update units", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.updateUnits, { data: payloads.updateUnits() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    
    // Business Details
    test("get business details", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getBusinessDetailsSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("update business details", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.updateBusinessDetails, { data: payloads.updateBusinessDetails() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })

    // Domain
    test("get domain", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getDomainSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })

    // Brand
    test("get brand", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getBrandSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("update brand", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.updateBrand, { data: payloads.updateBrand() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    
})



// Team settings
test.describe("team settings", () => {
    test("get all team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getBusinessDetailsSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("get pagination page team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getPaginationPageTeamMember);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("get active team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getActiveTeamMember);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("get inactive team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getInactiveTeamMember);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("get invited team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getInvitedTeamMember);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })
    test("invite new team member", async() => {
        const payload  = payloads.inviteNewMember();
        const [response, responseBody] = await apiUtils.post(endPoints.inviteNewTeamMember, {data: payload} );
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        console.log(await response.json())
        // console.log(payloads.inviteNewMember()?.email)
        const getEmail = payload?.email
        invitedTeamMemberEmail = getEmail
        // console.log(invitedTeamMemberEmail);
        
    })
    test("search team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.searchTeamMember(invitedTeamMemberEmail) );
        expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    })

    /* 
    Problem: new team member invite korle, invited listed jai kintu team member ID pawa jai na so ai jonno team member eidt kora jacche na
    Solution: invited team member theke invitation link nie register korar por ID pawa jabe then active team member ke edit kora jabe
    */
    /* test("edit invited team member", async() => {
        const [response, responseBody] = await apiUtils.patch(endPoints.editInvitedTeamMember(invitedTeamMemberID) );
        expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) */

    
    // have issue while hit this endpoint, need to resolve
    /* test("resend invitation invited team member", async() => {
        const [response, responseBody] = await apiUtils.post(endPoints.resendInvitationInvitedTeamMember, {email: invitedTeamMemberEmail} );
		console.log(response)
        expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        console.log({invitedTeamMemberEmail})
    }) */
    test("remove invited team member", async() => {
        const [response, responseBody] = await apiUtils.delete(endPoints.removeInvitedNewTeamMember(invitedTeamMemberEmail));
        console.log({invitedTeamMemberEmail})
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        console.log(await response.json())
    })
})


// Payment settings
test.describe.only("Payment settings", () => {
    test("get Stripe payment", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getBusinessDetailsSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("update Stripe test credential", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.updateStripePaymentSettings, {data: payloads.updateStripeTestCredentials()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("get paypal payment", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getPaypalPaymentSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("update paypal test credential", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.updatePaypalPaymentSettings, {data: payloads.updatePaypalTestCredentials()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("update cash on delivery", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.updateCashOnDeliveryPaymentSettings, {data: payloads.updateCashOnDElivery() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
})
	

// Payout
test.describe("payout settings", () => {
    test("get payout payment", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getPayoutsSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
})

// Shipping
test.describe("shipping settings", () => {
    test("get payout payment", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getShippingSettings);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
})



// Notification
test.describe("notification settings", () => {
    test("get all notification ", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getAllNotification);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("enable order confirmation notification ", async() => {
        const [response, responseBody] = await apiUtils.patch(endPoints.enableOrderConfirmationNotification, { data: payloads.enableOrderConfirmationNotification()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("enable order canceled notification ", async() => {
        const [response, responseBody] = await apiUtils.patch(endPoints.enableOrderCanceledNotification, {data: payloads.enableOrderCanceledNotification()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("enable order refunded notification ", async() => {
        const [response, responseBody] = await apiUtils.patch(endPoints.enableOrderRefundNotification, {data: payloads.enableOrderRefundNotification()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("enable shipping confirmation notification ", async() => {
        const [response, responseBody] = await apiUtils.patch(endPoints.enableShippingConfirmationNotification, {data: payloads.enableShippingConfirmationNotification()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("enable shipping update notification ", async() => {
        const [response, responseBody] = await apiUtils.patch(endPoints.enableShippingUpdateNotification, {data: payloads.enableShippingUpdateNotification()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
})


// Tax
test.describe("tax settings", () => {
    test("get tax summary", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getTaxSummary);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 

    test("get tax class", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getTaxClasses);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("add tax class", async() => {
        const [response, responseBody] = await apiUtils.post(endPoints.addTaxClasses, {data: payloads.addTaxClasses()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        const _res = await response.json()
        taxClassID = _res.data.id
    }) 
    test("rename tax classes", async() => {
        const [response, responseBody] = await apiUtils.patch(endPoints.renameTaxClasses(taxClassID), {data: payloads.renameTaxClasses()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("delete tax classes", async() => {
        const [response, responseBody] = await apiUtils.delete(endPoints.deleteTaxClasses(taxClassID));
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        console.log(await response.json());
        
    }) 

    test("add country", async() => {
        const _addTaxCountry  = payloads.addTaxCountry();
        const [response, responseBody] = await apiUtils.post(endPoints.addTaxCountry(_addTaxCountry.country), {data: _addTaxCountry});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("maange same tax country", async() => {
        const _addTaxCountry  = payloads.mangeSameTaxCountry();
        const [response, responseBody] = await apiUtils.post(endPoints.manageSameTaxCountry(_addTaxCountry.country), {data: _addTaxCountry});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("manage different tax country", async() => {
        const _addTaxCountry  = payloads.mangeDifferentTaxCountry();
        const [response, responseBody] = await apiUtils.post(endPoints.differentTaxCountry(_addTaxCountry.data[0].country), {data: _addTaxCountry});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("get edit all tax", async() => {
        const _addTaxCountry  = payloads.mangeDifferentTaxCountry();
        const [response, responseBody] = await apiUtils.get(endPoints.getEditAllDifferentTaxCountry(_addTaxCountry.data[0].country));
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("edit state tax country", async() => {
        const _addTaxCountry  = payloads.editStateTaxCountry();
        const [response, responseBody] = await apiUtils.post(endPoints.editStateTaxCountry(_addTaxCountry.data[0].country), {data: _addTaxCountry});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("delete state tax country", async() => {
        const _addTaxCountry  = payloads.editStateTaxCountry();
        const [response, responseBody] = await apiUtils.delete(endPoints.deleteStateTaxCountry(_addTaxCountry.data[0].country, _addTaxCountry.data[0].state));
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        console.log(await response.json())
    }) 
    test("delete tax country", async() => {
        const _addTaxCountry  = payloads.editStateTaxCountry();
        const [response, responseBody] = await apiUtils.delete(endPoints.deleteTaxCountry(_addTaxCountry.data[0].country));
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        console.log(await response.json())
    }) 
})

test.describe("SEO settings", () => {
    test("get all SEO", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getSEO);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("save SEO general", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.saveSEOGeneral, {data: payloads.saveSEOGeneral()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("save social share", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.saveAdvanceSEO, {data: payloads.saveAdvanceSEO()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
    test("save site verification", async() => {
        const [response, responseBody] = await apiUtils.put(endPoints.saveSiteVerification, {data: payloads.saveSiteVerification()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
    }) 
})


})