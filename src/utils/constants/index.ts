import {Method} from 'axios';



export const HTTP_HEADERS = {
    CONTENT_TYPE: 'Content-Type',
};

export const HTTP_METHOD: Record<string, Method> = {
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    GET: 'GET',
};

export const ENDPOINTS = {
    HSCODES: '/v0/hscodes/',
    COUNTRY_IMAGES: '/v0/country_images',
    COUNTRY_INSIGHTS: '/v0/country_insights',
};





