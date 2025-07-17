
const EditorialGallery = () => {
  return (
    <section className="py-24">
      <div className="editorial-container">
        <h2 className="text-3xl font-serif mb-14 text-center">Editorial</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large image 1 */}
          <div className="md:col-span-7 md:row-span-2 h-[40rem] md:h-auto">
            <div className="h-full w-full">
              <img 
                src="/lovable-uploads/68a24d84-4ea0-4014-a8a6-94bff79b56c7.png" 
                alt="Person wearing WINEBRAND in snow" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          {/* Text block */}
          <div className="md:col-span-5 flex items-center">
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">Colección Invierno 2025</h3>
              <p className="text-wine-gray">
                Inspirados por la naturaleza y los paisajes más imponentes, nuestra colección
                de invierno refleja la tranquilidad y la fuerza de las montañas nevadas.
                Cada prenda está diseñada para acompañarte en tus momentos de exploración
                y contemplación.
              </p>
            </div>
          </div>
          
          {/* Small image */}
          <div className="md:col-span-5">
            <img 
              src="/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png" 
              alt="Person wearing WINEBRAND t-shirt" 
              className="w-full h-80 object-cover"
            />
          </div>
          
          {/* Large image 2 */}
          <div className="md:col-span-8 h-96">
            <img 
              src="/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png" 
              alt="Black WINEBRAND sweater" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Quote block */}
          <div className="md:col-span-4 bg-wine-DEFAULT text-white flex items-center">
            <div className="p-8">
              <p className="text-lg font-serif italic leading-relaxed">
                "La ropa que hacemos es la misma que usamos. No creamos lo que no nos pondríamos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialGallery;
