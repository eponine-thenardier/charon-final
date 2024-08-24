# Charon

Created by Nicole Santiago

## 🚀 Mission statement

Charon is an app for travelers. For a small fee, take a journey down the River Styx to your next destination. Perfect for those looking to live that hedonist lifestyle.

## API & React Router

This application will use the Google Places API and the OpenWeatherMap API. Below are the documentation and specific endpoints I intend to use.


- Link to API documentation: [Google Places](https://developers.google.com/maps/documentation/places/web-service), [OpenWeatherMap](https://openweathermap.org/api/one-call-3)
- [API endpoint #1](https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=tourist_attraction)
  - Gives us a tourist attraction based on the inputted location.
  - Name, Location
- [API endpoint #2](api.openweathermap.org/data/3.0/onecall?)
  - Gives us a description of the weather of a specific location.
  - Overview, Date

Both APIs require a key.



## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/home` page, users can choose the place and dates they want to travel.
* On the`/destination` page, users can choose whether they want to see attractions, the weather, or go back home.
* On the `/attractions` page, users can see attractions in their selected area.
* On the `/weather` page, users can see the weather in their selected location during that time of year.
* On the `/notfound` page, users will see an error if their page cannot be found.


## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Find hotels in the area



## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Setup boilerplate code.
- [ ] Start creating components.
- [ ] Create not found component

**Day 2**
- [ ] Finish home page component
- [ ] Finish destination chosen component
- [ ] Fetch from APIs

**Day 3** (MVP due by the end of the day)
- [ ] Finish weather component
- [ ] Finish attractions component

**Day 4**
- [ ] Add accessibility features
- [ ] Start styling

**Day 5**
- [ ] Finish styling
- [ ] Deploy

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

<img width="851" alt="charon-home" src="https://github.com/user-attachments/assets/cea1e1c4-fe7f-4cde-a876-d4cc92d3fb01">
<img width="893" alt="charon-destination-chosen" src="https://github.com/user-attachments/assets/534465c5-427f-4ffb-8126-aa3d19196991">
<img width="962" alt="charon-attractions" src="https://github.com/user-attachments/assets/11ebb1b8-1bd6-4ac5-bb49-0532280aa89a">
<img width="962" alt="Screenshot 2024-08-19 at 5 34 54 PM" src="https://github.com/user-attachments/assets/3f31681e-1c01-43c3-aa61-36fe9181e90f">
<img width="962" alt="charon-notfound" src="https://github.com/user-attachments/assets/e0d8c577-2376-45ca-b78b-fa262abd341e">
