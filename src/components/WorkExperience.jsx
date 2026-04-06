function WorkExperience() {
  return (
    <>
      <div className="relative max-w-2xl mx-auto bg-background text-foreground ">
        <div className="absolute top-0 left-2 h-full border-l border-dashed border-border" />
        <div className="absolute top-0 right-2 h-full border-r border-dashed border-border" />
        <div className="px-4 md:px-6">
          <h1 className="font-mono text-xl md:text-2xl tracking-wide pt-4 font-medium">
            Work
            <span className="text-[12px] pl-2 text-muted-foreground font-sans">
              Here is my work experience.
            </span>
          </h1>
          <div className="mt-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <a href="https://www.kyoto-tech.com/" className="p-1 md:p-2">
                    <img src="/KYOTO-logo.svg" />
                  </a>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary-foreground font-medium text-sm md:text-xl">
                        Kyoto Technologies
                      </span>
                      <span className="text-[10px] md:text-[12px] bg-secondary px-2 rounded-lg text-secondary-foreground">
                        Intern
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs md:text-base font-medium">
                      Web Developer
                    </span>
                  </div>
                </div>
                <div className="flex flex-col self-start">
                  <span className="text-[11px] md:text-[13px] text-muted-foreground font-medium">
                    Nov 2025 - Apr 2026
                  </span>
                  <span className="text-[10px] md:text-[12px] text-muted-foreground justify-self-end">
                    Dubai, on-site
                  </span>
                </div>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground leading-relaxed px-8 mt-1 md:mt-4 pb-10">
                Built and maintained an internal CRM module from the ground up,
                handling both development and UI design. Designed components and
                layouts in <span className="text-foreground">Figma</span>,
                implemented them using{" "}
                <span className="text-foreground">React</span> and{" "}
                <span className="text-foreground">Tailwind CSS</span>, and
                tested backend endpoints via{" "}
                <span className="text-foreground">Postman</span>. Took ownership
                of frontend consistency across the product, ensuring a clean and
                functional user experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-dashed border-border" />
    </>
  );
}

export default WorkExperience;
