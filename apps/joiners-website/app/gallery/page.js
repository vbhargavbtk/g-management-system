export default function Gallery() {
  const images = [
    'https://via.placeholder.com/400x300.png?text=Room+1',
    'https://via.placeholder.com/400x300.png?text=Room+2',
    'https://via.placeholder.com/400x300.png?text=Common+Area',
    'https://via.placeholder.com/400x300.png?text=Mess+Hall',
    'https://via.placeholder_com/400x300.png?text=Bathroom',
    'https://via.placeholder.com/400x300.png?text=Exterior',
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
            <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
