# Implementation of Polymorphic associations in a Vehicle Rental System using Express.JS


I made a vehicle rental system program using Express.js that implements Polymorphic associations.


Polymorphic associations are a powerful feature in object-relational mapping (ORM) that allows a single model to be associated with multiple other models in a flexible way. In the context of a vehicle rental system,
polymorphic associations can be used to model relationships where multiple entities (like different types of vehicles) can be associated with shared attributes or behaviors.

I will not discuss Polymorphic associations in depth here, as I have written an article that goes deeper into Polymorphic associations, which can be accessed here:

- https://medium.com/@nikoaldiariboy/polymorphic-associations-database-schema-e-g-commenting-system-and-vehicle-rental-system-case-9e2dc9d1d60a

For a more detailed discussion on Polymorphic associations in the vehicle rental system, you can refer to the following article:

- https://medium.com/@nikoaldiariboy/implementing-polymorphic-associations-in-a-vehicle-rental-system-using-express-js-787653df95ee

# How to Run the Program
1. Make sure you have installed Postgres
2. install all dependencies

   `npm install`
3. Adjust the database configuration
   ```bash
    NODE_ENV=test
    
    # For Development Environment
    DB_HOST=localhost
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_DATABASE=your_database
    
    # For Test Environment
    DB_HOST_TEST=localhost
    DB_USER_TEST=your_username
    DB_PASSWORD_TEST=your_password
    DB_DATABASE_TEST=your_database
   ```
4. Start the program

   For Development Environment :

    `npm run dev-win`
   
   For Testing Environment :

    `npm run dev-test`

5. Access the API Documentation

   `http://localhost:8080/api-docs`


