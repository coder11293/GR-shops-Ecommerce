
# 🛍️ GR Shops - E-Commerce Website

A simple, responsive e-commerce website built with **HTML**, **CSS**, and **JavaScript**.  
This project includes a **shopping cart** system with add/remove functionality and **PayPal payment integration**.

## ✨ Features

- 🖼️ Product showcase with images, titles, and prices
- 🛒 Add to Cart & Remove from Cart functionality
- 💰 Dynamic total price calculation
- 💳 PayPal payment gateway integration
- 📱 Responsive layout for mobile and desktop
- 🎨 Custom styling with modern UI

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- jQuery
- PayPal JavaScript SDK
- Font Awesome Icons

## 💳 PayPal Integration Setup

This project uses the **PayPal JavaScript SDK** for payment processing.  
You need a **PayPal Developer Account** to get a Client ID and enable sandbox testing.

### Steps to Set Up PayPal:

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/).  
2. Sign in with your PayPal account (or create one if you don't have it).  
3. Navigate to **"My Apps & Credentials"**.  
4. Under **Sandbox**, click **"Create App"**.  
5. Give your app a name (e.g., `"GR Shops Test"`).  
6. Copy the **Client ID** shown after creation.  
7. In `index.html`, replace the `client-id` in the PayPal script tag with your Sandbox Client ID:

```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_SANDBOX_CLIENT_ID&currency=USD"></script>
```
##live demo
[click here for demo](https://coder11293.github.io/GR-shops-Ecommerce/)








