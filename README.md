# Aquaman Bali Surf School

Aquaman Bali Surf School is a Next.js 13 application developed to enhance the online presence of a surf school in Bali (focused on mobile users - no responsive design). The project utilizes Next.js Pages Router to provide a seamless navigation experience for potential clients.

## Table of Contents
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Running the Production Server](#running-the-production-server)
- [Live Demo](#live-demo) 🚀

# Installation

1. Clone the repository:
```bash
git clone git@github.com:SiegfriedBz/aquaman_bali_v2.git
cd aquaman_bali_v2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a .env file in the root directory and add the following environment variables
    
    # Mapbox
    NEXT_PUBLIC_MAPBOX_TOKEN
    
    # Cloudinary
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    
    # links
    NEXT_PUBLIC_AUTHOR_WHATSAPP_LINK
    NEXT_PUBLIC_WHATSAPP_LINK
    NEXT_PUBLIC_STREETVIEW_LINK
    NEXT_PUBLIC_IG_LINK
    NEXT_PUBLIC_BMCOFFEE_LINK
    NEXT_PUBLIC_TIKTOK_LINK
    
# Running the Development Server
To start the development server, run:

```bash
npm run dev
  ```

# Building for Production
To build the project for production, run:

```bash
npm run build
```

# Running the Production Server
After building the project, you can start the production server with:

```bash
npm start
```

# Technologies Used

- **Framework**: React, Next.js 13 Pages Router
- **Styling**: Tailwind CSS, Framer Motion (note: focused on mobile users - no responsive design)
- **Theme**: Implemented dark theme for better user experience
- **Cloudinary**: for storing and optimizing images
- **Mapbox**: Integration for displaying surf school and surf spots locations

  
## Live Demo
Visit the live demo of [Aquaman Bali](https://aquaman-bali-surf-school.vercel.app/) deployed on Vercel.
