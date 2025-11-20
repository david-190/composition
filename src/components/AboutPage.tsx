import { Users, Globe, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function AboutPage() {
  const stats = [
    { value: "10,000+", label: "Active Users", icon: Users },
    { value: "150+", label: "Countries", icon: Globe },
    { value: "24/7", label: "Support", icon: Heart },
    { value: "1000+", label: "Lessons", icon: BookOpen },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
      {/* Hero Section */}
      <motion.section 
        className="w-full max-w-4xl mx-auto mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Our Language Learning Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering language learners worldwide to connect, practice, and achieve fluency through immersive experiences.
          </p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="w-full max-w-6xl mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center p-6 bg-gray-50 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="h-10 w-10 mx-auto mb-4 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div 
        className="w-full max-w-3xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-gray-600 leading-relaxed">
          Beyond our lessons, our Community Page provides an interactive and safe space for members to connect and discuss languages or diverse topics, fostering an environment where they can naturally improve their communicational skills. To support goal-oriented learners, we also host dynamic events showcased on our informative reels and posters. Additionally, for those who love metrics, our personalized Dashboards keep detailed statistics, allowing users to track their progress and celebrate every milestone on their journey to fluency.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.section 
        className="w-full max-w-4xl mb-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            We believe that language learning should be accessible, engaging, and effective for everyone, 
            regardless of their background or location. Our platform connects language learners with native 
            speakers around the world, creating meaningful cultural exchanges and lifelong friendships.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Join Our Community
          </Button>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="w-full max-w-6xl mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              name: "Juan Sanchez",
              role: "Founder & CEO",
              bio: "Language enthusiast and electrical engineer with a passion for connecting people across cultures.",
              image: "https://wallpapers.com/images/high/the-peanuts-movie-snoopy-waves-bm5edxneinyy0vxt.webp"
            },
            {
              name: "Kenny Zhu",
              role: "Internal Auditor",
              bio: "Reviews operational procedures for accuracy and compliance.",
              image: "https://wallpapers.com/images/high/stitch-halloween-mthjywhiayxst0ce.webp"
            }
          ].map((member, index) => (
            <motion.div 
              key={member.name}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
