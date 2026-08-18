import { metrics } from "@/app/data/home";

export function MetricsBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
      <div className="reveal overflow-hidden rounded-[28px] border border-[#e0e7ff] bg-[#eef2ff] px-8 py-8 sm:py-10 lg:py-8 shadow-sm">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
                i < metrics.length - 1 ? "lg:border-r lg:border-[#c7d2fe] lg:pr-8" : ""
              }`}
            >
              <p className="text-4xl font-black tracking-tight sm:text-5xl">
                <span className="text-gradient">{metric.value}</span>
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#64748b] max-w-[140px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
