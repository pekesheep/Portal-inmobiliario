import Axios from 'axios';

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () =>
    Axios.get(saleTypeListUrl).then(response => {
        return response.data;
    });

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () =>
    Axios.get(provinceListUrl).then(response => {
        return response.data;
    });

const EquipmentsListurl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
    Axios.get(`${EquipmentsListurl}`).then(response => {
        return response.data;
    });



const propertyUrl = `${process.env.BASE_API_URL}/properties`;

export const addProperty = uploadProperty =>
    Axios.post(`${propertyUrl}`, uploadProperty).then(response => {
        return response.data;
    });
