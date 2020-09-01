const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL:'https://burger-builder-987.firebaseio.com'
});

export default instance;