![Screenshot from 2024-12-20 20-22-32](https://github.com/user-attachments/assets/4e1399e2-c8d9-4662-8bc2-d027b876f987)

**#THE GUARDIAN - WORKING THE API**

**##OVERVIEW**

This project fetches and displays news articles from The Guardian API based on various user inputs.

The main feature of this application is the ability to search for news by keywords, filter news by category and view articles along with their images, publication dates, tags and content snippets

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

The Dom elements are dynamically created and manipulated to display news articles. the main elements include:

newsContainer - where the news articles are displayed.

searchInput - input field to type the search query.

searchButton - button to initiate the search.

homeButton - button to reset the search and show all news.

filterContainer - container for the category filter buttons.

**3. Fetching News:**

**Search News:**

The fetchNews(query) function fetches news based on a search query.

**life style news:** 

The fetchLifeStyle() function specifically fetches news from the Life and Style section.

**General News**

The fetchNews function fetches general news based on the query provided.

**4. Display News**

The displayNews(newsItems) function process the data and generates HTML to display each news article.
Each article includes:

Image - A thumbnail image if available.

Title - The articles title.

Date - The publication date, formatted as "month, day, year".

Tags - If any tags are available for the article.

Snippet - A short preview of the articles content.

Read more - A link that redirects the user to the full article on the guardian website.

**5. Filter Options**

The renderFilterOptions() function dynamically generates filter buttons for different categories like
life and style, sport, politics, business.

clicking on a category button fetches and displays news from that section.


**#HOW TO USE**

**1. Search for news** 

Type a search term in the search input field and click the "search button". the website will fetch and display articles related to your query.

**2. Category filters**

Click on a category button eg sports to view articles from that section.

**3. View full article**

For each article you click on the read more link to open the full article on the guardian website

**4. Reset home**

Click the home button to clear the search input and return toviewing general news.


**##Code structures**

**Global Variables**

Contains the API key and references to DOM elements to interact with.

**fetchNews function**

Makes the API request to fetch news articles based on a query

**fetchLifeStyle function**

fetches news from the guardians life style section

**displayNews function**

Dynamically creates html to display the fetched news articles

**formDate function**

Formats the dates of the articles into a readable format

**renderFilterOptions function**

Renders category filter buttons
