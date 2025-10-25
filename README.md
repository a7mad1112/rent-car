# 🚗 Rent Car - Car Rental Service Website

A modern, responsive car rental website built with React.js. This application provides a seamless experience for users to browse, search, and rent vehicles online.

## 🌟 Live Demo

[View Live Demo](https://a7mad1112.github.io/rent-car)

## ✨ Features

- **Hero Slider** - Engaging homepage with dynamic image slider
- **Car Listings** - Browse through a comprehensive catalog of available vehicles
- **Advanced Search** - Find cars with intuitive filtering options
- **Car Details** - Detailed information about each vehicle including specifications and pricing
- **Booking System** - User-friendly booking form for car reservations
- **Blog Section** - Informative articles and news about cars and travel
- **About Us** - Learn about the company and team members
- **Contact Page** - Easy way to get in touch
- **Testimonials** - Customer reviews and feedback
- **Become a Driver** - Information for those interested in joining as drivers
- **Responsive Design** - Fully optimized for all devices (mobile, tablet, desktop)

## 🛠️ Technologies Used

- **React 18.2.0** - Frontend library
- **React Router DOM 6.4.1** - Client-side routing
- **Bootstrap 5.2.2** - CSS framework
- **Reactstrap 9.1.4** - React Bootstrap components
- **React Slick 0.29.0** - Carousel/slider component
- **Remix Icon 2.5.0** - Icon library
- **Create React App** - Project bootstrapping

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/a7mad1112/rent-car.git
```

2. Navigate to the project directory:
```bash
cd rent-car
```

3. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build folder will contain the optimized production-ready files.

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📁 Project Structure

```
rent-car/
├── public/                 # Static files
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/            # Images and static data
│   │   ├── all-images/    # Image assets
│   │   └── data/          # Static data (cars, blogs, services)
│   ├── component/         # Reusable components
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Helmet/
│   │   ├── Layout/
│   │   └── UI/            # UI components
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── CarListing.jsx
│   │   ├── CarDetails.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── routes/            # Route configuration
│   ├── styles/            # CSS files
│   ├── App.js             # Root component
│   └── index.js           # Entry point
├── package.json
└── README.md
```

## 🎨 Components Overview

### Pages
- **Home** - Landing page with hero slider, featured cars, and services
- **About** - Company information and team members
- **Car Listing** - Browse all available cars
- **Car Details** - Detailed view of individual cars
- **Blog** - Articles and news
- **Blog Details** - Individual blog post view
- **Contact** - Contact form and information
- **Not Found** - 404 error page

### UI Components
- `HeroSlider` - Homepage carousel
- `FindCarForm` - Car search form
- `CarItem` - Individual car card
- `BookingForm` - Reservation form
- `ServicesList` - Available services
- `AboutSection` - About information
- `Testimonial` - Customer reviews
- `BlogList` - Blog posts listing
- `BecomeDriverSection` - Driver recruitment
- `PaymentMethod` - Payment options
- `OurMembers` - Team member profiles

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run deploy` | Deploys to GitHub Pages |
| `npm run eject` | Ejects from Create React App (one-way operation) |

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ahmad Alawneh**
- GitHub: [@a7mad1112](https://github.com/a7mad1112)

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons by [Remix Icon](https://remixicon.com/)
- UI components by [Reactstrap](https://reactstrap.github.io/)

---

⭐ If you found this project helpful, please give it a star!

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
