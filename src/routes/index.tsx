import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const horizontalScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = horizontalScrollRef.current
      if (!container) return

      // Only handle horizontal scrolling when there's horizontal content to scroll
      const canScrollHorizontally =
        container.scrollWidth > container.clientWidth
      if (!canScrollHorizontally) return

      // Only intercept vertical scrolling (deltaY), allow horizontal scrolling (deltaX) to work normally
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // This is primarily horizontal scrolling, let it work normally
        return
      }

      // Prevent default vertical scrolling
      e.preventDefault()

      // Positive deltaY (scroll down) moves right, negative deltaY (scroll up) moves left
      container.scrollLeft += e.deltaY
      container.scrollBy({
        left: e.deltaY * 0.8,
        behavior: 'smooth',
      })
    }

    const scrollContainer = horizontalScrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <div className="px-2 sm:px-8 py-2 flex bg-[#1c1b1f] min-w-[350px] overflow-y-scroll h-dvh w-full items-center justify-center">
      <div className="flex flex-col h-full w-full max-w-7xl">
        <h1 className="text-[#bdfa58] font-extrabold">Victor Campos</h1>
        <div className="flex flex-wrap gap-y-4 sm:flex-nowrap justify-evenly gap-2">
          <div
            ref={horizontalScrollRef}
            className="pl-4 sm:pl-4 rounded-md shadow-sm flex py-4 gap-2 overflow-x-scroll min-w-[316px] xl:to-transparent bg-gradient-to-r to-stone-800/30 transition-colors"
          >
            <Card
              title="Data Engineer"
              period="Dec 2024 - Present"
              company="Numen IT"
              sections={[
                `Built a full-stack web application to manage data workflows, visualize
          data and metrics, and submit custom processing tasks.`,
                `Implemented an anomaly detection pipeline for an e-commerce platform
          to flag suspicious user behavior related to discount and coupon abuse.
          Used PySpark+SQL inside the clients Databricks environment for data
          processing and Databricks dashboards for visualization.`,
                `Created a Python-based sales forecasting pipeline and command-line
          tool to streamline model training and predictions.`,
              ]}
              active={true}
            />
            <Card
              title="Freelance Web Designer"
              period="Jul 2024 - Oct 2024"
              company=""
              sections={[
                `Designed and developed end-to-end data pipelines in Python, including ETL processes, feature engineering, and automated workflows.`,
                `Collaborated closely with the client to align UI/UX with business goals and user needs.`,
              ]}
              active={false}
            />
            <Card
              title="Analytics Engineer"
              period="Nov 2017 - Aug 2022"
              company="7D Analytics"
              sections={[
                `Designed frames for a data analysis web application for digital marketing, focusing on responsive design,
usability, and data visualization.`,
                `Applied time-series forecasting and predictive models (ARIMA, Random Forest) to support data-driven decision making.`,
                `Built a Python-CPLEX-based logistics optimization system (Greenfield Analysis and Network Optimization) with a Web interface for internal stakeholders.`,
                `Documentation and knowledge transfer sessions to support tool adoption and maintenance.`,
              ]}
              active={false}
            />
          </div>
          <SelectedProjects />
        </div>
        <div className="flex flex-col px-8">
          <div className="h-[1px] w-1/2 bg-neutral-300/78 mt-4 mb-2" />
          <span className="font-bold text-neutral-50 mb-5 sm:mb-3">
            Education
          </span>
          <div className="flex gap-12 min-w-[300px] text-sm flex-wrap gap-y-4 pl-2">
            <div className="text-neutral-300/78">
              <div>M.Sc. in Computer Science</div>
              <div>São Paulo State University</div>
              <div>(UNESP) - Rio Claro</div>
              <div>2015 - 2017</div>
            </div>

            <div className="text-neutral-300/78">
              <div>B.Sc. in Computer Science</div>
              <div>São Paulo State University</div>
              <div>(UNESP) - Rio Claro</div>
              <div>2011 - 2015</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-8 pl-8 gap-4 mt-8 lg:mt-0 lg:flex-row lg:pb-0 lg:justify-end lg:gap-12">
          <span className="font-extrabold text-neutral-50">
            +55 11 72008362
          </span>
          <a href="https://linkedin.com/in/victordeac" target="_blank">
            <span className="font-extrabold text-neutral-50">
              <span className="font-normal neutral-300/78">LinkedIn:</span>{' '}
              victordeac
            </span>
          </a>
          <a href="https://github.com/victorac" target="_blank">
            <span className="font-extrabold text-neutral-50">
              <span className="font-normal neutral-300/78">GitHub:</span>{' '}
              victorac
            </span>
          </a>
          <span className="font-extrabold text-neutral-50">
            hello@eovictor.com
          </span>
        </div>
      </div>
    </div>
  )
}

interface CardProps {
  title: string
  period: string
  company: string
  sections: Array<string>
  active: boolean
}

function Card({ title, period, company, sections, active }: CardProps) {
  return (
    <div
      className={`flex flex-col w-[300px] shrink-0 rounded-sm p-4 ${active ? 'shadow-lg bg-[#16151a]' : ''}`}
    >
      <div className="flex flex-col -space-y-1">
        <span className="font-bold text-neutral-50">{title}</span>
        <span className="font-semibold text-neutral-300/78">{period}</span>
        <span className="font-medium text-neutral-50">{company}</span>
      </div>
      <div className="mt-4 flex flex-col gap-4 text-sm text-neutral-300/78">
        {sections.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  )
}

function SelectedProjects() {
  return (
    <div className="bg-[#16151a] flex flex-col w-[300px] shrink-0 shadow-lg rounded-sm p-4 gap-4">
      <span className="font-bold text-neutral-50">Selected Projects</span>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex flex-col -space-y-1">
            <span className="font-medium text-neutral-50">
              Musical Interval Visualization App
            </span>
            <a href="https://acordes.co.uk" target="_blank">
              <span className="text-neutral-300/78">acordes.co.uk</span>
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-4 text-sm text-neutral-300/78">
            <p>
              Created an interactive web tool to explore musical intervals on
              string instruments.
            </p>
            <p>Implemented animations with the Motion library.</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col -space-y-1">
            <span className="font-medium text-neutral-50">
              EMDR Therapy Web App
            </span>
            <a href="https://defocusey.com" target="_blank">
              <span className="text-neutral-300/78">defocusey.com</span>
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-4 text-sm text-neutral-300/78">
            <p>
              Built a video chat web application to support Eye Movement
              Desensitization Reprocessing (EMDR) sessions.
            </p>
            <p>
              Developed customizable animations and user flows to support
              therapists in real-time sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
