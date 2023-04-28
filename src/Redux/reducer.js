import { GET_PROYECTS } from "./Actions/actionType";

const initialState = {
    proyectos:[
        {
            titulo: 'E-commerce', 
            descripcion: 'E-commerse para un café al paso. Funcionalidades: loguin, 2 tipos de barras de navegación(usuario-admin), CRUD para productos, pasarela de pagos Mercadopago, envio de email, etc',
            tecnologiasUtilizadas: 'Html - CSS - Materia UI - React - Redux - Javascript - Node - MongoDB - Express - Mercadopago - Cloudinary - JWT - NodeMail - Multer - NPM',
            linkGithubFront: 'https://github.com/fmarcos38/Elve-Front',
            linkGithubBack: 'https://github.com/fmarcos38/Elven-Back',
            linkURL: 'https://elven-coffee.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682634998/Landing_ddd4qp.bmp',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635016/menuElven_wgyfqx.bmp',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635044/imagenMenu_yfvv8w.bmp',
        },
        {
            titulo: 'Landing Page - Agencia de motos', 
            descripcion: 'Funcionalidades: el cliente solicitó solo una landing, muestra las marcas trabajasdas, posee filtros por tipo de producto, y detalle del producto',
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
            linkURL: 'https://portfolio-i8wucf1pl-fmarcos38.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635512/ScreenShot059_bl4u9j.bmp',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682639378/ScreenShot060_qexwfu.bmp',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635512/ScreenShot059_bl4u9j.bmp',
        },
    ],
    load: false
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