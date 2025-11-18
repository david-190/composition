import { Target, TrendingUp, Award, Calendar, Clock, Users, BookOpen, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const posterImage = new URL("../assets/sanchez_poster1.png", import.meta.url).href;

export function DashboardPage() {
  const learningLanguages = [
    {
      name: "Spanish",
      flag: "🇪🇸",
      level: "Intermediate",
      progress: 68,
      streak: 12,
      weeklyGoal: 5,
      completed: 3,
    },
    {
      name: "Mandarin",
      flag: "🇨🇳",
      level: "Beginner",
      progress: 34,
      streak: 5,
      weeklyGoal: 3,
      completed: 2,
    },
  ];

  const recentActivity = [
    {
      type: "lesson",
      title: "Completed: Spanish Grammar - Past Tense",
      time: "2 hours ago",
      points: 50,
    },
    {
      type: "conversation",
      title: "Practice session with Maria G.",
      time: "Yesterday",
      points: 30,
    },
    {
      type: "achievement",
      title: "Earned: 7-Day Streak Badge",
      time: "2 days ago",
      points: 100,
    },
    {
      type: "lesson",
      title: "Completed: Mandarin Vocabulary - Food",
      time: "3 days ago",
      points: 40,
    },
  ];

  const achievements = [
    { icon: "🔥", name: "12-Day Streak", description: "Keep going!" },
    { icon: "⭐", name: "Fast Learner", description: "100 lessons" },
    { icon: "🗣️", name: "Conversationalist", description: "50 chats" },
    { icon: "🌍", name: "Global Citizen", description: "3 languages" },
  ];

  const upcomingSessions = [
    {
      partner: "Maria González",
      language: "Spanish",
      time: "Today, 3:00 PM",
      duration: "30 min",
    },
    {
      partner: "李明 (Li Ming)",
      language: "Mandarin",
      time: "Tomorrow, 10:00 AM",
      duration: "45 min",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-b border-neutral-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-[#333333] mb-2">
                Welcome back, User!
              </h1>
              <p className="text-[#333333]/70">
                ¡Bienvenido de nuevo! | 欢迎回来！
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-[#333333]/70">Total Points</p>
                <motion.p 
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[#008080]"
                >
                  2,847
                </motion.p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 bg-gradient-to-br from-[#FF7F50] to-[#ff6633] rounded-full flex items-center justify-center cursor-pointer"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Learning Progress */}
            <section>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#333333] mb-4"
              >
                Your Learning Progress
              </motion.h2>
              <div className="space-y-4">
                {learningLanguages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <Card className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <motion.span 
                              className="text-2xl"
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {lang.flag}
                            </motion.span>
                            <span className="text-[#333333]">{lang.name}</span>
                            <Badge variant="secondary" className="ml-2">
                              {lang.level}
                            </Badge>
                          </CardTitle>
                          <motion.div 
                            className="flex items-center gap-2 text-[#FF7F50]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <Award className="w-5 h-5" />
                            <span>{lang.streak} day streak</span>
                          </motion.div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-[#333333]/70">Overall Progress</span>
                            <span className="text-[#008080]">{lang.progress}%</span>
                          </div>
                          <Progress value={lang.progress} className="h-2" />
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                          <div className="flex items-center gap-2 text-sm text-[#333333]/70">
                            <Target className="w-4 h-4" />
                            <span>
                              Weekly Goal: {lang.completed}/{lang.weeklyGoal} sessions
                            </span>
                          </div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="sm" className="bg-[#008080] hover:bg-[#006666] text-white">
                              Continue
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" className="w-full mt-4 border-dashed hover:border-[#008080] hover:text-[#008080] transition-colors">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Learning New Language
                </Button>
              </motion.div>
            </section>

            {/* Recent Activity */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg border border-neutral-100 p-6"
            >
              <h2 className="text-[#333333] mb-4">
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(245, 245, 245, 1)" }}
                    className="flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === "achievement"
                          ? "bg-[#FF7F50]/10"
                          : "bg-[#008080]/10"
                      }`}
                    >
                      {activity.type === "lesson" && <BookOpen className="w-5 h-5 text-[#008080]" />}
                      {activity.type === "conversation" && <Users className="w-5 h-5 text-[#008080]" />}
                      {activity.type === "achievement" && <Award className="w-5 h-5 text-[#FF7F50]" />}
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-[#333333] mb-1">{activity.title}</p>
                      <p className="text-sm text-[#333333]/60">{activity.time}</p>
                    </div>
                    <Badge variant="secondary" className="bg-[#008080]/10 text-[#008080]">
                      +{activity.points}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Study Image */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg border border-neutral-100 overflow-hidden"
            >
              <ImageWithFallback
                src={posterImage}
                alt="Online video call learning session"
                className="w-full h-auto object-contain bg-black"
              />
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Goal */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#008080] to-[#006666] rounded-lg p-6 text-white overflow-hidden relative"
            >
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5" />
                  <h3 className="text-white">
                    Today's Goal
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/90">15 minutes practiced</span>
                      <span className="text-white">15/20 min</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-[#FF7F50] hover:bg-[#ff6633] text-white">
                      Continue Learning
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Upcoming Sessions */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg border border-neutral-100 p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[#008080]" />
                <h3 className="text-[#333333]">
                  Upcoming Sessions
                </h3>
              </div>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "#008080" }}
                    className="border border-neutral-100 rounded-lg p-3 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="text-sm text-[#333333] mb-1">
                          {session.partner}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {session.language}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#333333]/60 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {session.time}
                      </span>
                      <span>{session.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="w-full mt-4 hover:border-[#008080] hover:text-[#008080] transition-colors">
                  Schedule Session
                </Button>
              </motion.div>
            </motion.section>

            {/* Achievements */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg border border-neutral-100 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#333333]">
                  Achievements
                </h3>
                <Button variant="ghost" size="sm" className="text-[#008080] h-auto p-0 hover:underline">
                  View All
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      borderColor: "#008080",
                      boxShadow: "0 4px 12px rgba(0, 128, 128, 0.15)"
                    }}
                    className="border border-neutral-100 rounded-lg p-3 text-center transition-all cursor-pointer"
                  >
                    <motion.div 
                      className="text-3xl mb-2"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <p className="text-xs text-[#333333] mb-1">
                      {achievement.name}
                    </p>
                    <p className="text-xs text-[#333333]/60">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Weekly Stats */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-lg border border-neutral-100 p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#008080]" />
                <h3 className="text-[#333333]">
                  This Week
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Study Time", value: "2h 15m" },
                  { label: "Conversations", value: "5" },
                  { label: "Words Learned", value: "127" },
                  { label: "Points Earned", value: "450" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <span className="text-sm text-[#333333]/70">{stat.label}</span>
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      className="text-[#008080]"
                    >
                      {stat.value}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
