import React from "react";
// export const Province = {
//     id: Number,
//     full_name: String
// };

// export const District = {
//     id: Number,
//     full_name: String
// };

// export const Ward = {
//     id: Number,
//     full_name: String
// };

// Base URL for the API
const BASE_URL = "https://esgoo.net/api-tinhthanh";

// Function to fetch all provinces
export const fetchProvinces = async () => {
    try {
        const response = await fetch(`${BASE_URL}/1/0.htm`);
        const data = await response.json();
        if (data.error === 0) {
            return data.data; // Return the provinces
        } else {
            throw new Error("Cannot fetch provinces.");
        }
    } catch (error) {
        console.error(error);
        throw new Error("Error occurred while fetching provinces.");
    }
};

// Function to fetch districts based on selected province ID
export const fetchDistricts = async (provinceId) => {
    try {
        const response = await fetch(`${BASE_URL}/2/${provinceId}.htm`);
        const data = await response.json();
        if (data.error === 0) {
            return data.data; // Return the districts
        } else {
            throw new Error("Cannot fetch districts.");
        }
    } catch (error) {
        console.error(error);
        throw new Error("Error occurred while fetching districts.");
    }
};

// Function to fetch wards based on selected district ID
export const fetchWards = async (districtId) => {
    try {
        const response = await fetch(`${BASE_URL}/3/${districtId}.htm`);
        const data = await response.json();
        if (data.error === 0) {
            return data.data; // Return the wards
        } else {
            throw new Error("Cannot fetch wards.");
        }
    } catch (error) {
        console.error(error);
        throw new Error("Error occurred while fetching wards.");
    }
};