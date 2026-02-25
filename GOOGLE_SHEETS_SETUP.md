# Google Sheets Integration Setup Guide

This guide will help you connect your Elegance Beauty Parlour booking form to Google Sheets so that all appointment bookings are automatically saved.

## 📋 Prerequisites

- A Google account
- Access to Google Sheets and Google Apps Script
- Your website files (already set up)

## 🚀 Step-by-Step Setup

### Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Rename it to **"Elegance Beauty Parlour - Bookings"** (or any name you prefer)
4. The sheet will be empty - the script will automatically create headers when the first booking is submitted

### Step 2: Open Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. This will open the Apps Script editor in a new tab
3. You'll see a default `Code.gs` file with some sample code

### Step 3: Add the Booking Script

1. Delete all the default code in the `Code.gs` file
2. Copy the entire contents of the `google-apps-script/Code.gs` file from your project
3. Paste it into the Apps Script editor
4. Click **Save** (disk icon or Ctrl+S)
5. Give your project a name, e.g., "Booking Form Handler"

### Step 4: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment settings:
   - **Description**: "Booking Form API" (optional)
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone** (this allows your website to send data)
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **IMPORTANT**: Copy the **Web app URL** that appears - you'll need this in the next step
   - It will look like: `https://script.google.com/macros/s/AKfycby.../exec`

### Step 5: Update Your Website Code

1. Open the file `js/main.js`
2. Find line **176** where it says:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual web app URL from Step 4
4. Example:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
5. Save the file

### Step 6: Upload Updated Files

1. Upload the updated `js/main.js` file to your web server
2. Make sure to clear your browser cache or do a hard refresh (Ctrl+F5) to see the changes

## ✅ Testing the Integration

1. Visit your website's booking page (contact.html)
2. Fill out the booking form with test data:
   - **Name**: Test Customer
   - **Email**: test@example.com
   - **Phone**: +1 (555) 000-0000
   - **Date**: Any future date
   - **Time**: Any time slot
   - **Service**: Any service
   - **Message**: This is a test booking
3. Click **Book Appointment**
4. Check your Google Sheet - you should see:
   - A header row with column names (if this was the first booking)
   - A new row with your test booking data
   - A timestamp of when the booking was submitted

## 📊 Understanding Your Booking Sheet

Your Google Sheet will have the following columns:

| Column | Description |
|--------|-------------|
| **Timestamp** | Date and time when the booking was submitted |
| **Name** | Customer's full name |
| **Email** | Customer's email address |
| **Phone** | Customer's phone number |
| **Date** | Preferred appointment date |
| **Time** | Preferred appointment time |
| **Service** | Selected service |
| **Message** | Additional notes from customer |
| **Status** | Default is "Pending" - you can update this manually |

## 🎨 Customization Tips

### Add Data Validation

You can add dropdown menus in the Status column:
1. Select the Status column (column I)
2. Click **Data** → **Data validation**
3. Add options like: Pending, Confirmed, Completed, Cancelled

### Enable Notifications

To get email notifications for new bookings:
1. In Apps Script editor, add this function at the end of `Code.gs`:

```javascript
function sendEmailNotification(data) {
  var recipient = "your-email@example.com"; // Change this
  var subject = "New Booking: " + data.name;
  var body = "New booking received:\n\n" +
             "Name: " + data.name + "\n" +
             "Email: " + data.email + "\n" +
             "Phone: " + data.phone + "\n" +
             "Date: " + data.date + "\n" +
             "Time: " + data.time + "\n" +
             "Service: " + data.service + "\n" +
             "Message: " + data.message;
  
  MailApp.sendEmail(recipient, subject, body);
}
```

2. Then add this line in the `doPost` function after `sheet.appendRow([...])`:
```javascript
sendEmailNotification(data);
```

3. Save and deploy a new version

### Sort by Date

To automatically sort bookings by date:
1. In your Google Sheet, select all data
2. Click **Data** → **Create a filter**
3. Click the filter icon on the Timestamp column
4. Choose **Sort A → Z** (newest first) or **Sort Z → A** (oldest first)

## 🔧 Troubleshooting

### Bookings aren't appearing in the sheet

1. **Check the Script URL**: Make sure you copied the correct web app URL
2. **Check Authorization**: Redeploy the script and ensure you authorized it
3. **Check Browser Console**: Open browser developer tools (F12) and check for errors
4. **Test the Script Directly**: Visit your web app URL in a browser - you should see:
   ```json
   {"status":"success","message":"Elegance Beauty Parlour Booking API is running!"}
   ```

### "Authorization required" error

1. Go back to Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the edit icon (pencil) on your deployment
4. Change "Who has access" to **Anyone**
5. Click **Deploy**

### Data appears in wrong format

- The script automatically formats the header row
- Dates should appear in your Google account's date format
- If you need different formatting, select the columns and use **Format** → **Number** in Google Sheets

## 🔐 Security Notes

- The script is set to **Anyone** access, but it only accepts data - it doesn't expose your sheet data
- Only POST requests with valid JSON data will be processed
- Your actual Google Sheet remains private and accessible only to you
- Consider adding additional validation in the Apps Script if needed

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for JavaScript errors
2. Check the Apps Script execution logs: **Executions** in the Apps Script editor
3. Verify all steps were completed correctly
4. Test with a simple booking first

---

**Congratulations!** 🎉 Your booking form is now integrated with Google Sheets. All appointment requests will be automatically saved and organized for easy management.