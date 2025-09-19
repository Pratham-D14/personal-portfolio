import {
  Calendar,
  Clock,
  ArrowRight,
  Eye,
  MessageCircle,
  Tag,
  TrendingUp,
  BookOpen,
  Share2,
  Heart,
  Bookmark,
  Filter,
  Search,
  User,
  ChevronDown,
} from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with Next.js",
      excerpt:
        "Learn how to structure and optimize React applications for performance and scalability using Next.js and modern development practices. We'll cover server-side rendering, static generation, and advanced optimization techniques that can improve your app performance by up to 60%.",
      date: "2024-01-15",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
      tags: ["React", "Next.js", "Performance", "SSR"],
      featured: true,
      views: "2.4k",
      comments: 23,
      likes: 156,
      category: "Frontend Development",
      difficulty: "Intermediate",
      author: {
        name: "Pratam Darji",
        avatar: "PD",
        role: "Senior Developer",
      },
    },
    {
      title: "Microservices Architecture with Node.js and Docker",
      excerpt:
        "A comprehensive guide to implementing microservices architecture using Node.js, Docker containers, and Kubernetes orchestration for enterprise applications.",
      date: "2024-01-08",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      tags: ["Node.js", "Docker", "Microservices", "Kubernetes"],
      featured: false,
      views: "1.8k",
      comments: 15,
      likes: 89,
      category: "Backend Development",
      difficulty: "Advanced",
      author: {
        name: "Pratam Darji",
        avatar: "PD",
        role: "Senior Developer",
      },
    },
    {
      title: "Modern CSS Techniques for Responsive Design",
      excerpt:
        "Explore advanced CSS features including Grid, Flexbox, and Container Queries to create truly responsive web experiences that work across all devices.",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      tags: ["CSS", "Responsive Design", "Grid", "Flexbox"],
      featured: false,
      views: "3.1k",
      comments: 31,
      likes: 203,
      category: "Frontend Development",
      difficulty: "Beginner",
      author: {
        name: "Pratam Darji",
        avatar: "PD",
        role: "Senior Developer",
      },
    },
    {
      title: "Database Optimization Strategies for High Traffic Apps",
      excerpt:
        "Best practices for optimizing database performance, including indexing strategies, query optimization, and caching mechanisms for applications at scale.",
      date: "2023-12-20",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      tags: ["Database", "Performance", "Optimization", "SQL"],
      featured: false,
      views: "1.5k",
      comments: 18,
      likes: 94,
      category: "Backend Development",
      difficulty: "Advanced",
      author: {
        name: "Pratam Darji",
        avatar: "PD",
        role: "Senior Developer",
      },
    },
    {
      title: "AI Integration in Modern Web Applications",
      excerpt:
        "Discover how to integrate AI and machine learning capabilities into your web applications using modern APIs and frameworks.",
      date: "2023-12-10",
      readTime: "9 min read",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      tags: ["AI", "Machine Learning", "APIs", "Integration"],
      featured: false,
      views: "2.7k",
      comments: 42,
      likes: 187,
      category: "Emerging Tech",
      difficulty: "Intermediate",
      author: {
        name: "Pratam Darji",
        avatar: "PD",
        role: "Senior Developer",
      },
    },
    {
      title: "TypeScript Best Practices for Large Scale Applications",
      excerpt:
        "Essential TypeScript patterns and practices for building maintainable, scalable applications with better developer experience.",
      date: "2023-11-25",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      tags: ["TypeScript", "Best Practices", "Scalability"],
      featured: false,
      views: "1.9k",
      comments: 27,
      likes: 134,
      category: "Frontend Development",
      difficulty: "Intermediate",
      author: {
        name: "Pratam Darji",
        avatar: "PD",
        role: "Senior Developer",
      },
    },
  ];

  const categories = [
    "All Posts",
    "Frontend Development",
    "Backend Development",
    "Emerging Tech",
    "DevOps",
  ];
  const popularTags = [
    "React",
    "Node.js",
    "TypeScript",
    "Performance",
    "CSS",
    "Database",
    "AI",
    "Docker",
  ];

  // const blogStats = [
  //   {
  //     label: "Total Articles",
  //     value: "45+",
  //     icon: <BookOpen className="w-6 h-6" />,
  //     color: "from-blue-500 to-blue-600",
  //   },
  //   {
  //     label: "Total Views",
  //     value: "125k+",
  //     icon: <Eye className="w-6 h-6" />,
  //     color: "from-green-500 to-green-600",
  //   },
  //   {
  //     label: "Comments",
  //     value: "850+",
  //     icon: <MessageCircle className="w-6 h-6" />,
  //     color: "from-purple-500 to-purple-600",
  //   },
  //   {
  //     label: "Subscribers",
  //     value: "2.1k",
  //     icon: <User className="w-6 h-6" />,
  //     color: "from-orange-500 to-orange-600",
  //   },
  // ];

  return (
    <section id="blog" className="py-20  relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibol dark:text-black">
                Technical Blog
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>

            <p className="text-xl dark:text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Sharing knowledge, tutorials, and insights on modern web
              development, emerging technologies, and industry best practices
            </p>
          </div>

          {/* Blog Stats Dashboard */}
          {/* <div className="grid md:grid-cols-4 gap-6 mb-16">
            {blogStats.map((stat, index) => (
              <div key={index} className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-800">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* Search and Filter Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-800" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                      index === 0
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 dark:text-gray-800 hover:bg-blue-50 dark:hover:bg-gray-600 dark:hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Article */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl mb-16 hover:shadow-3xl transition-all duration-500 group"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        <TrendingUp className="w-4 h-4" />
                        Latest Article
                      </div>
                    </div>

                    {/* Stats Overlay */}
                    {/* <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Eye className="w-4 h-4" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </div>
                          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Heart className="w-4 h-4" />
                            {post.likes}
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            post.difficulty === "Beginner"
                              ? "bg-green-500"
                              : post.difficulty === "Intermediate"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        >
                          {post.difficulty}
                        </div>
                      </div>
                    </div> */}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {post.author.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-black">
                            {post.author.name}
                          </div>
                          <div className="text-sm text-gray-800 dark:text-gray-800">
                            {post.author.role}
                          </div>
                        </div>
                      </div>
                      <div className="h-4 w-px bg-gray-300 "></div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-800">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="h-4 w-px bg-gray-300 "></div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-800">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                      <span className="bg-blue-100 dark:bg-blue-300/70 text-blue-700 dark:text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-6  dark:text-blue-600 transition-all duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-800 mb-8 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-blue-300/70 text-gray-700 dark:text-blue-800 text-sm rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg group/btn cursor-pointer">
                        Read Full Article
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button className="p-3 bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 rounded-xl transition-colors cursor-pointer">
                          <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-800" />
                        </button>
                        <button className="p-3 bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 rounded-xl transition-colors cursor-pointer">
                          <Bookmark className="w-5 h-5 text-gray-600 dark:text-gray-800" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Recent Articles Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-black">
                Recent Articles
              </h3>
              {/* <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                View All
                <ChevronDown className="w-4 h-4" />
              </button> */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <article
                    key={index}
                    className="group bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-800 dark:text-gray-800 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>

                      {/* Difficulty Badge */}
                      {/* <div className="absolute top-4 right-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                            post.difficulty === "Beginner"
                              ? "bg-green-500"
                              : post.difficulty === "Intermediate"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        >
                          {post.difficulty}
                        </span>
                      </div> */}

                      {/* Stats */}
                      {/* <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </div>
                      </div> */}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-800 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-blue-600 group-hover:text-blue-800 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-200 text-gray-700 dark:text-gray-800 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {post.author.avatar}
                          </div>
                          <span className="text-m font-medium text-gray-700 dark:text-gray-800">
                            {post.author.name}
                          </span>
                        </div>

                        <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group/btn text-sm cursor-pointer">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>

          {/* Popular Tags Section */}
          {/* <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Trending Topics
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {popularTags.map((tag, index) => (
                <button
                  key={index}
                  className="group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 rounded-xl hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Tag className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  {tag}
                </button>
              ))}
            </div>
          </div> */}

          {/* Newsletter Signup */}
          {/* <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-4">Stay in the Loop</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get the latest articles, tutorials, and insights delivered
                directly to your inbox. Join 2,100+ developers who trust my
                content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-sm"
                />
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-sm opacity-75">
                No spam, unsubscribe at any time. Read our privacy policy.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
