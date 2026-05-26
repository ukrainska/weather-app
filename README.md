# Weather App

A simple weather application built with JavaScript, HTML and CSS. 
The app allows users to search for a city and displays current weather information using the Visual Crossing Weather API. 

## Features 

- Search weather by city name
- Display current temperature
- Display wind speed
- Display humidity
- Display UX index
- Display current weather conditions
- Fetch weather data from an external API

## Technologies

- HTML
- CSS
- JavaScript
- Fetch API
- async/await
- Visual Crossing Weather API

## What I learned 

Through this project, I practiced:

- Working with external APIs
- Using "fetch()" to request data
- Handling asynchronous JavaScript with "async/await"
- Reading JSON data from an API response
- Updating the DOM dynamically based on user input
- Basic error handling for failed API requests

## Challenges

One challenge was understanding how to get the correct data from the API response and display only the necessary weather information on the page.

Another challenge was working with asynchronous code and making sure the weather data was available before updating the page.

## Future Improvements

- Add a loading state while data is being fetched
- Show a user-friendly error message when a city is not found
- Add weather icons
- Protect the API key using a backend function in a production version

## Security Note

This project currently uses a client-side API keyt for learning purposes.
In a production environment, API requests should be handled through a backend function to avoid exposing sensitive keys.
