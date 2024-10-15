import styled, {css} from "styled-components";
import React from 'react';
import {outline} from '../../app/styles/mixins';
import {Link, Outlet, useLocation, useMatches} from 'react-router-dom';
import img from '../../assets/images/portfolio/1170/portfolio4-1170w.jpg';
import {ROUTES_PATHS} from '../../shared/constants/ROUTES_PATHS';
import {UIMatch} from '@remix-run/router/utils';
import {cleanPath} from '../../shared/utils/cleanPath';

type BreadcrumbMatch = UIMatch & {
    handle?: {
        crumb?: () => JSX.Element;
    },

};
type props = {
    title: string;
};


export const LayoutWithBreadcrumbs = ({title}: props) => {
    const matches = useMatches() as BreadcrumbMatch[];
    const location = useLocation();

    const filteredMatches = matches
        .filter((match) => Boolean(match.handle?.crumb))

    const breadcrumbs =
        filteredMatches.map((match, index) => {

            const isActive = cleanPath(location.pathname) === cleanPath(match.pathname)

            //console.log(`"${location.pathname}",`, `"${match.pathname}"`, isActive)

            return <S_BreadcrumbsLi key = {index} $active = {isActive}>
                {match.handle?.crumb && match.handle.crumb()}
            </S_BreadcrumbsLi>
        });

    return (
        <S_LayoutWithBreadcrumbs>
            <S_BreadcrumbsContainer $img = {img}>
                <S_Breadcrumbs>
                    <S_BreadcrumbsTitle>{title}</S_BreadcrumbsTitle>
                    <S_BreadcrumbsContent>
                        <li>
                            <Link to = {ROUTES_PATHS.home.url}>{ROUTES_PATHS.home.title}</Link>
                        </li>
                        {breadcrumbs}
                    </S_BreadcrumbsContent>
                </S_Breadcrumbs>

            </S_BreadcrumbsContainer>
            <Outlet/>
        </S_LayoutWithBreadcrumbs>);


}


export const S_LayoutWithBreadcrumbs = styled.main<{}>`
    //${outline()}
  flex-grow: 1;
`

export const S_Breadcrumbs = styled.div<{}>`
    //${outline()}
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  @media ${({theme}) => theme.media.tablet} {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }


  &::before {
    background-color: ${({theme}) => theme.colors.bg_primary};
    opacity: 0.8;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
`
export const S_BreadcrumbsTitle = styled.h2`
  margin: 0;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  font-size: ${({theme}) => theme.fonts.size.h5};
`;
export const S_BreadcrumbsContainer = styled.nav<{
    $img: string
}>`

    //${outline()}

  position: relative;
  background-image: url(${props => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 12rem;
  color: white;
  align-content: center;

  &::before {
    background-color: ${({theme}) => theme.colors.bg_primary};
    opacity: 0.5;
    display: block;
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 12rem;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: left;
    list-style: none;
    font-weight: ${({theme}) => theme.fonts.regular};
    text-decoration: none;
    color: white;
  }

  & li {
    position: relative;
    z-index: 1;
      //${outline(2)}
  }

  & li:not(:last-child) {
    &:hover {
      color: ${({theme}) => theme.colors.primary};
    }
  }


  & li:not(:first-child) {
    position: relative;

      //${outline(2)}
    &::before {
      content: "/";
      width: 100%;
      z-index: -1;
      padding-inline: 0.5rem;
    }
  }
`


export const S_BreadcrumbsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
`

export const S_BreadcrumbsLi = styled.li<{
    $active: boolean
}>`
  ${({$active}) => $active && css`
    & a {
      cursor: default;
    }

    color: ${({theme}) => theme.colors.primary}`
  }`;