import { services } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-ink py-[4rem] px-[1.5rem] md:py-[7rem] md:px-[3rem]">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] md:gap-[4rem] items-end mb-[4rem]">
          <div>
            <div className="section-label">What I Offer</div>
            <h2 className="section-title mb-0">
              Services built for<br />
              <em>real organisations.</em>
            </h2>
          </div>
          <p className="text-mist text-[0.98rem] leading-[1.8]">
            Whether you are a founder who needs your first people system, a team
            that has outgrown its informal culture, or a leader navigating a
            transition — there is a point of entry here for you.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] bg-gold/10">
        {services.map((service, i) => (
          <Reveal key={service.num} delay={i * 80} className="w-full h-full flex">
            <div className="bg-ink p-[2.8rem_2rem] border border-gold/10 transition-colors duration-400 ease-in-out relative overflow-hidden cursor-default hover:bg-gold/5 group flex flex-col w-full">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 ease-in-out group-hover:w-full" />
              
              <span className="font-serif text-[3.5rem] font-light text-gold/10 leading-none mb-[1.5rem] block">
                {service.num}
              </span>
              
              <div className="font-serif text-[1.5rem] font-normal text-white mb-[0.8rem] leading-[1.2]">
                {service.name}
              </div>
              
              <p className="text-[0.85rem] text-smoke leading-[1.7] mb-[1.5rem]">
                {service.desc}
              </p>
              
              <ul className="list-none flex flex-col gap-[0.4rem] mt-auto">
                {service.items.map((item) => (
                  <li key={item} className="text-[0.78rem] text-mist pl-[1rem] relative before:content-['—'] before:absolute before:left-0 before:text-gold before:text-[0.7rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
