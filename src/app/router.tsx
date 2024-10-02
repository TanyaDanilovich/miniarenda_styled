import {createBrowserRouter, createRoutesFromElements, Link, Route} from 'react-router-dom';
import {Layout} from '../widgets/layouts/Layout';
import {AllRentals} from '../pages/rentals/allRentals/AllRentals';
import {ExcavatorRental} from '../pages/rentals/excavatorRental/ExcavatorRental';
import React from 'react';
import {Main} from '../widgets/main/Main';
import {LayoutWithBreadcrumbs} from '../widgets/layouts/LayoutWithBreadcrumbs';
import {GidromolotRental} from '../pages/rentals/gidromolotRental/GidromolotRental';
import {YamoburRental} from '../pages/rentals/yamoburRental/YamoburRental'
import {Price} from '../pages/price/Price';
import {Projects} from '../pages/proects/Proects';
import {Contacts} from '../pages/contacts/Contacts';
import {Excavation} from '../pages/services/excavation/Excavation';
import {UslugiAll} from '../pages/services/uslugiAll/UslugiAll';
import {Drilling} from '../pages/services/drilling/Drilling';
import {Moving} from '../pages/services/moving/Moving';
import {TreeStumpRemoval} from '../pages/services/treeStumpRemoval/TreeStumpRemoval';
import {ROUTES_PATHS} from '../shared/constants/ROUTES_PATHS';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = {ROUTES_PATHS.home.url} element = {<Layout/>}>

            <Route index element = {<Main/>}
                   handle = {{
                       crumb: () => <Link to = {ROUTES_PATHS.home.url}>{ROUTES_PATHS.home.title}</Link>
                   }}
            />

            {/* Arenda Section */}
            <Route path = {ROUTES_PATHS.arenda.index.url}
                   element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.arenda.index.title}/>}
                   handle = {{
                       crumb: () => <Link to = {""}>{ROUTES_PATHS.arenda.index.title}</Link>
                   }}>
                <Route index element = {<AllRentals/>}/>
                <Route path = {ROUTES_PATHS.arenda.arenda_Exavatora.url} element = {<ExcavatorRental/>}
                       handle = {{
                           crumb: () => (
                               <Link to = {ROUTES_PATHS.arenda.arenda_Exavatora.url}>
                                   {ROUTES_PATHS.arenda.arenda_Exavatora.title}
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
            <Route path = {ROUTES_PATHS.uslugi.index.url}
                   element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.uslugi.index.title}/>}
                   handle = {{
                       crumb: () => <Link to = {""}>{ROUTES_PATHS.uslugi.index.title}</Link>
                   }}>
                <Route index element = {<UslugiAll/>}/>
                <Route path = {ROUTES_PATHS.uslugi.diggingTrench.url} element = {<Excavation/>}
                       handle = {{
                           crumb: () =>
                               <Link
                                   to = {ROUTES_PATHS.uslugi.diggingTrench.url}>
                                   {ROUTES_PATHS.uslugi.diggingTrench.title}
                               </Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.diggingFoundation.url}
                       element = {<Drilling/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.diggingFoundation.url}>
                               {ROUTES_PATHS.uslugi.diggingFoundation.title}
                           </Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.stumpRemoval.url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.stumpRemoval.url}>
                               {ROUTES_PATHS.uslugi.stumpRemoval.title}
                           </Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.drilling.url} element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.drilling.url}>
                               {ROUTES_PATHS.uslugi.drilling.title}
                           </Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.groundMovement.url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.groundMovement.url}>
                               {ROUTES_PATHS.uslugi.groundMovement.title}
                           </Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.otherGroundworks.url} element = {<Moving/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.otherGroundworks.url}>
                               {ROUTES_PATHS.uslugi.otherGroundworks.title}
                           </Link>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.dismantling.url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <Link
                               to = {ROUTES_PATHS.uslugi.dismantling.url}>
                               {ROUTES_PATHS.uslugi.dismantling.title}
                           </Link>
                       }}
                />
            </Route>
            {/* Uslugi Section */}

            {/* Price Section */}
            <Route path = {ROUTES_PATHS.price.url}
                   element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.price.title}/>}>
                <Route index element = {<Price/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.price.title}</Link>
                       }}/>
            </Route>
            {/* Price Section */}

            {/* Projects Section */}
            <Route path = {ROUTES_PATHS.projects.url}
                   element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.projects.title}/>}>
                <Route index element = {<Projects/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.projects.title}</Link>
                       }}/>
            </Route>
            {/* Projects Section */}


            {/* Contact Section */}
            <Route path = {ROUTES_PATHS.contacts.url}
                   element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.contacts.title}/>}>
                <Route index element = {<Contacts/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.contacts.title}</Link>
                       }}/>
            </Route>
            {/* Contact Section */}

        </Route>
    )
);

