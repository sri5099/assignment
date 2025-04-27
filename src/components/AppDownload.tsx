
import { Card } from "@/components/ui/card";
import image1 from "../assets/Group1000007108.png"

export const AppDownload = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Card className="p-6 bg-white shadow-xl border-none relative">
              <div className="relative w-full max-w-[300px] mx-auto">
                <div className="border-[3px] border-black rounded-[40px] p-3 overflow-hidden">
                  <img
                    src={image1}
                    alt="BHIVE Workspace App"
                    className="w-full h-auto rounded-[32px]"
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">Download our app now</h2>
            <p className="text-gray-600 text-lg">
              Boost your productivity with the BHIVE Workspace app.
              Elevate your workspace, collaborate efficiently, and unlock
              exclusive perks.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-14 object-contain"
              />
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-11 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
