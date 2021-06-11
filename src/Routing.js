import Employer from "./pages/Employer"


export const routes = [
{
path:"/employer",
exact: true,
component: <Employer/>,
title:"Employer"
isHeaderElement: true,
},

{
    path:"/candidate",
    exact: true,
    component: <Candidate/>,
    title:"Candidate"
    isHeaderElement: true,
    },
]