import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type LocalizedLinkProps = {
    to: string;
    i18nKey: string;
};

export const LocalizedLink = ({ to, i18nKey }: LocalizedLinkProps) => {
    const { t } = useTranslation();

    return <Link to={to}>{t(i18nKey)}</Link>;
};
