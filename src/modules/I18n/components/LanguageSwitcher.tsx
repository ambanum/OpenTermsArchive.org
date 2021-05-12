import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  // TODO
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const router = useRouter();

  return (
    <div className={s.wrapper} {...props}>
      {router.locales?.map((locale) => (
        <React.Fragment key={locale}>
          {locale === router.locale ? (
            locale
          ) : (
            <Link href={router.pathname} locale={locale}>
              {locale}
            </Link>
          )}{' '}
        </React.Fragment>
      ))}
      {children}
    </div>
  );
};

export default LanguageSwitcher;