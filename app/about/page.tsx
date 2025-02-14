import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="relative w-32 h-32 mb-8 overflow-hidden rounded-full">
            <Image
              src="/profile-placeholder.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Your Name</h1>
          <p className="mb-6 text-lg text-foreground/80">
            Software Developer & Tech Enthusiast
          </p>
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="https://github.com/yourusername">GitHub</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://linkedin.com/in/yourusername">LinkedIn</Link>
            </Button>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">About Me</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Hello! Im a passionate software developer with expertise in modern
              web technologies. I love building user-friendly applications and
              solving complex problems.
            </p>
            <p>
              When Im not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Skills</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "TailwindCSS",
              "Git",
              "REST APIs",
              "GraphQL",
            ].map((skill) => (
              <div
                key={skill}
                className="p-3 text-sm text-center rounded-md bg-foreground/5"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
          <p className="mb-6 text-foreground/80">
            Im always open to discussing new projects and opportunities.
          </p>
          <Button asChild>
            <Link href="mailto:your.email@example.com">Send me an email</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
