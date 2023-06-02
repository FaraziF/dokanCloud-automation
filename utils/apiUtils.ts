import { type APIRequestContext } from "@playwright/test";


export class ApiUtils {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = this.request;

    }

    // async goToAdminDashboard() {
    //     await this.page.goto(data.subUrls.admin.dashboard);
    // }

    // get responseBody
    async getResponseBody(response: any) {
        let responseBody: any
        try {
            responseBody = await response.json()
            // console.log('Status Code: ', response.status())
            // console.log('ResponseBody: ', responseBody)
        } catch (err) {
            console.log('Status Code: ', response.status())
            console.log('Error: ', err.message)
            console.log('Response text: ', await response.text())
        }
        return responseBody
    }


}