import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Database, Zap, ChevronRight } from "lucide-react"

export default function WorkShowcase() {
  const projects = [
    {
      title: "FinTech Analytics Dashboard",
      category: "SaaS Platform",
      description:
        "Real-time financial analytics platform serving 10,000+ users with advanced data visualization and AI-powered insights.",
      metric: "10K+ Active Users",
      icon: Users,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "NFT Marketplace",
      category: "Blockchain",
      description:
        "Decentralized marketplace for digital assets with smart contract automation and cross-chain compatibility.",
      metric: "$2M+ Transaction Volume",
      icon: Database,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Supply Chain Management",
      category: "Enterprise",
      description:
        "End-to-end supply chain visibility platform with IoT integration and predictive analytics for Fortune 500 client.",
      metric: "40% Efficiency Increase",
      icon: Zap,
      gradient: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <section id="work" className="w-full py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Recent Success Stories</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
            Discover how we've helped businesses transform their operations with innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 text-white border-0 mb-2">{project.category}</Badge>
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <IconComponent className="h-4 w-4 mr-1" />
                    {project.metric}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
