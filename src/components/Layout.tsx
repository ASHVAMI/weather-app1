import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-3xl">Weather App</h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-blue-500 p-4 text-center text-white">
        Footer Content
      </footer>
    </div>
  );
}
