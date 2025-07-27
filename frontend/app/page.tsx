import { ArrowRight, Shield, Star, Truck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">
                LyricZ Motors
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-white hover:text-red-500 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Bikes
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-primary text-white px-6 py-2 rounded-lg font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Ride Your
              <span className="gradient-text block">Dreams</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover premium motorcycles that combine performance, style, and
              reliability. Your perfect ride awaits at LyricZ Motors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center group">
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-red-600 text-red-500 px-8 py-4 rounded-lg font-medium text-lg hover:bg-red-600 hover:text-white transition-colors">
                Watch Video
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏍️</div>
                <p className="text-lg">Premium Bike Showcase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose LyricZ Motors?
            </h2>
            <p className="text-xl text-gray-400">
              Premium quality, unmatched service, and your satisfaction
              guaranteed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl bg-gray-900 border border-red-600/20 hover:border-red-600/50 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assurance</h3>
              <p className="text-gray-400">
                Every bike undergoes rigorous quality checks before delivery
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-gray-900 border border-red-600/20 hover:border-red-600/50 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Free Delivery</h3>
              <p className="text-gray-400">
                Complimentary delivery to your doorstep nationwide
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-gray-900 border border-red-600/20 hover:border-red-600/50 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Expert Support</h3>
              <p className="text-gray-400">
                24/7 customer support from motorcycle experts
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-gray-900 border border-red-600/20 hover:border-red-600/50 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">5-Star Rated</h3>
              <p className="text-gray-400">
                Trusted by thousands of satisfied customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Categories</h2>
            <p className="text-xl text-gray-400">
              Find the perfect bike for your riding style
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 h-64 flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white z-10">
                  <div className="text-5xl mb-4">🏍️</div>
                  <h3 className="text-2xl font-bold mb-2">Sport Bikes</h3>
                  <p className="text-red-100">
                    High performance racing machines
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-8 h-64 flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white z-10">
                  <div className="text-5xl mb-4">🛵</div>
                  <h3 className="text-2xl font-bold mb-2">Cruisers</h3>
                  <p className="text-gray-200">
                    Comfort meets style on the road
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-red-800 to-black rounded-2xl p-8 h-64 flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white z-10">
                  <div className="text-5xl mb-4">🏍️</div>
                  <h3 className="text-2xl font-bold mb-2">Adventure</h3>
                  <p className="text-red-100">
                    Built for any terrain, any journey
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of riders who trust LyricZ Motors for their perfect
            ride
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-900 transition-colors">
            Browse Our Collection
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                LyricZ Motors
              </h3>
              <p className="text-gray-400">
                Your trusted partner for premium motorcycles and exceptional
                service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Bikes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Categories
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Sport Bikes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Cruisers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Adventure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Electric
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Trade-in
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LyricZ Motors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
