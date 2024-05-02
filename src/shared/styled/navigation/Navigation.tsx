import styled from "styled-components";

type props = {};
export const Navigation = ({}: props) => {
    return (


        <StyledNavigation id = "navigation">







                            <nav className = "flex justify-between w-2/3">

                                <ul className = "flex justify-center text-primary-dark font-bold">
                                    <li className = "hover:text-[--color-primary-darker] flex align-middle "><a
                                        className = "block p-4 m-auto"
                                        href = "#">Главная</a></li>
                                    <li className = "hover:text-[--color-primary-darker] flex align-middle"><a
                                        className = "block p-4 m-auto"
                                        href = "#">Техника</a>
                                    </li>
                                    <li className = "hover:text-[--color-primary-darker] flex align-middle"><a
                                        className = "block p-4 m-auto" href = "#">Услуги</a>
                                    </li>
                                    <li className = "hover:text-[--color-primary-darker] flex align-middle"><a
                                        className = "block p-4 m-auto" href = "#">Цены</a>
                                    </li>


                                    <li className = "hover:text-[--color-primary-darker] flex align-middle"><a
                                        className = "block p-4 m-auto" href = "#">Наши
                                                                              работы</a>
                                    </li>
                                    <li className = "hover:text-[--color-primary-darker] flex align-middle"><a
                                        className = "block p-4 m-auto"
                                        href = "#">Контакты</a></li>
                                </ul>
                                <div id = "nav-after" aria-hidden = "true"
                                     className = "navAfter">
                                </div>
                            </nav>




        </StyledNavigation>


    );
};


export const StyledNavigation = styled.nav<{}>`
  width: 0;
  height: 0;
  overflow: hidden;

  a {
    color: ${props => props.theme.colors.white};
  }
`;