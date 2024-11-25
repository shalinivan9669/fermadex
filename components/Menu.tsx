'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';
import ThemeSwitcher from './ThemeSwitcher';

const Menu = () => {
  const { t } = useTranslation('common');

  const menuItems = [
    { label: t('home'), href: '/' },
    {
      label: t('marketplace'),
      href: '/marketplace',
      subItems: [
        { label: t('projects'), href: '/projects' },
        { label: t('accounts'), href: '/accounts' },
        { label: t('proxies'), href: '/proxies' },
        { label: t('additional_tools'), href: '/additional-tools' },
      ],
    },
    { label: t('about_us'), href: '/about' },
    { label: t('support'), href: '/support' },
    { label: t('instruction'), href: '/instruction' },
    { label: t('personal_account'), href: '/profile' },
  ];

  return (
    <nav className="p-4 bg-background-light dark:bg-background-dark">
      <ul className="flex items-center space-x-6">
        {menuItems.map(item => (
          <li key={item.href} className="relative">
            {item.subItems ? (
              <div className="relative group inline-block">
                <Link
                  href={item.href}
                  className="hover:text-primary-light dark:hover:text-primary-dark font-semibold"
                >
                  {item.label}
                </Link>
                <ul className="absolute left-0 z-10 mt-0 hidden group-hover:block bg-secondary-light dark:bg-secondary-dark py-2 shadow-lg rounded">
                  {item.subItems.map(subItem => (
                    <li key={subItem.href}>
                      <Link
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white rounded"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary-light dark:hover:text-primary-dark font-semibold"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
        <li className="ml-auto flex items-center space-x-4">
          <button
            className="px-4 py-2 border border-primary-light dark:border-primary-dark rounded hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white"
          >
            {t('login')}
          </button>
          <LanguageChanger />
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
