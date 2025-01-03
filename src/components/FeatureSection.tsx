'use client'
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
     
    },
  };

  return (
    <section className="container py-24" id="features">
      <h2 className="text-center text-3xl font-bold">What Makes Us Different</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="rounded-lg border p-6 hover:bg-slate-100 transition-all duration-150"
            initial="hidden"
           
            whileInView="visible"

            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 text-blue-600">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;



const features = [
    {
      title: "Custom Subdomains",
      description: "Get your own custom subdomain for your portfolio.",
      icon: "🌐",
    },
    {
      title: "Mobile Friendly",
      description: "Your portfolio looks great on all devices.",
      icon: "📱",
    },
    {
      title: "Built-in SEO",
      description: "Optimize your portfolio for search engines.",
      icon: "🔍",
    },
    {
      title: "Analytics",
      description: "Track visitors and engagement on your portfolio.",
      icon: "📊",
    },
    {
      title: "Custom Themes",
      description: "Choose from multiple themes or create your own.",
      icon: "🎨",
    },
    {
      title: "Fast Loading",
      description: "Lightning fast loading times for better UX.",
      icon: "⚡",
    },
  ]