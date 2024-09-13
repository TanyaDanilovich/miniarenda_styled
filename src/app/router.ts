import {createBrowserRouter} from 'react-router-dom';
import {Layout} from '../widgets/layout/Layout';
import {Main} from '../widgets/main/Main';
import {Questions} from '../widgets/questions/Questions';
import {Services} from '../widgets/services/Services';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        // errorElement: <ErrorPage />,
        children: [
            {
                // index: true,
                path:"",
                Component: Main,
            },
            {
                path: "arenda",
                Component: Questions,
                children:[
                    {
                    path: "arenda-mini-ekskavatora",
                    Component: Questions,
                },
                    {
                        path: "arenda-gidromolota",
                        Component: Questions,
                    },
                    {
                        path: "arenda-yamobura",
                        Component: Questions,
                    }
                ]
            },
            {
                path: "uslugi",
                Component: Questions,
                children: [
                    {
                        path: "kopanie",
                        Component: Services
                    },
                    {
                        path: "burenie",
                        Component: Services
                    },
                    {
                        path: "peremeshchenie-grunta",
                        Component: Services
                    },
                    {
                        path: "korchevanie-pnej",
                        Component: Services
                    },
                ]
            },
            {
                path: "price",
                Component: Services
            },
            {
                path: "projects",
                Component: Questions
            },
            {
                path: "contacts",
                Component: Questions
            }
        ]
    },
]);