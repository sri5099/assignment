
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store/store";

export const SpaceOverview = () => {
  const workspaces = useAppSelector((state: RootState) => state.data.workspaces);

  const spaces = workspaces.map(workspace => ({
    id: workspace.id,
    name: workspace.name,
    image: workspace.images[0] || "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
    dayPass: workspace.day_pass_price,
    bulkPass: workspace.day_pass_price * 10 * 0.8, // 20% discount for bulk
    distance: "6 Kms" // This should be calculated based on user location
  }));

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12">Our Space Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spaces.map((space) => (
          <Card key={space.id} className="overflow-hidden p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-xl">{space.name}</h3>
              <div className="flex items-center gap-1">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                </svg>
                <span className="text-sm text-gray-600">{space.distance}</span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden mb-6">
              <img
                src={space.image}
                alt={space.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-600 mb-1">Day Pass</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">₹ {space.dayPass}</span>
                  <span className="text-gray-600 ml-1">/ Day</span>
                </div>
              </div>
              <div className="flex-1 bg-[#FFB800] rounded-lg p-4 relative">
                <div className="absolute -top-2 right-2 text-xs bg-black text-white px-2 py-1 rounded">
                  20% Discount
                </div>
                <p className="text-black mb-1">Bulk Pass</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">₹ {space.bulkPass}</span>
                  <span className="text-black ml-1">/ 10 Days</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
