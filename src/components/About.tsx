export function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-white/5 bg-backgroundrelative z-20"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-360">
        <div className="flex items-end gap-4 mb-16">
          <h2 className="text-4xl text-white font-medium">About me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          <div className="md:col-span-1 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Official Profile
            <br />
            <span className="text-orange-500 mt-2 block">summary</span>
          </div>
          <div className="md:col-span-3 space-y-6">
            <p className="text-xl text-neutral-300 leading-relaxed font-light">
              I'm Ruan Anjos, a Full Stack Dev and Computer Systems student at
              UESPI, Parnaíba Campus. Right now, I'm working as a Software
              Engineering intern, really focusing on nailing down solid
              requirements and keeping business rules crystal clear. My go-to
              stack includes TypeScript, React, Next.js, NestJS, and Python. I
              always prioritize Clean Architecture and TDD to make sure the code
              is bulletproof. I just love turning tricky problems into smooth,
              efficient solutions.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              At 2024, kicked off my tech journey by joining the first-ever
              Computer Systems batch at UESPI. That really set things in motion
              for me to go all-in on Programming Logic and Object-Oriented
              Programming (OOP).
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              November 2025: A major turning point. I officially landed my gig
              as a Software Engineering Intern - Requirements Analyst. This is
              where I got my hands dirty applying BPMN & UML, tackling robust
              requirement breakdowns and business rules head-on.
            </p>
            <p className="text-xl text-white italic font-serif pt-4 border-t border-white/10 mt-6">
              "The best way to predict The future is to create it"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
