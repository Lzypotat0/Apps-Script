function main() {
  var todayStats = AdWordsApp.currentAccount().getStatsFor('TODAY');
  var yesterdayStats = AdWordsApp.currentAccount().getStatsFor('YESTERDAY');
  
  if (todayStats.getCost() > 1.5 * yesterdayStats.getCost()) {
    sendEmailAlert(todayStats.getCost(), yesterdayStats.getCost());
  }
}

function sendEmailAlert(todayCost, yesterdayCost) {
  var recipient = '*********'; // Replace with your email/s
  var subject = 'SPEND ALERT | Salesforce | Google - Singapore';
  
  // Format the cost values to be in a dollar format
  var formattedTodayCost = '$' + todayCost.toFixed(2);
  var formattedYesterdayCost = '$' + yesterdayCost.toFixed(2);
  
  var body = 'Today\'s spend (' + formattedTodayCost + ') has spent 1.5x compared to yesterday\'s spend (' + formattedYesterdayCost + ').';
  
  MailApp.sendEmail(recipient, subject, body);
}

