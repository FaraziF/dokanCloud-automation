import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import{ MailSlurp } from "mailslurp-client";
import { selector } from "../pages/selectors";

test('Accept User Invite Example & Open New Window', async ({ page, browser }) => {

    let apiKey: string = ''
    expect(apiKey).toBeDefined();
  
    const mailslurp = new MailSlurp({ apiKey })
    const { id, emailAddress } = await mailslurp.createInbox()
  
    // Fill out the steps to invite a new user & click save.
    await page.goto("https://app.dokandev.com/login")
    await page.type(selector.login.eamilAddress, "farazi@wedevs.com")
    await page.type(selector.login.password, "farazi@wedevs.comA1")
    await page.locator(selector.login.signIn).click()

    await page.locator("(//button[@type='button'])[3]").click()
    await page.type("input[name = 'email']", emailAddress)
    await page.locator("//button[text()='Invite']").click()




  
    const email = await mailslurp.waitForLatestEmail(id)
  
    // expect(email.subject).toContain("Instructor, please set up your new account with Forms for Good Forms")
  
    const linkResult = await mailslurp.emailController.getEmailLinks({
      emailId: email.id!!,
    });
  
    const userURL = linkResult.links[0]
    
    const instructorContext = await browser.newContext();
    const page1 = await instructorContext.newPage();
  
    await page1.goto(userURL)
    
    // Take any new action on the page. For example, fill out a form and click submit.
    
  
    await page.pause()
  
  })