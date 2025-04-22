// import {createHashRouter, createRoutesFromElements, Link, Navigate, Route} from 'react-router-dom';
// import {Layout} from '../widgets/layouts/Layout';
// import {AllRentals} from '../pages/rentals/allRentals/AllRentals';
// import {ExcavatorRental} from '../pages/rentals/excavatorRental/ExcavatorRental';
// import React from 'react';
// import {Main} from '../pages/main/Main';
// import {LayoutWithBreadcrumbs} from '../widgets/layouts/LayoutWithBreadcrumbs';
// import {HammerRental} from '../pages/rentals/hammerRental/HammerRental';
// import {YamoburRental} from '../pages/rentals/yamoburRental/YamoburRental'
// import {Price} from '../pages/price/Price';
// import {Projects} from '../pages/proects/Proects';
// import {Contacts} from '../pages/contacts/Contacts';
// import {Excavation} from '../pages/services/excavation/Excavation';
// import {UslugiAll} from '../pages/services/uslugiAll/UslugiAll';
// import {Drilling} from '../pages/services/drilling/Drilling';
// import {Moving} from '../pages/services/moving/Moving';
// import {TreeStumpRemoval} from '../pages/services/treeStumpRemoval/TreeStumpRemoval';
// import {ROUTES_PATHS} from '../shared/constants/ROUTES_PATHS';
// import {ErrorPage} from '../widgets/errorPage/ErrorPage';
//
//
//
//
//
// export const router = createHashRouter(
//     createRoutesFromElements(
//         <Route path = {ROUTES_PATHS.home.url} element = {<Layout/>}>
//
//             <Route index element = {<Main/>}
//                    handle = {{
//                        crumb: () => <Link to = {ROUTES_PATHS.home.url}>{'navigation.home'}</Link>
//                    }}
//             />
//
//             {/* Arenda Section */}
//             <Route path = {ROUTES_PATHS.arenda.index.url}
//                    element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.arenda.index.title}/>}
//                    handle = {{
//                        crumb: () => <Link to = {""}>{ROUTES_PATHS.arenda.index.title}</Link>
//                    }}>
//                 <Route index element = {<AllRentals/>}/>
//                 <Route path = {ROUTES_PATHS.arenda.arenda_Exavatora.url} element = {<ExcavatorRental/>}
//                        handle = {{
//                            crumb: () => (
//                                <Link to = {ROUTES_PATHS.arenda.arenda_Exavatora.url}>
//                                    {ROUTES_PATHS.arenda.arenda_Exavatora.title}
//                                </Link>)
//                        }}
//                 />
//                 <Route path = {ROUTES_PATHS.arenda.arenda_Gidromolota.url} element = {<HammerRental/>} handle = {{
//                     crumb: () => <Link
//                         to = {ROUTES_PATHS.arenda.arenda_Gidromolota.url}>{ROUTES_PATHS.arenda.arenda_Gidromolota.title}</Link>
//                 }}/>
//                 <Route path = {ROUTES_PATHS.arenda.arenda_Yamobura.url} element = {<YamoburRental/>} handle = {{
//                     crumb: () => <Link
//                         to = {ROUTES_PATHS.arenda.arenda_Yamobura.url}>{ROUTES_PATHS.arenda.arenda_Yamobura.title}</Link>
//                 }}/>
//             </Route>
//             {/* Arenda Section */}
//
//             {/* Uslugi Section */}
//             <Route path = {ROUTES_PATHS.uslugi.index.url}
//                    element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.uslugi.index.title}/>}
//                    handle = {{
//                        crumb: () => <Link to = {""}>{ROUTES_PATHS.uslugi.index.title}</Link>
//                    }}>
//                 <Route index element = {<UslugiAll/>}/>
//                 <Route path = {ROUTES_PATHS.uslugi.diggingTrench.url} element = {<Excavation/>}
//                        handle = {{
//                            crumb: () =>
//                                <Link
//                                    to = {ROUTES_PATHS.uslugi.diggingTrench.url}>
//                                    {ROUTES_PATHS.uslugi.diggingTrench.title}
//                                </Link>
//                        }}
//                 />
//                 <Route path = {ROUTES_PATHS.uslugi.diggingFoundation.url}
//                        element = {<Drilling/>}
//                        handle = {{
//                            crumb: () => <Link
//                                to = {ROUTES_PATHS.uslugi.diggingFoundation.url}>
//                                {ROUTES_PATHS.uslugi.diggingFoundation.title}
//                            </Link>
//                        }}
//                 />
//                 <Route path = {ROUTES_PATHS.uslugi.stumpRemoval.url}
//                        element = {<TreeStumpRemoval/>}
//                        handle = {{
//                            crumb: () => <Link
//                                to = {ROUTES_PATHS.uslugi.stumpRemoval.url}>
//                                {ROUTES_PATHS.uslugi.stumpRemoval.title}
//                            </Link>
//                        }}
//                 />
//                 <Route path = {ROUTES_PATHS.uslugi.drilling.url} element = {<TreeStumpRemoval/>}
//                        handle = {{
//                            crumb: () => <Link
//                                to = {ROUTES_PATHS.uslugi.drilling.url}>
//                                {ROUTES_PATHS.uslugi.drilling.title}
//                            </Link>
//                        }}
//                 />
//                 <Route path = {ROUTES_PATHS.uslugi.groundMovement.url}
//                        element = {<TreeStumpRemoval/>}
//                        handle = {{
//                            crumb: () => <Link
//                                to = {ROUTES_PATHS.uslugi.groundMovement.url}>
//                                {ROUTES_PATHS.uslugi.groundMovement.title}
//                            </Link>
//                        }}
//                 />
//                 <Route path = {ROUTES_PATHS.uslugi.otherGroundworks.url} element = {<Moving/>}
//                        handle = {{
//                            crumb: () => <Link
//                                to = {ROUTES_PATHS.uslugi.otherGroundworks.url}>
//                                {ROUTES_PATHS.uslugi.otherGroundworks.title}
//                            </Link>
//                        }}
//                 />
//                 <Route path = {ROUTES_PATHS.uslugi.dismantling.url}
//                        element = {<TreeStumpRemoval/>}
//                        handle = {{
//                            crumb: () => <Link
//                                to = {ROUTES_PATHS.uslugi.dismantling.url}>
//                                {ROUTES_PATHS.uslugi.dismantling.title}
//                            </Link>
//                        }}
//                 />
//             </Route>
//             {/* Uslugi Section */}
//
//             {/* Price Section */}
//             <Route path = {ROUTES_PATHS.price.url}
//                    element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.price.title}/>}>
//                 <Route index element = {<Price/>}
//                        handle = {{
//                            crumb: () => <Link to = {""}>{ROUTES_PATHS.price.title}</Link>
//                        }}/>
//             </Route>
//             {/* Price Section */}
//
//             {/* Projects Section */}
//             <Route path = {ROUTES_PATHS.projects.url}
//                    element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.projects.title}/>}>
//                 <Route index element = {<Projects/>}
//                        handle = {{
//                            crumb: () => <Link to = {""}>{ROUTES_PATHS.projects.title}</Link>
//                        }}/>
//             </Route>
//             {/* Projects Section */}
//
//
//             {/* Contact Section */}
//             <Route path = {ROUTES_PATHS.contacts.url}
//                    element = {<LayoutWithBreadcrumbs title = {ROUTES_PATHS.contacts.title}/>}>
//                 <Route index element = {<Contacts/>}
//                        handle = {{
//                            crumb: () => <Link to = {""}>{ROUTES_PATHS.contacts.title}</Link>
//                        }}/>
//             </Route>
//             {/* Contact Section */}
//             <Route path="404" element={ <ErrorPage /> } />
//             <Route path="*" element={ <Navigate to="404" replace />} />
//
//
//         </Route>
//     )
// );
//

