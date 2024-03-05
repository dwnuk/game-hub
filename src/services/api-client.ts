import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1b8547ee189b4e4298d3fbafb08769dc'
    }
})