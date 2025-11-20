import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Twitter, Camera, ChevronLeft, ChevronRight, Aperture } from 'lucide-react';
import v1 from '../src/assets/v2.mp4';
import v3 from '../src/assets/pp.png';
import "./App.css";
// --- Assets & Data ---
const portfolioItems = [
  { id: 2, title: 'Bohemian Sunset', category: 'Outdoor', image: '../src/assets/2.jpg', size: 'small' },
  { id: 3, title: 'Golden Gala', category: 'Corporate', image: '../src/assets/3.jpg', size: 'small' },
  { id: 5, title: 'Floral Symphony', category: 'Wedding', image: '../src/assets/5.jpg', size: 'small' },
  { id: 6, title: 'Intimate Candlelight', category: 'Private', image: '../src/assets/6.jpg', size: 'large' },
  { id: 7, title: 'Crystal Reception', category: 'Wedding', image: '../src/assets/7.jpg', size: 'small' },
  { id: 8, title: 'Rustic Barn Setup', category: 'Wedding', image: '../src/assets/8.jpg', size: 'small' },
  { id: 9, title: 'Urban Loft Party', category: 'Corporate', image: '../src/assets/9.jpg', size: 'wide' },
  { id: 10, title: 'Summer Poolside', category: 'Outdoor', image: '../src/assets/10.jpg', size: 'large' },
  { id: 11, title: 'Elegant Banquet', category: 'Wedding', image: '../src/assets/11.jpg', size: 'small' },
  { id: 12, title: 'Kids Theme Park', category: 'Birthday', image: '../src/assets/12.jpg', size: 'small' },
  { id: 14, title: 'Luxury Yacht Event', category: 'Private', image: '../src/assets/14.jpg', size: 'small' },
  { id: 15, title: 'Vintage Car Display', category: 'Corporate', image: '../src/assets/15.jpg', size: 'large' },
  { id: 16, title: 'Mountain Retreat', category: 'Outdoor', image: '../src/assets/16.jpg', size: 'small' },
  { id: 17, title: 'Fairytale Castle', category: 'Wedding', image: '../src/assets/17.jpg', size: 'small' },
  { id: 18, title: 'Neon Disco Night', category: 'Birthday', image: '../src/assets/18.jpg', size: 'wide' },
  { id: 19, title: 'Grand Conference', category: 'Corporate', image: '../src/assets/19.jpg', size: 'small' },
  { id: 20, title: 'Terrace Dining', category: 'Private', image: '../src/assets/20.jpg', size: 'large' },
  { id: 21, title: 'Jungle Canopy', category: 'Outdoor', image: '../src/assets/21.jpg', size: 'small' },
  { id: 22, title: 'Desert Oasis', category: 'Wedding', image: '../src/assets/22.jpg', size: 'small' },
  { id: 23, title: 'Space Odyssey', category: 'Birthday', image: '../src/assets/23.jpg', size: 'wide' },
  { id: 24, title: 'Art Gallery Opening', category: 'Corporate', image: '../src/assets/24.jpg', size: 'small' },
  { id: 25, title: 'Masquerade Ball', category: 'Private', image: '../src/assets/25.jpg', size: 'large' },
  { id: 26, title: 'Rooftop Bar', category: 'Outdoor', image: '../src/assets/26.jpg', size: 'small' },
  { id: 27, title: 'Cottage Ceremony', category: 'Wedding', image: '../src/assets/27.jpg', size: 'small' },
  { id: 28, title: 'Superhero Bash', category: 'Birthday', image: '../src/assets/28.jpg', size: 'wide' },
  { id: 29, title: 'Product Launch', category: 'Corporate', image: '../src/assets/29.jpg', size: 'small' },
  { id: 30, title: 'Vegas Theme Night', category: 'Private', image: '../src/assets/30.jpg', size: 'large' },
  { id: 31, title: 'Vineyard Tasting', category: 'Outdoor', image: '../src/assets/31.jpg', size: 'small' },
  { id: 32, title: 'Winter Wonderland', category: 'Wedding', image: '../src/assets/32.jpg', size: 'small' },
  { id: 33, title: 'Pirate Adventure', category: 'Birthday', image: '../src/assets/33.jpg', size: 'wide' },
  { id: 34, title: 'Team Building Workshop', category: 'Corporate', image: '../src/assets/34.jpg', size: 'small' },
  { id: 35, title: 'Cocktail Party', category: 'Private', image: '../src/assets/35.jpg', size: 'large' },
  { id: 36, title: 'Meadow Picnic', category: 'Outdoor', image: '../src/assets/36.jpg', size: 'small' },
  { id: 37, title: 'Historic Mansion', category: 'Wedding', image: '../src/assets/37.jpg', size: 'small' },
  { id: 38, title: 'Carnival Festival', category: 'Birthday', image: '../src/assets/38.jpg', size: 'wide' },
  { id: 39, title: 'Annual Dinner', category: 'Corporate', image: '../src/assets/39.jpg', size: 'small' },
  { id: 41, title: 'Botanical Garden', category: 'Outdoor', image: '../src/assets/41.jpg', size: 'small' },
  { id: 42, title: 'Lakeside Ceremony', category: 'Wedding', image: '../src/assets/42.jpg', size: 'small' },
  { id: 43, title: 'Mad Hatter Tea Party', category: 'Birthday', image: '../src/assets/43.jpg', size: 'wide' },
  { id: 44, title: 'Exhibition Booth', category: 'Corporate', image: '../src/assets/44.jpg', size: 'small' },
  { id: 45, title: 'Silent Auction', category: 'Private', image: '../src/assets/45.jpg', size: 'large' },
  { id: 46, title: 'Glamping Setup', category: 'Outdoor', image: '../src/assets/46.jpg', size: 'small' },
  { id: 47, title: 'Modern Industrial', category: 'Wedding', image: '../src/assets/47.jpg', size: 'small' },
  { id: 48, title: 'Hollywood Red Carpet', category: 'Birthday', image: '../src/assets/48.jpg', size: 'wide' },
  { id: 49, title: 'Awards Night', category: 'Corporate', image: '../src/assets/49.jpg', size: 'small' },
  { id: 50, title: 'Themed Dinner', category: 'Private', image: '../src/assets/50.jpg', size: 'large' },
  { id: 51, title: 'Hot Air Balloon Ride', category: 'Outdoor', image: '../src/assets/51.jpg', size: 'small' },
  { id: 52, title: 'Zen Garden', category: 'Wedding', image: '../src/assets/52.jpg', size: 'small' },
  { id: 53, title: 'Fairy Forest', category: 'Birthday', image: '../src/assets/53.jpg', size: 'wide' },
  { id: 54, 'title': 'Networking Mixer', category: 'Corporate', image: '../src/assets/54.jpg', size: 'small' },
  { id: 56, title: 'Ski Lodge', category: 'Outdoor', image: '../src/assets/56.jpg', size: 'small' },
  { id: 57, title: 'Cathedral Ceremony', category: 'Wedding', image: '../src/assets/57.jpg', size: 'small' },
  { id: 58, title: 'Under the Sea', category: 'Birthday', image: '../src/assets/58.jpg', size: 'wide' },
  { id: 59, title: 'Charity Fundraiser', category: 'Corporate', image: '../src/assets/59.jpg', size: 'small' },
  { id: 60, title: 'Exclusive Launch Party', category: 'Private', image: '../src/assets/60.jpg', size: 'large' },
  { id: 61, title: 'Exclusive Launch Party', category: 'Private', image: '../src/assets/61.jpg', size: 'large' },
  { id: 62, title: 'Exclusive Launch Party', category: 'Private', image: '../src/assets/62.jpg', size: 'large' },
  { id: 63, title: 'Exclusive Launch Party', category: 'Private', image: '../src/assets/63.jpg', size: 'large' },
  { id: 64, title: 'Exclusive Launch Party', category: 'Private', image: '../src/assets/64.jpg', size: 'large' }
];

