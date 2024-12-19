// API key
const apiKey = 'a97f4b46-93c4-4fc8-853b-7c707b33b9e5';
//dom elements to be manipulated to display on the html
const newsContainer = document.getElementById('newsContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const homeButton = document.getElementById('homeButton');
const lifeAndStyle = document.getElementById('lifeAndStyle');
const filterContainer = document.getElementById('filterContainer');
//fetch news using a search query to filter content
async function fetchNews(query = '') {
    const url = `https://content.guardianapis.com/search?api-key=${apiKey}&q=${query}&show-tags=contributor&show-fields=all`; //api endpoint
    
    try {
        const response = await fetch(url);//make request to the api and await for the response
        const data = await response.json();//response is converted to json format
        displayNews(data.response.results);//function called to display results
    
    } catch (error) {
        console.error('Error fetching data:', error);
    } 
}
//fetch life and style news function
async function fetchLifeStyle() { //fetches news from the life and style section of the guardian website
    const url = 'https://content.guardianapis.com/lifeandstyle?api-key=${apiKey}&show-fields=all`';

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.response.results);

    } catch (error) {
        console.error('error fetching data:' , error);
    }
    
}
//function for formating the date display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString('en-US', options); //example "December 19 2024"

}
//function to create html elements to display each news articles
function displayNews(newsItems) {
    newsContainer.innerHTML = ''; //clear existing news
    if (newsItems.length === 0) {
        newsContainer.innerHTML = '<p>No news found.</p>';
    
    }

    newsItems.forEach(item => { //iterating through each news item array
        const newsItemElement = document.createElement('div');//create a new html element for each news item
        newsItemElement.classList.add('newsItem');
        
//display image on thumbnails derived from the data
        if(item.fields && item.fields.thumbnail) {
            const image = document.createElement('img');
            image.src = item.fields.thumbnail; //img url
            image.alt = item.webTitle;
            image.classList.add('newsImage');
            newsItemElement.appendChild(image);
        }
//creating the title 
        const title = document.createElement('h3');
        title.textContent = item.webTitle;
        newsItemElement.appendChild(title);
//check if theres a publication date and display it
        if (item.webPublicationDate) {
            const date = formatDate(item.webPublicationDate);
            const dateElement = document.createElement('p');//element created to display formatted date
            dateElement.classList.add('date');
            dateElement.textContent = `Published on: ${date}`;
            newsItemElement.appendChild(dateElement);
        }
//creating the read more link
        const link = document.createElement('a');//<a> for links
        link.href = item.webUrl;
        link.textContent = 'Read more';
        link.target = '_blank';
        newsItemElement.appendChild(link);
//display tags if any
        if (item.tags && item.tags.length > 0) {
            const tags = document.createElement('p');
            tags.classList.add('tags');
            tags.textContent = `Tags: ${item.tags.map(tag => tag.webTitle).join(', ')

    }`;
            newsItemElement.appendChild(tags);

        }

        if (item.fields && item.fields.bodyText) {
            const content = document.createElement('p');
            content.textContent = item.fields.bodyText.substring(0, 200) + '...';

            newsItemElement.appendChild(content);
        }
//appending news item to the container (title, image, date, links, tags, and content) the thumbnail  
        newsContainer.appendChild(newsItemElement);

    });
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    fetchNews(query);

});

homeButton.addEventListener('click', () => {
    searchInput.value = '';
    fetchNews();
});

function renderFilterOptions() {
    const categories = ['Life and Style', 'Sport', 'Politics', 'Business'];

    categories.forEach(category => {
        const filterOption = document.createElement('button');
        filterOption.textContent = category;
        filterOption.classList.add('filterButton');
        filterOption.addEventListener('click', () => {
            if (category === 'Life and Style') {
                fetchLifeStyle();

            } else {
                fetchNews(category);
            }
    });
    filterContainer.appendChild(filterOption); 

});

}

// initialise filter options
renderFilterOptions();

//fetch and display news on page load
fetchNews();
