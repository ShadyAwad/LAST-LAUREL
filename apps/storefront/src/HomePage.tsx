import { lazy, Suspense, useState, type FormEvent } from 'react';
import { ArrowRight, Check, ChevronRight, X } from 'lucide-react';
import { categories, copy, journal, products, type Product } from './home-data';
import type { Locale, ThemePreference } from './i18n';
import { BrushIcon, LoaferIcon, OxfordIcon, ShoeLastIcon, StitchingIcon } from './icons';

const AtelierLight = lazy(async () => ({ default: (await import('./AtelierLight')).AtelierLight }));
type Props = {
  locale: Locale;
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
  mobileOpen: boolean;
  closeMobile: () => void;
};
const iconFor = (kind: Product['image']) =>
  kind === 'loafer' ? LoaferIcon : kind === 'derby' ? ShoeLastIcon : OxfordIcon;
const price = (value: number, locale: Locale) =>
  new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

export function HomePage({ locale, theme, setTheme, mobileOpen, closeMobile }: Props) {
  const c = copy[locale];
  const [notice, setNotice] = useState<'demo' | 'invalid' | null>(null);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email');
    setNotice(
      typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'demo' : 'invalid',
    );
  };
  return (
    <main id="main" tabIndex={-1}>
      <aside
        className={`mobile-panel ${mobileOpen ? 'is-open' : ''}`}
        aria-label={c.footerNavTitle}
        aria-hidden={!mobileOpen}
      >
        <button className="icon-button" aria-label={c.closeMenu} onClick={closeMobile}>
          <X aria-hidden="true" />
        </button>
        {c.footerLinks.map((link) => (
          <a href={`#${link}`} onClick={closeMobile} key={link}>
            {link}
          </a>
        ))}
      </aside>
      <section className="hero" aria-labelledby="hero-title">
        <Suspense
          fallback={
            <div className="atelier-light" aria-hidden="true" data-testid="atelier-fallback" />
          }
        >
          <AtelierLight />
        </Suspense>
        <div className="hero-copy">
          <p className="eyebrow">{c.heroEyebrow}</p>
          <h1 id="hero-title">{c.heroTitle}</h1>
          <p className="hero-body">{c.heroBody}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#collection">
              {c.shop}
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button-quiet" href="#craft">
              {c.craft}
            </a>
          </div>
        </div>
        <div className="hero-object" aria-label={`${c.featured}: ${c.leather}`}>
          <div className="object-stamp">{c.featured}</div>
          <OxfordIcon aria-hidden="true" />
          <StitchingIcon aria-hidden="true" />
        </div>
        <dl className="hero-specs">
          <div>
            <dt>{c.leather}</dt>
            <dd>{c.construction}</dd>
          </div>
          <div>
            <dt>{c.specLast}</dt>
            <dd>{c.specLastValue}</dd>
          </div>
          <div>
            <dt>{c.specFinish}</dt>
            <dd>{c.specFinishValue}</dd>
          </div>
          <div>
            <dt>{c.specSole}</dt>
            <dd>{c.specSoleValue}</dd>
          </div>
        </dl>
      </section>
      <section className="section categories" aria-labelledby="categories-title">
        <header className="section-heading">
          <p className="eyebrow">{c.categoriesEyebrow}</p>
          <h2 id="categories-title">{c.categoriesTitle}</h2>
          <p>{c.categoriesBody}</p>
        </header>
        <div className="category-list">
          {categories.map((category) => {
            const Icon = iconFor(category.icon);
            return (
              <a href="#collection" className="category" key={category.title.en}>
                <Icon aria-hidden="true" />
                <span>
                  <strong>{category.title[locale]}</strong>
                  <small>{category.description[locale]}</small>
                </span>
                <ChevronRight aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>
      <section id="craft" className="section anatomy" aria-labelledby="anatomy-title">
        <header className="section-heading">
          <p className="eyebrow">{c.anatomyEyebrow}</p>
          <h2 id="anatomy-title">{c.anatomyTitle}</h2>
          <p>{c.anatomyBody}</p>
        </header>
        <div className="anatomy-figure" role="img" aria-label={c.anatomyTitle}>
          <OxfordIcon aria-hidden="true" />
          <span className="label label-toe">{c.toe}</span>
          <span className="label label-vamp">{c.vamp}</span>
          <span className="label label-lacing">{c.lacing}</span>
          <span className="label label-welt">{c.welt}</span>
          <span className="label label-sole">{c.sole}</span>
          <span className="label label-heel">{c.heel}</span>
        </div>
      </section>
      <section id="collection" className="section collection" aria-labelledby="collection-title">
        <header className="section-heading split">
          <div>
            <p className="eyebrow">{c.collectionEyebrow}</p>
            <h2 id="collection-title">{c.collectionTitle}</h2>
          </div>
          <a className="inline-link" href="#collection">
            {c.viewAll}
            <ArrowRight aria-hidden="true" />
          </a>
        </header>
        <div className="product-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} labels={c} />
          ))}
        </div>
      </section>
      <section className="section material" aria-labelledby="material-title">
        <div className="material-visual">
          <ShoeLastIcon aria-hidden="true" />
          <BrushIcon aria-hidden="true" />
          <StitchingIcon aria-hidden="true" />
        </div>
        <div>
          <p className="eyebrow">{c.materialEyebrow}</p>
          <h2 id="material-title">{c.materialTitle}</h2>
          <p>{c.materialBody}</p>
          <ul>
            {c.materialList.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="journal" className="section journal" aria-labelledby="journal-title">
        <header className="section-heading">
          <p className="eyebrow">{c.journalEyebrow}</p>
          <h2 id="journal-title">{c.journalTitle}</h2>
        </header>
        <div className="journal-list">
          {journal.map((entry) => (
            <article key={entry.title.en}>
              <p className="journal-number">/ {entry.title[locale].slice(0, 1)}</p>
              <h3>{entry.title[locale]}</h3>
              <p>{entry.body[locale]}</p>
              <a className="inline-link" href="#journal">
                {c.read}
                <ArrowRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section id="newsletter" className="newsletter" aria-labelledby="newsletter-title">
        <div>
          <p className="eyebrow">{c.journalEyebrow}</p>
          <h2 id="newsletter-title">{c.newsletterTitle}</h2>
          <p>{c.newsletterBody}</p>
        </div>
        <form noValidate onSubmit={onSubmit}>
          <label htmlFor="email">{c.emailLabel}</label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={c.emailPlaceholder}
              aria-describedby="newsletter-message"
            />
            <button className="button button-primary" type="submit">
              {c.subscribe}
            </button>
          </div>
          <p id="newsletter-message" role="status">
            {notice === 'demo' ? c.newsletterDemo : notice === 'invalid' ? c.newsletterInvalid : ''}
          </p>
        </form>
      </section>
      <section className="theme-control" aria-label={c.theme}>
        <span>{c.theme}</span>
        {(['light', 'dark', 'system'] as ThemePreference[]).map((option) => (
          <button
            className={theme === option ? 'active' : ''}
            onClick={() => setTheme(option)}
            key={option}
          >
            {c[option]}
          </button>
        ))}
      </section>
    </main>
  );
}

function ProductCard({
  product,
  locale,
  labels,
}: {
  product: Product;
  locale: Locale;
  labels: (typeof copy)[Locale];
}) {
  const Icon = iconFor(product.image);
  return (
    <article className="product">
      <a href={`#${product.slug}`} aria-label={product.name[locale]}>
        <div className="product-image">
          <Icon aria-hidden="true" />
          {product.badge && <span>{product.badge[locale]}</span>}
        </div>
        <p className="eyebrow">{product.category[locale]}</p>
        <h3>{product.name[locale]}</h3>
        <p>{product.description[locale]}</p>
        <dl>
          <div>
            <dt>{product.material[locale]}</dt>
            <dd>{product.construction[locale]}</dd>
          </div>
          <div>
            <dt>{price(product.price, locale)}</dt>
            {product.compareAt && (
              <dd>
                <s>{price(product.compareAt, locale)}</s>
              </dd>
            )}
          </div>
        </dl>
        <small>{product.availability === 'limited' ? labels.limited : labels.available}</small>
      </a>
    </article>
  );
}
