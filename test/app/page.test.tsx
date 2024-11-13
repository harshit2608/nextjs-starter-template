import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import HomePage from '@/app/page';
import { siteConfig } from '@/config/site';

beforeAll(() => {
  // Mock the matchMedia API to simulate light/dark mode
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: query === '(prefers-color-scheme: dark)' ? false : true, // Set to false to simulate light mode
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
});

describe('HomePage', () => {
  beforeEach(() => {
    render(
      <ThemeProvider attribute="class">
        <HomePage />
      </ThemeProvider>,
    );
  });

  it('renders the page with all main elements', () => {
    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument();

    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toHaveTextContent(`Welcome to ${siteConfig.name}`);

    const description = screen.getByRole('heading', { level: 2 });
    expect(description).toHaveTextContent(siteConfig.description);
  });

  it('displays the correct site title and description from siteConfig', () => {
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toHaveTextContent(`Welcome to ${siteConfig.name}`);

    const description = screen.getByRole('heading', { level: 2 });
    expect(description).toHaveTextContent(siteConfig.description);
  });
});
