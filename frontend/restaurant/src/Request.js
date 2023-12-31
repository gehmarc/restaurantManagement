import axios from "axios";


const token = localStorage.getItem('user') 

const configToken = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

const config = {
    headers: {
        "Content-Type": "application/json",
    }
}

const BASEURL = 'http://localhost:8000/api/v1'


// export const patchRequest = async(endpoint, data) => {
//     try {
//         const response = await axios.patch(`${BASEURL}${endpoint}`, data, configGlobal);
//         return response
//     } catch (error) {
//         console.error(error);
//         return error
//     }
// }
export const postRequest = async(endpoint, data) => {
    try {
        const response = await axios.post(`${BASEURL}${endpoint}`, data, config);
        return response
    } catch (error) {
        console.error(error);
        return error
    }
}

export const getRequest = async(endpoint) => {
    try {
        const response = await axios.get(`${BASEURL}${endpoint}`, config);
        return response
    } catch (error) {
        console.error(error);
        return error
    }
}

// export const deleteRequest = async(endpoint) => {
//     try {
//         const response = await axios.delete(`${BASEURL}${endpoint}`, configGlobal);
//         return response
//     } catch (error) {
//         console.error(error);
//         return error
//     }
// }


export const  auth = async (endpoint, data) => {
    try {
        const response = await axios.post(`${BASEURL}${endpoint}/`, data, config);
        return response
    } catch (err) {
        console.warn(err);
        return(err)
    }
}
