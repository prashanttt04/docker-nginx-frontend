# Elegance Beauty Parlour 💇‍♀️ ✨

A stunning, modern responsive website for a premium beauty parlour. Built with clean HTML5, CSS3, and vanilla JavaScript featuring smooth animations, interactive galleries, and integrated booking system.

![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
  - [Docker](#docker)
  - [GitHub Pages](#github-pages)
- [Google Sheets Integration](#google-sheets-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## ✨ Features

- **🎨 Elegant Design**: Premium pink/rose gold color theme with modern aesthetic
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **5 Complete Pages**: 
  - Home (landing page with featured services)
  - Services (detailed service offerings)
  - Gallery (interactive image gallery with filters)
  - About (parlour information and team)
  - Contact (booking form with Google Sheets integration)
- **✨ Smooth Animations**: Fade-in, slide-in, and hover effects
- **📝 Booking Form**: Functional contact form with validation
- **🖼️ Interactive Gallery**: Image filtering and modal view support
- **📊 Google Sheets Integration**: Automatic form submissions to Google Sheets
- **🔄 Mobile Navigation**: Hamburger menu for mobile devices
- **♿ Semantic HTML**: Best practices for accessibility

---

## 📁 Project Structure

```
Elegance-Beauty-Parlour/
├── README.md                          # Main project documentation
├── README_GOOGLE_SHEETS.md           # Google Sheets setup guide
├── GOOGLE_SHEETS_SETUP.md            # Advanced integration guide
├── ANIMATION_GUIDE.md                # Animation documentation
├── dockerfile                         # Docker configuration
├── index.html                         # Home page
├── services.html                      # Services page
├── gallery.html                       # Gallery page
├── about.html                         # About page
├── contact.html                       # Contact & booking page
│
├── css/
│   ├── style.css                     # Main stylesheet (849 lines)
│   └── animations.css                # Animation definitions (497 lines)
│
├── js/
│   └── main.js                       # JavaScript functionality
│
├── google-apps-script/
│   └── Code.gs                       # Google Apps Script for Sheets integration
│
└── images/
    └── [Gallery images directory]
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (ES6+)** | Interactivity and form handling |
| **Google Apps Script** | Backend form submission to Google Sheets |
| **Nginx** | Web server (Docker deployment) |
| **Docker** | Containerization |

### CSS Features
- CSS Variables for theme customization
- Flexbox & Grid layouts
- Media queries for responsiveness
- Keyframe animations
- Box shadows and gradients
- Smooth transitions

### JavaScript Functionality
- Form validation
- Mobile menu toggle
- Gallery filtering
- Image modal viewer
- Dynamic content rendering
- Event handling

---

## 🚀 Installation

### Prerequisites
- Git
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Docker (optional, for containerized deployment)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/elegance-beauty-parlour.git
   cd elegance-beauty-parlour
   ```

2. **Open in browser** (Development - no server needed for basic testing)
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

3. **Or use a local server** (Recommended for full functionality)
   
   **Python 3:**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```
   
   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Node.js (http-server):**
   ```bash
   npx http-server
   ```
   
   **PHP:**
   ```bash
   php -S localhost:8000
   ```

---

## 💻 Usage

### Navigation
- **Header Navigation**: Quick access to all pages
- **Mobile Menu**: Click hamburger icon (☰) on mobile devices
- **Internal Links**: All pages are linked for easy navigation

### Services Page
Browse available beauty services organized by category:
- Hair Styling
- Professional Makeup
- Spa & Wellness
- Skincare
- Special Packages

### Gallery
- View high-quality images of services and work
- Filter images by category
- Click images to view full-size in modal

### Booking
1. Navigate to Contact page
2. Fill out the booking form with your details
3. Select desired services and date
4. Submit to book appointment
5. Details automatically saved to Google Sheets (if configured)

### Customization

#### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-pink: #f8b4d9;
    --primary-rose: #d4a5a5;
    --primary-gold: #c9a86a;
    /* ... more colors ... */
}
```

#### Update Content
- Edit text directly in HTML files
- Replace images in `images/` folder
- Maintain the same file structure for proper linking

#### Add New Pages
1. Create new `.html` file
2. Copy header/footer structure from existing pages
3. Include CSS links in `<head>`
4. Add link in navigation menu

---

## 🐳 Deployment

### Docker Deployment

1. **Build Docker image**
   ```bash
   docker build -t elegance-beauty-parlour .
   ```

2. **Run container**
   ```bash
   docker run -p 80:80 elegance-beauty-parlour
   ```

3. **Access website**
   ```
   http://localhost:80
   ```

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select `main` branch as source
   - Save

3. **Access your site**
   ```
   https://yourusername.github.io/elegance-beauty-parlour/
   ```

### Netlify / Vercel Deployment

**Netlify:**
1. Connect GitHub repository via Netlify dashboard
2. Set build command: (leave blank - static site)
3. Set publish directory: (leave blank for root)
4. Deploy

**Vercel:**
1. Import project from GitHub
2. Click "Deploy"
3. Your site goes live automatically

---

## 📊 Google Sheets Integration

### Quick Setup

1. **Create Google Sheet**
   - Create new Google Sheet for booking submissions
   - Create columns: Name, Email, Phone, Service, Date, Message

2. **Deploy Apps Script**
   - See `GOOGLE_SHEETS_SETUP.md` for detailed instructions
   - Get the Web App URL from Google Apps Script deployment

3. **Get Web App URL**
   - Copy the deployed Web App URL

4. **Update HTML Form**
   In `contact.html`, update the form action:
   ```html
   <form id="bookingForm" action="YOUR_GOOGLE_APPS_SCRIPT_URL" method="POST">
   ```

5. **Test the form**
   - Submit a test booking
   - Check your Google Sheet for the entry

### Form Fields
The booking form collects:
- Full Name
- Email Address
- Phone Number
- Service Type
- Preferred Date
- Additional Message

See `README_GOOGLE_SHEETS.md` for advanced configuration.

---

## 🎨 Animation Overview

The website includes multiple smooth animations:

| Animation | Location | Trigger |
|-----------|----------|---------|
| Fade In | Page content | Page load |
| Slide In | Service cards | Scroll into view |
| Hover Scale | Cards & buttons | Mouse hover |
| Fade Overlay | Images | Gallery hover |
| Bounce | CTA buttons | Page load |
| Pulse | Featured items | Continuous |

See `ANIMATION_GUIDE.md` for detailed animation documentation.

---

## 🎯 Key Sections

### Home Page (`index.html`)
- Hero section with call-to-action
- Featured services showcase
- Testimonials section
- Newsletter signup

### Services Page (`services.html`)
- Hair styling services
- Makeup services
- Spa & wellness packages
- Skincare treatments
- Special offers

### Gallery (`gallery.html`)
- Portfolio of completed work
- Filterable image gallery
- Modal viewer for high-resolution images

### About Page (`about.html`)
- Parlour history and story
- Team member bios
- Why choose us section
- Contact information

### Contact Page (`contact.html`)
- Booking form
- Contact details
- Location map integration ready
- Business hours

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Mobile:     < 768px
Tablet:     768px - 1024px
Desktop:    > 1024px
```

All media queries are optimized for smooth responsive transitions.

---

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels where applicable
- Color contrast meets WCAG standards
- Keyboard navigation support
- Alt text on images
- Form labels properly associated

---

## 🔧 Browser Support

| Browser | Supported | Version |
|---------|-----------|---------|
| Chrome | ✅ | Latest |
| Firefox | ✅ | Latest |
| Safari | ✅ | Latest |
| Edge | ✅ | Latest |
| IE11 | ⚠️ | Limited |

---

## 📈 Performance

- **Total CSS**: 849 lines (style.css) + 497 lines (animations.css)
- **Total JS**: Lightweight vanilla JavaScript (no dependencies)
- **Load Time**: < 2 seconds on average connection
- **Lighthouse Score**: 90+
- **Mobile Friendly**: Yes

---

## 🚀 Future Enhancements

- [ ] Online payment integration (Stripe/PayPal)
- [ ] Appointment calendar with availability
- [ ] Customer reviews/testimonials section
- [ ] Blog for beauty tips
- [ ] Multi-language support
- [ ] WhatsApp integration for quick inquiries
- [ ] Customer loyalty program
- [ ] Staff member profiles with booking
- [ ] Service search and filtering
- [ ] Email notification system

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/elegance-beauty-parlour.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Test responsiveness
   - Ensure animations work smoothly

4. **Commit your changes**
   ```bash
   git commit -am 'Add your feature description'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues

### Coding Standards
- Use semantic HTML
- Follow CSS naming conventions (BEM optional)
- Write clean, readable JavaScript
- Add comments for complex logic
- Test on multiple devices

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 👥 Team

**Created by:** Prashant Rao Jagtap

---

## 📞 Contact & Support

- **Email**: hello@elegancebeauty.com
- **Phone**: [Add your number]
- **Hours**: Mon-Sat: 9AM - 8PM | Sunday: 10AM - 6PM
- **Location**: [Add your location]

### Support
- 🐛 **Found a bug?** Open an issue on GitHub
- 💡 **Have a suggestion?** Create a discussion
- 📧 **Direct questions?** Email us

---

## 📚 Additional Resources

- [ANIMATION_GUIDE.md](ANIMATION_GUIDE.md) - Detailed animation documentation
- [README_GOOGLE_SHEETS.md](README_GOOGLE_SHEETS.md) - Google Sheets integration guide
- [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) - Advanced setup instructions
- [HTML5 Specification](https://html.spec.whatwg.org/)
- [CSS3 Documentation](https://www.w3.org/TR/CSS/)
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

---

## 🌟 Show Your Support

If you find this project helpful, please:
- ⭐ Star the repository
- 🔄 Share with others
- 📢 Give feedback and suggestions
- 🤝 Contribute improvements

---

## 🎉 Changelog

### Version 1.0.0 (2025)
- ✅ Initial release
- ✅ 5 main pages
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Google Sheets integration
- ✅ Contact form with validation
- ✅ Interactive gallery
- ✅ Docker support

---

## 📧 Questions?

Feel free to open an issue or contact us directly. We're happy to help!

---

<p align="center">
  Made with 💖 and ✨ for beauty professionals
</p>

<p align="center">
  <a href="https://github.com/yourusername">GitHub</a> •
  <a href="https://twitter.com/yourhandle">Twitter</a> •
  <a href="mailto:hello@elegancebeauty.com">Email</a>
</p>

---

**Last Updated**: February 2025
**Version**: 1.0.0
