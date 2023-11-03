Car List Component
The "Car List" component is a React application that displays a list of cars with filtering and pagination functionality. Users can search for cars by brand or model, and navigate through the paginated results.

Features
Search Functionality: Users can search for cars by entering a brand or model name. The results are dynamically updated as the user types.

Pagination: The car list is paginated, allowing users to navigate through multiple pages of car listings.

Car Details: Each car listing includes details such as brand, year, passenger capacity, fuel type, average mileage, car type, and price.

Rent Now Button: Users can click the "Rent Now" button to take action on a specific car listing.

Technologies Used
React: The front-end of the application is built using React.

React Router: Used for managing routes and enabling navigation.

React Icons: Utilized for displaying icons within the application.

Styled Components: For styling the application components.

JSON Data: Car data is loaded from a JSON file for demonstration purposes.

Getting Started
To get started with the application, follow these steps:

Clone the repository to your local machine:

bash

git clone `git@github.com:hemant7581/Cars_Selling_Page.git`
Navigate to the project directory:

bash

cd car-list-app
Install the required dependencies:

bash

npm install
Start the development server:

bash

npm start
Open your web browser and visit http://localhost:5173 to access the application.

Usage
Enter a brand or model name in the search input to filter the car listings.

Click on the "Rent Now" button to take action on a specific car listing.

Navigate through multiple pages of car listings using the pagination buttons.

Folder Structure
The project structure is organized as follows:

src/components: Contains React components used in the application.

src/data: Includes the JSON data file (Car_data.json) for car listings.

src/styles: Contains styles and styled-components used for component styling.

src/App.js: The main application component that renders the "Car List" component.


Author
Hemant Srivastav
Acknowledgments
This project was created as a demonstration of React application development. Special thanks to the React community and the maintainers of the libraries used.



