import { Menu, Search, ShoppingBag, UserRound } from 'lucide-react';
import { useLocale, useTheme } from './hooks';
import { translate } from './i18n';
import { OxfordIcon, StitchingIcon } from './icons';
import './styles.css';

export function App() {
  const { locale, setLocale } = useLocale();
  useTheme();
  const t = (key: Parameters<typeof translate>[1]) => translate(locale, key);
  const toggleLocale = () => setLocale(locale === 'en' ? 'ar' : 'en');
  return (
    <>
      <a className="skip-link" href="#main">
        {t('skip')}
      </a>
      <div className="announcement">{t('announcement')}</div>
      <header className="site-header">
        <button className="icon-button mobile-only" aria-label={t('menu')}>
          <Menu aria-hidden="true" />
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {(['home', 'collection', 'craftsmanship', 'journal'] as const).map((key) => (
            <a href="#" key={key}>
              {t(key)}
            </a>
          ))}
        </nav>
        <a className="wordmark" href="#" aria-label="LAST & LAUREL home">
          <OxfordIcon aria-hidden="true" /> <span>LAST &amp; LAUREL</span>
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
      <main id="main" tabIndex={-1} aria-label={t('main')} />
      <footer className="site-footer">
        <StitchingIcon aria-hidden="true" />
        <p>{t('footer')}</p>
        <small>{t('copyright')}</small>
      </footer>
    </>
  );
}
