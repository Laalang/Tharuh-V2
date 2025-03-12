"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Coffee,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Star,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import BackgroundPaths from "@/components/kokonutui/background-paths";
import { CursorLight } from "@/components/cursor-light";
import Image from "next/image";
import Link from "next/link";
// import { TharuhLogo } from "@/components/tharuh-logo"

const TharuhLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill="#1E3A8A" />
    <path
      d="M8 20C8 22.2091 9.79086 24 12 24H20C22.2091 24 24 22.2091 24 20V16H8V20Z"
      fill="#60A5FA"
    />
    <path
      d="M24 16V12C24 9.79086 22.2091 8 20 8H12C9.79086 8 8 9.79086 8 12V16H24Z"
      fill="#93C5FD"
    />
    <circle cx="16" cy="16" r="4" fill="#1E3A8A" />
    <path
      d="M13 11C13 9.34315 14.3431 8 16 8V8C17.6569 8 19 9.34315 19 11V16H13V11Z"
      fill="#BFDBFE"
    />
  </svg>
);

export default function BusinessProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // First, add the necessary state and handler functions at the top of the component
  // Add these after the existing useState declarations:
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all fields",
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // In a real application, you would send the form data to a server here
  };

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode class on body
  useEffect(() => {
    document.body.classList.add("dark");
    return () => document.body.classList.remove("dark");
  }, []);

  const testimonials = [
    {
      name: "Dea Salsabila",
      text: "Mobil saya tidak pernah sebersih ini dan kopinya luar biasa! Cara sempurna untuk menghabiskan Sabtu pagi saya.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Hamdani Rahmat",
      text: "Pilihan pencucian ramah lingkungan dan kopi organik menjadikan ini tempat favorit saya. Sangat merekomendasikan kombinasi cucian premium dan latte!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Wulan Putri",
      text: "Layanan hebat, staf yang ramah, dan kue-kue lezat. Saya datang ke sini bahkan ketika mobil saya tidak perlu dicuci!",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Budi Santoso",
      text: "Tempat yang sempurna untuk bersantai sambil menunggu mobil dicuci. Suasananya nyaman dan kopi mereka luar biasa!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];

  const services = {
    carwash: [
      {
        name: "Express Wash",
        price: "55k",
        description:
          "Pencucian eksterior cepat dengan bilas bebas noda, membersihakan debu eksterior",
        time: "10 min",
      },
      {
        name: "Deluxe Wash",
        price: "75k",
        description:
          "Pencucian eksterior, semir ban, dan membersikah debu interior",
        time: "20 min",
      },
      {
        name: "Premium Detail",
        price: "80k",
        description:
          "Lengkapi pembersihan interior dan eksterior dengan perlindungan lilin",
        time: "45 min",
      },
      {
        name: "Ultimate Package",
        price: "95k",
        description:
          "Detail lengkap dengan wax premium, pengkondisian interior, dan pembersihan uap",
        time: "90 min",
      },
    ],
    cafe: [
      {
        name: "Specialty Coffee",
        price: "20k",
        description: "Kopi yang baru diseduh dan minuman espresso",
        category: "Drinks",
      },
      {
        name: "Artisan Teas",
        price: "15k",
        description: "Pilihan teh daun alami premium",
        category: "Drinks",
      },
      {
        name: "Fresh Pastries",
        price: "10k",
        description: "Makanan panggang dan kue kering setiap hari",
        category: "Food",
      },
      {
        name: "Gourmet Sandwiches",
        price: "22k",
        description:
          "Sandwich yang dibuat berdasarkan pesanan dengan bahan-bahan premium",
        category: "Food",
      },
    ],
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Car being washed",
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Coffee being poured",
    },
    {
      src: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Car interior detailing",
    },
    {
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
      alt: "Cafe atmosphere",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">
      <CursorLight />
      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <TharuhLogo />
              <span className="text-2xl font-bold">Tharuh</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col gap-6 text-xl">
            {["home", "about", "services", "gallery", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="flex items-center gap-2 py-3 border-b border-white/10 hover:text-primary transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    const element = document.getElementById(section);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="capitalize">{section}</span>
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </a>
              )
            )}
          </nav>
          <div className="mt-auto">
            <div className="flex gap-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 hover:bg-white/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-sm text-white/60">
              <p>Open 7 days a week</p>
              <p>7:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <TharuhLogo />
            <span className="text-xl font-bold">Tharuh</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {["home", "about", "services", "gallery", "contact"].map(
              (section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay:
                      0.1 *
                      [
                        "home",
                        "about",
                        "services",
                        "gallery",
                        "contact",
                      ].indexOf(section),
                  }}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    activeSection === section ? "text-primary" : "text-white/80"
                  }`}
                >
                  <span className="capitalize">{section}</span>
                </motion.a>
              )
            )}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex border-white/20 hover:bg-white/10"
              onClick={scrollToContact}
            >
              Book Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <BackgroundPaths
          title="Tharuh Coffee & Carwash"
          onDiscoverClick={scrollToAbout}
        />
        <motion.div
          style={{ opacity, scale }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 mb-2">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="w-1 h-1 bg-white rounded-full"
              />
            </div>
            <span className="text-xs text-white/50">Scroll Down</span>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-4">
                Cerita Kami
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight">
                Coffee and Car Wash
              </h2>
              <p className="text-white/70 leading-relaxed">
                Didirikan pada tahun 2018, Tharuh Carwash & Cafe merevolusi
                pengalaman mencuci mobil tradisional dengan menggabungkan
                premium perawatan kendaraan dengan suasana kafe yang canggih.
                Konsep kami lahir dari ide sederhana: kenapa harus menunggu
                iseng kapan Anda bisa menikmati kopi artisanal dan makanan yang
                baru dipanggang?
              </p>
              <p className="text-white/70 leading-relaxed">
                Kami menggunakan produk pembersih ramah lingkungan dan peralatan
                hemat energi untuk layanan cuci mobil kami kafe kami menggunakan
                bahan-bahan organik yang diproduksi secara lokal bila
                memungkinkan.
              </p>
              <div className="pt-4 flex flex-wrap gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">5K+</span>
                  <span className="text-sm text-white/60">Customer Puas</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">15+</span>
                  <span className="text-sm text-white/60">Staff Ahli</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">4.9</span>
                  <span className="text-sm text-white/60">Penilaian Customer</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="https://lh5.googleusercontent.com/p/AF1QipMk5bJYoUD-kAKGcFzOQynEVwnuaaboOPI7nnNF=s508-k-no"
                  alt="Splash & Sip Carwash and Cafe"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-gradient-to-br from-primary/30 to-primary/5 rounded-2xl -z-10 blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
          >
            <Card className="bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Cuci Mendetail</h3>
                <p className="text-sm text-white/60">
                  Pencucian mobil mendetail pada setiap sudut
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Kopi Premium</h3>
                <p className="text-sm text-white/60">
                  Biji Kopi berkualitas khusus dan barista ahli
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Layanan Efisien</h3>
                <p className="text-sm text-white/60">
                  Proses yang efisien untuk meminimalkan waktu tunggu
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Lokasi Strategis</h3>
                <p className="text-sm text-white/60">
                  Mudah diakses dengan tempat parkir yang luas
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-4">
              Layanan Kami
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Layanan Terbaik bagi Anda dan Mobil Anda
            </h2>
            <p className="text-white/70">
              Perpaduan sempurna antara perawatan mobil dan budaya kafe. Kami
              menawarkan layanan komprehensif untuk menjaga Anda kendaraan murni
              sambil menikmati minuman berkualitas.
            </p>
          </motion.div>

          <Tabs defaultValue="carwash" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="carwash"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Car className="mr-2 h-4 w-4" />
                Car Wash
              </TabsTrigger>
              <TabsTrigger
                value="cafe"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Coffee className="mr-2 h-4 w-4" />
                Café Menu
              </TabsTrigger>
            </TabsList>

            <TabsContent value="carwash" className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {services.carwash.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800/80 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-white/60 text-sm">
                              {service.description}
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary"
                          >
                            {service.price}
                          </Badge>
                        </div>
                        <div className="flex items-center text-xs text-white/50">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{service.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="cafe" className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {services.cafe.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800/80 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-white/60 text-sm">
                              {item.description}
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary"
                          >
                            {item.price}
                          </Badge>
                        </div>
                        <div className="flex items-center text-xs text-white/50">
                          <span>{item.category}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center mt-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToContact}
            >
              Booking Sekarang
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery/Testimonials Section */}
      <section id="gallery" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-4">
              Galeri
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Testimonials
            </h2>
            <p className="text-white/70">
              Dengarkan langsung pendapat dari customer kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="bg-neutral-800/50 border-neutral-700/50 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-neutral-600"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-white/80 italic mb-6 flex-grow">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="font-medium">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl aspect-square group"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">
                    Pelanggan Tharuh
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-neutral-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <BackgroundPaths title="" showButton={false} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-4">
                Hubungi Kami
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight">
                Menjadi bagian dari Tharuh
              </h2>
              <p className="text-white/70">
                Kunjungi kami hari ini atau hubungi kami untuk mempelajari lebih
                lanjut tentang layanan kami. Kami berlokasi strategis dan siap
                melakukannya melayani Anda dan kendaraan Anda.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Lokasi</h3>
                    <p className="text-white/70">
                      Jl. Tidar, Kloncing, Karangrejo, Kec. Sumbersari, Jember
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Jam</h3>
                    <p className="text-white/70">24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Nomor</h3>
                    <p className="text-white/70">(62) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-white/70">tharuh.cs@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <Link
                  href="https://www.instagram.com/tharuh.cs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/20 hover:bg-white/10"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-neutral-800/50 border-neutral-700/50">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>

                  {formStatus.message && (
                    <div
                      className={`mt-4 p-3 rounded-md ${
                        formStatus.error
                          ? "bg-red-500/20 text-red-200"
                          : "bg-green-500/20 text-green-200"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Tharuh Carwash & Cafe</h3>
              <p className="text-sm text-white/60">
                Perpaduan sempuran antara carwash dan cafe, memberikan layanan
                terbaik serta produk premium.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#home"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Express Wash
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Deluxe Wash
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Premium Detail
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Café Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Loyalty Program
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Tharuh. All rights reserved by Galang.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-xs text-white/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-white/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-white/60 hover:text-primary transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
