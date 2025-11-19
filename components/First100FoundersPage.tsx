import React, { useState, useEffect } from "react";
import {
  Check,
  Rocket,
  Crown,
  Zap,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  X,
} from "lucide-react";

// Generate random avatar URLs using DiceBear API
const generateAvatarUrl = (seed: number) => {
  const styles = [
    "avataaars",
    "personas",
    "bottts",
    "identicon",
    "initials",
    "lorelei",
    "micah",
    "open-peeps",
  ];
  const style = styles[seed % styles.length];
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
};

export const First100FoundersPage: React.FC = () => {
  const navigate = useNavigate();
  const [slotsRemaining, setSlotsRemaining] = useState(100);
  const [loading, setLoading] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [avatars, setAvatars] = useState<string[]>([]);

  useEffect(() => {
    // Fetch count
    const fetchCount = async () => {
      try {
        const result = await First100FoundersService.getCount();
        if (result.success && result.data) {
          setSlotsRemaining(result.data.remaining);
          // Generate avatars based on slots taken (100 - remaining)
          const slotsTaken = 100 - result.data.remaining;
          const newAvatars = Array.from(
            { length: Math.min(slotsTaken, 100) },
            (_, i) => generateAvatarUrl(i + Date.now())
          );
          setAvatars(newAvatars);
        }
      } catch (error) {
        console.error("Failed to fetch count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();

    // Update count every 30 seconds
    const interval = setInterval(fetchCount, 30000);

    // Countdown timer to Dec 31, 2025
    const updateCountdown = () => {
      const now = new Date();
      const deadline = new Date("2025-12-31T23:59:59");
      const diff = deadline.getTime() - now.getTime();

      if (diff > 0) {
        setTimeRemaining({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(countdownInterval);
    };
  }, []);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: 99,
      icon: <Rocket className="h-8 w-8" />,
      description: "Perfect for individual contractors",
      features: [
        "1-month free Starter Plan ($99 value)",
        "Website auto-built for your domain",
        "ALL AI agents included (Content, Contact, Social, Booking, Partner & More)",
        "Early access to DomainFund Secret Auction",
        "Founders Badge & Directory Placement",
        "Access to VentureOS Launch Community",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "professional",
      name: "Professional",
      price: 299,
      icon: <Crown className="h-8 w-8" />,
      description: "Ideal for growing contractors",
      features: [
        "Everything in Starter",
        "Up to 25 domains",
        "Advanced AI agents",
        "Real-time analytics",
        "Priority support",
        "Premium templates",
        "Advanced automation",
        "Team collaboration",
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 999,
      icon: <Zap className="h-8 w-8" />,
      description: "For large contractor teams",
      features: [
        "Everything in Professional",
        "Up to 100 domains",
        "Custom AI agents",
        "Advanced analytics",
        "Dedicated support",
        "Custom templates",
        "White-label options",
        "Advanced security",
        "Custom integrations",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s both;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 min-h-[90vh] flex items-center">
          {/* Visible Grid Background with Avatars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
            <div className="relative w-full px-4 md:px-6 lg:px-8">
              {/* Grid Container - 10 rows x 10 columns (100 cells total, first 4.5 columns filled = 45 avatars) */}
              <div className="grid grid-cols-10 gap-0 p-0 relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden w-full">
                {Array.from({ length: 100 }).map((_, index) => {
                  const row = Math.floor(index / 10);
                  const col = index % 10;
                  // Fill first 4.5 columns (columns 0-3 fully, column 4 half = 5 rows)
                  const isFilled = col < 4 || (col === 4 && row < 5);

                  return (
                    <div
                      key={`grid-avatar-${index}`}
                      className="aspect-square flex items-center justify-center p-1 border border-white/10 bg-white/5"
                    >
                      {isFilled ? (
                        <img
                          src={generateAvatarUrl(index)}
                          alt={`Founder ${index + 1}`}
                          className="w-full h-full rounded-full border-2 border-white/60 shadow-lg object-cover opacity-80"
                          style={{
                            filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
                          }}
                          onError={(e) => {
                            console.error(
                              "Avatar failed to load:",
                              generateAvatarUrl(index)
                            );
                          }}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full border border-dashed border-white/20 bg-white/5 opacity-20" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dark Blue & Green Shining Gradient Overlay - Above Avatars */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.6) 0%, rgba(20, 83, 45, 0.7) 50%, rgba(15, 118, 110, 0.8) 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400/90 to-red-400/90 text-white rounded-full text-sm font-medium mb-6 animate-pulse shadow-lg">
                <Sparkles className="h-4 w-4" />
                Limited Time Offer
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in drop-shadow-2xl">
                🎉 Be One of the First 100 Founders
                <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
                  to Launch on VentureOS
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-delay drop-shadow-lg">
                We'll build your business before 2026. $99 now. Full platform
                access on Jan 15.
              </p>

              {/* Slots Counter */}
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl shadow-2xl mb-8 border-2 border-white/20">
                <span className="text-3xl font-bold">🔥</span>
                <div>
                  <div className="text-sm opacity-95">Founders Slots Left</div>
                  <div className="text-4xl font-bold">
                    {loading ? "..." : slotsRemaining}
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <Clock className="h-5 w-5 text-gray-200" />
                <span className="text-gray-200 font-medium">
                  This offer disappears after December 31
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 md:gap-4 text-2xl font-bold mb-8">
                <div className="bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border-2 border-white/30 transform hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                    {timeRemaining.days}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-blue-100 mt-1">
                    Days
                  </div>
                </div>
                <div className="text-white text-2xl md:text-3xl font-bold animate-pulse">
                  :
                </div>
                <div className="bg-gradient-to-br from-emerald-500/90 to-green-600/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border-2 border-white/30 transform hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                    {String(timeRemaining.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-emerald-100 mt-1">
                    Hours
                  </div>
                </div>
                <div className="text-white text-2xl md:text-3xl font-bold animate-pulse">
                  :
                </div>
                <div className="bg-gradient-to-br from-cyan-500/90 to-teal-600/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border-2 border-white/30 transform hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                    {String(timeRemaining.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-cyan-100 mt-1">
                    Minutes
                  </div>
                </div>
                <div className="text-white text-2xl md:text-3xl font-bold animate-pulse">
                  :
                </div>
                <div className="bg-gradient-to-br from-purple-500/90 to-pink-600/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border-2 border-white/30 transform hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                    {String(timeRemaining.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-purple-100 mt-1">
                    Seconds
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/first100founders/onboarding")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:from-blue-400 hover:to-purple-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-2 border-white/20"
              >
                Reserve My Founder Spot – $99
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              ✨ What You Get
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    1-month free Starter Plan
                  </h3>
                  <p className="text-gray-600 text-sm">$99 value included</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Website auto-built for your domain
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete contractor site ready to go
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    ALL AI agents included
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Content, Contact, Social, Booking, Partner & More - No Extra
                    Costs!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Early access to DomainFund Secret Auction
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Exclusive domain opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Founders Badge & Directory Placement
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Recognition in our founders directory
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Access to VentureOS Launch Community
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Join exclusive founder community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Business in a Box */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🚀 Your Business in a Box
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose your domain. We'll build a contractor site, niche
              directory, or service platform that generates leads.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Contractor Site
                </h3>
                <p className="text-gray-600">
                  Complete website for your contracting business
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Niche Directory
                </h3>
                <p className="text-gray-600">Build a directory in your niche</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Service Platform
                </h3>
                <p className="text-gray-600">Platform that generates leads</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              📆 Timeline
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Payment Processed Immediately
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Pay now and secure your spot. Your payment is processed
                    right away - no waiting!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Now – Dec 31
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Lock your spot as one of the First 100 Founders. We're
                    building your contractor website behind the scenes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Jan 5 – 14
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Private Domain Auction - Exclusive access for founders
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Jan 15 - Platform Opens!
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Full VentureOS Dashboard Unlocks - You'll receive your login
                    credentials and can start building your contractor website!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              All plans include First 100 Founders benefits
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                    plan.popular
                      ? "border-purple-500 scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold shadow-lg">
                        <Sparkles className="h-4 w-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} text-white mb-6`}
                    >
                      {plan.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">one-time</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() =>
                        navigate(`/first100founders/onboarding?plan=${plan.id}`)
                      }
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                          : "bg-gray-900 text-white hover:bg-gray-800"
                      }`}
                    >
                      Reserve {plan.name} Spot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🏆 Why VentureOS Beats the Competition
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                See how our First 100 Founders pricing compares to other
                platforms
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border-2 border-green-300">
                <span className="text-2xl">🤖</span>
                <span className="font-bold text-gray-900">
                  ALL AI Agents Included - No Extra Costs!
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 border-2 border-purple-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4 font-bold text-gray-900 text-lg">
                        Feature
                      </th>
                      <th className="text-center py-4 px-4 font-bold text-green-600 bg-green-100 rounded-tl-lg text-lg">
                        VentureOS
                        <br />
                        <span className="text-sm font-normal text-gray-600">
                          First 100 Founders
                        </span>
                      </th>
                      <th className="text-center py-4 px-4 font-bold text-gray-700 text-lg">
                        Wix/Squarespace
                      </th>
                      <th className="text-center py-4 px-4 font-bold text-gray-700 text-lg">
                        WordPress
                      </th>
                      <th className="text-center py-4 px-4 font-bold text-gray-700 text-lg">
                        Shopify
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="py-5 px-4 font-bold text-gray-900 text-lg">
                        One-Time Price
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <span className="text-3xl font-bold text-green-600">
                          $99-$999
                        </span>
                        <div className="text-sm text-gray-600 mt-1">
                          One-time payment
                        </div>
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        $16-59/month
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        $4-45/month + hosting
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        $29-299/month
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Website Auto-Built
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <Check className="h-7 w-7 text-green-600 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        AI Agents Included
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <span className="font-bold text-green-600 text-xl">
                          ALL Agents Included
                        </span>
                        <div className="text-sm text-gray-600 mt-1">
                          Content, Contact, Social, Booking, Partner & More
                        </div>
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        None
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        Plugins ($50-200/mo each)
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        Apps ($10-50/mo each)
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Contractor Features
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <Check className="h-7 w-7 text-green-600 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Booking System
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <Check className="h-7 w-7 text-green-600 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        Add-on ($15-30/mo)
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        Plugin ($50-200)
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        App ($10-30/mo)
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Partner/Referral System
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <Check className="h-7 w-7 text-green-600 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        Plugin ($100-300)
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        App ($20-50/mo)
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Automated Lead Gen
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <Check className="h-7 w-7 text-green-600 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        Plugin ($50-150)
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        App ($15-40/mo)
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Domain Auction Access
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <span className="font-bold text-green-600">
                          Early Access
                        </span>
                        <div className="text-sm text-gray-600 mt-1">
                          Jan 5-14
                        </div>
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Founders Badge
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <Check className="h-7 w-7 text-green-600 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                      <td className="py-5 px-4 text-center">
                        <X className="h-7 w-7 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Year 1 Total Cost
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <span className="text-3xl font-bold text-green-600">
                          $99-$999
                        </span>
                        <div className="text-sm text-gray-600 mt-1">
                          One-time, no monthly fees
                        </div>
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        $192-708
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        $48-540 + setup
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        $348-3,588
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-5 px-4 font-bold text-gray-900">
                        Setup Time
                      </td>
                      <td className="py-5 px-4 text-center bg-green-50">
                        <span className="font-bold text-green-600 text-lg">
                          Instant
                        </span>
                        <div className="text-sm text-gray-600 mt-1">
                          Auto-built for you
                        </div>
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        2-4 weeks
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        1-3 months
                      </td>
                      <td className="py-5 px-4 text-center text-gray-600">
                        1-2 weeks
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-10 p-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  💰 You Save Thousands in Year 1
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      $1,000+
                    </div>
                    <div className="text-gray-600 font-medium">
                      vs Wix/Squarespace
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Plus you get AI agents & automation
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      $500+
                    </div>
                    <div className="text-gray-600 font-medium">
                      vs WordPress
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Plus instant setup, no coding
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      $2,500+
                    </div>
                    <div className="text-gray-600 font-medium">vs Shopify</div>
                    <div className="text-sm text-gray-500 mt-2">
                      Plus contractor-specific features
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the First 100 Founders and get your contractor website built
              before 2026
            </p>
            <button
              onClick={() => navigate("/first100founders/onboarding")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Reserve My Founder Spot – $99
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Marketing Agent Chat */}
        <First100FoundersChat />
      </div>
    </>
  );
};
