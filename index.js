const countDiv = document.getElementById('count-thing');


function establishGetCount(apiHit) {
    let count = 0;
    if(apiHit) {
        count++
    };
    countDiv.textContent =`Check this count: ${count}`;
    return count;
};

async function hitTheAPI() {
   await fetch('https://gql-api-timber-properties.onrender.com/')
   .then(res => {
    establishGetCount(res);
   });
};


setInterval(hitTheAPI, 840000);