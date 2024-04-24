import img1 from '../../assets/images/servises/servises_1.jpg'
import img2 from '../../assets/images/servises/servises_2.jpg'
import img3 from '../../assets/images/servises/servises_3.jpg'
import {ServiceCardData} from '../../widgets/services/serviceCard/ServiceCard';

export const servicesData: ServiceCardData[] = [
    {
        title: "Аренда экскаваторов",
        text: "Аренда мини-экскаватора - превосходное решение для выполнения любого типа строительных работ в условиях ограниченного",
        image: {src: img2, alt: "мини-экскаватор"}
    },
    {
        title: "Аренда ямобура",
        text: "Аренда ямобура в Минске на базе мини-экскаватора и мини-погрузчика для бурения отверстий глубиной до 2,5 м диаметром от 20 до 60 см.",
        image: {src: img1, alt: "ямобур"}
    },
    {
        title: "Аренда гидромолота",
        text: "Гидромолот — сменный вид навесного рабочего оборудования для экскаваторов, погрузчиков и прочих механизмов.",
        image: {src: img3, alt: "гидромолот"}
    }]