import axios from "axios"
export const axiosJWT = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true, // Đảm bảo rằng cookie được gửi kèm với yêu cầu
});

export const getAllCategory = async () => {
    try {
        const res = await axiosJWT.get('/api/category/get-all');

        return res.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
export const createCategory = async (data) => {

    try {
        const res = await axiosJWT.post('/api/category/create', data)
        return res.data;
    } catch (error) {
        console.log('eror', error)
    }
};
export const getAllTypeCategory = async () => {
    const res = await axiosJWT.get('/api/category/get-all-type-category')
    return res.data
}
export const getDetailsCategory = async (id) => {

    try {
        const res = await axiosJWT.get(`/api/category/detailscategory/${id}`)


        return res.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const updatedCategory = async (id, access_token, data) => {

    try {
        const res = await axiosJWT.put(`/api/category/update/${id}`, data, {
            headers: {
                token: `Bearer ${access_token}`,

            }

        })
        return res.data;
    } catch (error) {
        console.error("Error fetching category:", error);
        throw error;
    }
};
export const deleteCategory = async (id, access_token) => {
    const res = await axiosJWT.delete(`/api/category/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,

        }
    })
    return res.data
}