// --- Components ---

const SectionHeading = ({ sub, title }) => (
  <div className="mb-20 text-center space-y-4 animate-fade-up opacity-0" style={{animationDelay: '0.2s'}}>
    <div className="flex items-center justify-center gap-3">
        <div className="h-[1px] w-8 bg-neutral-600"></div>
        <span className="text-neutral-500 font-medium tracking-[0.3em] text-xs uppercase font-sans">{sub}</span>
        <div className="h-[1px] w-8 bg-neutral-600"></div>
    </div>
    <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">{title}</h2>
  </div>
);

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const base = "px-8 py-3 transition-all duration-500 font-medium text-xs tracking-[0.2em] uppercase border";
  const variants = {
    primary: "bg-white text-black border-white hover:bg-black hover:text-white",
    outline: "bg-transparent border-neutral-700 text-neutral-300 hover:border-white hover:text-white",
  };
  return <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
};

// --- ABOUT MODAL ---
const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
        <X size={32} strokeWidth={1} />
      </button>

      <div className="max-w-5xl w-full bg-neutral-900 border border-neutral-800 grid md:grid-cols-2 gap-0 overflow-y-auto max-h-[90vh] shadow-2xl relative rounded-lg">
         <div className="h-[300px] md:h-auto relative">
            <img 
              src={v3} 
              alt="Ankit Gautam" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
         </div>

         <div className="p-8 md:p-16 flex flex-col justify-center text-left">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Event Stylist & Decorator</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ankit Gautam</h2>
            <div className="w-16 h-[1px] bg-white/20 mb-8"></div>

            <p className="text-neutral-400 leading-relaxed mb-6 text-sm md:text-base font-light tracking-wide">
              Hello! I am Ankit, the creative force behind AD. Decoration. I believe that decoration is not just about filling a space, but about creating an atmosphere that resonates with your emotions. From royal weddings to elegant corporate galas, I specialize in turning empty venues into magical experiences.
            </p>
            
            <p className="text-neutral-400 leading-relaxed mb-8 text-sm md:text-base font-light tracking-wide">
              "We paint with flowers and sculpt with light. My mission is to design a backdrop so breathtaking that it becomes the perfect canvas for your most cherished memories." 
            </p>

            <div className="flex gap-4 pt-4">
                <a href="https://www.instagram.com/ankit_gautam4251/" className="text-white hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
                <a href="mailto:ankit@gmail.com" className="text-white hover:text-amber-500 transition-colors"><Mail size={20} /></a>
            </div>
         </div>
      </div>
    </div>
  );
};

