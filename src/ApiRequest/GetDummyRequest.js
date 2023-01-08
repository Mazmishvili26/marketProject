import axios from "axios";


export default function GetApiRequest (method,endpoint,data,header = {}) {
    const defaultHeaders = {
        Authorization : 'test'
    }

    return axios({
        url : 'https://dummyjson.com/' + endpoint,
        method,
        data,
        header : {...defaultHeaders, ...header}
    })
        .then(resp => resp);
}