const {readFileSync}= require('fs');
let loadUser = () => JSON.parse(readFileSync('data.json'));

module.exports = {loadUser};