// --- CONTACT MODAL ---
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
        <X size={32} strokeWidth={1} />
      </button>

      <div className="max-w-2xl w-full bg-neutral-900 border border-neutral-800 p-10 text-center shadow-2xl relative rounded-lg overflow-y-auto max-h-[90vh]">
         <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Contact Us</span>
         <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Let's Plan Your Event</h2>

         <div className="space-y-8">
            {/* Phone */}
            <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-4 group-hover:border-amber-500 transition-colors text-white">
                    <Phone size={20} />
                </div>
                <p className="text-neutral-500 text-xs tracking-widest uppercase mb-1">Call Us</p>
                <a href="tel:+917599032238" className="text-lg md:text-xl text-white font-serif group-hover:text-amber-500 transition-colors">+91 7599032238</a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-4 group-hover:border-amber-500 transition-colors text-white">
                    <Mail size={20} />
                </div>
                <p className="text-neutral-500 text-xs tracking-widest uppercase mb-1">Email Us</p>
                <a href="mailto:ankit@gmail.com" className="text-lg md:text-xl text-white font-serif group-hover:text-amber-500 transition-colors">ankit@gmail.com</a>
            </div>

             {/* Instagram */}
            <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-4 group-hover:border-amber-500 transition-colors text-white">
                    <Instagram size={20} />
                </div>
                <p className="text-neutral-500 text-xs tracking-widest uppercase mb-1">Follow Us</p>
                <a href="https://www.instagram.com/ankit_gautam4251/" target="_blank" className="text-lg md:text-xl text-white font-serif group-hover:text-amber-500 transition-colors">@ankit_gautam4251</a>
            </div>
         </div>
      </div>
    </div>
  );
};

