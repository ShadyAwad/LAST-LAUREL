import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';

beforeEach(() => {
  localStorage.clear();
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query.includes('reduced-motion'),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
  globalThis.ResizeObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  } as unknown as typeof ResizeObserver;
  globalThis.IntersectionObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  } as unknown as typeof IntersectionObserver;
});
afterEach(cleanup);

describe('storefront homepage', () => {
  it('renders English homepage content and product data', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Form follows the foot.' })).toBeTruthy();
    expect(screen.getByText('The Aldwych Oxford')).toBeTruthy();
    expect(screen.getByText('Anatomy of a classic')).toBeTruthy();
  });

  it('switches direction repeatedly between English and Arabic', () => {
    render(<App />);
    const language = screen.getAllByRole('button', { name: 'العربية' })[0];
    fireEvent.click(language);
    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');
    expect(screen.getByRole('heading', { level: 1, name: 'الشكل يتبع القدم.' })).toBeTruthy();
    fireEvent.click(screen.getAllByRole('button', { name: 'English' })[0]);
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
  });

  it('offers theme selection and honest newsletter behavior', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Dark' })[0]);
    expect(document.documentElement.dataset.theme).toBe('dark');
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }));
    expect(screen.getByRole('status').textContent).toContain('Enter a valid email address');
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'maker@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }));
    expect(screen.getByRole('status').textContent).toContain('has not been stored');
  });

  it('keeps a static animation fallback available and exposes mobile navigation', () => {
    render(<App />);
    expect(document.querySelector('.atelier-light')).toBeTruthy();
    const menu = screen.getByRole('button', { name: 'Open navigation menu' });
    fireEvent.click(menu);
    expect(menu.getAttribute('aria-expanded')).toBe('true');
    expect(screen.getByRole('button', { name: 'Close navigation menu' })).toBeTruthy();
  });
});
