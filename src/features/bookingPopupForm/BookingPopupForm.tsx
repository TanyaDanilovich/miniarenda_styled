import React from 'react';

type Props = {}
export const BookingPopupForm = ({}: Props) => {
    return (
        <div>


            <div>
                <div>
                    <div>
                        <form>
                            <h2>Мини-экскаватор Bobcat E19</h2>

                            <div>
                                <input required aria-required = "true" placeholder = "Ваше имя"/>
                                <label> Ваше имя</label>
                            </div>
                            <div>
                                <input required aria-required = "true" placeholder = "Ваш телефон"/>
                                <label htmlFor = "edit-phone--Jeql-YsP8gM"> Ваш телефон</label>
                            </div>
                            <div>
                                <input required aria-required = "true" placeholder = "Адрес электронной почты"/>
                                <label htmlFor = "edit-email--QpSHAFwb_og"> Адрес электронной
                                                                            почты</label>
                            </div>
                            <div>
                                <label htmlFor = "edit-date--fYaInXoUN8U"> Дата</label><span
                                className = "form-required">*</span>

                                <input type = "date" data-drupal-selector = "edit-date"
                                       data-drupal-date-format = "Y-m-d" id = "edit-date--fYaInXoUN8U" name = "date"
                                       value = "" required aria-required = "true"/>
                            </div>
                            <fieldset data-drupal-selector = "edit-term" id = "edit-term--qH8GkV9Av2Q--wrapper">
                                <div className = "card-header">
                                    <legend className = "m-0">
                                        <span className = "fieldset-legend">Выберите период аренды</span>
                                    </legend>
                                </div>
                                <div className = "card-body fieldset-wrapper">
                                    <div id = "edit-term--qH8GkV9Av2Q">
                                        <div>
                                            <label className = "form-check-label option"
                                                   htmlFor = "edit-term-51--WxbJJtgpx0s">
                                                <input/> Смена</label>
                                        </div>
                                        <div>
                                            <label className = "form-check-label option"
                                                   htmlFor = "edit-term-70--V9Hi1lfne7Y">
                                                <input/> 4 часа</label>
                                        </div>
                                        <div
                                            className = "js-form-item form-item js-form-type-radio form-item-term js-form-item-term form-check">


                                            <label className = "form-check-label option"
                                                   htmlFor = "edit-term-more--qJ4QDDavlSE">
                                                <input
                                                    data-drupal-selector = "edit-term-more-qj4qddavlse" type = "radio"
                                                    id = "edit-term-more--qJ4QDDavlSE" name = "term" value = "more"
                                                    className = "form-radio form-check-input"/>
                                                Несколько дней</label>


                                        </div>
                                    </div>

                                </div>
                            </fieldset>
                            <div>
                                <label htmlFor = "edit-return-date--skPmr7ZDVkk"> Дата возврата</label>

                                <input type = "date" data-drupal-selector = "edit-return-date"
                                       data-drupal-date-format = "Y-m-d" id = "edit-return-date--skPmr7ZDVkk"
                                       name = "return_date" value = "" className = "form-date form-control"
                                />

                            </div>
                            <div
                                className = "js-form-item form-item js-form-type-textarea form-item-pickup-address js-form-item-pickup-address form-group">
                                <textarea placeholder = "Укажите адрес"></textarea>

                                <label htmlFor = "edit-pickup-address--rL-E5v8kRTw" className = "option"> Укажите
                                                                                                          адрес</label>
                            </div>
                            <input data-drupal-selector = "edit-submit" type = "submit" id = "edit-submit--iupNkf1PnsM"
                                   name = "op" value = "Отправить"
                                   className = "button js-form-submit form-submit btn btn-primary"/>


                        </form>
                    </div>

                </div>
            </div>


        </div>
    );
}

