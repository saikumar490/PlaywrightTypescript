// Define a type for the URLs object
interface Urls 
{
    AdminUrl: string;
    CilentUrl: string;
}

// Define a type for the locators object
interface Locators 
{
    usernamefield : string;
    passwordfield : string;
    loginbutton : string;
    firstname : string,
    Lastname :string,
    Dateofbirth:string,
    Gender:string,
    Mobilenumber:string,
    Email:string ,
    nextbutton : string,
    addriskbutton:string
    covertype:string,
    vehicleMake:string,
    vmodel:string,
    vehicelType:string,
    vehicelyear:string,
    enginesize:string,
    FuelType:string,
    submitbutton:string,
    Adddriverdetails:string,
    drivertype :string,
    drivername:string,
    drierdateofbirth:string,
    driverage:string,
    driverexperince:string,
    driverlicnumber:string,
    driversgender:string,
    driversubmitbutton:string,
    drivernextbutton:string




}

// Define a type for the browser variable to allow only specific values
type BrowserType = 'chrome' | 'firefox' | 'webkit' | 'safari';

// Define the URLs constant with the proper type
const urls: Urls =
 {
    AdminUrl: 'http://127.0.0.1:5000/',
    CilentUrl: 'https://jqueryui.com/datepicker/',
};

// Define the locators constant with the proper type
const locators: Locators = 

{

    usernamefield : "//input[@id='username']",
    passwordfield :"#password",
    loginbutton : "//input[@value='Login']",
    firstname : "//input[@id='firstName']",
    Lastname : "//input[@id='lastName']",
    Dateofbirth :"//input[@id='dateofbirth']",
    Gender :"//select[@id='gender']",
    Mobilenumber : "//input[@id='mobileNumber']",
    Email:"//input[@id='email']",
    nextbutton : "//a[normalize-space()='Next']",
    addriskbutton:"//button[@id='addRiskButton']",
    covertype: "//select[@name='coverType']",
    vehicleMake:"//input[@id='vehicleMake']",
    vmodel : "//input[@id='vehicleModel']",
    vehicelType:"//input[@id='vehicleType']",
    vehicelyear:"//input[@id='vehicleYear']",
    enginesize:"//input[@id='engineSize']",
    FuelType:"//select[@id='fuelType']",
    submitbutton :"//button[@type='submit']",
    Adddriverdetails:"#addDriverButton",
    drivertype:"//select[@id='driverType']",
    drivername:"//input[@id='driverName']",
    drierdateofbirth: "//input[@id='dateofbirth']",
    driverage:"//input[@id='age']",
    driverexperince: "//input[@id='drivingExperience']",
    driverlicnumber: "//input[@id='liNumber']",
    driversgender:"//select[@id='gender']",
    driversubmitbutton:"//button[normalize-space()='Submit']",
    drivernextbutton:"//a[normalize-space()='Next']"




};

// Define the browser constant with a type restriction to 'chrome', 'firefox', 'webkit', or 'safari'
const browser: BrowserType = 'chrome';  // You can change this value based on the browser you want to use

// Export the constants so they can be imported in other files
export { urls, locators, browser };
