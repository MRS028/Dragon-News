import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';
import ErrorPage from '../Components/ErrorPage';
import LoginPage from '../Components/Login-Register/LoginPage';
import RegisterPage from '../Components/Login-Register/RegisterPage';
import ForgetPasswordPage from '../Components/Login-Register/ForgetPasswordPage';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoute from './PrivateRoute';
import HomeLayout from '../Layouts/HomeLayout';
import CareerPath from '../Components/Layout-component/CareerPath';
import AboutUs from '../Components/Layout-component/AboutUs';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/08"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) =>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
            
        ]
    },
    {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails/> </PrivateRoute>,
            
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element: <LoginPage></LoginPage>
            },
            {
                path:"/auth/register",
                element: <RegisterPage></RegisterPage>
            },
            {
                path:"/auth/forgetpassword",
                element: <ForgetPasswordPage></ForgetPasswordPage>
            }
            ,
            {
                path:"/auth/career",
                element: <CareerPath></CareerPath>
            },
            {
                path:"/auth/about",
                element: <AboutUs></AboutUs>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
])

export default Router;