import api from '../api';

export const getUser = async (id: number) => {
    return await api.get('/users/' + id).then((response) => response.data);
}

export const createUser = async (username: string, password: string, email: string) => {
    return await api.post('/users', {
        username: username,
        password: password,
        email: email
    }).then((response) => response.data);
}

export const incrementScore = async (id: number, boost: number) => {
    return await api.put('/users/increment-score/' + id, {
        "boost": boost
    }).then((response) => response.data);
}

export const decrementScore = async (id: number, remove: number) => {
    return await api.put('/users/decrement-score/' + id, 
        { 
            "remove" : remove 
        })
        .then((response) => response.data);
}

export const incrementAutoClick = async (id: number, boost: number) => {
    return await api.put('/users/increment-autoclick/' + id, 
        { 
            "boost" : boost 
        })
        .then((response) => response.data);
}

export const incrementClick = async (id: number, boost: number) => {
    return await api.put('/users/increment-click/' + id, 
        { 
            "boost" : boost 
        })
        .then((response) => response.data);
}