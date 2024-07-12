# URL Shortener

A simple URL shortener application built with Node.js, Express, and MongoDB. This application allows users to shorten long URLs and view a list of previously shortened URLs.

## Features

- Shorten long URLs.
- View a list of shortened URLs.
- Track the number of clicks for each shortened URL.

## Technologies

- **Node.js**: JavaScript runtime used for the server-side logic.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database used to store URL data.
- **EJS**: Templating engine used to render HTML views.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener

2. **Install dependencies:**

   ```bash
   npm install

3. **Create a .env file in the root of the project and add the following environment variables:**

   ```bash
   connectionURL=your db url here
   short_url=db name

4. **Start the server:**

   ```bash
   npm start

**Usage**

1. Visit the home page by navigating to http://localhost:8001/ in your web browser.<br>
2. Enter a long URL in the input field and click the "Generate" button to shorten the URL.<br>
3. View the list of shortened URLs along with their details and the number of clicks.

**Project Structure**
<ul>
<li><b>index.js:</b> Main entry point of the application.</li>
<li><b>connection.js:</b> Handles the MongoDB connection.</li>
<li><b>models/:</b> Contains Mongoose models for MongoDB schemas.</li>
  <ul><li><b>url.js:</b> Mongoose schema and model for storing URL data.</li></ul>
<li><b>routes/:</b> Contains route handlers.</li>
<ul><li><b>url.js:</b> Routes for URL-related operations.</li>
<li><b>staticRouter.js:</b> Routes for rendering the home page.</li></ul>
<li><b>views/:</b> Contains EJS templates.</li>
<ul><li><b>home.ejs:</b> Template for rendering the list of URLs.</li></ul>
</ul>

**Contributing**

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

**Contact**

If you have any questions or feedback, please reach out to - pawarsarang2003@gmail.com.


### Customization

- **Repository URL**: https://github.com/sarangpawar96km/url-shortener.git 
- **Email**: pawarsarang2003@gmail.com

Feel free to adjust any sections according to your project's specifics. If you have any other requirements or additional features, let me know!
