# Milk Application

The Milk Store is a small local milk shop that specializes in various types of milk. Recently, they have been experiencing a surge in business and needed a website to manage the increased demand. The goal of this project is to create a web application that allows customers to easily search and filter through the various types of milk offered by the store, as well as place orders for the desired amount of milk.

This project is built using React and TypeScript for the frontend and .Net WebApi for the backend. The data for the milk products is stored in a database and can be populated using the JSON file provided in the GitHub repository. The project also includes an image of milk (milk.png) that can be used for the product cards, but other images can also be used if desired.

Upon visiting the website, customers will be greeted with a list of all the milk products currently in storage. They can use the search bar to search for specific products by name. The filter function allows customers to filter through the different types of milk, such as whole milk, oat milk, pea milk, almond milk, rice milk, coconut milk, soy milk, walnut milk, macadamia milk, hemp milk, and cashew milk.

When a customer clicks on a product card, they will be redirected to a product information page that displays additional details about the product. This page also includes a slider or number input to choose the amount of milk they would like to order, as well as an order button. Once the order button is clicked, the order is processed and the customer is notified of the successful purchase.

This project is designed to be easy to use and navigate, making it easy for customers to find the type of milk they are looking for and place orders quickly. With this website, the Milk Store can manage their increased business more efficiently and provide their customers with a seamless shopping experience.

<img width="889" alt="image" src="https://user-images.githubusercontent.com/90157472/214524227-afa46da4-7f59-4618-85ce-6e5646b9ddfd.png">


## To run the application, you will need to have the following software installed:

- Node.js
- .Net Core SDK
- Visual Studio Code or a similar code editor
- A local database

## Steps to run the app:

- Clone the repository to your local machine
- In the root directory, run npm install to install all the necessary dependencies
- Run npm start to start the development server
- In a separate terminal, navigate to the backend folder and run dotnet run to start the backend server
- The application should now be running on http://localhost:3000
- Use the provided JSON file to populate the database.
- Please note that in order for the application to work correctly, the backend server must be running, and the database must be properly configured and populated.
