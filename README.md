Project Bolt

Project Bolt is a data compression and subscription-based platform designed to provide secure and efficient data compression services for users. The platform includes various subscription tiers, allowing users to compress their data based on their selected plan.

Features

Data Compression

Compress files to reduce their size while maintaining data integrity.

Supports secure data compression with encryption.

All compressed data is encrypted to ensure security.

Files are handled securely during upload and processing.

Tech Stack

Frontend: React (TypeScript)

Backend: Node.js (TypeScript), Express

Database: MongoDB

Other Tools:

Vite for frontend bundling.

Tailwind CSS for styling.

JWT for user authentication.

Getting Started

Prerequisites

Node.js (>=14.x)

npm or yarn

MongoDB

Installation

Clone the repository:

git clone https://github.com/your-username/project-bolt.git

Navigate to the project directory:

cd project-bolt

Install dependencies:

npm install

Set up environment variables:
Create a .env file in the root directory and add the following variables:

PORT=3000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

Start the development server:

npm run dev

Access the app at http://localhost:3000.

Usage

Subscription Options

Users can select a subscription plan from the frontend interface.

Based on the selected plan, the backend enforces compression limits.

Data Compression

Upload a file.

Choose the compression level (based on subscription).

Compressed file is downloaded securely.

Folder Structure

project-bolt/
├── src/
│   ├── components/
│   │   ├── auth/            # Authentication components
│   │   └── ui/              # Reusable UI components
│   ├── utils/               # Utility functions
│   ├── pages/               # Page components
│   ├── App.tsx              # Main application file
│   └── index.tsx            # Application entry point
├── public/                  # Public assets
├── package.json             # Node.js dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation

Roadmap

Add more subscription tiers with custom limits.

Introduce advanced compression algorithms.

Implement multi-user file sharing options.

Add support for multiple languages.

Contributing

We welcome contributions! Please follow these steps:

Fork the repository.

Create a feature branch.

Commit your changes.

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For questions or support, please contact:

Name: Shagun Sangwan

Email: shagunsangwan738@gmail.com

