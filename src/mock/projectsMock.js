import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";



const projects = [
    {
        id: 1,
        title: 'Tintas Penetrantes (Chempo Company)',
        technologies: [<FaHtml5 className="text-orange-500" key="html5" />, <FaCss3 className="text-blue-500" key="css3" />, <IoLogoJavascript key="javascript" className="text-yellow-500" />],
        imageUrl: 'https://raw.githubusercontent.com/BelCel/imagenes/main/Chempo%20tintas.png',
        description: 'Landing page para la empresa Chempo Compnany de su producto "Tintas penetrantes."',
        url: 'https://chempo.com.ar/tintaspenetrantes/',
        button: 'Conoce la página!',
        
    },
    {
        id: 2,
        title: 'Web Chempo Company',
        technologies: [<FaHtml5 className="text-orange-500" key="html5" />, <FaCss3 className="text-blue-500" key="css3" />, <IoLogoJavascript key="javascript" className="text-yellow-500" />],
        imageUrl: 'https://raw.githubusercontent.com/BelCel/imagenes/main/Chempo%20web.png',
        description: 'WEB corporativa para la empresa Chempo Company.',
        url:'https://chempo.com.ar/#:~:text=usos%20y%20beneficios.-,Las%20tintas%20penetrantes%20son%20un%20m%C3%A9todo%20ampliamente%20utilizado%20en%20la,la%20superficie%20de%20diversos%20materiales.',
        button: 'Conoce la página!',
    },
    {
        id: 3,
        title: 'Bandas (Chempo Company)',
        technologies: [<FaHtml5 className="text-orange-500" key="html5" />, <FaCss3 className="text-blue-500" key="css3" />, <IoLogoJavascript key="javascript" className="text-yellow-500" />],
        imageUrl: 'https://as1.ftcdn.net/v2/jpg/05/20/48/46/1000_F_520484683_j4f2om7llvZD1aoL9HPZ2LmDeWWZoWK0.jpg',
        description: 'Landing page en desarrollo para la empresa Chempo Company de su producto Bandas',
        button: 'Proximamente!',
    },
    {
        id: 4,
        title: 'Portfolio',
        technologies: [<FaReact className="text-blue-500" key="react" />,<RiTailwindCssFill className="text-teal-600" key="tailwind" />,],
        imageUrl: 'https://raw.githubusercontent.com/BelCel/imagenes/main/Pablo%20portfolio.png',
        description: 'Portfolio realizado para cliente Facility Manager. Presentá un CV mucho mas profesional en tu búsqueda laboral.',
        url: 'https://webpablobelsito.vercel.app/Inicio/Inicio',
        button: 'Conoce la página!',
    },

]

export default projects

export const getProjects = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects)
        }, 500)
    })
}