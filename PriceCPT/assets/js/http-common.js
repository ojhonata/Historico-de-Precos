import Axios from 'axios'

const creatAxios = Axios.create({
    baseURL: "https://localhost:7180"
})

export default creatAxios