import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} p-6 md:p-12 font-sans min-h-screen`}>
      {/* Toggle Dark Mode */}
      <div className="flex justify-end mb-4">
        <label className="flex items-center gap-2">
          <span className="text-sm">Dark Mode</span>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </label>
      </div>

      {/* Header Section */}
      <motion.section className="text-center space-y-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        <img
          src="/sameer_sahu.jpeg"
          alt="Sameer Sahu"
          className="mx-auto w-40 h-40 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-bold">Sameer Surender Sahu</h1>
        <p className="text-lg text-gray-400">Web Developer | AI Website Builder | Cybersecurity Enthusiast</p>
        <div className="flex justify-center gap-4 text-xl mt-2">
          <a href="https://github.com/sameer8074" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sameer-sahu-8b0073346/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:ssahu8074@gmail.com"><MdEmail /></a>
        </div>
        <div className="text-sm flex flex-col items-center text-gray-400">
          <span><MdPhone className="inline" /> +91 9324086970</span>
          <span><MdLocationOn className="inline" /> Panvel, Maharashtra</span>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 inline-block mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["allindiapacker.com", "allindiapacker.in", "tmtlogistics.in", "gvetindia.org"].map((site, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-blue-500">{site}</h3>
                <p className="text-sm mt-2">Built from scratch using AI tools, custom development, and SEO optimization techniques.</p>
                <a
                  href={`https://${site}`}
                  className="inline-block mt-4 text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Skills and Certificates */}
      <motion.section className="mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 inline-block mb-4">Skills & Certifications</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>HTML, CSS, JavaScript, PHP, JSON</li>
          <li>SEO, WordPress, AI Website Builders</li>
          <li>Python Basics (Offline, 3 months)</li>
          <li>Software Engineering Job Simulation - Accenture (July 2025)</li>
          <li>Cybersecurity Analyst Job Simulation - Tata (July 2025)</li>
        </ul>
      </motion.section>

      {/* Education */}
      <motion.section className="mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 inline-block mb-4">Education</h2>
        <ul className="space-y-2">
          <li>B.E. in Information Technology, Bharati Vidyapeeth College of Engineering (2022–2026) – CGPA: 7.1</li>
          <li>12th: CKT College, State Board – 65% (2021)</li>
          <li>10th: Harmony Public School, State Board – 77% (2019)</li>
        </ul>
      </motion.section>

      {/* Roles and Responsibilities */}
      <motion.section className="mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 inline-block mb-4">Roles & Involvement</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Member, Camera Club (1st year)</li>
          <li>Social Media Team Member, ITSA (2nd & 3rd year)</li>
          <li>Volunteer, NSS</li>
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="mt-12 max-w-xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 inline-block mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <input className="w-full p-2 border rounded text-black" type="text" placeholder="Your Name" required />
          <input className="w-full p-2 border rounded text-black" type="email" placeholder="Your Email" required />
          <textarea className="w-full p-2 border rounded text-black" rows="4" placeholder="Your Message" required></textarea>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Send Message</Button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Sameer Surender Sahu. All rights reserved.
      </footer>
    </main>
  );
}
