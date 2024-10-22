import { GET_PROYECTS } from "./Actions/actionType";

const initialState = {
    proyectos:[
        {
            titulo: 'Sistema Web para distribuidora de frutos secos', 
            descripcion: 'Sistema Web para distribuidora de frutos secos, funcionalidades manejo de productos, clientes, proveedores, gastos, para item antes mencionado implementacioón de CRUD. Manejo de tablas con filtros y ordenamietos, por fecha(día, mes, año). Login con barras de navegación para usuario Admin o cliente',
            tecnologiasUtilizadas: 'FRONT: Html - CSS - Materia UI - React - Redux - Javascript - deployado en Vercel. BACK: Deployado en google Cloud - Node - MongoDB - Express - Cloudinary - JWT - NPM',
            linkGithubFront: 'https://github.com/fmarcos38/Especiera_del_sol_Frontend',
            linkGithubBack: 'https://github.com/fmarcos38/Especiera_del_sol_Backend',
            linkURL: 'https://front-especiera-sol-jjfi.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729596829/ScreenShot133_ansnb0.jpg',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729596829/ScreenShot132_lzkzr8.jpg',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729596829/ScreenShot134_h9jp3q.jpg',
            imag4: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729596829/ScreenShot136_csvrje.jpg',
            imag5: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729596828/ScreenShot137_lxkeal.jpg',
        },
        {
            titulo: 'Página Web para inmobiliaria', 
            descripcion: 'Página Web para inmobiliaria de la ciudad de Mar del Plata. Se conecta a la API de un CRM que utiliza la inmobiliaria y de ahí se toman las propiedades a mostrar. Posee filtros, paginación, favoritos, detalle de la propiedad con carrusel de imágenes',
            tecnologiasUtilizadas: 'FRONT: Html - CSS - Materia UI - React - Redux - Javascript - Deploy en Vercel. BACK: Deployado en google Cloud - Node - MongoDB - Express - JWT - NodeMail - NPM',
            linkGithubFront: 'https://github.com/fmarcos38/Fornt-Inmobiliara-FMendive',
            linkGithubBack: 'https://github.com/fmarcos38/Back-inmobiliariaFMendive',
            linkURL: 'https://frontend-app-web.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729599310/ScreenShot138_rxkj6p.jpg',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729599308/ScreenShot140_cyoa0f.jpg',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729599308/ScreenShot141_vrrsal.jpg',
            imag4: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729599308/ScreenShot142_ye0km3.jpg',
        },
        {
            titulo: 'AppWeb de recetas', 
            descripcion: 'Aplicación web responsive de recetas, funcionalidad CRUD, administra 2 tipos de usuarios(cliente y admin), cliente puede guardar en favoritos, admin las opcs del CRUD. Funcionalidad boton día/noche, y otro PARA la estetica(Barbie/Ken) ofrece dist colores.',
            tecnologiasUtilizadas: 'FRONT: Html - CSS - Materia UI - React - Redux - Javascript - BACK: Microservicios - Docker - Deployado en Máquina Virtual en google Cloud - Node - MongoDB - Express - Cloudinary - JWT - NodeMail - Multer - NPM',
            linkGithubFront: 'https://github.com/fmarcos38/AppWeb-Recetas-Front',
            linkGithubBack: 'https://github.com/fmarcos38/Backend-appWeb-Recetas',
            linkURL: 'https://app-web-recetas-front.vercel.app',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1697132465/Captura_de_pantalla_2023-09-25_143502_cnuepx.png',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1697132324/Captura_de_pantalla_2023-09-25_143523_huojdw.png',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1697132465/Captura_de_pantalla_2023-09-25_143857_mwyrw6.png',
        },
        {
            titulo: 'E-commerce', 
            descripcion: 'E-commerse para un café al paso. Funcionalidades: loguin, 2 tipos de barras de navegación(usuario-admin), CRUD para productos, pasarela de pagos Mercadopago, envio de email, etc',
            tecnologiasUtilizadas: 'Html - CSS - Materia UI - React - Redux - Javascript - Node - MongoDB - Express - Mercadopago - Cloudinary - JWT - NodeMail - Multer - NPM',
            linkGithubFront: 'https://github.com/fmarcos38/Elve-Front',
            linkGithubBack: 'https://github.com/fmarcos38/Elven-Back',
            linkURL: 'https://elven-coffee.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682687061/ScreenShot063_srxfwz.bmp',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682685671/ScreenShot062_xty87a.bmp',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682683463/ScreenShot061_cvvw6n.bmp',
        },
        {
            titulo: 'Landing Page - Agencia de motos', 
            descripcion: 'Funcionalidades: el cliente solicitó solo una landing, muestra las marcas trabajadas, posee filtros por tipo de producto, y detalle del producto',
            tecnologiasUtilizadas: 'Html - CSS - Materia UI - React - Redux - Javascript - Node - Firebase - NPM',
            linkGithubFront: 'https://github.com/fmarcos38/Frontend-MotosPR',
            linkURL: 'https://motosperaltaramos-75437.web.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635134/mpr2_qusvtk.bmp',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635139/mpr3_ivem6i.bmp',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635145/mpr_nyvhxj.bmp',
        },
        {
            titulo: 'Portfolio Personal', 
            descripcion: 'Portfolio personal',
            tecnologiasUtilizadas: 'Html - CSS - SCSS - Materia UI - Bootstrapt - React - Redux - Javascript - Api GoogleMaps - Vercel - NPM',
            linkGithubFront: 'https://github.com/fmarcos38/Portfolio',
            linkURL: 'https://marcos-forastiere-portfolio.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635512/ScreenShot059_bl4u9j.bmp',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682639378/ScreenShot060_qexwfu.bmp',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635512/ScreenShot059_bl4u9j.bmp',
        },
    ],    
};

export default function rootReducer(state = initialState, action){
    switch(action){
        case GET_PROYECTS:
            return{
                ...state,                
            }
        default:
            return state;
        
    }
}
