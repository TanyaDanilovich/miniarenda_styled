import {createBrowserRouter, createRoutesFromElements, Link, Route} from 'react-router-dom';
import {Layout} from '../widgets/layouts/Layout';
import {AllRentals} from '../pages/rentals/allRentals/AllRentals';
import {ExavatorRental} from '../pages/rentals/exavatorRental/ExavatorRental';
import React from 'react';
import {ROUTES_PATHS, SITE_DATA} from '../shared/constants';
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
                <Route path = {ROUTES_PATHS.arenda.arenda_Exavatora.url} element = {<ExavatorRental/>}
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
            <Route path = {ROUTES_PATHS.uslugi.index.url} element = {<LayoutWithBreadcrumbs/>}
                   handle = {{
                       crumb: () => <Link to = {""}>{ROUTES_PATHS.uslugi.index.title}</Link>
                   }}>
                <Route index element = {<UslugiAll/>}/>
                <Route path = {SITE_DATA.categories.services.items["digging-trench"].url} element = {<Excavation/>}
                       handle = {{
                           crumb: () => <Link
                               to = {SITE_DATA.categories.services.items["digging-trench"].url}>{SITE_DATA.categories.services.items["digging-trench"].title}</Link>
                       }}
                />
                <Route path = {SITE_DATA.categories.services.items["digging-foundation"].url} element = {<Drilling/>}
                       handle = {{
                           crumb: () => <Link
                               to = {SITE_DATA.categories.services.items["digging-foundation"].url}>{SITE_DATA.categories.services.items["digging-foundation"].title}</Link>
                       }}
                />
                <Route path = {SITE_DATA.categories.services.items["stump-removal"].url} element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <Link
                               to = {SITE_DATA.categories.services.items["stump-removal"].url}>
                               {SITE_DATA.categories.services.items["stump-removal"].title}
                           </Link>
                       }}
                />
                <Route path = {SITE_DATA.categories.services.items["drilling"].url} element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <Link
                               to = {SITE_DATA.categories.services.items["drilling"].url}>
                               {SITE_DATA.categories.services.items["drilling"].title}
                           </Link>
                       }}
                />
                <Route path = {SITE_DATA.categories.services.items["ground-movement"].url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <Link
                               to = {SITE_DATA.categories.services.items["ground-movement"].url}>
                               {SITE_DATA.categories.services.items["ground-movement"].title}
                           </Link>
                       }}
                />
                <Route path = {SITE_DATA.categories.services.items["other-groundworks"].url} element = {<Moving/>}
                       handle = {{
                           crumb: () => <Link
                               to = {SITE_DATA.categories.services.items["other-groundworks"].url}>
                               {SITE_DATA.categories.services.items["other-groundworks"].title}
                           </Link>
                       }}
                />
                <Route path = {SITE_DATA.categories.services.items["dismantling"].url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <Link
                               to = {SITE_DATA.categories.services.items["dismantling"].url}>
                               {SITE_DATA.categories.services.items["dismantling"].title}
                           </Link>
                       }}
                />
            </Route>
            {/* Uslugi Section */}

            {/* Price Section */}
            <Route path = {ROUTES_PATHS.price.url} element = {<LayoutWithBreadcrumbs/>}>
                <Route index element = {<Price/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.price.title}</Link>
                       }}/>
            </Route>
            {/* Price Section */}

            {/* Projects Section */}
            <Route path = {ROUTES_PATHS.projects.url} element = {<LayoutWithBreadcrumbs/>}>
                <Route index element = {<Projects/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.projects.title}</Link>
                       }}/>
            </Route>
            {/* Projects Section */}


            {/* Contact Section */}
            <Route path = {ROUTES_PATHS.contacts.url} element = {<LayoutWithBreadcrumbs/>}>
                <Route index element = {<Contacts/>}
                       handle = {{
                           crumb: () => <Link to = {""}>{ROUTES_PATHS.contacts.title}</Link>
                       }}/>
            </Route>
            {/* Contact Section */}

        </Route>
    )
);

