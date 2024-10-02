import { Computer, Paintbrush } from "lucide-react";

export const WHATIDO=[
    {
        title:'Web Appliation',
        description:'Transforming ideas into exceptional web app experiences.',
        color:'#9f97ff',
        icon:<Paintbrush/>
    },
    {
        title:'Full Stack Development',
        description:'Help build and maintain both front-end and back-end of a website',
        color:'#00bad5',
        icon:<Computer/>
    },
  
] as const

export const PROJECTS=[
    {
        title:'Repair Shop Management App',
        url:'https://repair-shop-management-app.vercel.app/',
        techStack:['Next.js','Node.js','MongoDB','Express'],
        image:'repair-shop-management-app.png',
        description:[
            'User authentication',
            'Role based authorization (admin, employee, customer)',
            'Real time chat functionality for employees',
            'Admin can assign tasks to employees',
            'Employees can view their assigned tasks and change the status of work progres(Pending, Working, Completed)',
            'Customers can view the progress of their device repair'
        ],
        date:2024,
        function:'Helps in work distribution among employees'
    },
    {
        title:'NextJs portfolio website',
        url:'https://next-js-portfolio-website-saroj.vercel.app/',
        techStack:['Next.js','Tailwind Css'],
        image:'nextjs-portfolio.png',
        description:['Modern design','Made entirely with NextJs and tailwind Css',],
        date:2024,
        function:'Smooth portfolio website with modern design'
    },
 
] as const