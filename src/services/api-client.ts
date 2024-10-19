import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api", 
    params: {
        key: "5d85e07869a14d70afde912d3aaca2aa",
    },
});