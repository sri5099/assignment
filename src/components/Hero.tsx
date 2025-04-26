
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <><div className="flex items-center justify-between mb-4">
      <img src="public/assets/image 54.png" alt="Office Illustration" className="w-auto h-auto ml-4 mt-4" />
      <div className="flex items-center border-2 border-[#FFB800] rounded-full px-4 py-2 mr-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFB800] " viewBox="0 0 24 24" fill="none" stroke="#F2B304" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
    </div><div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-no-repeat bg-center bg-cover bg-[url('public/assets/image 1936.png')]">
              Host your meeting with{" "}
              <span className="block">world-class amenities.</span>
              <span className="text-[#FFB800]">Starting at ₹199/-!</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl">
              Book premium workspaces and meeting rooms designed for productivity and collaboration.
            </p>
          </div>
          <div className="flex-1">
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-none">
              <img
                src="public/assets/Coworking video 1.png"
                alt="Office Illustration"
                className="w-full h-auto" />
            </Card>
          </div>
        </div>
      </div></>
  );
};
