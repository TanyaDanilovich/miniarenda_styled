// import {createBrowserRouter} from 'react-router-dom';
// import {Layout} from '../widgets/layout/Layout';
// import {Main} from '../widgets/main/Main';
// import {Questions} from '../widgets/questions/Questions';
// import {Services} from '../widgets/services/Services';
// import {Arenda} from '../pages/arenda/Arenda';
// import {ArendaExavatora} from '../widgets/arendaExavatora/ArendaExavatora';
//
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         Component: Layout,
//         handle: {
//             crumb: {text: " Main some crumb text", capitalize: false},
//         },
//         //errorElement: ErrorPage,
//         children: [
//             {
//                 index: true,
//                 Component: Main,
//             },
//             {
//                 path: "arenda",
//
//                 children: [
//                     {
//                         index: true,
//                         Component: Arenda,
//                         handle: {
//                             crumb: {text: " Arenda some crumb text", capitalize: false},
//                         },
//                     },
//                     {
//                         path: "arenda-mini-ekskavatora",
//                         Component: ArendaExavatora,
//                         handle: {
//                             crumb: (data: any) => {
//                                 return data},
//                             },
//                         },
//                     {
//                         path: "arenda-gidromolota",
//                         Component: Questions,
//                     },
//                     {
//                         path: "arenda-yamobura",
//                         Component: Questions,
//                     }
//                 ]
//             },
//             {
//                 path: "uslugi",
//                 children: [
//                     {
//                         index: true,
//                         Component: Questions,
//                     },
//                     {
//                         path: "kopanie",
//                         Component: Services
//                     },
//                     {
//                         path: "burenie",
//                         Component: Services
//                     },
//                     {
//                         path: "peremeshchenie-grunta",
//                         Component: Services
//                     },
//                     {
//                         path: "korchevanie-pnej",
//                         Component: Services
//                     },
//                 ]
//             },
//             {
//                 path: "price",
//                 Component: Services
//             },
//             {
//                 path: "projects",
//                 Component: Questions
//             },
//             {
//                 path: "contacts",
//                 Component: Questions
//             }
//         ]
//     },
// ]);