import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[600px] mx-auto text-white/80 text-lg">
              Let's discuss how our cutting-edge solutions can accelerate your digital transformation and drive
              unprecedented growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-semibold group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="pt-8 text-white/60 text-sm">
            <p>Trusted by 150+ companies worldwide • 24/7 support • 98% client satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
