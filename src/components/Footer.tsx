
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Rólunk</h3>
            <p className="text-sm">
            Life is Natural - CBD Kávék Webshopja:
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Linkek</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Kezdőlap</a></li>
              <li><a href="#" className="hover:text-white">Termékek</a></li>
              <li><a href="#" className="hover:text-white">Rólunk</a></li>
              <li><a href="#" className="hover:text-white">Kapcsolat</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">További infó:</h3>
            <ul className="text-sm">
              <li>Email: support@lifeisnatural.eu</li>
              <li>Cím: Poszonyi út</li>
              <li>Budapest</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 Life is Natural. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
