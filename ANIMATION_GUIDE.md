# Animation Guide for Krishna Beauty Parlour Website

## 🎨 Available Animations

I've added **20+ professional animations** to your website! Here's how to use them:

---

## 📋 Quick Reference

### Entrance Animations (On Page Load/Scroll)

Add these classes to any element:

```html
class="fade-in"          <!-- Fade in with slight upward movement -->
class="slide-left"       <!-- Slide in from the left -->
class="slide-right"      <!-- Slide in from the right -->
class="slide-down"       <!-- Slide down from top -->
class="zoom-in"          <!-- Zoom in effect -->
class="scale-up"         <!-- Scale up smoothly -->
class="flip"             <!-- 3D flip effect -->
```

### Continuous Animations

```html
class="bounce"           <!-- Gentle bouncing (great for icons) -->
class="pulse"            <!-- Pulsing scale effect -->
class="float"            <!-- Floating up and down -->
class="glow"             <!-- Glowing effect -->
class="gradient-animated" <!-- Animated gradient background -->
```

### Hover Effects

```html
class="card-hover"       <!-- Cards lift up and glow on hover -->
class="btn-animated"     <!-- Buttons with ripple and lift effect -->
class="image-zoom"       <!-- Images zoom on hover -->
class="underline-animation" <!-- Animated underline on hover -->
class="icon-bounce"      <!-- Icons bounce when hovered -->
class="ripple"           <!-- Ripple effect on click -->
class="enhanced-card"    <!-- Cards tilt and lift on hover -->
```

### Stagger Delays (For Lists)

Add these to create a cascading effect:

```html
class="fade-in stagger-1"  <!-- Delays 0.1s -->
class="fade-in stagger-2"  <!-- Delays 0.2s -->
class="fade-in stagger-3"  <!-- Delays 0.3s -->
class="fade-in stagger-4"  <!-- Delays 0.4s -->
class="fade-in stagger-5"  <!-- Delays 0.5s -->
class="fade-in stagger-6"  <!-- Delays 0.6s -->
```

---

## ✨ Usage Examples

### Example 1: Animate Service Cards

```html
<div class="card service-card card-hover fade-in stagger-1">
    <div class="service-icon float">💇‍♀️</div>
    <h3 class="card-title">Hair Styling</h3>
    <p class="card-text">Beautiful hair transformations</p>
    <a href="#" class="btn btn-primary btn-animated">Learn More</a>
</div>
```

### Example 2: Animate Gallery Images

```html
<div class="gallery-item image-zoom zoom-in stagger-1">
    <img src="image.jpg" alt="Gallery Image">
</div>
```

### Example 3: Animated Buttons

```html
<a href="contact.html" class="btn btn-primary btn-animated pulse">
    Book Appointment
</a>
```

### Example 4: Hero Section

```html
<div class="hero-content">
    <h1 class="slide-down">Welcome to Krishna Beauty Parlour</h1>
    <p class="fade-in stagger-1">Your beauty, our passion</p>
    <a href="#" class="btn btn-primary btn-animated bounce">Get Started</a>
</div>
```

### Example 5: Testimonials

```html
<div class="testimonial card-hover scale-up stagger-1">
    <p class="testimonial-text">Amazing service!</p>
    <div class="testimonial-author">- Happy Customer</div>
</div>
```

---

## 🎯 Where to Add Animations

### Recommended Elements:

1. **Service Cards**
   - Add: `card-hover fade-in stagger-1/2/3`
   
2. **Buttons**
   - Add: `btn-animated` or `btn-animated pulse`
   
3. **Gallery Images**
   - Add: `image-zoom zoom-in`
   
4. **Icons**
   - Add: `icon-bounce float`
   
5. **Testimonials**
   - Add: `card-hover slide-left`
   
6. **Section Titles**
   - Add: `slide-down`
   
7. **Featured Content**
   - Add: `glow gradient-animated`

---

## 🛠️ How to Apply

### Method 1: Direct HTML Edit

Open any HTML file and add classes to elements:

```html
<!-- Before -->
<div class="card service-card">

<!-- After -->
<div class="card service-card card-hover fade-in stagger-1">
```

### Method 2: Multiple Animations

You can combine multiple animation classes:

```html
<div class="card btn-animated fade-in stagger-1 glow">
    <!-- Fades in, has hover animation, glows, with delay -->
</div>
```

---

## 🎨 Special Effects

### Loading Spinner

```html
<div class="loading-spinner"></div>
```

### Animated Text

```html
<h1 class="text-glow">Glowing Text</h1>
<p class="typing-animation">Typing effect text</p>
```

### Shimmer Effect

```html
<div class="shimmer">
    Shimmering content
</div>
```

---

## 📱 Performance Tips

1. **Don't overdo it**: Use 2-3 animations per page section max
2. **Stagger wisely**: Use stagger delays for lists (3-6 items)
3. **Choose appropriate animations**: 
   - Important CTAs → `pulse` or `glow`
   - Service cards → `card-hover` + `fade-in`
   - Images → `image-zoom`
   - Buttons → `btn-animated`

---

## 🚀 Quick Start Examples

### Update Your Home Page (index.html)

Add these to your existing elements:

```html
<!-- Hero Section -->
<h1 class="slide-down">Krishna Beauty Parlour</h1>
<p class="fade-in stagger-1">Experience Premium Beauty Services</p>
<a href="contact.html" class="btn btn-primary btn-animated pulse">Book Now</a>

<!-- Service Cards (add to each) -->
<div class="card service-card card-hover fade-in stagger-1">
<div class="card service-card card-hover fade-in stagger-2">
<div class="card service-card card-hover fade-in stagger-3">

<!-- Testimonials -->
<div class="testimonial enhanced-card scale-up stagger-1">
```

### Update Gallery Page (gallery.html)

```html
<!-- Gallery Items (add to each) -->
<div class="gallery-item image-zoom zoom-in stagger-1">
<div class="gallery-item image-zoom zoom-in stagger-2">
<div class="gallery-item image-zoom zoom-in stagger-3">
```

### Update Services Page (services.html)

```html
<!-- Service Cards -->
<div class="card service-card card-hover slide-left">

<!-- All buttons -->
<a href="#" class="btn btn-primary btn-animated">View Details</a>
```

---

## 🎬 Animation Showcase

All these animations are now available:

✅ **20+ Keyframe Animations**  
✅ **10+ Hover Effects**  
✅ **Micro-interactions**  
✅ **Loading animations**  
✅ **Text effects**  
✅ **Smooth transitions**  
✅ **Stagger effects**  
✅ **3D transformations**

---

## 💡 Pro Tips

1. **Hero sections**: Use `slide-down` for titles, `fade-in` for text
2. **Cards**: Always add `card-hover` for better UX
3. **Buttons**: Use `btn-animated` for all CTA buttons
4. **Lists**: Apply stagger delays for professional cascading effect
5. **Images**: Add `image-zoom` to all gallery/portfolio images
6. **Icons**: Use `float` or `bounce` for decorative icons

---

## 📞 Need Help?

The animations are already linked in all your HTML files. Just add the class names to your elements and refresh the page to see them in action!

**File Location**: `css/animations.css`

Happy animating! ✨
