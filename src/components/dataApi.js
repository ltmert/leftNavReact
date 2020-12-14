const data ='http://localhost:8000/data.php';

class dataApi {
    getNodes() {
        return fetch(data, {
            method: 'get',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
           // 'credentials': 'same-origin'
    })
    .then(res => res.json());        
}

}

export default new dataApi();
