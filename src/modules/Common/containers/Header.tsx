import { useLockBodyScroll, useToggle } from 'react-use';

import { FiX } from 'react-icons/fi';
import Link from 'next/link';
import Logo from 'modules/Common/components/Logo';
import React from 'react';
import classNames from 'classnames';
import s from './Header.module.css';
import { useTranslation } from 'next-i18next';

type HeaderProps = {
  className?: string;
  children: (data: any) => any;
} & React.HTMLAttributes<HTMLDivElement>;

const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => {
  const { t } = useTranslation('common');

  const [open, toggleExtended] = useToggle(false);
  useLockBodyScroll(open);

  return (
    <header className={classNames(s.header, { [s.header__isOpen]: open })} {...props}>
      <div className={s.header_logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <div className={classNames(s.header_menus)}>{children({ toggleExtended })}</div>

      <button type="button" className={classNames(s.header_openLink)} onClick={toggleExtended}>
        {t('common:header.open', 'Menu')}
      </button>
      <button type="button" className={classNames(s.header_closeLink)} onClick={toggleExtended}>
        {t('common:header.close', 'Close')}
        <FiX color="#fefffd" />
      </button>
    </header>
  );
};

export default Header;
