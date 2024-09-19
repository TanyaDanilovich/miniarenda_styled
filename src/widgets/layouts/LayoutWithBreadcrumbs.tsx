import styled from "styled-components";
import {S_Container} from '../../shared/styled/S_Container';
import React from 'react';
import {outline} from '../../app/styles/mixins';
import {Link, Outlet, useMatches} from 'react-router-dom';
import {ROUTES_PATHS} from '../../shared/constants';

type BreadcrumbMatch = {
    handle?: {
        crumb?: () => JSX.Element;
    };
};
type props = {};


export const LayoutWithBreadcrumbs = ({}: props) => {
    const matches = useMatches() as BreadcrumbMatch[];

    // console.log(matches.filter((match) => Boolean(match.handle?.crumb)))

    const filteredMatches = matches
        .filter((match) => Boolean(match.handle?.crumb))


    const breadcrumbs =
        filteredMatches.map((match, index) => (
            <span key = {index}>
                {match.handle?.crumb && match.handle.crumb()}
                {index < filteredMatches.length - 1 && ' / '}
            </span>)
        );

    return (
        <S_Breadcrumbs>
            <S_Container>
                LayoutWithBreadcrumbs
                <nav>
                    <Link to = {ROUTES_PATHS.home.url}>{ROUTES_PATHS.home.title + " / "}</Link>
                    {breadcrumbs}
                </nav>
                <Outlet/>
            </S_Container>
        </S_Breadcrumbs>);


}


export const S_Breadcrumbs = styled.div<{}>`
  ${outline()}

`



