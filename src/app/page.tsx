import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/config/site';

const HomePage = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-white transition-colors duration-300 dark:bg-[#1f1f1f]"
      data-testid="home-page"
    >
      <div className="mb-10 max-w-3xl space-y-6 px-4 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl">
          Welcome to <span className="underline">{siteConfig.name}</span>
        </h1>
        <h2 className="text-base font-medium text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl">
          {siteConfig.description}
        </h2>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <span className="text-gray-600 dark:text-gray-300">Toggle theme:</span>
        <ThemeToggle data-testid="theme-toggle-button" />
      </div>
    </div>
  );
};

export default HomePage;
