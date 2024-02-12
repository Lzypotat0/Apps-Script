/**
 * Setup custom menu for the sheet.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('DCM Functions')
      .addItem('Setup Sheets', 'setupTabs')
      .addSeparator()
      .addItem('Fetch User Profile ID', 'listUserProfiles')
      .addItem('Fetch Active Campaigns', 'listActiveCampaigns')
      .addSeparator()
      .addItem('List Sites', 'listSites')
      .addSeparator()
      .addItem('Bulk Create Campaigns', 'createCampaigns')
      .addItem('Bulk Create Placements', 'createPlacements')
      .addItem('Bulk Create Ads', 'createAds')
      .addItem('Bulk Create Creatives', 'createCreatives')
      .addItem('Bulk Create Landing Pages', 'createLandingPages')
      .addToUi();
}
