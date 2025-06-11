import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Heart, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPostProps {
  post: {
    id: string
    title: string
    excerpt: string
    content: string
    category: string
    author: string
    publishDate: string
    readTime: string
    image: string
    tags: string[]
    views: number
    likes: number
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  // This would typically fetch author data from a database
  const author = {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "15+ years in enterprise software, former VP at Microsoft. Passionate about helping startups scale.",
  }

  // Format content for display
  const formatContent = (content: string) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
            {paragraph.slice(2)}
          </h1>
        )
      }
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
            {paragraph.slice(3)}
          </h2>
        )
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold mt-4 mb-2">
            {paragraph.slice(4)}
          </h3>
        )
      }
      if (paragraph.trim() === "") {
        return <br key={index} />
      }
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="text-white">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <img
                  src={author.avatar || "/placeholder.svg"}
                  alt={author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold">{author.name}</div>
                  <div className="text-sm">{author.role}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.publishDate).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {post.views.toLocaleString()} views
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">{formatContent(post.content)}</div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={author.avatar || "/placeholder.svg"}
                      alt={author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{author.name}</h3>
                      <p className="text-purple-600 mb-3">{author.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{author.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Share */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Share this article</h3>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share on Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share on LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Heart className="h-4 w-4 mr-2" />
                        Like ({post.likes})
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                          <h4 className="font-medium text-sm mb-2 hover:text-purple-600 transition-colors">
                            <Link href="#">Related Article Title {i}</Link>
                          </h4>
                          <p className="text-xs text-muted-foreground">5 min read</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your MVP?</h2>
              <p className="text-white/90 mb-6">Turn your idea into reality with our proven MVP development process.</p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
