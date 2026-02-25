# Quick Reference - Google Sheets Integration

## 🎯 What Was Done

Your booking form is now configured to automatically save all appointment submissions to Google Sheets.

## 📁 New Files Created

1. **`google-apps-script/Code.gs`** - The backend script that receives and stores booking data
2. **`GOOGLE_SHEETS_SETUP.md`** - Detailed setup instructions

## ✏️ Modified Files

1. **`js/main.js`** - Updated to send form data to Google Sheets via API

## 🚀 Next Steps (Required)

You need to complete these steps to activate the integration:

### 1. Deploy Google Apps Script (5 minutes)
- Create a new Google Sheet
- Add the script from `google-apps-script/Code.gs`
- Deploy as web app
- Copy the deployment URL

### 2. Update Your Website (1 minute)
- Open `js/main.js`
- Find line 176: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
- Replace with your actual web app URL
- Upload the file to your server

### 3. Test It! (2 minutes)
- Submit a test booking
- Check your Google Sheet for the data

## 📖 Detailed Instructions

See **`GOOGLE_SHEETS_SETUP.md`** for complete step-by-step instructions with screenshots descriptions and troubleshooting tips.

## ⚡ Key Features

✅ Automatic data storage in Google Sheets  
✅ Organized columns with headers  
✅ Timestamps for each booking  
✅ Status tracking (Pending/Confirmed/Completed)  
✅ No database required  
✅ Free to use  
✅ Easy to manage  

## 🔍 What Gets Saved

Each booking stores:
- Customer name, email, phone
- Appointment date and time
- Selected service
- Additional notes
- Submission timestamp
- Status (default: Pending)

## 💡 Tips

- Keep the Google Sheet private - only you can access it
- You can sort, filter, and analyze bookings directly in Sheets
- Consider setting up email notifications (instructions in setup guide)
- The Status column can be updated manually to track appointments

---

Need help? Check the **Troubleshooting** section in `GOOGLE_SHEETS_SETUP.md`
