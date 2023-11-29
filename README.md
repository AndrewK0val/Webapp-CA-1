# Assignment 1 - ReactJS app.

### Overview.

This repository contains the code for the first assignment of the Web App Development 2 module. The assignment is to create a ReactJS web application that consumes a RESTful API. The web application is a movie fan application that allows users to view movie details, reviews, and actors. The web application also allows users to create an account and login to the application. The web application also allows users to view upcoming, top rated, and popular movies. The web application also allows users to view similar movies and actors starring in a movie.
![Alt text](src/images/image-1.png)

### Features added by me.

+ Firebase Authentication

    ![Alt text](src/images/ezgif.com-video-to-gif.gif)

    <div style='display: inline-flex;'>
    
    <!-- <img src="src/images/image-8.png" width="200" style='margin-right: 10px'>
    <img src="src/images/image-9.png" >
    </div>
    <img src="src/images/image-10.png" width="300"> -->



+ Movie cast page

    <img src="src/images/image-15.png" width="300">

+ Similar movies page

    <img src="src/images/image-16.png" width="300">
+ Upcoming movies page
+ Top rated movies page
+ Popular movies page
+ Pagination feature

    <img src="src/images/ezgif.com-optimize.gif" width="400">

+ Movie images in details page only display in English
+ Restyled components with custom fonts and colors

## Setup requirements.
1. Create a .env fille in the root directory with the following structure
````
REACT_APP_TMDB_KEY=.............................
REACT_APP_FIREBASE_API_KEY=.....................................
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=.............
FAST_REFRESH=false
````
2. login/signup to firebase and create/open an existing a project
![Alt text](src/images/image-14.png)
3. Click on the web icon to create a web app
![Alt text](src/images/Untitled-2.png)
4. Copy the API key and messaging sender id and paste them in the .env file
![Alt text](src/images/Untitled-3.png)
5. Login or signup to TMDB and create/open an existing project, find the API key and paste it in the .env file
6. Run the following commands in the root directory:
````
npm i
npm start
````


## API endpoints.

The following is a list of the API endpoints I included in my web application.


+ /reviews/form 
+ /authentication 
+ /movies/favorites 
+ /movies/upcoming 
+ /movies/topRated
![Alt text](src/images/image-13.png)
+ movies/popular 
![Alt text](src/images/image-12.png)
+ /reviews/:id 
![Alt text](src/images/image-11.png)



## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/:id
+ /actors/:id
+ /movies/similar-to/:id
+ /actors/staring-in/:id


### Similar Movies Section

![Alt text](src/images/image-7.png)



## Independent learning.

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

TMDB API docs had helped me significantly in understanding how to use the API endpoints and how to use the API key in my web application.




### Restyled components

I decided to apply some tweaks to the user interface/experience aspect of the web application. I change the filter card into a header.
Applied custom fonts and colors to the web application.


###  Added new MUI components
![Alt text](src/images/image-2.png)

![Alt text](src/images/image-3.png)

![Alt text](src/images/image-4.png)

![Alt text](src/images/image-5.png)


###  Learned Firebase Authentication

The followoing YouTube tutorail helped me immensely in learning how to use Firebase Authentication in my web application:

I took the following code from the tutorial and modified it to suit my web application by restyling it and allocating a separate page: authenticationPage.jsx

This gave me more experience with the use of an API in web application development

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/9bXhf_TELP4/0.jpg)](http://www.youtube.com/watch?v=9bXhf_TELP4)