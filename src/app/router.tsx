import {createBrowserRouter, createRoutesFromElements, Link, Route} from 'react-router-dom';
import {Layout} from '../widgets/layouts/Layout';
import {Questions} from '../widgets/questions/Questions';
import {Services} from '../widgets/services/Services';
import {AllRentals} from '../pages/rentals/allRentals/AllRentals';
import {ExavatorRental} from '../pages/rentals/exavatorRental/ExavatorRental';
import React from 'react';
import {ROUTES_PATHS} from '../shared/constants';
import {Main} from '../widgets/main/Main';
import {LayoutWithBreadcrumbs} from '../widgets/layouts/LayoutWithBreadcrumbs';
import {GidromolotRental} from '../pages/rentals/gidromolotRental/GidromolotRental';
import {YamoburRental} from '../pages/rentals/yamoburRental/YamoburRental';
import {UslugiAll} from '../pages/uslugiPages/uslugiAll/UslugiAll';
import {Excavation} from '../pages/uslugiPages/excavation/Excavation';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = {ROUTES_PATHS.home.url} element = {<Layout/>}>

            <Route index element = {<Main/>}
                   handle = {{
                       crumb: () => <Link to = {ROUTES_PATHS.home.url}>{ROUTES_PATHS.home.title}</Link>
                   }}
            />

            {/* Arenda Section */}
            <Route path = {ROUTES_PATHS.arenda.index.url} element = {<LayoutWithBreadcrumbs/>}
                   handle = {{
                       crumb: () => <Link to = {""}>{ROUTES_PATHS.arenda.index.title}</Link>
                   }}>
                <Route index element = {<AllRentals/>}/>
                <Route path = {ROUTES_PATHS.arenda.arenda_Ekskavatora.url} element = {<ExavatorRental/>}
                       handle = {{
                           crumb: () => (
                               <Link to = {ROUTES_PATHS.arenda.arenda_Ekskavatora.url}>
                                   {ROUTES_PATHS.arenda.arenda_Ekskavatora.title}
                               </Link>)
                       }}
                />
                <Route path = {ROUTES_PATHS.arenda.arenda_Gidromolota.url} element = {<GidromolotRental/>} handle = {{
                    crumb: () => <Link
                        to = {ROUTES_PATHS.arenda.arenda_Gidromolota.url}>{ROUTES_PATHS.arenda.arenda_Gidromolota.title}</Link>
                }}/>
                <Route path = {ROUTES_PATHS.arenda.arenda_Yamobura.url} element = {<YamoburRental/>} handle = {{
                    crumb: () => <Link
                        to = {ROUTES_PATHS.arenda.arenda_Yamobura.url}>{ROUTES_PATHS.arenda.arenda_Yamobura.title}</Link>
                }}/>
            </Route>
            {/* Arenda Section */}

            {/* Uslugi Section */}
            <Route path = {ROUTES_PATHS.uslugi.index.url} element = {<LayoutWithBreadcrumbs/>}
                   handle = {{
                       crumb: () => <Link to = {""}>{ROUTES_PATHS.uslugi.index.title}</Link>
                   }}>
                <Route index element = {<UslugiAll/>}/>
                <Route path = {ROUTES_PATHS.uslugi.kopanie.url} element = {<Excavation/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.kopanie.url}>{ROUTES_PATHS.uslugi.kopanie.title}</Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.burenie.url} element = {<Services/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.burenie.url}>{ROUTES_PATHS.uslugi.burenie.title}</Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.peremeshchenie_Grunta.url} element = {<Questions/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.peremeshchenie_Grunta.url}>{ROUTES_PATHS.uslugi.peremeshchenie_Grunta.title}</Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.korchevanie_Pnej.url} element = {<Services/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.korchevanie_Pnej.url}>{ROUTES_PATHS.uslugi.korchevanie_Pnej.title}</Link>
                       }}
                />
            </Route>
            {/* Uslugi Section */}

            {/* Price Section */}
            <Route path = {ROUTES_PATHS.price.url} element = {<LayoutWithBreadcrumbs/>}>
                <Route index element = {<Services/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.price.title}</Link>
                       }}/>
            </Route>
            {/* Price Section */}

            {/* Projects Section */}
            <Route path = {ROUTES_PATHS.projects.url} element = {<LayoutWithBreadcrumbs/>}>
                <Route index element = {<Services/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.projects.title}</Link>
                       }}/>
            </Route>
            {/* Projects Section */}


            {/* Contact Section */}
            <Route path = {ROUTES_PATHS.contacts.url} element = {<LayoutWithBreadcrumbs/>}>
                <Route index element = {<Questions/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.contacts.title}</Link>
                       }}/>
            </Route>
            {/* Contact Section */}

        </Route>
    )
);

