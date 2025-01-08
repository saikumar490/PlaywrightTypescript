import { chromium, expect, Page } from "@playwright/test";
import { HelperBase } from "../CommonUtils/HelperBase";
import { locators } from "../Support/constants";
import fs from 'fs'
//const testdata =  JSON.parse(fs.readFileSync('UserData.json', 'utf-8'));
import * as testdata from "../Data/UserData.json"

export class loginpage{

    usernamefield: string;
    passwordfield: string;
    loginbutton: string;
    helper : HelperBase;
   

    constructor(public Page: Page)
    {

        this.Page=Page;
        this.usernamefield = "//input[@id='username']",
        this.passwordfield ="#password",
        this.loginbutton="//input[@value='Login']"
        this.helper = new HelperBase();
    }
    
    async LaunchtheUrlandLoginintoapplicatin()
    
    {
     
     await this.helper.EnterTextIntoField(this.Page, locators.usernamefield, "QALevel1");
     await this.helper.EnterTextIntoField(this.Page, locators.passwordfield,"test22");
     await this.helper.ClickOnElement(this.Page, locators.loginbutton);
     const welcomemesage = await this.Page.locator("//div[@class='form-container']/h3").textContent();
     if (welcomemesage) {
        const trimmedMessage = welcomemesage.trim();
         const splitMessage = trimmedMessage.split(", ");
         const expectedMessage = `${splitMessage[0]}, ${splitMessage[1]}`;
        await expect(welcomemesage).toContain(trimmedMessage);
    }
    
     
   
    }
    async testLaunchtheUrlandLoginintoapplicatin(username:string, password:string)
    
    {
     
     await this.helper.EnterTextIntoField(this.Page, locators.usernamefield, username);
     await this.helper.EnterTextIntoField(this.Page, locators.passwordfield, password);
     await this.helper.ClickOnElement(this.Page, locators.loginbutton);
   
    }

