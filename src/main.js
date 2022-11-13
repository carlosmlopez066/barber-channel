const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtq2iGjr4uVM2tKabt9xFQw&part=snippet%2Cid&order=date&maxResults=10';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '207a5bfd96mshf14626aec126cb9p1f813cjsnded1a8be5f95',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetcing(urlAPI) {
    const res = await fetch(urlAPI, options);
    const data = await res.json();
    console.log(data)

}


// fetch(API, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));