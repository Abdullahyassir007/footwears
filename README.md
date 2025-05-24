# Modern Shoe Store

A premium shoe selling website built with React and Styled Components.

## Live Demo

Check out the live demo: [https://modernfootwears.netlify.app/](https://modernfootwears.netlify.app/)

## Features

- Modern and responsive design
- Clean product cards with images
- Hero section with call-to-action
- Featured products showcase
- Footer with contact info and social media
- Smooth animations using Framer Motion
- Shopping cart functionality
- Mock checkout system
- Order confirmation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

## Deployment

### GitHub Deployment

1. Create a new repository on GitHub
2. Copy the repository URL
3. Add the remote repository:
```bash
git remote add origin <repository-url>
```
4. Push to GitHub:
```bash
git push -u origin main
```

### Netlify Deployment

1. Go to https://app.netlify.com/
2. Sign up or log in to your account
3. Click "New site from Git"
4. Select "GitHub" as your Git provider
5. Authorize Netlify to access your GitHub account
6. Select your repository
7. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
8. Add redirect configuration in `public/_redirects`:
   ```
   /*    /index.html   200
   ```
9. Click "Deploy site"

Your site will be live at a URL like: `https://your-site-name.netlify.app`

## Technologies Used

- React
- Redux
- React Router
- Styled Components
- Framer Motion
- React Icons
