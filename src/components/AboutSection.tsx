export function AboutSection() {
  return (
    <div>
      <section
        id="about"
        className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-6xl"
      >
        <h2 className="text-2xl font-bold tracking-tight mb-8">About</h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-foreground">
            I'm passionate about creating accessible, pixel-perfect interfaces
            that blend thoughtful design with robust engineering. My favorite
            work lies at the intersection of design and development, creating
            experiences that not only look great but are meticulously built for
            performance and usability.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            Currently, I'm a
            <span className="text-primary font-medium"> Software Engineer</span>{" "}
            specializing in full-stack development with React, Next.js,
            TypeScript, and Node.js. I contribute to building scalable web
            applications that serve millions of users worldwide.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            In the past, {`I've`} had the opportunity to develop software across
            a variety of settings — from startups to large corporations.
            Additionally, I occasionally write about web development, share
            open-source projects, and mentor aspiring developers.
          </p>
        </div>
      </section>
      <div className="relative bottom-0 left-0 right-0 h-64 bg-linear-to-t from-muted to-transparent pointer-events-none" />
    </div>
  );
}
