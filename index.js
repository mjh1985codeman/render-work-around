const countDiv = document.getElementById('count-thing');


function establishGetCount(apiHit) {
    let count = 0;
    if(apiHit) {
        count++
    };
    return count;
};

async function hitTheAPI() {
   const hit = await fetch('https://gql-api-timber-properties.onrender.com/');
   hit.then(res => {
    console.log('do you see me? ');
    res.json()
   }).then(json => {
    console.log('json: ' , json);
   });
};


hitTheAPI();