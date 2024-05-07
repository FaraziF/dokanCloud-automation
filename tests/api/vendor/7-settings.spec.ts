
import { expect, request, test } from "@playwright/test";
import { endPoints } from "../../../utils/apiEndPoints";
import { ApiUtils } from "../../../utils/apiUtils";
import { payloads } from "../../../utils/payloads";
import { data } from "../../../utils/testdata";

let apiUtils: any;
let coupon_id: string;
let title: string;
let defaultAddressId;
let newLocationId;
let invitedTeamMemberEmail;

let vendorAuth = { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}` }

test.beforeAll( async ({ request }) => {
    apiUtils = new ApiUtils(request);
})

test.describe("Settings", () => {
  test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}`, strategy: "vendor" } });

  test.describe("General", () => {  
    test("Get basic settings", async () => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorGetBasicSettings);
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
    });
    test("Save basic settings", async () => {
        const [response, responseBody] = await apiUtils.put(endPoints.vendorSaveBasicSettings, {data: payloads.vendorSaveBasicSettings()});
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
    });
    
    
    test("Get store details settings", async () => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorGetStoreDetailsSettings);
        expect(response.ok()).toBeTruthy();
	      expect(responseBody).toBeTruthy();
    });
    test("Save store details", async () => {
        const [response, responseBody] = await apiUtils.put(endPoints.vendorGetStoreDetailsSettings, {data: payloads.vendorSaveStoreDetails()});
        expect(response.ok()).toBeTruthy();
	      expect(responseBody).toBeTruthy();
    });
    test("Get default address", async () => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorGetDefaultAddressId);
        expect(response.ok()).toBeTruthy();
	      expect(responseBody).toBeTruthy();
        const res = await response.json()
        defaultAddressId = res.data.defaultAddressId
        console.log("default Address ID", defaultAddressId)
    });
    test("Save default address", async () => {
      const [response, responseBody] = await apiUtils.patch(endPoints.vendorUpdateDefaultStoreAddress(defaultAddressId), {data: payloads.vendorSaveDefaultAddress()});
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    });


    test("Add New New Location", async () => {
      const [response, responseBody] = await apiUtils.post(endPoints.vendorAddNewLocation, {data: payloads.vendorAddNewLocation()});
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
      const res = await response.json()
      newLocationId = res.data.id
      console.log("New Address ID", newLocationId)
    });
    test("Update location", async () => {
      const [response, responseBody] = await apiUtils.patch(endPoints.vendorUpdateLocation(newLocationId), {data: payloads.vendorUpdateLocation()});
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    });
    test("Delete location", async () => {
      const [response, responseBody] = await apiUtils.delete(endPoints.vendorDeleteLocation(newLocationId));
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    });    
  })



      // Team settings
  test.describe("team settings", () => {
    test("get all team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorGetAllTeamMember);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
    })
   /*  test("get pagination page team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getPaginationPageTeamMember);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
    }) */
    test("get active team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorGetActiveTeamMember);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
    })
    test("get inactive team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorGetInactiveTeamMember);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
    })
    test("get invited team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorGetInvitedTeamMember);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
    })
    test("invite new team member", async() => {
        const payload  = payloads.vendorInviteNewMember();
        const [response, responseBody] = await apiUtils.post(endPoints.vendorInviteNewTeamMember, {data: payload} );
    expect(response.ok()).toBeTruthy();
    expect(responseBody).toBeTruthy();
        console.log(await response.json())
        // console.log(payloads.inviteNewMember()?.email)
        const getEmail = payload?.email
        invitedTeamMemberEmail = getEmail
        console.log('Invited team memeber:', invitedTeamMemberEmail);
        
    })
    /* test("search team member", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorSearchTeamMember(invitedTeamMemberEmail) );
        expect(response.ok()).toBeTruthy();
    expect(responseBody).toBeTruthy();
    }) */

    /* 
    Problem: new team member invite korle, invited listed jai, kintu team member ID pawa jai na.  
            karon team member active hole shudu edit option pawa jai so ai jonno team member eidt kora jacche na
    Solution: invited team member theke invitation link nie register korar por ID pawa jabe then active team member ke edit kora jabe.
            edit er ai scenario amar e2e the complete korbo
    */
    /* test("edit invited team member", async() => {
        const [response, responseBody] = await apiUtils.patch(endPoints.editInvitedTeamMember(invitedTeamMemberID) );
        expect(response.ok()).toBeTruthy();
    expect(responseBody).toBeTruthy();
    }) */

    
    // have issue while hit this endpoint, need to resolve
    test("resend invitation invited team member", async() => {
        const invitedTeamMemberEmail2 = {email: invitedTeamMemberEmail};
        const [response, responseBody] = await apiUtils.post(endPoints.vendorResendInvitationInvitedTeamMember, {data: invitedTeamMemberEmail2} );
    // console.log(response)
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
        console.log({invitedTeamMemberEmail})
    })
    test("remove invited team member", async() => {
        const [response, responseBody] = await apiUtils.delete(endPoints.vendorRemoveInvitedNewTeamMember(invitedTeamMemberEmail));
        console.log({invitedTeamMemberEmail})
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
        console.log(await response.json())
    })
  })

  // Payment
  test.describe("Payment settings", () => {
    test("Get Gateway", async() => {
      const [response, responseBody] = await apiUtils.get(endPoints.vendorGetPaymentGatwey);
      console.log({invitedTeamMemberEmail})
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
    test("Get Payment", async() => {
      const [response, responseBody] = await apiUtils.get(endPoints.vendorGetPayment);
      console.log({invitedTeamMemberEmail})
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
  })
  
  // Payout
  test.describe("Payout settings", () => {
    test("Get payout", async() => {
      const [response, responseBody] = await apiUtils.get(endPoints.vendorGetPaymentGatwey);
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
    test("Update Automatic Payout", async() => {
      const [response, responseBody] = await apiUtils.put(endPoints.vendorUpdateManualPayout, {data: payloads.vendorUpdateManualPayout()});
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
    test("Update Manual Payout", async() => {
      const [response, responseBody] = await apiUtils.put(endPoints.vendorAutomaticPayout, {data: payloads.vendorUpdateAutomaticPayout()});
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
  })
  
  // Plans & Bills
  test.describe("plans & bills", () => {
    test("Get plans", async() => {
      const [response, responseBody] = await apiUtils.get(endPoints.getVendorPlansAndBills);
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
    test("Get subscription", async() => {
      const [response, responseBody] = await apiUtils.get(endPoints.getVendorSubscription);
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
  })
  
  // Live chat
  test.describe("live chat", () => {
    test("Get live chat", async() => {
      const [response, responseBody] = await apiUtils.get(endPoints.getVendorLiveChat);
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
    test("Enable live chat", async() => {
      const [response, responseBody] = await apiUtils.put(endPoints.enableVendorLiveChat, {data: payloads.enableVendorLiveChat()});
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
    
  })



  // Profile
  test.describe("Profile ", () => {
    test("Get profile", async() => {
      const [response, responseBody] = await apiUtils.get(endPoints.vendorGetProfile);
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
    test("Save profile", async() => {
      const [response, responseBody] = await apiUtils.patch(endPoints.vendorSaveProfile, {data: payloads.vendorUpdateProfile()});
      expect(response.ok()).toBeTruthy();
      expect(responseBody).toBeTruthy();
    })
  })
})

