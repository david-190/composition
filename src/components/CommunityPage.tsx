import { Search, Filter, MessageCircle, Users, Video, Calendar, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function CommunityPage() {
  const upcomingEvents = [
    {
      title: "Spanish Conversation Circle",
      time: "Today, 3:00 PM EST",
      participants: 12,
      maxParticipants: 15,
      language: "Spanish",
      level: "Intermediate",
    },
    {
      title: "Mandarin Practice Session",
      time: "Tomorrow, 10:00 AM EST",
      participants: 8,
      maxParticipants: 12,
      language: "Mandarin",
      level: "Beginner",
    },
    {
      title: "French Culture & Chat",
      time: "Nov 19, 5:00 PM EST",
      participants: 15,
      maxParticipants: 20,
      language: "French",
      level: "All Levels",
    },
  ];

  const communityMembers = [
    {
      name: "Maria González",
      languages: ["Spanish", "English"],
      learning: "Portuguese",
      location: "Mexico",
      status: "online",
    },
    {
      name: "李明 (Li Ming)",
      languages: ["Mandarin", "English"],
      learning: "Japanese",
      location: "China",
      status: "online",
    },
    {
      name: "Sophie Martin",
      languages: ["French", "English"],
      learning: "German",
      location: "France",
      status: "offline",
    },
    {
      name: "Ahmed Hassan",
      languages: ["Arabic", "English"],
      learning: "Spanish",
      location: "Egypt",
      status: "online",
    },
  ];

  const discussionTopics = [
    {
      title: "Best resources for learning pronunciation?",
      author: "Carlos_92",
      replies: 24,
      language: "All",
      timestamp: "2 hours ago",
    },
    {
      title: "Looking for Spanish exchange partner",
      author: "Emma_learns",
      replies: 8,
      language: "Spanish",
      timestamp: "5 hours ago",
    },
    {
      title: "Mandarin tones - tips and tricks",
      author: "语言爱好者",
      replies: 42,
      language: "Mandarin",
      timestamp: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-b border-neutral-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-[#333333] mb-4">
            Community Hub
          </h1>
          <p className="text-lg text-[#333333]/70 mb-6">
            Connect with language learners worldwide | Conecta con estudiantes | 与学习者联系
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/50" />
              <Input
                placeholder="Search members, events, discussions..."
                className="pl-10 h-11 bg-white border-neutral-200 focus:border-[#008080] transition-colors"
              />
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="h-11 border-neutral-200 hover:border-[#008080] hover:text-[#008080] transition-colors w-full md:w-auto">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Events */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg border border-neutral-100 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#333333]">
                  Upcoming Events
                </h2>
                <Button variant="ghost" className="text-[#008080] hover:underline">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: "#008080",
                      boxShadow: "0 4px 12px rgba(0, 128, 128, 0.1)"
                    }}
                    className="border border-neutral-100 rounded-lg p-4 transition-all cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-[#333333] mb-1">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[#333333]/60">
                          <Calendar className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-[#008080]/10 text-[#008080]">
                          {event.language}
                        </Badge>
                        <Badge variant="outline">{event.level}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-[#333333]/60">
                        <Users className="w-4 h-4" />
                        <span>
                          {event.participants}/{event.maxParticipants} participants
                        </span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" className="bg-[#FF7F50] hover:bg-[#ff6633] text-white">
                          Join Event
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Discussion Board */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg border border-neutral-100 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#333333]">
                  Recent Discussions
                </h2>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" className="text-[#008080] hover:underline">
                    New Topic
                  </Button>
                </motion.div>
              </div>

              <div className="space-y-3">
                {discussionTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      x: 5,
                      backgroundColor: "rgba(245, 245, 245, 1)"
                    }}
                    className="border border-neutral-100 rounded-lg p-4 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-[#333333] flex-1">
                        {topic.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {topic.language}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#333333]/60">
                      <span>by {topic.author}</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        {topic.replies} replies
                      </span>
                      <span>{topic.timestamp}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Community Image */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg border border-neutral-100 overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655472355485-d949925e67bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzYzNDEzOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Language study group"
                className="w-full aspect-video object-cover"
              />
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Members */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg border border-neutral-100 p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-[#333333]">
                  Active Members
                </h3>
              </div>

              <div className="space-y-4">
                {communityMembers.map((member, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(245, 245, 245, 0.5)" }}
                    className="flex items-start gap-3 p-2 rounded-lg transition-all"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 bg-gradient-to-br from-[#008080] to-[#00a3a3] rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                    >
                      <span className="text-white">
                        {member.name.charAt(0)}
                      </span>
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm text-[#333333] truncate">
                          {member.name}
                        </h4>
                        {member.status === "online" && (
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-green-500 rounded-full"
                          />
                        )}
                      </div>
                      <p className="text-xs text-[#333333]/60 mb-1">
                        Speaks: {member.languages.join(", ")}
                      </p>
                      <p className="text-xs text-[#333333]/60">
                        Learning: {member.learning}
                      </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" variant="ghost" className="h-8 px-3 hover:bg-[#008080]/10 hover:text-[#008080]">
                        <MessageCircle className="w-3.5 h-3.5" />
                      </Button>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="w-full mt-4 hover:border-[#008080] hover:text-[#008080] transition-colors">
                  View All Members
                </Button>
              </motion.div>
            </motion.section>

            {/* Quick Actions */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-[#008080] to-[#006666] rounded-lg p-6 text-white relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <div className="relative z-10">
                <h3 className="text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                      <Video className="w-4 h-4 mr-2" />
                      Start Video Chat
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                      <Globe className="w-4 h-4 mr-2" />
                      Find Partners
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-[#FF7F50] hover:bg-[#ff6633] text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      Create Event
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Stats */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg border border-neutral-100 p-6"
            >
              <h3 className="text-[#333333] mb-4">
                Community Stats
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Active Members", value: "1,247" },
                  { label: "Events This Week", value: "42" },
                  { label: "Languages", value: "87" },
                  { label: "Countries", value: "152" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <span className="text-sm text-[#333333]/70">{stat.label}</span>
                    <motion.span 
                      whileHover={{ scale: 1.15 }}
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
