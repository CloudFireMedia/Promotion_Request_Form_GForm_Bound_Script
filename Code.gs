var SCRIPT_NAME = "Promotion_Request_Form_AddOn"
var SCRIPT_VERSION = "v1.15"

// Add-on installation

function onInstall(e) {
  PRF.clearConfig()
  onOpen(e)
} 

// Menu

function onOpen(e) {

  console.log(SCRIPT_VERSION)

  var menu = FormApp.getUi().createAddonMenu()
  
  if (PRF.initialised(e)) {
    menu.addItem('Show settings', 'showCache')  
  } else {
    menu.addItem('Start', 'initialize')
  }
  
  menu.addToUi()    
}

function showCache()  {PRF.showCache()}
function initialize() {PRF.onInstall()}

// Triggers

function onFormSubmit(e) {PRF.onFormSubmit(e)}
function updateForm(e)   {PRF.updateForm(e)}

// Testing

function dumpConfig()  {PRF.test_dumpConfig()}
function clearConfig() {PRF.test_clearConfig()}
function test()        {PRF.test()}

//var SCRIPT_NAME = "Promotion Request Form - Sheet Script"
//var SCRIPT_VERSION = "v1.4"
//
//// function onOpen(e)                    {PRF.onOpen(e)}
//
//// Menu
//
//function startSetup()                 {PRF.startSetup()}
//
//function mapToStaffSpreadsheet()      {PRF.mapToStaffSpreadsheet()}
//function mapToResponsesSpreadsheet()  {PRF.mapToResponsesSpreadsheet()}
//function setTargetSheetForResponses() {PRF.setTargetSheetForResponses()}
//function setPullRangeForUserNames()   {PRF.setPullRangeForUserNames()}
//function setPullRangeForUserEmails()  {PRF.setPullRangeForUserEmails()}
//function mapToHootSuiteSpreadsheet()  {PRF.mapToHootSuiteSpreadsheet()}
//function setTargetSheetForHootSuite() {PRF.setTargetSheetForHootSuite()}
//function setTargetCalendar()          {PRF.setTargetCalendar()}
//function setTodoistCommentTemplate()  {PRF.setTodoistCommentTemplate()}
//function setTodoistTasksTemplate()    {PRF.setTodoistTasksTemplate()}
//function setTodoistAuthToken()        {PRF.setTodoistAuthToken()}
//function setDefaultDesignerEmail()    {PRF.setDefaultDesignerEmail()}
//function showCache()                  {PRF.showCache()}
//
//// Triggers
//
//function onFormSubmit(e)             {PRF.onFormSubmit(e)}
//function updateForm(e)               {PRF.updateForm(e)}
//
//// Testing
//
//function dumpConfig()                {PRF.test_dumpConfig()}
//function clearConfig()               {PRF.test_clearConfig()}
//function test()                      {PRF.test()}