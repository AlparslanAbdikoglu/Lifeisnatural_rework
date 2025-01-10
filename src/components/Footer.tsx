export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">A life is natural:</h3>
            <p className="text-sm">
              Life Is Natural CBD kávébolt és webshop.
            </p>

          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Fontos Linkek</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/szallitas" className="hover:text-white">Szállítással kapcsolatos információk</a></li>
              <li><a href="/aszf" className="hover:text-white">Adatvédelmi szabályzat és általános feltételek</a></li>
              <li><a href="/contacts" className="hover:text-white">Kapcsolat</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Kapcsolat</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@lifeisnatural.eu</li>
              <li>Keress minket bizalommal: Pozsonyi út 30</li>
              <li>1137 Budapest</li>
            </ul>
          </div>
          <div className="flex justify-center items-center mt-8">
          <img
            src="/images/logo.webp"  // Replace with your logo's actual path
            alt="Life is Natural Logo"
            className="h-20"        // Adjust the height of the logo as needed
          />
        </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 Life is Natural. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};