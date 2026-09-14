import { Reveal } from "@/components/reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="bg-[#111111] py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-[1.75rem] font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            A Simple Process.
            <br />
            Quality From Start to Finish.
          </h2>
        </Reveal>

        <div className="relative mt-14 hidden lg:block">
          <div className="absolute top-4 right-[8%] left-[8%] h-px bg-white/10" aria-hidden="true" />
          <ol className="grid grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <li key={step.number} className="relative">
                <Reveal delay={index * 80}>
                  <span className="relative z-10 mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-[#111111] text-xs font-medium text-gold">
                    {step.number}
                  </span>
                  <h3 className="text-base font-extrabold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <ol className="relative mt-10 border-l border-white/10 pl-6 lg:hidden">
          {processSteps.map((step, index) => (
            <li key={step.number} className="relative pb-8 last:pb-0">
              <span className="absolute top-0 -left-[31px] flex h-7 w-7 items-center justify-center rounded-full border border-gold bg-[#111111] text-[10px] font-medium text-gold">
                {step.number}
              </span>
              <Reveal delay={index * 60}>
                <h3 className="text-base font-extrabold tracking-tight text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
