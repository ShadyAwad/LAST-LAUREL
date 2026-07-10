import { Menu, Search, ShoppingBag, UserRound } from 'lucide-react';
import { useState } from 'react';
import { brand } from '@last-laurel/shared';
import { HomePage } from './HomePage';
import { useLocale, useTheme } from './hooks';
import { translate } from './i18n';
import { OxfordIcon, StitchingIcon } from './icons';
import './styles.css';

export function App() {
  const { locale, setLocale } = useLocale();
  const { preference, setPreference } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = (key: Parameters<typeof translate>[1]) => translate(locale, key);
  const toggleLocale = () => setLocale(locale === 'en' ? 'ar' : 'en');
  return (
    <>
      <a className="skip-link" href="#main">
        {t('skip')}
      </a>
      <div className="announcement">{t('announcement')}</div>
      <header className="site-header">
        <button
          className="icon-button mobile-only"
          aria-label={t('menu')}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {(['home', 'collection', 'craftsmanship', 'journal'] as const).map((key) => (
            <a href="#" key={key}>
              {t(key)}
            </a>
          ))}
        </nav>
        <a className="wordmark" href="#" aria-label={`${brand.name} ${t('home')}`}>
          <OxfordIcon aria-hidden="true" /> <span>{brand.name}</span>
        </a>
        <div className="utility-nav">
          <button className="text-button" onClick={toggleLocale}>
            {t('language')}
          </button>
          <button className="icon-button" aria-label={t('search')}>
            <Search aria-hidden="true" />
          </button>
          <button className="icon-button" aria-label={t('account')}>
            <UserRound aria-hidden="true" />
          </button>
          <button className="icon-button" aria-label={t('bag')}>
            <ShoppingBag aria-hidden="true" />
          </button>
        </div>
      </header>
      <HomePage
        locale={locale}
        theme={preference}
        setTheme={setPreference}
        mobileOpen={mobileOpen}
        closeMobile={() => setMobileOpen(false)}
      />
      <footer className="site-footer">
        <StitchingIcon aria-hidden="true" />
        <div>
          <strong>{brand.name}</strong>
          <p>{t('footer')}</p>
        </div>
        <div className="footer-columns">
          <nav aria-label={t('collection')}>
            <a href="#collection">{t('collection')}</a>
            <a href="#craft">{t('craftsmanship')}</a>
          </nav>
          <nav aria-label={t('journal')}>
            <a href="#journal">{t('journal')}</a>
            <a href="#newsletter">{t('account')}</a>
          </nav>
        </div>
        <small>{t('copyright')}</small>
      </footer>
    </>
  );
}
