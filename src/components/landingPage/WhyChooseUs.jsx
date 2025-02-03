import { Shield, Dice1Icon as Dice, Trophy, Coins } from "lucide-react"

const features = [
  { 
    Icon: Shield, 
    title: "Secure & Fair Gaming",
    description: "Advanced encryption and certified RNG technology ensure your gaming experience is both safe and fair.",
    aos: "fade-left"
  },
  { 
    Icon: Dice, 
    title: "Premium Game Selection",
    description: "Access hundreds of high-quality casino games from top providers, updated regularly with new releases.",
    aos: "fade-left"
  },
  { 
    Icon: Trophy, 
    title: "Competitive Rewards",
    description: "Enjoy industry-leading winning rates and exclusive bonus programs designed to maximize your chances.",
    aos: "fade-left"
  },
  { 
    Icon: Coins, 
    title: "Smart Investment Gaming",
    description: "Strategic gaming options with real earning potential through our innovative reward systems.",
    aos: "fade-left"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#151C28] h-auto text-white p-1 sm:p-4 lg:p-30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 text-6xl sm:text-5xl">♠</div>
        <div className="absolute top-1/2 right-1/4 text-6xl sm:text-5xl">♥</div>
        <div className="absolute bottom-1/4 left-1/3 text-6xl sm:text-5xl">♦</div>
        <div className="absolute top-1/3 right-1/3 text-6xl sm:text-5xl">♣</div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full space-y-6">
            <h1 
              data-aos="fade-down"
              className="text-5xl sm:text-4xl font-bold leading-tight sm:pt-3"
            >
              Why Play Our Casino
            </h1>
            <p 
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-lg text-gray-300 max-w-xl"
            >
              Experience the thrill of premium online gaming with industry-leading security and endless entertainment options.
            </p>
            <p 
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-gray-400"
            >
              Join thousands of players worldwide who trust our platform for its reliability, fairness, and exceptional gaming experience. Our commitment to transparency and player satisfaction has made us a leading choice in the online gaming community, with a track record of creating memorable gaming moments and lasting player relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {features.map(({ Icon, title, description, aos }, index) => (
              <div 
                key={index} 
                className="space-y-4 last:mb-8"
                data-aos={aos}
                data-aos-delay={index * 200}
              >
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
