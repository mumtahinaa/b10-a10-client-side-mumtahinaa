import React from 'react';

const Logo = () => {
    return (
        <div className="text-4xl font-extrabold flex items-center">
      {/* "Cine" in a modern bold font */}
      <span className="text-[#9B5DE5] font-[Bebas_Neue] tracking-wider">
        Cine
      </span>

      {/* "Nest" in an elegant cursive font */}
      <span className="text-[#00A8E8] font-[Pacifico]">
        Nest
      </span>
    </div>
    );
};

export default Logo;