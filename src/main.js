//API

let jhonStyleID = 'UCtq2iGjr4uVM2tKabt9xFQw'
let chemote = 'UCZM2l75eurWvNeOG_iF0JSQ'
const API_jhonStyle = `https://youtube-v31.p.rapidapi.com/search?channelId=${jhonStyleID}&part=snippet%2Cid&order=date&maxResults=10`;
const API_chemote = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCZM2l75eurWvNeOG_iF0JSQ&part=snippet%2Cid&order=date&maxResults=10';
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
async function getData(urlAPI) {
    const res = await fetch(urlAPI, options);
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
        if (main !== '') {
            main.innerHTML = '';

        }

        main.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
};
//getVideos(API_jhonStyle)
getVideos(API_jhonStyle)

//fetching more Data
const jhonStyle = document.querySelector('#jhonStyle');
jhonStyle.addEventListener('click', changeAPI2)

const chemotee = document.querySelector('#chemote');
chemotee.addEventListener('click', changeAPI)

function changeAPI() {
    console.log('hola')
    getVideos(API_chemote)
}
function changeAPI2() {
    console.log('hola')
    getVideos(API_jhonStyle)
}




