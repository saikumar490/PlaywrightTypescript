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
     const Welcomeprompt = await this.Page.locator("//div[@class='form-container']/h3").textContent();
     await expect(this.Page.url()).toContain('client')
     if (Welcomeprompt) {
      const trimmedMessage = Welcomeprompt.trim();
       const splitMessage = trimmedMessage.split(", ");
       const expectedMessage = `${splitMessage[0]}, ${splitMessage[1]}`;
      await expect(Welcomeprompt).toContain(trimmedMessage);
  }
   
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
        await expect(this.Page.url).toBe('http://127.0.0.1:5000/policy')
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
      await expect(this.Page.url).toBe('http://127.0.0.1:5000/summary');
     
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
      await expect(this.Page.locator('tbody')).toContainText(drivertype);
      await expect(this.Page.locator('tbody')).toContainText(drivername);
      await expect(this.Page.locator('tbody')).toContainText(drierdateofbirth);
      await expect(this.Page.locator('tbody')).toContainText(driverexperince);
      await expect(this.Page.locator('tbody')).toContainText(driverlicnumber);
      await expect(this.Page.locator('tbody')).toContainText(driversgender);
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
    async testmultiplerisk(coverType: string, vehicleMake: string, vmodel: string, vehicelType: string, vehicelyear: string, 
      enginesize: string, fuelType: string, coverType1: string, vehicleMake1: string, vmodel1: string, vehicelType1: string, 
      vehicelyear1: string, enginesize1: string, fuelType1: string){

      await this.helper.ClickOnElement(this.Page, locators.addriskbutton)
      await this.helper.SelectOptionFromDropdown(this.Page, locators.covertype, coverType)
      await this.helper.EnterTextIntoField(this.Page, locators.vehicleMake, vehicleMake)
      await this.helper.EnterTextIntoField(this.Page, locators.vmodel,vmodel)
      await this.helper.EnterTextIntoField(this.Page, locators.vehicelType,vehicelType)
      await this.helper.EnterTextIntoField(this.Page, locators.vehicelyear,  vehicelyear)
      await this.helper.EnterTextIntoField(this.Page, locators.enginesize,  enginesize)
      await this.helper.SelectOptionFromDropdown(this.Page, locators.FuelType,fuelType)
      await this.helper.ClickOnElement(this.Page, locators.submitbutton)
      await expect(this.Page.locator('tbody')).toContainText(coverType);
      await expect(this.Page.locator('tbody')).toContainText(vehicleMake);
      await expect(this.Page.locator('tbody')).toContainText(vmodel);
      await expect(this.Page.locator('tbody')).toContainText(vehicelType);
      await expect(this.Page.locator('tbody')).toContainText(vehicelyear);
      await expect(this.Page.locator('tbody')).toContainText(enginesize);
      await expect(this.Page.locator('tbody')).toContainText(fuelType);
      await this.helper.ClickOnElement(this.Page, locators.addriskbutton)
      await this.helper.SelectOptionFromDropdown(this.Page, locators.covertype, coverType1)
      await this.helper.EnterTextIntoField(this.Page, locators.vehicleMake, vehicleMake1)
      await this.helper.EnterTextIntoField(this.Page, locators.vmodel,vmodel1)
      await this.helper.EnterTextIntoField(this.Page, locators.vehicelType,vehicelType1)
      await this.helper.EnterTextIntoField(this.Page, locators.vehicelyear, vehicelyear1)
      await this.helper.EnterTextIntoField(this.Page, locators.enginesize, enginesize1)
      await this.helper.SelectOptionFromDropdown(this.Page, locators.FuelType,fuelType)
      await this.helper.ClickOnElement(this.Page, locators.submitbutton)
      await expect(this.Page.locator('tbody')).toContainText(coverType1);
      await expect(this.Page.locator('tbody')).toContainText(vehicleMake1);
      await expect(this.Page.locator('tbody')).toContainText(vmodel1);
      await expect(this.Page.locator('tbody')).toContainText(vehicelType1);
      await expect(this.Page.locator('tbody')).toContainText(vehicelyear1);
      await expect(this.Page.locator('tbody')).toContainText(enginesize1);
      await expect(this.Page.locator('tbody')).toContainText(fuelType);
      await this.helper.ClickOnElement(this.Page, "//a[normalize-space()='Next']")
     
      
  }
}
module.exports = {loginpage};