    async Addingclientdetails()
    {

     await this.helper.EnterTextIntoField(this.Page,locators.firstname, "Test");
     await this.helper.EnterTextIntoField(this.Page, locators.Lastname, "UAT")
     await this.helper.EnterTextIntoField(this.Page, locators.Dateofbirth, "2000-12-12")
     await this.helper.SelectOptionFromDropdown(this.Page, locators.Gender, "Male")
     await this.helper.EnterTextIntoField(this.Page, locators.Mobilenumber, "0123456789")
     await this.helper.EnterTextIntoField(this.Page, locators.Email, "test@gmail.com")
     await this.helper.ClickOnElement(this.Page, locators.nextbutton)
        
    }
    async testAddingclientdetails(firstname: string, lastname: string, dob: string, Gender: string, mobilenumber: string, email: string)  
    {

     await this.helper.EnterTextIntoField(this.Page,locators.firstname, firstname);
     await this.helper.EnterTextIntoField(this.Page, locators.Lastname, lastname)
     await this.helper.EnterTextIntoField(this.Page, locators.Dateofbirth, dob)
     await this.helper.SelectOptionFromDropdown(this.Page, locators.Gender, Gender)
     await this.helper.EnterTextIntoField(this.Page, locators.Mobilenumber, mobilenumber)
     await this.helper.EnterTextIntoField(this.Page, locators.Email,email)
     await this.helper.ClickOnElement(this.Page, locators.nextbutton)
        
    }
    async AddingRiskDetails()
    {

        await this.helper.ClickOnElement(this.Page, locators.addriskbutton)
        await this.helper.SelectOptionFromDropdown(this.Page, locators.covertype, "Comprehensive")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicleMake, "audi")
        await this.helper.EnterTextIntoField(this.Page, locators.vmodel,"audi A3")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicelType,"SUV")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicelyear, "2005")
        await this.helper.EnterTextIntoField(this.Page, locators.enginesize, "1700")
        await this.helper.SelectOptionFromDropdown(this.Page, locators.FuelType,"Gas")
        await this.helper.ClickOnElement(this.Page, locators.submitbutton)
        await expect(this.Page.locator('tbody')).toContainText('Comprehensive');
        await expect(this.Page.locator('tbody')).toContainText('audi');
        await expect(this.Page.locator('tbody')).toContainText('audi A3');
        await expect(this.Page.locator('tbody')).toContainText('SUV');
        await expect(this.Page.locator('tbody')).toContainText('2005');
        await expect(this.Page.locator('tbody')).toContainText('1700');
        await expect(this.Page.locator('tbody')).toContainText('Gas');
        await this.helper.ClickOnElement(this.Page, "//a[normalize-space()='Next']")
    }
    async testAddingRiskDetails(covertype:string, vehiclemake:string, vmodel:string, vehicletype:string, vehicelyear:string, enginesize:string, fueltype:string)
    {

        await this.helper.ClickOnElement(this.Page, locators.addriskbutton)
        await this.helper.SelectOptionFromDropdown(this.Page, locators.covertype, covertype)
        await this.helper.EnterTextIntoField(this.Page, locators.vehicleMake, vehiclemake)
        await this.helper.EnterTextIntoField(this.Page, locators.vmodel,vmodel)
        await this.helper.EnterTextIntoField(this.Page, locators.vehicelType,vehicletype)
        await this.helper.EnterTextIntoField(this.Page, locators.vehicelyear,vehicelyear)
        await this.helper.EnterTextIntoField(this.Page, locators.enginesize, enginesize)
        await this.helper.SelectOptionFromDropdown(this.Page, locators.FuelType,fueltype)
        await this.helper.ClickOnElement(this.Page, locators.submitbutton)
        // await expect(this.Page.locator('tbody')).toContainText('Comprehensive');
        // await expect(this.Page.locator('tbody')).toContainText('audi');
        // await expect(this.Page.locator('tbody')).toContainText('audi A3');
        // await expect(this.Page.locator('tbody')).toContainText('SUV');
        // await expect(this.Page.locator('tbody')).toContainText('2005');
        // await expect(this.Page.locator('tbody')).toContainText('1700');
        // await expect(this.Page.locator('tbody')).toContainText('Gas');
        await this.helper.ClickOnElement(this.Page, "//a[normalize-space()='Next']")
    }
    async addingdriverdetails()
    {
      await this.helper.ClickOnElement(this.Page, locators.Adddriverdetails)
      await this.helper.SelectOptionFromDropdown(this.Page, locators.drivertype, "Owner")
      await this.helper.EnterTextIntoField(this.Page,locators.drivername, "John Finch")
      await this.helper.EnterTextIntoField(this.Page, locators.drierdateofbirth,"1995-12-12")
      await this.helper.EnterTextIntoField(this.Page, locators.driverexperince,"2")
      await this.helper.EnterTextIntoField(this.Page, locators.driverlicnumber, "12354655")
      await this.helper.SelectOptionFromDropdown(this.Page, locators.driversgender, "Male")
      await this.helper.ClickOnElement(this.Page, "//button[@type='submit']");
      await expect(this.Page.locator('tbody')).toContainText('Owner');
      await expect(this.Page.locator('tbody')).toContainText('John Finch');
      await expect(this.Page.locator('tbody')).toContainText('1995-12-12');
      await expect(this.Page.locator('tbody')).toContainText('2');
      await expect(this.Page.locator('tbody')).toContainText('12354655');
      await expect(this.Page.locator('tbody')).toContainText('male');
      await this.helper.ClickOnElement(this.Page,"//a[normalize-space()='Next']")
    }
    async testaddingdriverdetails(drivertype:string, drivername:string, drierdateofbirth:string, driverexperince:string, driverlicnumber:string, driversgender:string)
    {
      await this.helper.ClickOnElement(this.Page, locators.Adddriverdetails)
      await this.helper.SelectOptionFromDropdown(this.Page, locators.drivertype, drivertype)
      await this.helper.EnterTextIntoField(this.Page,locators.drivername, drivername)
      await this.helper.EnterTextIntoField(this.Page, locators.drierdateofbirth,drierdateofbirth)
      await this.helper.EnterTextIntoField(this.Page, locators.driverexperince,driverexperince)
      await this.helper.EnterTextIntoField(this.Page, locators.driverlicnumber, driverlicnumber)
      await this.helper.SelectOptionFromDropdown(this.Page, locators.driversgender, driversgender)
      await this.helper.ClickOnElement(this.Page, "//button[@type='submit']");
    //   await expect(this.Page.locator('tbody')).toContainText('Owner');
    //   await expect(this.Page.locator('tbody')).toContainText('John Finch');
    //   await expect(this.Page.locator('tbody')).toContainText('1995-12-12');
    //   await expect(this.Page.locator('tbody')).toContainText('2');
    //   await expect(this.Page.locator('tbody')).toContainText('12354655');
    //   await expect(this.Page.locator('tbody')).toContainText('male');
      await this.helper.ClickOnElement(this.Page,"//a[normalize-space()='Next']")
    }

    async multiplerisk(){

        await this.helper.ClickOnElement(this.Page, locators.addriskbutton)
        await this.helper.SelectOptionFromDropdown(this.Page, locators.covertype, "Comprehensive")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicleMake, "audi")
        await this.helper.EnterTextIntoField(this.Page, locators.vmodel,"audi A3")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicelType,"SUV")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicelyear, "2005")
        await this.helper.EnterTextIntoField(this.Page, locators.enginesize, "1700")
        await this.helper.SelectOptionFromDropdown(this.Page, locators.FuelType,"Gas")
        await this.helper.ClickOnElement(this.Page, locators.submitbutton)
        await expect(this.Page.locator('tbody')).toContainText('Comprehensive');
        await expect(this.Page.locator('tbody')).toContainText('audi');
        await expect(this.Page.locator('tbody')).toContainText('audi A3');
        await expect(this.Page.locator('tbody')).toContainText('SUV');
        await expect(this.Page.locator('tbody')).toContainText('2005');
        await expect(this.Page.locator('tbody')).toContainText('1700');
        await expect(this.Page.locator('tbody')).toContainText('Gas');
        await this.helper.ClickOnElement(this.Page, locators.addriskbutton)
        await this.helper.SelectOptionFromDropdown(this.Page, locators.covertype, "Comprehensive")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicleMake, "audi")
        await this.helper.EnterTextIntoField(this.Page, locators.vmodel,"audi A2")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicelType,"SUV")
        await this.helper.EnterTextIntoField(this.Page, locators.vehicelyear, "2006")
        await this.helper.EnterTextIntoField(this.Page, locators.enginesize, "1700")
        await this.helper.SelectOptionFromDropdown(this.Page, locators.FuelType,"Gas")
        await this.helper.ClickOnElement(this.Page, locators.submitbutton)
        await expect(this.Page.locator('tbody')).toContainText('Comprehensive');
        await expect(this.Page.locator('tbody')).toContainText('audi');
        await expect(this.Page.locator('tbody')).toContainText('audi A2');
        await expect(this.Page.locator('tbody')).toContainText('SUV');
        await expect(this.Page.locator('tbody')).toContainText('2006');
        await expect(this.Page.locator('tbody')).toContainText('1700');
        await expect(this.Page.locator('tbody')).toContainText('Gas');
        await this.helper.ClickOnElement(this.Page, "//a[normalize-space()='Next']")
       
        
    }
}
module.exports = {loginpage};