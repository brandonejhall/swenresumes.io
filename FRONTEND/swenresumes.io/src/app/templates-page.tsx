import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const templates = [
  { id: 1, name: "Modern Clean", image: "/placeholder.svg?height=400&width=300" },
  { id: 2, name: "Classic Professional", image: "/placeholder.svg?height=400&width=300" },
  { id: 3, name: "Tech Minimalist", image: "/placeholder.svg?height=400&width=300" },
  { id: 4, name: "Code Focused", image: "/placeholder.svg?height=400&width=300" },
  { id: 5, name: "Data Scientist Special", image: "/placeholder.svg?height=400&width=300" },
  { id: 6, name: "Startup Ready", image: "/placeholder.svg?height=400&width=300" },
]

export default function TemplatesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Choose Your Template</h1>
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Image
                src={template.image || "/placeholder.svg"}
                alt={template.name}
                width={300}
                height={400}
                className="w-full object-cover"
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-4">
              <Button variant="outline" asChild>
                <Link href={`/preview/${template.id}`}>Preview</Link>
              </Button>
              <Button>
                <Check className="mr-2 h-4 w-4" /> Select
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

