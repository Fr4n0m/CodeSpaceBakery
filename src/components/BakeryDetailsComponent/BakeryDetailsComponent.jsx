import React from "react";

export default function BakeryDetails() {
  return (
    <div className="flex justify-center items-center h-screen shadow-md">
      <div className="bg-gray-100 p-12 rounded-xl w-[80%]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                ¡Bienvenido a CodeSpace Bakery!
              </h2>
              <p className="text-lg mb-4">
                Somos una panadería especializada en donuts ubicada en el
                corazón de la ciudad.
              </p>
              <p className="text-lg mb-4">
                En CodeSpace Bakery, nos apasiona crear los donuts más
                deliciosos y creativos para nuestros clientes. Nuestro equipo de
                chefs expertos utiliza solo los ingredientes más frescos y de la
                más alta calidad para garantizar que cada bocado sea una
                experiencia memorable.
              </p>
              <p className="text-lg mb-4">
                ¡Visítanos hoy y descubre por qué somos la panadería favorita de
                la ciudad para todos los amantes de los donuts!
              </p>
              <p className="text-lg mb-4">
                Horario de Atención:
                <br />
                Lunes a Viernes: 8am - 8pm
                <br />
                Sábado y Domingo: 9am - 6pm
              </p>
              <p className="text-lg mb-4">
                Teléfono: (123) 456-7890
                <br />
                Correo Electrónico: info@codespacebakery.com
              </p>
            </div>
            <div>
              <img
                src="/assets/images/contact-image.jpeg"
                alt="CodeSpace Bakery"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
