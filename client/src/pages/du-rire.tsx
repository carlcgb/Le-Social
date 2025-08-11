import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Mic,
  Star,
  Heart,
  ArrowLeft,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import logoAnimated from "@assets/Untitled-design-unscreen_1754780840848.gif";
import { BrickWall } from "@/components";

export default function DuRirePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-09-20T20:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/">
          <button
            className="bg-burgundy-500/20 backdrop-blur-sm border border-[#c71724] rounded-full p-3 hover:bg-burgundy-500/30"
            style={{ color: "#ffffff" }}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
      </div>
      {/* Reserve button - fixed top right */}
      <div className="fixed top-8 right-8 z-50">
        <a
          href="https://app.tixigo.com/TOffice?token=sNozI5aN0tE7QVy3zaUxCFBQFtB%2Bg7sW0cWMhItujXo%3D&fbclid=IwY2xjawL-8z9leHRuA2FlbQIxMABicmlkETFibFdFQ0doVVFTOVdnSVc3AR4ABF-vM7_NsRFZfEUztGTJ5NL1YxibJpbmV3i3GVeE7IhiCy3inGDwReJMdw_aem_-7nVUgUJXOxeZJvH2oiH5Q"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-black/80 px-8 py-4 rounded-full font-bold text-lg border-2 border-[#c71724] inline-block neon-button"
          style={{ color: "#ffffff" }}
        >
          Réserver votre place
        </a>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient with brick wall - 100% viewport height */}
        <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-burgundy-900 via-black to-burgundy-800 z-0">
          <BrickWall />
        </div>

        <div className="relative z-50 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 flex justify-center">
            <img
              src={logoAnimated}
              alt="La Soirée du Rire de Granby - Logo néon animé"
              className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl h-auto opacity-90 drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.8))'
              }}
            />
          </div>

          <p
            className="text-xl md:text-2xl mb-8 font-light"
            style={{
              color: "#ffffff",
              opacity: 1,
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            L'événement signature du Social Bar & Cie
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-burgundy-500/20 backdrop-blur-md border border-gold-500/30 rounded-2xl px-8 py-6 flex flex-col items-center max-w-2xl">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 mr-3 text-gold-500" />
                <span
                  className="text-2xl font-semibold"
                  style={{
                    color: "#ffffff",
                    opacity: 1,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  Prochain Spectacle
                </span>
              </div>
              <div
                className="text-lg mb-6 font-medium"
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                20 septembre 2025 - 20h
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-500 mb-2">
                    {timeLeft.days}
                  </div>
                  <div
                    className="text-lg font-medium"
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    jours
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-500 mb-2">
                    {timeLeft.hours}
                  </div>
                  <div
                    className="text-lg font-medium"
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    heures
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-500 mb-2">
                    {timeLeft.minutes}
                  </div>
                  <div
                    className="text-lg font-medium"
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    min
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold-500 mb-2">
                    {timeLeft.seconds}
                  </div>
                  <div
                    className="text-lg font-medium"
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    sec
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About the Event */}
      <section className="py-20 px-4 relative z-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-playfair mb-6"
              style={{
                color: "#ffffff",
                opacity: 1,
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Une soirée d'humour unique
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{
                color: "#ffffff",
                opacity: 1,
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Chaque mois, le Social Bar & Cie se transforme en scène de comédie
              pour accueillir les meilleurs humoristes de la région dans une
              ambiance burlesque incomparable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-8 text-center">
              <Mic className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3
                className="text-2xl font-playfair mb-4"
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Humoristes locaux
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Découvrez les talents émergents et confirmés de la scène
                humoristique québécoise
              </p>
            </div>

            <div className="bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-8 text-center">
              <Users className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3
                className="text-2xl font-playfair mb-4"
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Ambiance intimiste
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Une proximité unique avec les artistes dans notre cadre
                burlesque authentique
              </p>
            </div>

            <div className="bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-8 text-center">
              <Heart className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3
                className="text-2xl font-playfair mb-4"
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Expérience complète
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  opacity: 1,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Spectacle, cocktails signature et ambiance festive pour une
                soirée mémorable
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Event Details */}
      <section className="py-20 px-4 relative z-40 bg-[#00000000]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-playfair mb-6"
              style={{
                color: "#ffffff",
                opacity: 1,
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Informations pratiques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-white mr-4 mt-1" />
                <div>
                  <h3
                    className="text-2xl font-playfair mb-2"
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    Lieu
                  </h3>
                  <p
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                    className="text-[20px]"
                  >
                    Social Bar & Cie
                    <br />
                    150 Rue Saint-Jacques
                    <br />
                    Granby, QC J2G 3V3
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-6 h-6 text-white mr-4 mt-1" />
                <div>
                  <h3
                    className="text-2xl font-playfair mb-2"
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    Suivez-nous
                  </h3>
                  <div className="flex space-x-4 mt-3">
                    <a
                      href="https://facebook.com/social.bar.cie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-full inline-flex items-center"
                      style={{ color: "#ffffff" }}
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com/social_par_attelier_archibald"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full inline-flex items-center"
                      style={{ color: "#ffffff" }}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-white mr-4 mt-1" />
                <div>
                  <h3
                    className="text-2xl font-playfair mb-2"
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    Horaires
                  </h3>
                  <p
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                    className="text-[20px]"
                  >
                    Ouverture pour souper : 17h
                    <br />
                    Début du spectacle : 20h
                    <br />
                    Fin de soirée : 22h
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Star className="w-6 h-6 text-white mr-4 mt-1" />
                <div>
                  <h3
                    className="text-2xl font-playfair mb-2"
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    Tarifs
                  </h3>
                  <p
                    style={{
                      color: "#ffffff",
                      opacity: 1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                    className="text-[20px]"
                  >
                    Prévente : 15$ par personne
                    <br />À la porte : 20$ par personne
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
