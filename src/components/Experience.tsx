import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { ExperienceItem } from "../types";

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "exp-1",
      role: "Senior Technical Lead",
      company: "Mercedes Benz Research & Development",
      period: "May 2023 - Present",
      location: "India / Affalterbach, Germany",
      description: [
        "Direct end-to-end component engineering, SDK integrations, telemetry benchmarks, and agile delivery for flagship luxury Android mobile projects.",
        "Promoted from Feature Lead to Component Lead, owning the complete application lifecycle and dev resolution paths."
      ],
      highlights: [
        "Led modernization of 13 Android repositories by upgrading Kotlin, Gradle, and Material Design 3, improving build stability, maintainability, and development velocity across the Mercedes-Benz Stories ecosystem.",
        "Served as Technical Lead and Scrum Master for a 12-member cross-functional team, driving architecture decisions, Agile delivery, stakeholder communication, and successful production releases.",
        "Owned the \"View\" feature end-to-end and increased unit test coverage from 30% to 85%, significantly improving code reliability, release confidence, and long-term maintainability.",
        "Provided onsite Go-Live support for Mercedes racing events, testing across multiple race car models and delivering same-day critical fixes under time-sensitive real-world conditions.",
        "Designed and delivered an Android-based race data platform enabling high-volume telemetry and media transfer (200–300MB videos and telemetry datasets) between multiple devices operating concurrently in race environments.",
        "Implemented GDPR-compliant data deletion workflows, sensitive content consent mechanisms, Google Maps migration, and standardized design systems to enhance privacy, usability, and platform consistency."
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Coroutines Flow", "Dagger/Hilt", "Glide Custom Loader", "Google Maps", "Material 3", "BLE SDK", "Agile/Scrum"]
    },
    {
      id: "exp-2",
      role: "Principle Engineer",
      company: "Harman (Lookout)",
      period: "August 2022 - April 2023",
      location: "San Jose, CA (Remote)",
      description: [
        "Led app branding structures, premium in-app billing portals, and deep cloud/analytical post-deployment pipelines."
      ],
      highlights: [
        "Developed complete Dynamic Branding Feature to show third-party partner logos and code redemption success by fetching assets and manifest files from Amazon S3 bucket. This made the branding feature completely dynamic from static at a very minimal cost.",
        "Added an upsell feature for premium package using GIAB (Google In-App Billing).",
        "Contributed as release manager, used tools like Mixpanel, Playstore, Firebase Crashlytics, and Datadog for Post Deployment Monitoring."
      ],
      technologies: ["Android SDK", "Kotlin Flow", "Google In-App Billing", "Amazon S3", "Mixpanel", "Firebase Crashlytics", "Datadog"]
    },
    {
      id: "exp-3",
      role: "Associate Engineer",
      company: "JP Morgan Chase & Co",
      period: "March 2020 - August 2022",
      location: "Fintech Division",
      description: [
        "Developed high-engagement personalized banking widgets, modernized network structures, and achieved rigorous reliability test ratios."
      ],
      highlights: [
        "Single-handedly worked on Snapshot feature for Android Chase Banking app users, developed Perk Carousel tiles (Native & Hybrid Tiles) showing Credit/Debit Card Usage, Checkings & Savings Balance, Financial Tip or Trivia about users which increased customer engagement by 26% in 2020.",
        "Worked on migration of legacy network API calls from HTTP request to Retrofit along with dependency injection using Dagger 2.0 and RxJava for handling events.",
        "Contributed to increasing the test code coverage rate of the Payments module from 60% to 100%, made the app more resilient, and provided a seamless experience to users while doing payment."
      ],
      technologies: ["Android SDK", "Java Core", "Retrofit", "Dagger 2.0", "RxJava", "JUnit", "Espresso"]
    },
    {
      id: "exp-4",
      role: "Android Developer",
      company: "Times Internet Pvt Ltd (DineOut)",
      period: "Sept 2018 - Feb 2020",
      location: "Noida, India",
      description: [
        "Developed UI/UX for the InResto app for showing upcoming Events, Offers, Language Selection, Customer History of Orders, Customer Registration/Login Screen, and various other modules from scratch.",
        "Utilized modern Android Architectural Components like LiveData, ViewModel, and Room DB to construct state-safe local caching layers.",
        "Handled design and development of Server-API integration to get data from server, bind data, and store into Room DB using Coroutines and Retrofit."
      ],
      highlights: [
        "Utilized libraries like Glide, Picasso, Butterknife, and Timber. Optimized overdraw in XML layout files.",
        "Architected custom login & registration workflows, securing token exchanges and local preference states."
      ],
      technologies: ["Android SDK", "Kotlin", "LiveData", "ViewModel", "Room DB", "Retrofit", "Coroutines", "Glide", "Picasso"]
    },
    {
      id: "exp-5",
      role: "Senior Software Engineer",
      company: "Samsung Research Institute India",
      period: "July 2014 - Aug 2018",
      location: "Bangalore, India",
      description: [
        "Developed and designed 3 My Galaxy cards on Bixby-Home which is -1 page in all flagships and note series devices, bringing up applications' relevant content based on user context in one place in the form of cards using Content Providers.",
        "Worked on Link Sharing Enhanced Feature SDK, facilitating file sharing between Samsung account users using MVC architecture, Volley, and Java.",
        "Developed an application for review removal of duplicate/similar images shared on WhatsApp for memory saving and optimization using an image analysis algorithm as JAR."
      ],
      highlights: [
        "Developed an automated Stress Testing app to check crash issues in Bixby-Home and report errors to developers using the UI Application Exercise monkey runner tool and Gmail system.",
        "Successfully mapped complex content interfaces inside Bixby's flagship page, withstanding rigorous quality benchmarks."
      ],
      technologies: ["Android SDK", "Java Enterprise", "Content Providers", "MVC Architecture", "Volley API", "Monkey Runner", "Image Algorithms"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#050816] relative border-t border-white/5">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(0,212,255,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex flex-col mb-16">
          <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest font-semibold">// PROFESSIONAL CHRONOLOGY</p>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-white mt-2">
            My Professional Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-transparent mt-4 rounded-full" />
          <p className="font-sans text-sm text-[#A0AEC0] mt-4 max-w-xl leading-relaxed">
            11+ years of vertical growth, delivering high-performance banking layers and core enterprise mobile applications.
          </p>
        </div>

        {/* Timeline Runner Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-12 text-left">
          {experiences.map((exp) => (
            <div key={exp.id} id={exp.id} className="relative group">
              {/* Timeline Terminal Pulse Pin */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#050816] border border-white/10 group-hover:border-[#00D4FF] transition-all duration-300">
                <div className="h-2 w-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] group-hover:scale-125 transition-transform" />
              </div>

              {/* Float Period Box */}
              <div className="hidden md:block absolute -left-44 top-1 w-28 text-right">
                <span className="font-mono text-xs font-bold text-[#00D4FF] tracking-wider uppercase">
                  {exp.period}
                </span>
                <p className="font-mono text-[9px] text-[#A0AEC0] mt-1 uppercase tracking-wider">{exp.location.split(" ")[0]}</p>
              </div>

              {/* Experience Info Panel */}
              <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/30 hover:bg-white/[0.07] transition-all duration-300 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#00D4FF]/5 border border-[#00D4FF]/10 text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-black transition-all">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-sans font-black text-lg text-white group-hover:text-[#00D4FF] transition-all leading-none">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-sm text-[#A0AEC0] font-semibold mt-1.5 leading-none">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Period box */}
                  <div className="md:hidden flex items-center gap-2 text-xs font-mono text-[#00D4FF] mt-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Description Lines */}
                <div className="mt-5 flex flex-col gap-2.5">
                  {exp.description.map((desc, dIdx) => (
                    <p key={dIdx} className="font-sans text-xs text-[#A0AEC0] leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Highlights Sub-section */}
                <div className="mt-5 border-t border-white/5 pt-4 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white font-black flex items-center gap-1.5 mb-3">
                    <Award className="w-3.5 h-3.5 text-[#00D4FF]" /> Selected Highlights:
                  </span>
                  <ul className="list-disc list-outside pl-4 flex flex-col gap-1.5">
                    {exp.highlights.map((hlt, hIdx) => (
                      <li key={hIdx} className="font-sans text-xs text-white/80 leading-relaxed">
                        {hlt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags used */}
                <div className="flex flex-wrap gap-1.5 mt-6 border-t border-white/5 pt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#050816] border border-white/10 text-[9px] text-[#A0AEC0] font-mono hover:text-white hover:border-[#00D4FF]/30 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
