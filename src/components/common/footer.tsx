export function Footer() {
  return (
    <footer className="bg-purple-100 border-b border-purple-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-purple-900 text-center sm:text-left">
            © {new Date().getFullYear()} Shang&Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}