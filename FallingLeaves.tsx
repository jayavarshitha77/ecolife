import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

interface LeafProps {
  id: number;
  left: number;
  size: number;
  rotation: number;
  delay: number;
  color: string;
}

const FallingLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<LeafProps[]>([]);

  const leafColors = [
    'text-emerald-500',
    'text-emerald-600',
    'text-green-500',
    'text-green-600',
    'text-yellow-600',
    'text-orange-500',
  ];

  useEffect(() => {
    const createLeaf = (id: number): LeafProps => ({
      id,
      left: Math.random() * 100,
      size: Math.random() * (24 - 16) + 16,
      rotation: Math.random() * 360,
      delay: Math.random() * 10,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
    });

    const initialLeaves = Array.from({ length: 20 }, (_, i) => createLeaf(i));
    setLeaves(initialLeaves);

    const interval = setInterval(() => {
      setLeaves(prev => {
        const newLeaves = prev.map(leaf => {
          if (document.hidden) return leaf;
          return leaf.delay > 0
            ? { ...leaf, delay: leaf.delay - 0.1 }
            : createLeaf(leaf.id);
        });
        return newLeaves;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="absolute animate-falling-leaf"
          style={{
            left: `${leaf.left}%`,
            transform: `rotate(${leaf.rotation}deg)`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          <Leaf 
            className={`${leaf.color} opacity-80`}
            style={{
              width: `${leaf.size}px`,
              height: `${leaf.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;