import { createHashRouter, createRoutesFromElements, Link, Navigate, Route } from 'react-router-dom';
import { Layout } from '../widgets/layouts/Layout';
import { AllRentals } from '../pages/rentals/allRentals/AllRentals';
import { ExcavatorRental } from '../pages/rentals/excavatorRental/ExcavatorRental';
import React from 'react';
import { Main } from '../pages/main/Main';
import { LayoutWithBreadcrumbs } from '../widgets/layouts/LayoutWithBreadcrumbs';
import { HammerRental } from '../pages/rentals/hammerRental/HammerRental';
import { YamoburRental } from '../pages/rentals/yamoburRental/YamoburRental';
import { Price } from '../pages/price/Price';
import { Projects } from '../pages/proects/Proects';
import { Contacts } from '../pages/contacts/Contacts';
import { Excavation } from '../pages/services/excavation/Excavation';
import { UslugiAll } from '../pages/services/uslugiAll/UslugiAll';
import { Drilling } from '../pages/services/drilling/Drilling';
import { Moving } from '../pages/services/moving/Moving';
import { TreeStumpRemoval } from '../pages/services/treeStumpRemoval/TreeStumpRemoval';
import { ROUTES_PATHS } from '../shared/constants/ROUTES_PATHS';
import { ErrorPage } from '../widgets/errorPage/ErrorPage';

