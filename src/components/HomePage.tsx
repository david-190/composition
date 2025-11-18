import { MessageCircle, Users, Headphones, CheckCircle, ArrowRight, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function HomePage() {
  const features = [
    {
      icon: MessageCircle,
      titleEn: "Daily Conversations",
      titleEs: "Conversaciones Diarias",
      titleZh: "每日对话",
      description: "Practice with native speakers every day",
    },
    {
      icon: Users,
      titleEn: "Global Community",
      titleEs: "Comunidad Global",
      titleZh: "全球社区",
      description: "Connect with learners from 150+ countries",
    },
    {
      icon: Headphones,
      titleEn: "Listen & Learn",
      titleEs: "Escucha y Aprende",
      titleZh: "听和学",
      description: "Immersive audio lessons and podcasts",
    },
  ];

  const benefits = [
    "Free to join and start learning",
    "Personalized learning paths",
    "Native speaker community",
    "Progress tracking and achievements",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#008080] to-[#006666] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white mb-4"
              >
                Learn Languages Together
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl mb-6 text-white/90"
              >
                Join thousands of language learners practicing daily. Connect, speak, and grow with Language Castle.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg mb-8 text-white/80"
              >
                🇪🇸 Aprende idiomas juntos | 🇨🇳 一起学习语言 | 🇫🇷 Apprenez ensemble
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-[#FF7F50] hover:bg-[#ff6633] text-white w-full sm:w-auto"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto"
                  >
                    Browse Languages
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="aspect-video md:aspect-square rounded-lg overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzNDEzOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Diverse group of people learning together"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-[#F5F5F5] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >

          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-[#333333] mb-4">
              Why Choose Language Castle
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 128, 128, 0.15)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white border border-neutral-100 rounded-lg p-6 transition-shadow cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-[#008080]/10 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Icon className="w-7 h-7 text-[#008080]" />
                  </motion.div>
                  <h3 className="text-[#333333] mb-2">
                    {feature.titleEn}
                  </h3>
                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-[#333333]/60">{feature.titleEs}</p>
                    <p className="text-sm text-[#333333]/60">{feature.titleZh}</p>
                  </div>
                  <p className="text-[#333333]/70">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F5F5F5] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-video rounded-lg overflow-hidden shadow-lg"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706403615881-d83dc2067c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aWxpbmd1YWwlMjBjb252ZXJzYXRpb258ZW58MXx8fHwxNzYzNDEzOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Multilingual conversation"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-[#333333] mb-6">
                Start Your Journey Today
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-6 h-6 text-[#008080] flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <p className="text-[#333333]">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-[#FF7F50] hover:bg-[#ff6633] text-white"
                >
                  Join the Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#008080] to-[#00a3a3] text-white py-12 md:py-16 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-white/5"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          style={{ 
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white mb-4"
          >
            Ready to Speak Daily?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-white/90"
          >
            Join 100,000+ learners practicing languages every day
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60 h-12 w-full max-w-md mx-auto focus:bg-white/20 transition-colors"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-[#FF7F50] hover:bg-[#ff6633] text-white h-12 px-8 w-full sm:w-auto"
              >
                Get Started Free
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
