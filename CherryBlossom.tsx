import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  rotation: number;
  delay: number;
}

const CherryBlossom: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = (id: number): Petal => ({
      id,
      left: Math.random() * 100,
      size: Math.random() * (20 - 10) + 10,
      rotation: Math.random() * 360,
      delay: Math.random() * 10,
    });

    const initialPetals = Array.from({ length: 30 }, (_, i) => createPetal(i));
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals(prev => {
        const newPetals = prev.map(petal => {
          if (document.hidden) return petal;
          return petal.delay > 0
            ? { ...petal, delay: petal.delay - 0.1 }
            : createPetal(petal.id);
        });
        return newPetals;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute animate-cherry-blossom"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            transform: `rotate(${petal.rotation}deg)`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <div className="w-full h-full bg-pink-200 rounded-full opacity-80" />
        </div>
      ))}
    </div>
  );
};

export default CherryBlossom;