export const router = createHashRouter(
    createRoutesFromElements(
        <Route path={ROUTES_PATHS.home.url} element={<Layout />}>

            {/* Главная страница */}
            <Route index element={<Main />}
                   handle={{
                       crumb: () => <Link to={ROUTES_PATHS.home.url}>{'navigation.home'}</Link>
                   }}
            />

            {/* Аренда Section */}
            <Route path={ROUTES_PATHS.arenda.index.url}
                   element={<LayoutWithBreadcrumbs i18nKey="navigation.arenda.index" />}
                   handle={{
                       crumb: () => <Link to="">{'navigation.arenda.index'}</Link>
                   }}
            >
                <Route index element={<AllRentals />} />
                <Route path={ROUTES_PATHS.arenda.arenda_Exavatora.url}
                       element={<ExcavatorRental />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.arenda.arenda_Exavatora.url}>{'navigation.arenda.arenda_Exavatora'}</Link>
                       }}
                />
                <Route path={ROUTES_PATHS.arenda.arenda_Gidromolota.url}
                       element={<HammerRental />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.arenda.arenda_Gidromolota.url}>{'navigation.arenda.arenda_Gidromolota'}</Link>
                       }}
                />
                <Route path={ROUTES_PATHS.arenda.arenda_Yamobura.url}
                       element={<YamoburRental />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.arenda.arenda_Yamobura.url}>{'navigation.arenda.arenda_Yamobura'}</Link>
                       }}
                />
            </Route>

            {/* Услуги Section */}
            <Route path={ROUTES_PATHS.uslugi.index.url}
                   element={<LayoutWithBreadcrumbs i18nKey="navigation.uslugi.index" />}
                   handle={{
                       crumb: () => <Link to="">{'navigation.uslugi.index'}</Link>
                   }}
            >
                <Route index element={<UslugiAll />} />
                <Route path={ROUTES_PATHS.uslugi.diggingTrench.url}
                       element={<Excavation />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.uslugi.diggingTrench.url}>{'navigation.uslugi.diggingTrench'}</Link>
                       }}
                />
                <Route path={ROUTES_PATHS.uslugi.diggingFoundation.url}
                       element={<Drilling />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.uslugi.diggingFoundation.url}>{'navigation.uslugi.diggingFoundation'}</Link>
                       }}
                />
                <Route path={ROUTES_PATHS.uslugi.stumpRemoval.url}
                       element={<TreeStumpRemoval />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.uslugi.stumpRemoval.url}>{'navigation.uslugi.stumpRemoval'}</Link>
                       }}
                />
                <Route path={ROUTES_PATHS.uslugi.drilling.url}
                       element={<TreeStumpRemoval />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.uslugi.drilling.url}>{'navigation.uslugi.drilling'}</Link>
                       }}
                />
                <Route path={ROUTES_PATHS.uslugi.groundMovement.url}
                       element={<TreeStumpRemoval />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.uslugi.groundMovement.url}>{'navigation.uslugi.groundMovement'}</Link>
                       }}
                />
                <Route path={ROUTES_PATHS.uslugi.otherGroundworks.url}
                       element={<Moving />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.uslugi.otherGroundworks.url}>{'navigation.uslugi.otherGroundworks'}</Link>
                       }}
                />
                <Route path={ROUTES_PATHS.uslugi.dismantling.url}
                       element={<TreeStumpRemoval />}
                       handle={{
                           crumb: () => <Link to={ROUTES_PATHS.uslugi.dismantling.url}>{'navigation.uslugi.dismantling'}</Link>
                       }}
                />
            </Route>

            {/* Price Section */}
            <Route path={ROUTES_PATHS.price.url}
                   element={<LayoutWithBreadcrumbs i18nKey="navigation.price" />}
                   handle={{
                       crumb: () => <Link to="">{'navigation.price'}</Link>
                   }}
            >
                <Route index element={<Price />} />
            </Route>

            {/* Projects Section */}
            <Route path={ROUTES_PATHS.projects.url}
                   element={<LayoutWithBreadcrumbs i18nKey="navigation.projects" />}
                   handle={{
                       crumb: () => <Link to="">{'navigation.projects'}</Link>
                   }}
            >
                <Route index element={<Projects />} />
            </Route>

            {/* Contacts Section */}
            <Route path={ROUTES_PATHS.contacts.url}
                   element={<LayoutWithBreadcrumbs i18nKey="navigation.contacts" />}
                   handle={{
                       crumb: () => <Link to="">{'navigation.contacts'}</Link>
                   }}
            >
                <Route index element={<Contacts />} />
            </Route>

            {/* 404 */}
            <Route path="404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="404" replace />} />

        </Route>
    )
);

