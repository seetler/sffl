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
      character: "Emma Rodriguez",
      bio: "Emmy-nominated actress known for her work in comedy and drama",
      image: "/images/cast/emilyecheverria.png",
    },
    {
      name: "Amber",
      character: "Mike Chen",
      bio: "Stand-up comedian turned actor with a knack for physical comedy",
      image: "/images/cast/amberzajec.jpeg",
    },
    {
      name: "Christina",
      character: "Dr. Lisa Park",
      bio: "Theater veteran making her television debut",
      image: "/images/cast/christinakruzewska.jpg",
    },
    {
      name: "Dillon",
      character: "Tony Williams",
      bio: "Former SNL writer and performer bringing his wit to the small screen",
      image: "/images/cast/dillonthomas.png",
    },
    {
      name: "Cameran",
      character: "Jennifer Walsh",
      bio: "Award-winning actress with a background in improv and sketch comedy",
      image: "/images/cast/rachel-green.jpg",
    },
    {
      name: "Jason",
      character: "Showrunner",
      bio: "Jason is seasoned showrunner with a passion for relatable comedies",
      image: "/images/cast/jasonzeng.jpg",
    },
  ]

  const episodes = [
    {
      title: "Pilot",
      description: "Meet the gang as they navigate their first day at the new office",
      airDate: "March 15, 2024",
    },
    {
      title: "The Presentation",
      description: "Emma's big presentation goes hilariously wrong",
      airDate: "March 22, 2024",
    },
    {
      title: "Office Politics",
      description: "Mike accidentally starts a workplace revolution",
      airDate: "March 29, 2024",
    },
    { title: "The Team Building", description: "A corporate retreat turns into chaos", airDate: "April 5, 2024" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-purple-600" />
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
              <Link href="#news" className="text-gray-700 hover:text-purple-600 transition-colors">
                News
              </Link>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">Watch Trailer</Button>
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
                  Work<span className="text-purple-600">Place</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A hilarious new sitcom about the chaos, friendships, and unexpected moments that happen when you`&apos;`re
                  just trying to get through another day at the office.
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Premieres March 15, 2024</span>
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
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Promo
                </Button>
                <Button size="lg" variant="outline">
                  Set Reminder
                </Button>
              </div>
            </div>

            {/* Promo Video Section */}
            <div className="relative">
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="WorkPlace Promo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white rounded-full h-16 w-16 p-0">
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
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
            <h2 className="text-4xl font-bold text-gray-900">About the Show</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              WorkPlace follows a group of quirky employees at Pinnacle Solutions, a mid-sized consulting firm where
              nothing ever goes according to plan. From disastrous client meetings to office birthday parties that
              spiral out of control, this ensemble cast brings heart and humor to the everyday absurdities of corporate
              life.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ensemble Cast</h3>
                  <p className="text-gray-600">A talented group of actors bringing unique characters to life</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Film className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fresh Comedy</h3>
                  <p className="text-gray-600">Smart writing that finds humor in everyday workplace situations</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Award-Winning Team</h3>
                  <p className="text-gray-600">Created by Emmy-nominated writers and producers</p>
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
              Get to know the talented actors bringing the characters of WorkPlace to life
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
          <h2 className="text-4xl font-bold mb-4">Don`&apos;`t Miss the Premiere!</h2>
          <p className="text-xl mb-8 opacity-90">Set your reminders and get ready to laugh with WorkPlace</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Film className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">WorkPlace</span>
              </div>
              <p className="text-gray-400">The funniest new sitcom coming to television.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Show</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cast
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Behind the Scenes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Network</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Watch Live
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    On Demand
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fault Lines TV Show. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
