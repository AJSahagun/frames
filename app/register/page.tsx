import Image from "next/image"
import BSU_FSLogo from '../_components/BSU_FSLogo';

export default function Register() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative flex-1 ml-20 mt-16">
        <Image className=""
        src="/logos/FRAMES_title-logo.png"
        alt="FRAMES title logo"
        width={240}
        height={0} />
      </div>

      <div className="flex-2 w-1/3 mt-10">
        <BSU_FSLogo className="right-0 top-2" />
      </div>

    </div>
  )
};