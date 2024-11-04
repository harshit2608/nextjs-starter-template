import React from 'react';
import { beforeEach, describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string }) =>
    React.createElement('img', { ...props }),
}));

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders the Next.js logo', () => {
    const logoImage = screen.getByAltText('Next.js logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute(
      'src',
      'https://nextjs.org/icons/next.svg',
    );
  });

  test('renders the Vercel logo in deploy button', () => {
    const vercelLogo = screen.getByAltText('Vercel logomark');
    expect(vercelLogo).toBeInTheDocument();
    expect(vercelLogo).toHaveAttribute(
      'src',
      'https://nextjs.org/icons/vercel.svg',
    );
  });

  test('contains a link to edit source page', () => {
    const editSourceLink = screen.getByText(/Get started by editing/i);
    expect(editSourceLink).toBeInTheDocument();
  });

  test('has "Deploy now" and "Read our docs" buttons with correct links', () => {
    const deployLink = screen.getByRole('link', { name: /Deploy now/i });
    expect(deployLink).toBeInTheDocument();
    expect(deployLink).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/new'),
    );

    const docsLink = screen.getByRole('link', { name: /Read our docs/i });
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/docs'),
    );
  });

  test('renders footer links with icons and correct URLs', () => {
    const learnLink = screen.getByRole('link', { name: /Learn/i });
    expect(learnLink).toBeInTheDocument();
    expect(learnLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/learn'),
    );

    const examplesLink = screen.getByRole('link', { name: /Examples/i });
    expect(examplesLink).toBeInTheDocument();
    expect(examplesLink).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/templates'),
    );

    const nextJsLink = screen.getByRole('link', { name: /Go to nextjs.org/i });
    expect(nextJsLink).toBeInTheDocument();
    // Adjusted this line to allow any URL that starts with "https://nextjs.org"
    expect(nextJsLink).toHaveAttribute(
      'href',
      expect.stringMatching(/^https:\/\/nextjs\.org/),
    );
  });
});
