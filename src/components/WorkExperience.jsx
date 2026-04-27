function WorkExperience() {
  return (
    <section>
      <div className="relative max-w-2xl mx-auto bg-background text-foreground ">
        <div className="absolute top-0 left-2 h-full border-l border-dashed border-border" />
        <div className="absolute top-0 right-2 h-full border-r border-dashed border-border" />
        <div className="px-4 md:px-6">
          <h1 className="font-mono text-xl md:text-2xl tracking-wide pt-6 font-medium">
            Work
            <span className="text-[12px] pl-2 text-muted-foreground font-sans">
              Here is my work experience.
            </span>
          </h1>
          <div className="mt-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <a
                    href="https://www.kyoto-tech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-4 "
                  >
                    <img
                      src="/KYOTO-logo.svg"
                      className="bg-secondary rounded-lg p-1 size-12"
                    />
                  </a>
                  <div className="flex flex-col gap-0.5 justify-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary-foreground font-medium text-sm md:text-xl">
                        Kyoto Technologies
                      </span>
                      <span className="text-[10px] md:text-[12px] bg-secondary px-2 rounded-lg text-secondary-foreground">
                        intern
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs md:text-base font-medium">
                      Web Developer
                    </span>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <span className="text-[11px] md:text-[13px] text-muted-foreground font-medium">
                    Nov 2025 - APR 2026
                  </span>
                  <span className="text-[10px] md:text-[12px] text-muted-foreground ">
                    Dubai, on-site
                  </span>
                </div>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground leading-relaxed px-4 mt-1 md:mt-3 pb-10 text-balance">
                Built and maintained an internal HRMS module from the ground up,
                handling both development and UI design. Designed components and
                layouts in Figma, implemented them using React and Tailwind CSS,
                and tested backend endpoints via Postman. Took ownership of
                frontend consistency across the product, ensuring a clean and
                functional user experience.
              </div>
            </div>

            {/* Varcons */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-4 "
                  >
                    <img
                      src="/varcons-logo.jpg"
                      className="bg-secondary rounded-lg p-1 size-12"
                    />
                  </a>
                  <div className="flex flex-col gap-0.5 justify-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary-foreground font-medium text-sm md:text-xl">
                        Varcons Technologies
                      </span>
                      <span className="text-[10px] md:text-[12px] bg-secondary px-2 rounded-lg text-secondary-foreground">
                        intern
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs md:text-base font-medium">
                      Full-stack Developer
                    </span>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <span className="text-[11px] md:text-[13px] text-muted-foreground font-medium">
                    JAN 2025 - MAY 2026
                  </span>
                  <span className="text-[10px] md:text-[12px] text-muted-foreground ">
                    Bangalore, remote
                  </span>
                </div>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground leading-relaxed px-4 mt-1 md:mt-3 pb-10 text-balance">
                Optimized React components and state management to improve UI
                performance and reduce unnecessary re-renders. Built full-stack
                features using Node.js and Express.js, designed REST APIs, and
                integrated MongoDB and PostgreSQL for efficient data handling.
                Ensured smooth frontend-backend communication with responsive
                and reliable UI implementation.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-dashed border-border" />
    </section>
  );
}

export default WorkExperience;
