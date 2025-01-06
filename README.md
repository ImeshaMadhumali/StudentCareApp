Student Care App

StudentCareApp is a comprehensive solution designed to manage student information, track academic progress, and facilitate communication between students, teachers, and parents.
Hope to develop this App with more features in future.

Features

Login Functionality: Username and password-based authentication.
Profile Management: Dynamic display of student information including contact details and profile picture.
Course Information:Display static course details.
Subjects Management: Add, view, and calculate average marks for subjects.
Responsive Design: Clean and responsive UI for various devices.

Technologies Used

React Native: Framework for building mobile applications.
React Navigation: Manages navigation between screens.
React Native Paper: Provides UI components like Button, TextInput, Divider, etc.
Expo: Simplifies React Native development and testing.

Project Structure

├── components
│   ├── Login.js             # Login screen component where students enter their credentials
│   ├── Profile.js           # Profile screen component displaying student information
│   ├── Courses.js           # Course information screen component
│   ├── Subjects.js          # Subject and marks input and display component
|   |── layout.js            # Include Bottum Navigation
├── assets
│   └── profilepic           # Images used in the app
├── App.js                   # Root component that sets up navigation and routing
├── data
│   └── StudentsDb.js        # A mock database of student data (e.g., usernames, passwords, profiles)
├── package.json             # Project dependencies and configuration
├── README.md                # Documentation for the project, describing its functionality and setup

