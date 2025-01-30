import { Shield, Dice1Icon as Dice, Trophy, Coins } from "lucide-react"

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
            <h1 className="text-5xl sm:text-4xl font-bold leading-tight sm:pt-3">Why Play Our Casino</h1>
            <p className="text-lg text-gray-300 max-w-xl">
              A casino is a facility for certain types of gambling. Casinos are often built combined with hotels, resorts.
            </p>
            <p className="text-gray-400">
              Debitis ad dolor sint consequatur hic, facere est doloribus temporibus in laborum similique saepe blanditiis odio nulla repellat dicta reprehenderit. Obcaecati, sed perferendis? Quam cum debitis odit recusandae dolor earum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[ 
              { Icon: Shield, title: "Online Casino Games" },
              { Icon: Dice, title: "Awesome Game State" },
              { Icon: Trophy, title: "Higher Winning Chance" },
              { Icon: Coins, title: "Invest, Win, and Earn" }
            ].map(({ Icon, title }, index) => (
              <div key={index} className="space-y-4  last:mb-8">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-400">
                  Games available in most casinos are commonly called casino games. In a casino game, you will find options.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
