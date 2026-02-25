/**
 * ELEGANCE BEAUTY PARLOUR - GOOGLE SHEETS INTEGRATION
 * 
 * This Apps Script receives booking form submissions and stores them in Google Sheets.
 * Deploy this as a web app to get a URL endpoint for your form.
 */

// Main function to handle POST requests from the booking form
function doPost(e) {
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // If this is the first entry, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Date',
        'Time',
        'Service',
        'Message',
        'Status'
      ]);
      
      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#c27ba0');
      headerRange.setFontColor('#ffffff');
    }
    
    // Create timestamp
    var timestamp = new Date();
    
    // Append the booking data to the sheet
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.date || '',
      data.time || '',
      data.service || '',
      data.message || '',
      'Pending' // Default status
    ]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 9);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Booking received successfully!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Error processing booking: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (optional - for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Elegance Beauty Parlour Booking API is running!'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
