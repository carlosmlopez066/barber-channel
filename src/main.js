//API
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtq2iGjr4uVM2tKabt9xFQw&part=snippet%2Cid&order=date&maxResults=10';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '207a5bfd96mshf14626aec126cb9p1f813cjsnded1a8be5f95',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
//Principal Container
const main = document.querySelector('#main');


//Get Data
async function getData() {
    const res = await fetch(API, options);
    const data = await res.json();
    return data;

}
async function getVideos(urlAPI) {
    try {
        const videos = await getData(urlAPI);
        console.log(videos)
        let view = `
    ${videos.items.map(video => `
    <div class="main-videoContainer">
        <h2 class="main-channel-title">${video.snippet.channelTitle}</h2>
        <div class="main-photo-video">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <p class="main-title-video">${video.snippet.title}</p>
    </div>
    `)} 
    `;
        main.innerHTML = '';
        main.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
};
getVideos(API)

