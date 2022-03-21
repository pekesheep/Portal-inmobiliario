import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = id =>
    Axios.get(`${url}/${id}`).then(response => {
        return response.data;
    });

const EquipmentsListurl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
    Axios.get(`${EquipmentsListurl}`).then(response => {
        return response.data;
    });

const urlContact = `${process.env.BASE_API_URL}/contact`;

export const contactInformation = contact =>
    Axios.post(`${urlContact}`, contact).then(response => {
        return response.data;
    });