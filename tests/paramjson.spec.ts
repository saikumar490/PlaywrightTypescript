import { test, expect, chromium } from '@playwright/test';
import { loginpage } from '../Pages/Loginpage';
import { urls } from '../Support/constants';
import fs from 'fs';
import testdata from '../Data/UserData.json'; // Assuming the JSON is an array of objects

test.describe('Login Tests with Data-Driven Approach and Reusable Methods', () => 
{
  
  // Loop through each user in the test data
  for (const data of testdata) 
 {
    test.describe(`Login Test for username: ${data.username} & password: ${data.password}`, () => 
    {
      test(`Login Test for username: ${data.username} & password: ${data.password}`, async ({ page }) =>
      {
        const Login = new loginpage(page);
        await page.goto(urls.AdminUrl);
        await Login.testLaunchtheUrlandLoginintoapplicatin(data.username, data.password);
        await Login.testAddingclientdetails(data.ClientDetails[0].FirstName, data.ClientDetails[0].LastName, data.ClientDetails[0].DateofBirth, data.ClientDetails[0].Gender, data.ClientDetails[0].MobileNumber, data.ClientDetails[0].Email);
        await Login.testAddingRiskDetails(data.RiskDetaild[0].CoverData,data.RiskDetaild[0].VehicleMake,data.RiskDetaild[0].VehicleModel,data.RiskDetaild[0].VehicleType,data.RiskDetaild[0].VehicleYear,data.RiskDetaild[0].Enginesize,data.RiskDetaild[0].FuelType);
        await Login.testaddingdriverdetails(data.DriverDetails[0].Drivertype,data.DriverDetails[0].DriversName,data.DriverDetails[0].DateofBirth,data.DriverDetails[0].Drivingexperience,data.DriverDetails[0].Licensenumber,data.DriverDetails[0].DriversGender);
        
      });

    });
  }
});
