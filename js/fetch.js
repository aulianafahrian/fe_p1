import { get } from "https://bukulapak.github.io/api/process.js";
let urlAPI = "https://aufa-ulbi.herokuapp.com";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}