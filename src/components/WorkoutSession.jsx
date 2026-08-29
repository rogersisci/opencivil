export default function WorkoutSession() {
  return (
    <section id="workoutsession" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">INNOVACIÓN EN INGENIERÍA CIVIL</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Potencia tus proyectos con nuestra suite de herramientas de código abierto y libre acceso. Diseña estructuras, calcula recursos hídricos y optimiza procesos constructivos con una plataforma moderna de ingeniería. Ideal para profesionales y estudiantes. ¡Lleva tus obras al siguiente nivel con tecnología accesible y colaborativa!
            </p>

            <div className="space-y-6">
              {/* High-Intensity Training */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <i className="fa-sharp fa-solid fa-bolt text-white text-xl" style={{ color: '#74C0FC' }}></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Software Libre y Accesible</h3>
                  <p className="text-gray-400 text-sm">Herramientas potentes y gratuitas para todos los ingenieros.</p>
                </div>
              </div>

              {/* Expert Guidance */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <i className="fa-sharp-duotone fa-solid fa-circle-check text-white text-xl" style={{ "--fa-primary-color": "#63E6BE", "--fa-secondary-color": "#63E6BE" }}></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Respaldo Técnico</h3>
                  <p className="text-gray-400 text-sm">Soluciones confiables desarrolladas con rigor ingenieril.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://mcad.ec/wp-content/uploads/CONSTRUCCION.jpg"
                alt="Workout session"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute top-6 left-6">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-2xl w-fit">
                  357
                </div>
                <p className="text-white text-sm mt-1">IA</p>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-xs">ING. ESTRUCTURAL</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs">HIDRAULICA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-xs">RECURSOS HIDRICOS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
