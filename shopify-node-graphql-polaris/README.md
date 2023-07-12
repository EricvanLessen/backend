# shopify-node-graphql-polaris

# Shopify API Node GraphQL Polaris App

This repository provides a sample application built with Shopify API, Node.js, GraphQL, and Polaris. It demonstrates how to integrate and interact with the Shopify API using Node.js, GraphQL, and the Polaris design system.

## Overview

The Shopify API Node GraphQL Polaris App showcases the following features:

- **Shopify API**: Utilize the Shopify API to access store data, products, orders, and more.
- **Node.js**: Develop the backend using Node.js, a popular JavaScript runtime.
- **GraphQL**: Employ GraphQL, a query language for APIs, to efficiently retrieve data from the Shopify API.
- **Polaris**: Implement the Polaris design system to create a visually appealing and consistent user interface.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Set up a Shopify store and obtain the necessary API credentials.
4. Configure the `.env` file with your Shopify API credentials.
5. Run the application using `npm start`.

## Usage

Once the application is up and running, you can perform the following tasks:

- View and manage products: Retrieve a list of products, create new products, update existing products, and delete products.
- Process orders: Retrieve order information, update order status, and fulfill orders.
- Manage customers: Retrieve customer information, create new customers, and update customer details.

## Features
CreateOrder: This component allows users to create a new order by providing the title, quantity, and price. It communicates with the Shopify API using GraphQL queries and mutations.

InstallScript: This component enables users to install script tags in a Shopify store. It provides a toggle button that triggers the installation process. The status of the script tag (installed or not installed) is displayed dynamically based on the active state.

ProductList: This component displays a list of products fetched from the Shopify store using GraphQL queries. Users can view product details, including the title and image. Additionally, there is an option to delete a specific product by confirming the deletion through a modal.

## What is covered?

Status | Lectures
------------ | -------------
:heavy_check_mark: | Introduction
:heavy_check_mark: | Getting Started
:heavy_check_mark: | Creating the app
:heavy_check_mark: | Text Editor
:heavy_check_mark: | Creating the project and Installing the app to development stores
:heavy_check_mark: | Installing Polaris
:heavy_check_mark: | Errors that you might encounter
:heavy_check_mark: | Getting Products
:heavy_check_mark: | Displaying Product List
:heavy_check_mark: | Deleting Products
:heavy_check_mark: | Creating Script Tags
:heavy_check_mark: | Preventing Script Tags From Being Installed Twice
:heavy_check_mark: | Deleting Script Tags
:hourglass: | Creating App Subscription
:heavy_check_mark: | Draft Order Create & Complete

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for more details.

We hope this sample application helps you get started with Shopify API, Node.js, GraphQL, and Polaris. If you have any questions or need assistance, feel free to reach out. Happy coding!

## Credits
This project is based on the lessons from the course "Shopify App Development with Node, React, REST API & GraphQL."