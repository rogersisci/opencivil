export default function WorkoutGallery() {
  const workoutImages = [
    "/opencivil/ETABSMCPLLM.jpg",
    "/opencivil/ETABSMCPLLM.jpg",
    "/opencivil/ETABSMCPLLM.jpg"
  ];

  return (
    <section id="workoutgallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">PROYECTOS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            tecnologia para ingenieria civil basado en inteligencia artificial, algoritmos computaciones, etc.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={image}
                alt={`Workout ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold">
                  View Workout
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
