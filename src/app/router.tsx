import {createHashRouter, createRoutesFromElements, Link, Navigate, Route} from 'react-router-dom';
import {Layout} from '../widgets/layouts/Layout';
import {AllRentals} from '../pages/rentals/allRentals/AllRentals';
import {ExcavatorRental} from '../pages/rentals/excavatorRental/ExcavatorRental';
import React from 'react';
import {Main} from '../pages/main/Main';
import {LayoutWithBreadcrumbs} from '../widgets/layouts/LayoutWithBreadcrumbs';
import {HammerRental} from '../pages/rentals/hammerRental/HammerRental';
import {YamoburRental} from '../pages/rentals/yamoburRental/YamoburRental';
import {Price} from '../pages/price/Price';
import {Projects} from '../pages/proects/Proects';
import {Contacts} from '../pages/contacts/Contacts';
import {Excavation} from '../pages/services/excavation/Excavation';
import {UslugiAll} from '../pages/services/uslugiAll/UslugiAll';
import {Drilling} from '../pages/services/drilling/Drilling';
import {Moving} from '../pages/services/moving/Moving';
import {TreeStumpRemoval} from '../pages/services/treeStumpRemoval/TreeStumpRemoval';
import {ROUTES_PATHS} from '../shared/constants/ROUTES_PATHS';
import {ErrorPage} from '../widgets/errorPage/ErrorPage';
import {LocalizedLink} from '../shared/ui/breadcrumbs/LocalizedLink';

export const router = createHashRouter(
    createRoutesFromElements(
        <Route path = {ROUTES_PATHS.home.url} element = {<Layout/>}>
            {/* Главная страница */}
            <Route index element = {<Main/>}
                   handle = {{
                       crumb: () => <LocalizedLink to = {ROUTES_PATHS.home.url} i18nKey = "pages.home.navigation"/>
                   }}
            />

            {/* Аренда Section */}
            <Route path = {ROUTES_PATHS.arenda.index.url}
                   element = {<LayoutWithBreadcrumbs i18nKey = "pages.arenda.index.navigation"/>}
                   handle = {{
                       crumb: () => <LocalizedLink to = {ROUTES_PATHS.arenda.index.url}
                                                   i18nKey = "pages.arenda.index.navigation"/>
                   }}
            >
                <Route index element = {<AllRentals/>}/>
                <Route path = {ROUTES_PATHS.arenda.arenda_Exavatora.url}
                       element = {<ExcavatorRental/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.arenda.arenda_Exavatora.url}
                                                       i18nKey = "pages.arenda.excavator.navigation"/>
                       }}
                />
                <Route path = {ROUTES_PATHS.arenda.arenda_Gidromolota.url}
                       element = {<HammerRental/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.arenda.arenda_Gidromolota.url}
                                                       i18nKey = "pages.arenda.hammer.navigation"/>
                       }}
                />
                <Route path = {ROUTES_PATHS.arenda.arenda_Yamobura.url}
                       element = {<YamoburRental/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.arenda.arenda_Yamobura.url}
                                                       i18nKey = "pages.arenda.yamobur.navigation"/>
                       }}
                />
            </Route>

            {/* Услуги Section */}
            <Route path = {ROUTES_PATHS.uslugi.index.url}
                   element = {<LayoutWithBreadcrumbs i18nKey = "pages.uslugi.index.navigation"/>}
                   handle = {{
                       crumb: () => <LocalizedLink to = {ROUTES_PATHS.uslugi.index.url}
                                                   i18nKey = "pages.uslugi.index.navigation"/>
                   }}
            >
                <Route index element = {<UslugiAll/>}/>
                <Route path = {ROUTES_PATHS.uslugi.diggingTrench.url}
                       element = {<Excavation/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.uslugi.diggingTrench.url}
                                                       i18nKey = "pages.uslugi.diggingTrench.navigation"/>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.diggingFoundation.url}
                       element = {<Drilling/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.uslugi.diggingFoundation.url}
                                                       i18nKey = "pages.uslugi.diggingFoundation.navigation"/>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.stumpRemoval.url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.uslugi.stumpRemoval.url}
                                                       i18nKey = "pages.uslugi.stumpRemoval.navigation"/>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.drilling.url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.uslugi.drilling.url}
                                                       i18nKey = "pages.uslugi.drilling.navigation"/>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.groundMovement.url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.uslugi.groundMovement.url}
                                                       i18nKey = "pages.uslugi.groundMovement.navigation"/>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.otherGroundworks.url}
                       element = {<Moving/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.uslugi.otherGroundworks.url}
                                                       i18nKey = "pages.uslugi.otherGroundworks.navigation"/>
                       }}
                />
                <Route path = {ROUTES_PATHS.uslugi.dismantling.url}
                       element = {<TreeStumpRemoval/>}
                       handle = {{
                           crumb: () => <LocalizedLink to = {ROUTES_PATHS.uslugi.dismantling.url}
                                                       i18nKey = "pages.uslugi.dismantling.navigation"/>
                       }}
                />
            </Route>

            {/* Price Section */}
            <Route path = {ROUTES_PATHS.price.url}
                   element = {<LayoutWithBreadcrumbs i18nKey = "pages.price.navigation"/>}
                   handle = {{
                       crumb: () => <LocalizedLink to = {ROUTES_PATHS.price.url} i18nKey = "pages.price.navigation"/>
                   }}
            >
                <Route index element = {<Price/>}/>
            </Route>

            {/* Projects Section */}
            <Route path = {ROUTES_PATHS.projects.url}
                   element = {<LayoutWithBreadcrumbs i18nKey = "pages.projects.navigation"/>}
                   handle = {{
                       crumb: () => <LocalizedLink to = {ROUTES_PATHS.projects.url} i18nKey = "pages.projects.navigation"/>
                   }}
            >
                <Route index element = {<Projects/>}/>
            </Route>

            {/* Contacts Section */}
            <Route path = {ROUTES_PATHS.contacts.url}
                   element = {<LayoutWithBreadcrumbs i18nKey = "pages.contacts.navigation"/>}
                   handle = {{
                       crumb: () => <LocalizedLink to = {ROUTES_PATHS.contacts.url} i18nKey = "pages.contacts.navigation"/>
                   }}
            >
                <Route index element = {<Contacts/>}/>
            </Route>

            {/* 404 */}
            <Route path = "404" element = {<ErrorPage/>}/>
            {/*<Route path = "*" element = {<Navigate to = "404" replace/>}/>*/}

        </Route>
    )
);

