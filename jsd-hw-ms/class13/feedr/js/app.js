// API's:
// New York Times
// https://developer.nytimes.com/

// Guardian:
// http://open-platform.theguardian.com/explore/

// NewsApi.org
// https://newsapi.org/

// Handlebars templating:
var source = $('#article-template').html();
var template = Handlebars.compile(source);


// 1. Setup AJAX requests to fetch data from each news source
//ny times
$.ajax({
	type: 'GET',
	url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=24da20ed3d1149ad985c7ae6b9973595',
	success: formatNytResponse
})

//guardian
$.ajax({
	type: 'GET',
	url: 'https://content.guardianapis.com/search?api-key=b9dd702a-b62f-4a3b-b16a-5dec7cdcbfec',
	success: formatGuardianResponse,
})

//newsapi
$.ajax({
	type: 'GET',
	url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f39b1a435dea44c1902ae514c214bb5c',
	success: formatNewsApiResponse
})


// 2. Set up functions to handle each of the above AJAX requests:
// - Use Array's .map method to transform the response into an array of objects that you will pass to the Handlebars template
// - Check out the id=article-template in index.html to see what properties the template expects
// - To properly format article dates, use new Date() and the .toLocaleDateString() method
// Note: not all articles will have all the expected properties :D

function formatNytResponse(response) {
	console.log(response.results)
	var articles = response.results.map(function(article) {
		//date and image logic here
		var image

		if (article.multimedia[0]) {
			image = article.multimedia[0].url
		} else {
			image = 'http://pbs.twimg.com/profile_images/942784892882112513/qV4xB0I3_reasonably_small.jpg'
		}

		var date = new Date(article.created_date)

		return {
			title: article.title,
			date: date.toLocaleDateString(),
			image: image,
			type: article.section,
			link: article.url,
		}
	})

	// to use...
	var articleTemplates = template(articles)
	$('#main').append(articleTemplates)
}

function formatGuardianResponse(response) {
	console.log(response)
	var articles = response.response.results.map(function(article) {
		//date and image logic here
		var image = 'http://pbs.twimg.com/profile_images/952866338187423744/0hj7a-EH_bigger.jpg'
		
		var date = new Date(article.webPublicationDate)

		return {
			title: article.webTitle,
			date: date.toLocaleDateString(),
			image: image,
			type: article.sectionName,
			link: article.webUrl,
		}
	})

	// to use...
	var articleTemplates = template(articles)
	$('#main').append(articleTemplates)
}

function formatNewsApiResponse(response) {
	console.log(response)
	var articles = response.articles.map(function(article) {
		//date and image logic here
		var image = 'https://logo.clearbit.com/newsapi.org'

		// if (articles.multimedia[0]) {
		// 	image = articles.multimedia[0].urlToImage
		// } else {
		// 	image = 'https://logo.clearbit.com/newsapi.org'
		// }
		
		var date = new Date(article.publishedAt)

		return {
			title: article.title,
			date: date.toLocaleDateString(),
			image: image,
			type: article.section,
			link: article.url,
		}
	})

	// to use...
	var articleTemplates = template(articles)
	$('#main').append(articleTemplates)
}