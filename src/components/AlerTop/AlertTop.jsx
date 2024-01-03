import React from 'react';

const AlertTop = () => {
  return (
    <div className="relative isolate flex items-center justify-center overflow-hidden bg-blue-100 px-6 py-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Spiderfost</strong><svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Todos los derechos reservados. La plataforma se desarrolla a partir del 20 de diciembre del 2023.
        </p>
      </div>
    </div>
  );
};

export default AlertTop;
