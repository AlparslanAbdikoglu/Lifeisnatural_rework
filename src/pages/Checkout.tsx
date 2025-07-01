
import { useState } from 'react';
import { useCart } from '@/store/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { CreditCard } from 'lucide-react';

const Checkout = () => {
  const { items, total } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Fizetés sikeres!",
        description: "Köszönjük a vásárlást. Hamarosan kapni fog egy email megerősítést.",
      });
      navigate('/payment-success');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">A kosár üres</h1>
          <Button onClick={() => navigate('/products')} className="bg-green-600 hover:bg-green-700">
            Vissza a termékekhez
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Fizetés</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Rendelés összesítő</CardTitle>
            </CardHeader>
            <CardContent>
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-4 pb-4 border-b last:border-b-0">
                  <img
                    src={item.image || 'https://via.placeholder.com/80x80'}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x {item.price} Ft
                    </p>
                  </div>
                  <span className="font-semibold">
                    {item.price * item.quantity} Ft
                  </span>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Összesen:</span>
                  <span>{total} Ft</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Fizetési adatok
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email cím</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="name">Teljes név</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="cardNumber">Kártyaszám</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Lejárat</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Számlázási cím</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Város</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Irányítószám</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  {isProcessing ? 'Feldolgozás...' : `Fizetés - ${total} Ft`}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
