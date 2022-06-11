# Vasa Prodavnica & Web shop

Webshop application. The application is my attempt to create a webshop application. The technologies I used are React, Context API, and CSS.

The user can view web-shop products and filter through them. 0Auth for authentication was used for the user to add the product to the cart. The user can order the product via the Stripe service (the web-shop application is imaginary).

The project was created because I teach Javascript so that students can learn the essentials of Javascript and React. Every web shop consists of a large number of concepts used in programming and a web-shop project is great to test a developer's skills in modern programming.

# Project Status

The project is almost at it's final phase. What remains to be implemented is Stripe payment.

You can see live demo on following [link](https://borislav-react-js.netlify.app/products).

# Project Screen Shot(s)

Project products page.

![1](https://user-images.githubusercontent.com/55507857/173179223-b1050869-6aaa-401d-875b-78912e43ce2b.png)

When the user clicks the office category button, only products that match that category will be displayed.

![2](https://user-images.githubusercontent.com/55507857/173179353-6113c3ae-cf13-442a-8976-488aca177e85.png)

The user can enter an individual product. This allows him to view more details about an individual product.

![3](https://user-images.githubusercontent.com/55507857/173179476-7e6912bc-cdca-44a3-9800-226531f4f7b3.png)

If the user clicks the "DODAJ ARTIKL" button, we take the user to another page where we will show him what is currently in his cart. In order for the user to go to the ordering page, he needs to log in via 0Auth.

![4](https://user-images.githubusercontent.com/55507857/173179593-d2afa435-01a3-4194-9566-d8d94d05cc5c.png)

If the user logs in via 0Auth, we take him to the checkout page. Here we print the data through which the user logged in as well as the total price of the user's cart. The user needs to enter the card number to pay for the product (this is currently being implemented).

![5](https://user-images.githubusercontent.com/55507857/173179709-5c0f57a8-8f27-490a-b67f-3a7b3da61f77.png)

# Installation and Setup

The application is created with React so you need to have node and npm locally on the machine.

#### Install dependencies

`npm install`

#### Start a server locally

`npm start`

#### Visit the application locally

`localhost:3000s`

# Reflection

- This project started as a side project. The unplanned project has developed into something more.

- Webshop projects are good because they test the developer's knowledge of all programming concepts. The side project has grown into a much larger project.

- The biggest challenge in this project was working with Auth0. Until the creation of this project, I did not come across anything similar, I mostly worked on my own authentication through JWT in the backend. What this project has enabled me to do is learn a concept that will improve the user experience for the reason of logging in via Facebook or Google. The other challenge I am currently working on is the implementation of Stripe payments.

## Summary

I started creating the project when I finished learning the Context API at React. The development of the project took about 10 days.

I came up with the idea for this project while watching a web dev podcast where podcasters talked about how a webshop project is a great choice for a project because it tests the developer's knowledge of the framework/library. I started making it the next day. I started the process via `create-react-app`.

The main challenge of this application is authentication. Authentication in my projects is generally done by myself, I use Express and I authenticate the user through JWT. What is specific to this project is the external API. For this reason, I did not want to authenticate the user via JWT and I found a solution in 0Auth. This is very useful and I will use it in future projects.

Another challenge I came across is Stripe payment. This was not in my idea at first, but I still realized that I should implement it in some way because every webshop has a payment processor. I am currently working on implementation. The problem with this is that the webshop is imaginary and there are no real products. I'm also working on a solution for this.

I used create-react-app to speed up the setup process. In the next period, I have a plan to learn the webpack. The versions of the technologies I used are below:

| Technology        | Version   |
| ----------------- | --------- |
| React             | `^17.0.1` |
| React Router DOM  | `^5.2.0`  |
| Styled Components | `^5.2.1`  |
| Auth0             | `^1.2.0`  |
