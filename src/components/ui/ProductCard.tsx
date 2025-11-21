import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
  badge: string;
  badgeColor: 'orange' | 'white' | 'red';
  specs: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const badgeStyles = {
    orange: 'bg-spicy-orange text-white',
    white: 'bg-white text-black',
    red: 'border-2 border-red-500 text-red-500 bg-transparent',
  };

  return (
    <div className="card-dark group">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-800">
        {/* Badge */}
        <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold uppercase z-10 ${badgeStyles[product.badgeColor]}`}>
          {product.badge}
        </div>
        
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={75}
        />
      </div>
      
      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-lg font-bold uppercase text-white">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="font-display text-2xl font-black text-spicy-orange">
          R{product.price}
        </div>
        
        {/* Specs */}
        <div className="space-y-1">
          {product.specs.map((spec, index) => (
            <p key={index} className="font-mono text-xs text-text-muted uppercase">
              {spec}
            </p>
          ))}
        </div>
        
        {/* Description */}
        <p className="text-sm text-text-body italic">
          "{product.description}"
        </p>
        
        {/* CTA Button */}
        <Link 
          href={`/shop/${product.id}`}
          className="block w-full text-center border-2 border-white text-white py-3 rounded font-bold uppercase text-sm hover:bg-white hover:text-black transition-all"
        >
          COP THIS
        </Link>
      </div>
    </div>
  );
}
