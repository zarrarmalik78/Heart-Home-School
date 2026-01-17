
import React from 'react';

interface CloudDividerProps {
  color?: string;
  flip?: boolean;
}

const CloudDivider: React.FC<CloudDividerProps> = ({ color = "#FDFCF8", flip = false }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[100px]"
        fill={color}
      >
        <path d="M0,0 C150,90 400,100 600,60 C800,20 1050,30 1200,100 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
};

export default CloudDivider;
