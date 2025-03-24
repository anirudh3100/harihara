import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { news } from "@/lib/data";

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">News & Media</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay updated with our latest news, announcements, and media coverage.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <Card key={item.id} className="h-full">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-muted-foreground">{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
