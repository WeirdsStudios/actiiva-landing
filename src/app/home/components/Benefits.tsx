import benefitImage1 from '@/assets/images/other/benefit-image-1.png'
import benefitImage2 from '@/assets/images/other/benefit-image-2.png'
import iconPrimary from '@/assets/images/other/icon-primary.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const checklistData: string[] = ['Comprehensive Annual Lab Testing', 'Bi-Annual Health Check-Ins', 'Category-Based Results', 'Early Detection', 'Personalized Recommendations']

const Benefits = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container">
        <div className="mx-auto mb-12.5 max-w-200 text-center">
          <div className="text-primary mb-2.5 text-sm">(Core benefits)</div>
          <h2 className="text-4xl lg:text-5xl">
            Everything you need for smarter, <span className="text-default-400">Proactive health</span>
          </h2>
        </div>

        <div className="mb-20 grid grid-cols-2 gap-7.5 lg:grid-cols-5">
          <div>
            <Image src={benefitImage1} alt="Benefit Image" className="h-full rounded-xl object-cover" />
          </div>

          <div className="order-3 col-span-2 lg:order-2 lg:col-span-3">
            <div className="border-default-200 h-full rounded-xl border p-7.5 pt-17.5 text-center">
              <div className="mb-20 space-y-2">
                <h2 className="bg-[linear-gradient(90deg,var(--color-primary),#3c2219)] bg-clip-text text-[80px] tracking-wide text-transparent">
                  <span data-target="125">125</span>
                  <span>+</span>
                </h2>
                <div className="text-default-950">Annual lab tests</div>
              </div>

              <div className="flex justify-center gap-2.5">
                <div className="inline-flex flex-col items-center justify-center gap-2.5 rounded bg-white px-3.5 py-2.5 md:flex-row">
                  <span className="text-default-950">2X</span> Lab reports delivered annually
                </div>
                <div className="inline-flex flex-col items-center justify-center gap-2.5 rounded bg-white px-3.5 py-2.5 md:flex-row">
                  <span className="text-default-950">12 month</span>Preventive health roadmap
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-3">
            <Image src={benefitImage2} alt="Benefit Image" className="h-full rounded-xl object-cover" />
          </div>
        </div>

        <div className="mx-auto mb-20 flex max-w-175 flex-wrap items-center justify-center gap-x-5 gap-y-4">
          {checklistData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Icon icon="tabler:circle-check" className="text-primary size-6" />
              <div className="benefit-list-text">{item}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about" className="bg-default-950 text-primary group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
            About Healia
            <span className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
              <Image src={iconPrimary} alt="Icon" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Benefits
