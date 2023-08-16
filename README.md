
# JATE - Just Another Text Editor

JATE is a Progressive Web Application (PWA) that provides a robust text editor running in the browser. It allows users to create notes or code snippets with or without an internet connection and reliably retrieve them for later use.

## Features

- **Offline Support**: Edit and save your files even when you're offline.
- **Data Persistence**: Uses IndexedDB for data storage with redundancy.
- **Installable**: Can be installed as a standalone app on your desktop.
- **Modern Technologies**: Built with modern JavaScript and utilizes service workers for performance.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jate.git
   ```

2. Navigate to the project directory:
   ```bash
   cd jate
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Deployment to Heroku

1. Create a Heroku account and install the Heroku CLI.
2. Log in to Heroku:
   ```bash
   heroku login
   ```

3. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```

4. Push the project to Heroku:
   ```bash
   git push heroku master
   ```

5. Open the app in your browser:
   ```bash
   heroku open
   ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the amazing open-source community for the inspiration and support.