import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { CommunityPage } from "./components/CommunityPage";
import { DashboardPage } from "./components/DashboardPage";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "community" | "dashboard">("home");

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <HomePage />
          </motion.div>
        )}
        {currentPage === "community" && (
          <motion.div
            key="community"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <CommunityPage />
          </motion.div>
        )}
        {currentPage === "dashboard" && (
          <motion.div
            key="dashboard"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <DashboardPage />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <footer className="bg-[#333333] text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white mb-4">Languages</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Spanish</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Mandarin</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">French</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">German</a></motion.li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Events</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Discussions</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Find Partners</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Success Stories</a></motion.li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Blog</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Learning Tips</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Help Center</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">API</a></motion.li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">About</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Careers</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Privacy</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#" className="hover:text-white transition-colors">Terms</a></motion.li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © 2025 Language Castle. All rights reserved.
            </p>
            <p className="text-sm text-white/70">
              🌍 Available in 87 languages
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}