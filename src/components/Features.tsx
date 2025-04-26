
import { 
  Calendar, 
  WifiIcon, 
  Coffee, 
  Users, 
  DollarSign, 
  Sofa, 
  Timer, 
  Dumbbell 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community Events",
  },
  {
    icon: Dumbbell,
    title: "Gym Facilities",
  },
  {
    icon: WifiIcon,
    title: "High-Speed WiFi",
  },
  {
    icon: Coffee,
    title: "Cafe & Tea Bar",
  },
  {
    icon: DollarSign,
    title: "Affordable",
  },
  {
    icon: Sofa,
    title: "Comfort Lounges",
  },
  {
    icon: Timer,
    title: "Quick Booking",
  },
  {
    icon: Calendar,
    title: "Sports Area",
  },
];

export const Features = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Why Choose us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-orange-100 rounded-full">
                <feature.icon className="w-6 h-6 text-[#FFB800]" />
              </div>
              <h3 className="font-medium">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
