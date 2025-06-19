import AdminPage from '../pages/AdminPage/AdminPage'
import CartPage from '../pages/CartPage/CartPage'
import CategoryProductPage from '../pages/CategoryProductPage/CategoryProductPage'
import HistoryPage from '../pages/HistoryPage/HistoryPage'
import HomePage from '../pages/HomePage/HomePage'

import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

export const routes = [
    {
        path: '/',
        page: HomePage,


    },
    {
        path: '/sign-in',
        page: SignInPage,


    },
    {
        path: '/sign-up',
        page: SignUpPage,


    },






    {
        path: '/categoryproduct',
        page: CategoryProductPage,


    },
    {
        path: '/productdetails/:id',
        page: ProductDetailsPage,


    },
    {
        path: '/cart',
        page: CartPage,


    }, {
        path: '/history/:id',
        page: HistoryPage,


    },
    {
        path: '/profile-user',
        page: ProfilePage,


    },
    {
        path: '/system-admin',
        page: AdminPage,


    },


]