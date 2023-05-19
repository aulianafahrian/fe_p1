//dapatkan parameter dari url
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlFetch = 'https://aufa-ulbi.herokuapp.com/presensi/' + presensiId;
