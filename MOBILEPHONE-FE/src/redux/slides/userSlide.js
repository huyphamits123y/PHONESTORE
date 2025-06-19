import { createSlice } from '@reduxjs/toolkit'



const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('usersState', serializedState);
    } catch (e) {
        console.error(e);
    }
};

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('usersState');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error(e);
        return undefined;
    }
};
const initialState = loadStateFromLocalStorage() || {
    name: '',
    email: '',
    access_token: '',
    phone: '',
    address: '',
    provinces: '',
    districts: '',
    wards: '',
    id: '',
    isAdmin: false
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { name = '', email = '', access_token = '', address = '', provinces = '', phone = '', _id = '', isAdmin, districts = '', wards = '' } = action.payload
            console.log('action', action)
            state.name = name;
            state.email = email;
            state.access_token = access_token
            state.address = address;
            state.provinces = provinces;
            state.districts = districts;
            state.wards = wards;
            state.id = _id;
            state.phone = phone;
            state.isAdmin = isAdmin;
            saveStateToLocalStorage(state);


        },
        resetUser: (state) => {


            state.name = '';
            state.email = '';
            state.access_token = '';
            state.address = '';
            state.provinces = '';
            state.districts = '';
            state.wards = '';

            state.phone = '';
            state.id = '';
            state.isAdmin = false;
            saveStateToLocalStorage(state);
        }

    },
})

export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer