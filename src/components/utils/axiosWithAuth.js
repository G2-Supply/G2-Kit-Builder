import axios from 'axios';

// a way to create authenticated HTTP requests, for an extra layer of security
export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};