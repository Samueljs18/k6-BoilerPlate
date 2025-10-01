import http from 'k6/http';
import {sleep,check} from 'k6';


export const options= {
    iterations:1,
}


export default function() {

    const r = http.get('https://pokeapi.co/api/v2/ability/1')

    console.log(r.status_text)

    check(r ,{
        'status está vindo como 200' : (r) => r.status_text === '200 OK',
    })
    
    
    sleep(1);
}
