var SCRIPT_NAME = "Promotion Request Form - Sheet Script"
var SCRIPT_VERSION = "v1.0"

function onOpen(e)                   {PRF.onOpen(e)}

// Menu

function startSetup()                 {PRF.startSetup()}

function mapToStaffSpreadsheet()      {PRF.mapToStaffSpreadsheet()}
function mapToResponsesSpreadsheet()  {PRF.mapToResponsesSpreadsheet()}
function setTargetSheetForResponses() {PRF.setTargetSheetForResponses()}
function setPullRangeForUserNames()   {PRF.setPullRangeForUserNames()}
function setPullRangeForUserEmails()  {PRF.setPullRangeForUserEmails()}
function mapToHootSuiteSpreadsheet()  {PRF.mapToHootSuiteSpreadsheet()}
function setTargetSheetForHootSuite() {PRF.setTargetSheetForHootSuite()}
function setTargetCalendar()          {PRF.setTargetCalendar()}
function setTodoistCommentTemplate()  {PRF.setTodoistCommentTemplate()}
function setTodoistTasksTemplate()    {PRF.setTodoistTasksTemplate()}
function setTodoistAuthToken()        {PRF.setTodoistAuthToken()}
function setDefaultDesignerEmail()    {PRF.setDefaultDesignerEmail()}
function showCache()                  {PRF.showCache()}

// Triggers

function onFormSubmit(e)             {PRF.onFormSubmit(e)}
function updateForm(e)               {PRF.updateForm(e)}

// Testing

function dumpConfig()                {PRF.test_dumpConfig()}
function clearConfig()               {PRF.test_clearConfig()}
function test()                      {PRF.test()}