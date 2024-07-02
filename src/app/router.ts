import {createBrowserRouter} from 'react-router-dom';
import {Layout} from '../widgets/layout/Layout';
import {Main} from '../widgets/main/Main';
import {Questions} from '../widgets/questions/Questions';
import {Services} from '../widgets/services/Services';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,

        children: [
            {
                index: true,
                Component: Main,
            },
            {
                path: "uslugi",
                Component: Questions
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