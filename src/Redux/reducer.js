import { GET_PROYECTS } from "./Actions/actionType";
import tresEstrellasArticulos from "../imagenes/tresEstrellas/Articulos.jpg";
import tresEstrellasClientes from "../imagenes/tresEstrellas/Clientes.jpg";
import tresEstrellasProv from "../imagenes/tresEstrellas/Prov.jpg";
import tresEstrellasResumen from "../imagenes/tresEstrellas/resumen.jpeg";
import tresEstrellasHome from "../imagenes/tresEstrellas/ScreenShot004.jpg";

const initialState = {
    proyectos: [
        {
            titulo: 'Sistema Web Administrativo',
            descripcion: 'Sistema administrativo para una PyME de indumentaria deportiva. Incluye perfiles con permisos, clientes, proveedores, cuentas corrientes, remitos, ordenes de compra, articulos, informes y ajustes de stock.',
            tecnologiasUtilizadas: 'Frontend: HTML, CSS, Material UI, React, Redux, JavaScript, Vercel. Backend: Node, MongoDB, Express, JWT, NPM, Heroku.',
            linkGithubFront: 'https://github.com/fmarcos38/Front-Tres-Estrellas',
            linkGithubBack: '',
            imag1: tresEstrellasHome,
            imag2: tresEstrellasArticulos,
            imag3: tresEstrellasClientes,
            imag4: tresEstrellasProv,
            imag5: tresEstrellasResumen,
        },
        {
            titulo: 'Sistema Web para distribuidora de frutos secos',
            descripcion: 'Sistema de gestion para productos, clientes, proveedores y gastos. Incluye CRUD, tablas con filtros, ordenamientos por fecha y login con vistas diferenciadas para administrador y cliente.',
            tecnologiasUtilizadas: 'Frontend: HTML, CSS, Material UI, React, Redux, JavaScript, Vercel. Backend: Node, MongoDB, Express, Cloudinary, JWT, NPM, Google Cloud.',
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
            titulo: 'Web para inmobiliaria',
            descripcion: 'Sitio para inmobiliaria de Mar del Plata conectado a la API de un CRM. Permite listar propiedades, filtrar resultados, paginar, guardar favoritos y ver detalles con carrusel de imagenes.',
            tecnologiasUtilizadas: 'Frontend: HTML, CSS, Material UI, React, Redux, JavaScript, Vercel. Backend: Node, MongoDB, Express, JWT, NodeMail, NPM, Google Cloud.',
            linkGithubFront: 'https://github.com/fmarcos38/Fornt-Inmobiliara-FMendive',
            linkGithubBack: 'https://github.com/fmarcos38/Back-inmobiliariaFMendive',
            linkURL: 'https://frontend-app-web.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729599310/ScreenShot138_rxkj6p.jpg',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729599308/ScreenShot140_cyoa0f.jpg',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729599308/ScreenShot141_vrrsal.jpg',
            imag4: 'https://res.cloudinary.com/da655b7xh/image/upload/v1729599308/ScreenShot142_ye0km3.jpg',
        },
        {
            titulo: 'App web de recetas',
            descripcion: 'Aplicacion responsive de recetas con CRUD, usuarios cliente y administrador, favoritos, modo dia/noche y variaciones visuales por tema.',
            tecnologiasUtilizadas: 'Frontend: HTML, CSS, Material UI, React, Redux, JavaScript. Backend: microservicios, Docker, Node, MongoDB, Express, Cloudinary, JWT, NodeMail, Multer, NPM, Google Cloud.',
            linkGithubFront: 'https://github.com/fmarcos38/AppWeb-Recetas-Front',
            linkGithubBack: 'https://github.com/fmarcos38/Backend-appWeb-Recetas',
            linkURL: 'https://app-web-recetas-front.vercel.app',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1697132465/Captura_de_pantalla_2023-09-25_143502_cnuepx.png',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1697132324/Captura_de_pantalla_2023-09-25_143523_huojdw.png',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1697132465/Captura_de_pantalla_2023-09-25_143857_mwyrw6.png',
        },
        {
            titulo: 'E-commerce',
            descripcion: 'Tienda online para cafe al paso con login, vistas de usuario y administrador, CRUD de productos, pasarela de pago con Mercado Pago y envio de emails.',
            tecnologiasUtilizadas: 'HTML, CSS, Material UI, React, Redux, JavaScript, Node, MongoDB, Express, Mercado Pago, Cloudinary, JWT, NodeMail, Multer, NPM.',
            linkGithubFront: 'https://github.com/fmarcos38/Elve-Front',
            linkGithubBack: 'https://github.com/fmarcos38/Elven-Back',
            linkURL: 'https://elven-coffee.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682687061/ScreenShot063_srxfwz.bmp',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682685671/ScreenShot062_xty87a.bmp',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682683463/ScreenShot061_cvvw6n.bmp',
        },
        {
            titulo: 'Landing page - Agencia de motos',
            descripcion: 'Landing page para una agencia de motos. Muestra marcas, productos, filtros por tipo de producto y detalle individual.',
            tecnologiasUtilizadas: 'HTML, CSS, Material UI, React, Redux, JavaScript, Node, Firebase, NPM.',
            linkGithubFront: 'https://github.com/fmarcos38/Frontend-MotosPR',
            linkURL: 'https://motosperaltaramos-75437.web.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635134/mpr2_qusvtk.bmp',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635139/mpr3_ivem6i.bmp',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635145/mpr_nyvhxj.bmp',
        },
        {
            titulo: 'Portfolio personal',
            descripcion: 'Portfolio personal para presentar perfil, proyectos, skills, ubicacion y formulario de contacto.',
            tecnologiasUtilizadas: 'HTML, CSS, SCSS, Material UI, Bootstrap, React, Redux, JavaScript, Google Maps API, Vercel, NPM.',
            linkGithubFront: 'https://github.com/fmarcos38/Portfolio',
            linkURL: 'https://marcos-forastiere-portfolio.vercel.app/',
            imag1: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635512/ScreenShot059_bl4u9j.bmp',
            imag2: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682639378/ScreenShot060_qexwfu.bmp',
            imag3: 'https://res.cloudinary.com/da655b7xh/image/upload/v1682635512/ScreenShot059_bl4u9j.bmp',
        },
    ],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROYECTS:
            return {
                ...state,
            }
        default:
            return state;
    }
}
