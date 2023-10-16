import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '4eaaa74fade94065b91768b8624d3209'
    }
})