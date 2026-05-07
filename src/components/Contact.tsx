import { useForm, ValidationError } from "@formspree/react";
import { AnimatedButton } from "./AnimatedButton";

// 1. Go to https://formspree.io → create a free form pointing to anjosruanp@gmail.com
// 2. Replace "YOUR_FORM_ID" below with the ID Formspree gives you (e.g. "xpwzgkla")
const FORMSPREE_ID = "mjgloalg";

export function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <section
      id="contact"
      className="py-24 border-t border-white/5 bg-[#0A0A0A] relative z-20"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-360">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="flex items-end gap-4 mb-8">
              <h2 className="text-4xl text-white font-medium">Contact</h2>
            </div>
            <p className="text-lg text-neutral-400 font-light mb-4 max-w-md">
              Liked what you saw? Have a project in mind or just want to
              connect?
            </p>
            <p className="text-lg text-neutral-400 font-light max-w-md">
              Feel free to reach out — I'm always open to new opportunities,
              collaborations, and interesting conversations.
              <span className="block mt-4 text-orange-500 font-medium">
                I'll get back to you as soon as possible.
              </span>
            </p>
          </div>

          <div
            className="p-8 border border-white/5 bg-background relative"
            data-aos="fade-left"
          >
            <div className="absolute top-0 bottom-0 left-0 w-px bg-white/5 overflow-hidden">
              <div className="w-full h-1/3 bg-linear-to-b from-transparent via-orange-500 to-transparent opacity-70" />
            </div>

            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <span className="text-orange-500 text-4xl">✓</span>
                <p className="text-white font-medium text-lg">Message sent!</p>
                <p className="text-neutral-400 text-sm font-light">
                  Thanks for reaching out. I'll reply soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                    Your Name
                  </span>
                  <div className="bg-[#0A0A0A] border border-white/10 p-1 flex items-center hover:border-orange-500/50 transition-colors">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-transparent border-none outline-none text-white text-sm w-full p-3 placeholder:text-neutral-600 font-mono"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <ValidationError
                    field="name"
                    prefix="Name"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1 font-mono"
                  />
                </div>

                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                    Email
                  </span>
                  <div className="bg-[#0A0A0A] border border-white/10 p-1 flex items-center hover:border-orange-500/50 transition-colors">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-transparent border-none outline-none text-white text-sm w-full p-3 placeholder:text-neutral-600 font-mono"
                      placeholder="e.g. john@email.com"
                    />
                  </div>
                  <ValidationError
                    field="email"
                    prefix="Email"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1 font-mono"
                  />
                </div>

                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                    Message
                  </span>
                  <div className="bg-[#0A0A0A] border border-white/10 p-1 flex items-start hover:border-orange-500/50 transition-colors">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="bg-transparent border-none outline-none text-white text-sm w-full p-3 placeholder:text-neutral-600 font-mono resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                  <ValidationError
                    field="message"
                    prefix="Message"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1 font-mono"
                  />
                </div>

                <AnimatedButton
                  label={state.submitting ? "Sending..." : "Send Message"}
                  icon="solar:plain-bold-duotone"
                  type="submit"
                  fullWidth
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