// --- Lightbox Component ---
const LightboxGallery = ({ items, activeIndex, onClose, setActiveIndex }) => {
  if (activeIndex === null) return null;
  const currentItem = items[activeIndex];
  const totalItems = items.length;

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-xl flex items-center justify-center animate-fade-in p-4">
      <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50" onClick={onClose}>
        <X size={32} strokeWidth={1} />
      </button>

      <div className="relative w-full h-full flex flex-col justify-center items-center" onClick={onClose}>
        <div className="relative max-h-[80vh] w-full max-w-[90vw] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
           <img 
            src={currentItem.image} 
            alt={currentItem.title} 
            className="max-h-[70vh] md:max-h-[80vh] w-auto object-contain shadow-2xl"
          />
          <div className="mt-4 w-full flex justify-between items-end text-white">
            <div>
                <p className="text-neutral-500 text-[10px] md:text-xs tracking-widest uppercase mb-1">{currentItem.category}</p>
                <h3 className="text-lg md:text-2xl font-serif">{currentItem.title}</h3>
            </div>
            <p className="text-neutral-600 text-xs font-mono">{activeIndex + 1} / {totalItems}</p>
          </div>
        </div>

        <button className="absolute left-0 md:left-10 p-2 text-white/20 hover:text-white transition-colors" onClick={handlePrev}>
          <ChevronLeft size={36} md:size={48} strokeWidth={1} />
        </button>
        <button className="absolute right-0 md:right-10 p-2 text-white/20 hover:text-white transition-colors" onClick={handleNext}>
          <ChevronRight size={36} md:size={48} strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

// --- Main App ---
export default function PhotographyPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                entry.target.classList.remove('opacity-0');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const openAbout = (e) => {
      e?.preventDefault();
      setAboutOpen(true);
      setMobileMenuOpen(false); // Close mobile menu if open
      document.body.style.overflow = 'hidden';
  }
  const closeAbout = () => {
      setAboutOpen(false);
      document.body.style.overflow = 'unset';
  }

  const openContact = (e) => {
      e?.preventDefault();
      setContactOpen(true);
      setMobileMenuOpen(false); // Close mobile menu if open
      document.body.style.overflow = 'hidden';
  }
  const closeContact = () => {
      setContactOpen(false);
      document.body.style.overflow = 'unset';
  }

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-400 selection:bg-white selection:text-black">
      
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; } to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>

      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-700 border-b ${isScrolled ? 'bg-neutral-950/80 backdrop-blur-md py-4 border-white/10' : 'bg-transparent py-8 border-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
                 <Aperture className="text-white transition-transform duration-700 group-hover:rotate-90" size={28} strokeWidth={1.5} />
                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            </div>
            <span className="font-serif text-xl text-white tracking-tight ml-2">AD. DECORATION</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.2em] text-neutral-500">
            <a href="https://www.instagram.com/ankit_gautam4251/" className="hover:text-white transition-colors"><Instagram size={18}/></a>
            <a href="#" onClick={openAbout} className="hover:text-white transition-colors duration-300">ABOUT</a>
            <Button variant="outline" className="ml-4 !py-2 !px-6" onClick={openContact}>GET IN TOUCH</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* --- MOBILE MENU OVERLAY (FIXED) --- */}
      {/* --- MOBILE MENU OVERLAY (FIXED) --- */}
{mobileMenuOpen && (
<div className="absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-b border-white/5 md:hidden animate-fade-in">
<div className="flex flex-col items-center py-10 gap-8 text-sm tracking-[0.2em] font-medium text-neutral-400">


{/* Instagram */}
<a
href="https://www.instagram.com/ankit_gautam4251/"
target="_blank"
className="hover:text-white transition-colors flex items-center gap-2"
>
<Instagram size={18} /> INSTAGRAM
</a>


{/* About */}
<button
onClick={() => {
openAbout();
setMobileMenuOpen(false);
}}
className="hover:text-white transition-colors"
>
ABOUT
</button>


{/* Contact */}
<Button
variant="outline"
className="!py-3 !px-8"
onClick={() => {
openContact();
setMobileMenuOpen(false);
}}
>
GET IN TOUCH
</Button>
</div>
</div>
)}

      </nav>

      {/* --- Hero Section --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src={v1} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/20 to-neutral-950"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl opacity-0 animate-fade-up" style={{animationDelay: '0.2s'}}>
          <span className="block text-neutral-500 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6">Luxury Event Styling</span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-8 tracking-tighter leading-none">
            Designing <br/> <span className="italic font-light text-neutral-600">Your Dreams.</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto mb-12 font-light tracking-wide leading-loose">
            Transforming ordinary spaces into breathtaking experiences with exquisite florals, lights, and artistic design.
          </p>
          <div className="flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
             <span className="text-[10px] tracking-widest uppercase text-white">Scroll to Explore</span>
             <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </header>

      {/* --- Portfolio Gallery --- */}
      <section className="py-32 px-4 md:px-12 max-w-[1600px] mx-auto">
        <SectionHeading sub="Selected Works" title="Visual Narratives" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 auto-rows-[300px] md:auto-rows-[450px]">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative group overflow-hidden cursor-pointer bg-neutral-900 animate-on-scroll opacity-0 ${
                // Ensure large and wide spans only apply on md screens and up
                item.size === 'large' ? '**md:row-span-2**' : 
                item.size === 'wide' ? '**md:col-span-2**' : ''
              }`}
              onClick={() => openLightbox(index)} 
            >
             <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 filter **md:grayscale** md:group-hover:**grayscale-0** opacity-80 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-amber-500 text-[10px] tracking-[0.2em] uppercase font-bold block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-serif text-white italic">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 text-center animate-on-scroll opacity-0">
           <Button variant="outline">View All Projects</Button>
        </div>
      </section>

      {/* --- Statistics / Info Strip --- */}
      <div className="border-y border-white/10 py-16 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                  { label: 'Years Active', value: '10+' },
                  { label: 'Happy Clients', value: '150+' },
                  { label: 'Awards Won', value: '12' },
                  { label: 'Countries', value: '08' },
              ].map((stat, i) => (
                  <div key={i} className="animate-on-scroll opacity-0">
                      <div className="text-3xl md:text-4xl font-serif text-white mb-2">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{stat.label}</div>
                  </div>
              ))}
          </div>
      </div>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Let's create something <br/> <span className="text-neutral-600 italic">timeless.</span></h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Available for freelance commissions and collaborations worldwide.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
             <a href="mailto:ankit@gmail.com" className="flex items-center gap-4 text-white hover:text-amber-500 transition-colors group">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-colors">
                    <Mail size={18}/>
                </div>
                <span className="text-sm tracking-widest uppercase">ankit@gmail.com</span>
             </a>
             <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>
             <a href="tel:+917599032238" className="flex items-center gap-4 text-white hover:text-amber-500 transition-colors group">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-colors">
                    <Phone size={18}/>
                </div>
                <span className="text-sm tracking-widest uppercase">+91 7599032238</span>
             </a>
          </div>

          <Button className="min-w-[240px]" onClick={openContact}>Book a Session</Button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black text-neutral-600 py-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-neutral-400">
              <Aperture size={20} />
              <span className="font-serif text-lg text-white">AD. DECORATION</span>
          </div>
          
          <div className="text-[10px] tracking-[0.2em] uppercase">
            © 2026 ANKIT Photography. All Rights Reserved.
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/ankit_gautam4251/" className="hover:text-white transition-colors"><Instagram size={18}/></a>
          </div>
        </div>
      </footer>

      {/* --- Lightbox Overlay --- */}
      <LightboxGallery 
        items={portfolioItems} 
        activeIndex={activeImageIndex} 
        onClose={closeLightbox} 
        setActiveIndex={setActiveImageIndex} 
      />
      
      {/* --- About Modal Overlay --- */}
      <AboutModal 
        isOpen={aboutOpen} 
        onClose={closeAbout} 
      />

      {/* --- Contact Modal Overlay --- */}
      <ContactModal 
        isOpen={contactOpen} 
        onClose={closeContact} 
      />

    </div>
  );
}