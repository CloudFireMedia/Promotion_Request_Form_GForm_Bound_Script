var SCRIPT_NAME = "Promotion Request Form Bound Script"
var SCRIPT_VERSION = "v1.5"

// Add-on installation

function onInstall() {
  PRF.onInstall();  
  onOpen();
} 

// Menu

function onOpen() {
  FormApp
    .getUi()
    .createAddonMenu()
    .addItem("Show settings", "showCache")
    .addToUi()    
}

function showCache()                  {PRF.showCache()}

// Triggers

function onFormSubmit(e)              {PRF.onFormSubmit(e)}
function updateForm(e)                {PRF.updateForm(e)}

// Testing

function dumpConfig()                 {PRF.test_dumpConfig()}
function clearConfig()                {PRF.test_clearConfig()}
function test()                       {PRF.test()}