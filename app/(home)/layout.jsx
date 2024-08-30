
import { LeftNavBar } from "@/components/custom/LeftNav";


export default function HomeLayout({ children }) {
  return (
    <div className="grid grid-cols-[52px_1fr]">
      <div className="w-[52px] border">
        <LeftNavBar />
      </div>

      <div className="w-full">
        <div className='flex h-[64px] dark:bg-[#1F1F1F] border-t border-r border-b dark:border-[#343A40] font-sans font-[700px] text-[16px] dark:text-white p-[24px] gap-[24px]'>
          Onebox
        </div>
        {children}
      </div>
    </div>
  );
}
