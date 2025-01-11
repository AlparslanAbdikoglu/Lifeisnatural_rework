import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-50 to-purple-100 py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CBD Testnek és Léleknek
            </h1>
            <p className="text-lg md:text-xl text-gray-950 mb-8">
              A CBD vagy kannabidiol a kannabisz növényből származik. Ez az a növény, amely a sokat emlegetett pszichoaktív THC-t is tartalmazza.
            </p>
            <p className="text-lg md:text-xl text-gray-950 mb-8">
              A CBD olaj azonban kevesebb mint 0,2% THC-t tartalmaz, vagy egyáltalán nem tartalmaz THC-t. Általában más olajokkal, például kendermagolajjal keverik. Nem pszichoaktív és nem okoz függőséget, de a fogyasztók számos jelentés szerint pozitív előnyökről számolnak be.
            </p>
            <Link to="/products">
              <Button variant="green"size="lg" className="animate-fade-in">
                Termék megtekintése
              </Button>
            </Link>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7l4z1piufjU"
              title="Product Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};