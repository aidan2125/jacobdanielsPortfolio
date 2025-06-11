export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Jacob Daniels. All rights reserved.
        </span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jacob@example.com"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}