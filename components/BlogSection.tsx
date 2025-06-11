"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Clock,
  User,
  Search,
  TrendingUp,
  Zap,
  Palette,
  Shield,
  Code,
  Smartphone,
  Building,
  Monitor,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { name: "All", icon: TrendingUp, count: 24 },
    { name: "MVP", icon: Zap, count: 8 },
    { name: "UI/UX", icon: Palette, count: 6 },
    { name: "Blockchain", icon: Shield, count: 5 },
    { name: "SaaS", icon: Code, count: 7 },
    { name: "Mobile", icon: Smartphone, count: 4 },
    { name: "Enterprise", icon: Building, count: 3 },
    { name: "Web Dev", icon: Monitor, count: 5 },
  ]

  const authors = [
    {
      id: "sarah-chen",
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "15+ years in enterprise software, former VP at Microsoft. Passionate about helping startups scale.",
      expertise: ["Strategy", "SaaS", "Enterprise"],
      articles: 12,
    },
    {
      id: "marcus-rodriguez",
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Blockchain pioneer and full-stack architect. Led engineering teams at Coinbase and Stripe.",
      expertise: ["Blockchain", "Architecture", "Security"],
      articles: 8,
    },
    {
      id: "aisha-patel",
      name: "Dr. Aisha Patel",
      role: "Head of AI & Innovation",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "PhD in Machine Learning from Stanford. Former research scientist at Google AI.",
      expertise: ["AI/ML", "Innovation", "Research"],
      articles: 6,
    },
    {
      id: "elena-kowalski",
      name: "Elena Kowalski",
      role: "Head of Design",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Award-winning UX designer. Former design lead at Airbnb and Figma.",
      expertise: ["UI/UX", "Design Systems", "User Research"],
      articles: 10,
    },
  ]

  const blogPosts = [
    {
      id: "mvp-validation-strategies-2024",
      title: "MVP Validation Strategies That Actually Work in 2024",
      excerpt:
        "Learn the proven methods successful startups use to validate their MVP ideas before investing significant time and money in development.",
      content:
        "Building an MVP without proper validation is like shooting in the dark. In this comprehensive guide, we'll explore the most effective validation strategies that have helped our clients secure over $50M in funding...",
      category: "MVP",
      author: "sarah-chen",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["MVP", "Validation", "Startup Strategy", "Product Development"],
      views: 2847,
      likes: 156,
    },
    {
      id: "saas-pricing-psychology",
      title: "The Psychology Behind SaaS Pricing: What Converts",
      excerpt:
        "Discover the psychological principles that drive SaaS pricing decisions and how to structure your pricing to maximize conversions and revenue.",
      content:
        "Pricing is one of the most critical decisions for any SaaS business. Get it wrong, and you'll struggle to acquire customers or generate sustainable revenue...",
      category: "SaaS",
      author: "sarah-chen",
      publishDate: "2024-01-12",
      readTime: "12 min read",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["SaaS", "Pricing", "Psychology", "Revenue"],
      views: 3241,
      likes: 203,
    },
    {
      id: "blockchain-enterprise-adoption",
      title: "Why Enterprise Blockchain Adoption is Accelerating in 2024",
      excerpt:
        "Explore the key factors driving enterprise blockchain adoption and what it means for businesses looking to implement distributed ledger technology.",
      content:
        "After years of hype and skepticism, blockchain technology is finally finding its footing in enterprise environments. Here's why 2024 is the year of mainstream adoption...",
      category: "Blockchain",
      author: "marcus-rodriguez",
      publishDate: "2024-01-10",
      readTime: "10 min read",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Blockchain", "Enterprise", "Technology Trends", "DLT"],
      views: 1923,
      likes: 89,
    },
    {
      id: "ui-ux-trends-2024",
      title: "UI/UX Design Trends That Will Dominate 2024",
      excerpt:
        "Stay ahead of the curve with the latest UI/UX design trends that are shaping user experiences across web and mobile applications.",
      content:
        "Design trends evolve rapidly, and staying current is crucial for creating engaging user experiences. Here are the key trends we're seeing in 2024...",
      category: "UI/UX",
      author: "elena-kowalski",
      publishDate: "2024-01-08",
      readTime: "7 min read",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UI/UX", "Design Trends", "User Experience", "Visual Design"],
      views: 2156,
      likes: 134,
    },
    {
      id: "mobile-app-performance-optimization",
      title: "Mobile App Performance: Optimization Techniques That Matter",
      excerpt:
        "Learn the essential techniques for optimizing mobile app performance, from reducing load times to improving battery efficiency.",
      content:
        "Performance can make or break a mobile app. Users expect lightning-fast experiences, and even a few seconds of delay can lead to abandonment...",
      category: "Mobile",
      author: "marcus-rodriguez",
      publishDate: "2024-01-05",
      readTime: "9 min read",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Mobile Development", "Performance", "Optimization", "User Experience"],
      views: 1687,
      likes: 92,
    },
    {
      id: "ai-powered-saas-features",
      title: "AI-Powered Features Every SaaS Should Consider in 2024",
      excerpt:
        "Discover how artificial intelligence can enhance your SaaS product with features that users love and that drive business value.",
      content:
        "AI is no longer a nice-to-have feature—it's becoming essential for competitive SaaS products. Here's how to integrate AI meaningfully...",
      category: "SaaS",
      author: "aisha-patel",
      publishDate: "2024-01-03",
      readTime: "11 min read",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "SaaS", "Machine Learning", "Product Features"],
      views: 2934,
      likes: 187,
    },
    {
      id: "startup-funding-pitch-deck",
      title: "Building a Winning Pitch Deck: Lessons from 100+ Startups",
      excerpt:
        "Learn what makes a pitch deck successful based on our experience helping startups raise over $50M in funding.",
      content:
        "We've helped over 100 startups create pitch decks that have collectively raised more than $50M. Here's what we've learned works...",
      category: "MVP",
      author: "sarah-chen",
      publishDate: "2024-01-01",
      readTime: "15 min read",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Startup", "Funding", "Pitch Deck", "Investment"],
      views: 4123,
      likes: 298,
    },
    {
      id: "web3-user-experience-challenges",
      title: "Solving Web3 UX: Making Blockchain Apps User-Friendly",
      excerpt:
        "Explore the unique UX challenges in Web3 applications and practical solutions for creating intuitive blockchain-based experiences.",
      content:
        "Web3 applications face unique UX challenges that traditional apps don't encounter. Here's how to create user-friendly blockchain experiences...",
      category: "Blockchain",
      author: "elena-kowalski",
      publishDate: "2023-12-28",
      readTime: "13 min read",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Web3", "UX Design", "Blockchain", "User Experience"],
      views: 1456,
      likes: 78,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  const getAuthor = (authorId: string) => authors.find((author) => author.id === authorId)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <div className="text-center text-white mb-16">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Expert Insights & Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Mobiverio
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on SaaS development, blockchain technology, startup
              strategies, and the latest tech trends from our team of industry veterans.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-white/60 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Articles</h2>
            <Badge variant="outline" className="px-4 py-2">
              Editor's Choice
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post, index) => {
              const author = getAuthor(post.author)
              return (
                <Card
                  key={post.id}
                  className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div className={`aspect-video ${index === 0 ? "lg:aspect-[2/1]" : ""} relative overflow-hidden`}>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 text-white">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <User className="h-4 w-4 mr-1" />
                      {author?.name}
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <h3
                      className={`font-bold mb-3 group-hover:text-purple-600 transition-colors ${
                        index === 0 ? "text-2xl" : "text-xl"
                      }`}
                    >
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="group/btn">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories & Articles */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <Card className="mb-8">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Categories</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon
                      return (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                            selectedCategory === category.name ? "bg-purple-100 text-purple-700" : "hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center">
                            <IconComponent className="h-4 w-4 mr-3" />
                            {category.name}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Authors */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Our Authors</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {authors.map((author) => (
                      <div key={author.id} className="flex items-start space-x-3">
                        <img
                          src={author.avatar || "/placeholder.svg"}
                          alt={author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm">{author.name}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{author.role}</p>
                          <div className="flex flex-wrap gap-1">
                            {author.expertise.slice(0, 2).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
                </h2>
                <p className="text-muted-foreground">{filteredPosts.length} articles found</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => {
                  const author = getAuthor(post.author)
                  return (
                    <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-600 text-white">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <div className="flex items-center mr-4">
                            <img
                              src={author?.avatar || "/placeholder.svg"}
                              alt={author?.name}
                              className="w-6 h-6 rounded-full mr-2"
                            />
                            {author?.name}
                          </div>
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                          <Link href={`/blog/${post.id}`}>
                            <Button variant="ghost" size="sm" className="group/btn">
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Mobiverio Insights</h2>
            <p className="text-xl mb-8 text-white/90">
              Get the latest articles, tech trends, and startup advice delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/60"
              />
              <Button className="bg-white text-purple-600 hover:bg-white/90">Subscribe</Button>
            </div>
            <p className="text-sm text-white/70 mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
