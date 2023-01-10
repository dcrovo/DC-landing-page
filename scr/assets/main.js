const API = 'https://newscafapi.p.rapidapi.com/apirapid/news/world/?q=news'
const content = null || document.getElementById("content")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a11b193d08mshacdcc1eac651b3cp1e09a8jsnba79e393b1eb',
		'X-RapidAPI-Host': 'newscafapi.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

// fetch('https://newscafapi.p.rapidapi.com/apirapid/news/sports/?q=news', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.map(article => article.title)))
// 	.catch(err => console.error(err));

// const  news =  fetchData(API);
// console.log(news);
(async () => {
  try {
    const news = await fetchData(API);
    console.log(news);
    let view = `
    ${news.map( article => `
    <a href="${article.source_url}" target="_blank">

      <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${article.img}" alt="" class="w-full">
       </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${article.title}
          </h3>
        </div>
      </div>
      </a>`).slice(0,10).join('')}`;
    content.innerHTML = view;
  } catch (error){
    console.log(error);
  }
})();
