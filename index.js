const countDiv = document.getElementById('count-thing');

let count = 0;
function establishGetCount(apiHit) {
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