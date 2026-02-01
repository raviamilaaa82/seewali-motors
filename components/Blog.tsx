import { Calendar, ArrowRight, User } from "lucide-react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
    category: "Maintenance",
    date: "Jan 15, 2025",
    author: "John Smith",
    title: "Essential Car Maintenance Tips for Winter",
    excerpt: "Prepare your vehicle for cold weather with these expert tips to ensure safe driving all season long.",
  },
  {
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80",
    category: "Technology",
    date: "Jan 10, 2025",
    author: "Sarah Johnson",
    title: "Understanding Modern Car Diagnostics",
    excerpt: "How advanced diagnostic tools help us identify and fix vehicle problems faster than ever before.",
  },
  {
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80",
    category: "Tips",
    date: "Jan 5, 2025",
    author: "Mike Davis",
    title: "When to Replace Your Car Tires",
    excerpt: "Learn the signs that indicate it's time for new tires and how to choose the right ones for your vehicle.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label">LATEST NEWS</span>
          <h2 className="section-title">From Our Blog</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden group card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
