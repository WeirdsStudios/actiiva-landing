import heroImage from '@/assets/images/other/hero-image.png'
import heroUser from '@/assets/images/other/hero-user.png'
import iconPrimary from '@/assets/images/other/icon-primary.svg'
import scannerImage from '@/assets/images/other/scanner-image.svg'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-default-950 relative size-full overflow-hidden">
      <div className="container-fluid">
        <div className="grid gap-7.5 lg:grid-cols-11 lg:gap-24">
          <div className="self-center pt-20 lg:col-span-5">
            <div className="mb-7.5 space-y-5 lg:mb-35">
              <h1 className="text-default-50 text-[47px] lg:text-[70px]">
                See your <span className="text-primary">health</span> in high definition
              </h1>
              <p className="text-default-100 pb-2.5 lg:w-115">A complete wellness membership designed to give you the answers, clarity, and care you deserve — all from the comfort of your home.</p>

              <Link href="/whats-included" className="border-primary text-primary group inline-flex items-center justify-center gap-2.5 rounded-md border px-10 py-6.5 text-lg transition-all">
                See What's Included
                <span className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                  <Image src={iconPrimary} alt="Icon" />
                </span>
              </Link>
            </div>

            <div className="flex gap-2.5">
              <Image src={heroUser} alt="Hero Image" className="size-22.5 rounded-md" />

              <div className="bg-default-100/10 flex gap-2.5 rounded-md p-2.5">
                <div className="app-title-wrap">
                  <h2 className="text-default-100 mb-4 max-w-20">Download the App</h2>
                  <div className="text-default-100 text-xs">For iOS and Android</div>
                </div>
                <Image src={scannerImage} alt="Scanner Image" className="app-scanner-image" />
              </div>
            </div>

            <p className="text-default-100 mt-2.5 text-sm">HIPAA-compliant security</p>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full overflow-hidden pb-20 lg:-me-62.5 lg:h-225 lg:pb-0">
              <Image className="size-full rounded-xl object-cover lg:rounded-none" src={heroImage} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
