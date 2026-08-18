import { services } from "@/app/data/home";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="reveal">
          {/* Header */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#64748b]">
                What we do
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl leading-[1.15]">
                Full-spectrum digital marketing.{" "}
                <span className="text-[#64748b] font-medium">Zero fluff.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#64748b]">
              Every service is designed to generate measurable commercial impact —
              not to look busy.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="reveal group relative overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c7d2fe] hover:shadow-lg hover:shadow-[#4f46e5]/5"
                >
                  {/* Badge */}
                  {service.badge && (
                    <span className="mb-4 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4f46e5] border border-[#e0e7ff]">
                      {service.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] group-hover:bg-[#eef2ff] group-hover:border-[#c7d2fe] transition-all">
                    <Icon size={20} className="text-[#4f46e5]" />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#64748b]">{service.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
