![Screenshot from 2024-12-20 20-22-32](https://github.com/user-attachments/assets/4e1399e2-c8d9-4662-8bc2-d027b876f987)

**#THE GUARDIAN - WORKING THE API**

**##OVERVIEW**

This project fetches and displays news articles from the guardian api allowing users to search for specific topics, view news categories and filter content based on various categories like lifestyle, sports, politics and business


**##Features**

**Search News:**

Allows users to search for news articles based on keywords.

**Category Filters:**

Users can filter news by predefined categories (e.g Life and style, sports, politics and business)

**Article Display:**

Displays article images, titles, publication dates, tags and content snippets.

**Read more:**

Provides links to read full articles on The Guardian website.

**##KEY COMPONENTS**

**1. API Intergration**

The project interacts with The Guardian API to fetch news articles. The API key used for this project is stored in the apiKey variable:
**const apiKey = 'a97f4b46-93c4-4fc8-853b-7c707b33b9e5';*

News articles are fetched using a search query or category filter.

**2. DOM Manipulation**


![Screenshot from 2024-12-20 21-10-27](https://github.com/user-attachments/assets/3192f334-1689-452e-8a5f-d027495bc473)

The Dom elements are dynamically created and manipulated to display news articles. the main elements include:

newsContainer - where the news articles are displayed.

searchInput - input field to type the search query.

searchButton - button to initiate the search.

homeButton - button to reset the search and show all news.

filterContainer - container for the category filter buttons.

**3. Functions:**

**fetchNews(query = '')**

![Screenshot from 2024-12-20 21-43-30](https://github.com/user-attachments/assets/41ba9971-59fd-4ee1-8fd0-a1b3d3fcce24)

this asynchronous function fetches news articles from the guardian api using a search query.it handles the response and calls displayNews() to show results.

**formatDate(dateString)**

![Screenshot from 2024-12-20 21-44-33](https://github.com/user-attachments/assets/aa9bb36d-553b-4301-a3a1-bd9a5d4fb274)

this function takes a date string from the api response and formats it to a more readable format.

**displayNews(newsItems)**

this function processes and displays the fetched news articles. it creates html elements for each article including an image, title, publication date, tags and a read more link.

**renderFilterOptions()**

this function creates filter buttons for different categories eg life style, sport, politics, when clicked each button triggers a search query for the corresponding category.


**##Event Listeners**

![Screenshot from 2024-12-20 21-41-41](https://github.com/user-attachments/assets/44922008-8cdd-4f0b-a797-7366e75aa5d1)

**Search button**

![Screenshot from 2024-12-20 21-39-49](https://github.com/user-attachments/assets/6fe7d947-df6d-465d-8d79-84bed49d74e5)

when a user clicks the search button, it triggers the fetchNews() function with the entered search query

**Home button**

when the user clicks the home button it clears the search input and fetches the default news.

**Page initialization**

![Screenshot from 2024-12-20 21-36-12](https://github.com/user-attachments/assets/9059bcb1-eef0-479b-ade0-1cf9e0e2d049)

the filter options are rendered on page load and news are fetched by default when the page loads






