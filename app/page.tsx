import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Clock, Star, Users, Film } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SitcomWebsite() {
  const castMembers = [
    {
      name: "Emily",
      character: "Hannah Peller",
      bio: "A native San Franciscan with a sharp wit and a deep, grounded love for the city that quietly challenges others to face their truth.",
      image: "/images/cast/emily.jpg",
    },
    {
      name: "Amber",
      character: "Kathleen Quitary",
      bio: "A sarcastic underachiever who drifts through life with biting humor and surprising insight.",
      image: "/images/cast/amber.jpg",
    },
    {
      name: "Christina",
      character: "Laura Prescott",
      bio: "A practical and composed Midwesterner whose clarity and warmth bring balance to chaos, even as she quietly questions her own path.",
      image: "/images/cast/christina.jpg",
    },
    {
      name: "Dillon",
      character: "Hunter Ellsworth",
      bio: "A loyal and dependable friend with chronically bad romantic luck and a heart bigger than he lets on.",
      image: "/images/cast/dillon.jpg",
    },
    {
      name: "Cameran",
      character: "Lucas Carols",
      bio: "A charismatic dreamer with big ideas and little follow-through, whose charm always allows him to chase the next big thing.",
      image: "/images/cast/cameran.jpg",
    },
    {
      name: "Will",
      character: "John Waverly",
      bio: "After a failed stint as a smart oven engineer in Chicago, John returns home with a mix of self-doubt and optimism.",
      image: "/images/cast/will.jpg",
    },
  ]

  const episodes = [
  {
    title: "Pilot",
    description: "John returns to San Francisco with his fiancée Laura after a failed startup, and is unsure of what comes next. As he reconnects with his old friend Lucas, he also meets Kathleen, Hunter, and Hannah, new coworkers whose lives quickly become entangled with his in unexpected ways.",
    airDate: "March 15, 2026",
  },
  {
    title: "Aftershocks",
    description: "When Lucas accidentally sets off a petty conflict with a neighbor, it spirals into a whole-building feud. Kathleen tries to mediate, Hannah picks a side too early, and Laura gets caught in the middle thanks to her HOA connections. What should've been a simple apology reveals cracks in more than just the apartment walls.",
    airDate: "March 22, 2026",
  },
  {
    title: "Power Out",
    description: "A sudden blackout plunges the City, and the apartment, into darkness. With no screens to hide behind, secrets emerge over wine and melted ice cream. One roommate confesses a crush, another reveals a life change they\u0027ve been hiding, and someone\u0027s emergency flashlight doubles as a disco ball.",
    airDate: "March 29, 2026",
  },
  {
    title: "The Timely Street Faire",
    description: "The neighborhood\u0027s quirky spring fair is back, and everyone\u0027s roped into helping. Tensions flare as Lucas books a controversial band, John tries to avoid Laura\u0027s ex, and Hannah enters a tofu-eating contest she\u0027s wildly unqualified for.",
    airDate: "April 5, 2026",
  }
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/images/logo.jpg" alt="Fault Lines" width={40} height={40} className="h-8 w-auto" />
              <span className="text-2xl font-bold text-gray-900">Fault Lines</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#show" className="text-gray-700 hover:text-purple-600 transition-colors">
                Show
              </Link>
              <Link href="#cast" className="text-gray-700 hover:text-purple-600 transition-colors">
                Cast
              </Link>
              <Link href="#episodes" className="text-gray-700 hover:text-purple-600 transition-colors">
                Episodes
              </Link>
              {/* <Link href="#news" className="text-gray-700 hover:text-purple-600 transition-colors">
                News
              </Link> */}
            </div>
            <Link href="https://www.youtube.com/watch?v=OZcYZ5Yf1R4" target="_blank" rel="noopener noreferrer">
              <Button className="bg-purple-600 hover:bg-purple-700">Watch Trailer</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Coming Soon</Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Fault<span className="text-purple-600">Lines</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
A hilarious new comedy about the chaos, friendships, and unexpected moments that happen when the ground beneath you keeps shifting.
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Premieres March 15, 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>30 min episodes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>Comedy</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.youtube.com/watch?v=OZcYZ5Yf1R4" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Promo
                  </Button>
                </Link>
                {/* <Button size="lg" variant="outline">
                  Set Reminder
                </Button> */}
              </div>
            </div>

            {/* Promo Video Section */}
            <div className="relative">
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/OZcYZ5Yf1R4?rel=0&modestbranding=1"
                  title="Fault Lines Official Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
                Official Trailer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Information */}
      <section id="show" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-8">
              <Image src="/images/logo.jpg" alt="Fault Lines" width={400} height={400}  />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
Fault Lines follows a group of  friends finding their way in a city that constantly feels like it&apos;s about to shift. Set in San Francisco, the show blends humor and heart as the characters face uncertain futures, tangled relationships, and daily disruptions with sarcasm and resilience. When everything around them feels unstable, they can always depend on each other.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ensemble Cast</h3>
                  <p className="text-gray-600">Talented actors that blend heart with humor</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Film className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fresh Comedy</h3>
                  <p className="text-gray-600">Smart writing that finds humor in the everday</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Local Team</h3>
                  <p className="text-gray-600">Created by storytellers who know the city</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cast Section */}
      <section id="cast" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Cast</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the talented actors bringing the Fault Lines to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {castMembers.map((actor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                    <Image src={actor.image || "/placeholder.svg"} alt={actor.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{actor.name}</h3>
                    <p className="text-purple-600 font-semibold mb-3">as {actor.character}</p>
                    <p className="text-gray-600 text-sm">{actor.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Season 1 Episodes</h2>
            <p className="text-lg text-gray-600">Get ready for laughs with these upcoming episodes</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {episodes.map((episode, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge variant="outline" className="text-purple-600 border-purple-600">
                          Episode {index + 1}
                        </Badge>
                        <span className="text-sm text-gray-500">{episode.airDate}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{episode.title}</h3>
                      <p className="text-gray-600">{episode.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Don&apos;t Miss the Premiere!</h2>
          <p className="text-xl mb-8 opacity-90">Get ready to laugh, relate, and the occasional cringe</p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Set Reminder
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Follow on Social
            </Button>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Film className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">Fault Lines</span>
              </div>
              <p className="text-gray-400">The most relatable new comedy!</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Show</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="##show" className="hover:text-white transition-colors">
                    Show
                  </Link>
                </li>
                <li>
                  <Link href="#cast" className="hover:text-white transition-colors">
                    Cast
                  </Link>
                </li>
                <li>
                  <Link href="#episodes" className="hover:text-white transition-colors">
                    Episodes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Network</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="https://en.wikipedia.org/wiki/San_Francisco" className="hover:text-white transition-colors">
                    San Francisco
                  </Link>
                </li>
                <li>
                  <Link href="https://sffaultlines.blogspot.com/" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/watch?v=OZcYZ5Yf1R4" className="hover:text-white transition-colors">
                    Trailer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>

                    sffaultlines@gmail.com

                </li>
                {/* <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Facebook
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fault Lines. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
