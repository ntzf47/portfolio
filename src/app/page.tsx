"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 10) + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-80 h-6 bg-gray-700 rounded-full overflow-hidden mb-6 shadow-2xl">
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-2 animate-pulse">
              Loading Portfolio
            </h2>
            <p className="text-xl text-cyan-200">
              Preparing amazing content...
            </p>
            <p className="text-lg text-white mt-4">{progress}%</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-28 md:py-36">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-soft-light opacity-30 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="mb-6 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-2 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-2xl">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-28 h-28 md:w-36 md:h-36 flex items-center justify-center overflow-hidden">
                  <img
                    src="/img/3.jpg"
                    alt="profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
            Hello, I'm <span className="text-cyan-300">Phisit</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-in-up">
            Passionate Web Developer & UI/UX Designer crafting digital
            experiences
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="#about"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-cyan-50 hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-4 border-white flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </header>
      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center shadow-2xl rotate-6"></div>
                <div className="absolute top-0 left-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center shadow-2xl -rotate-6 transform transition-transform duration-500 hover:rotate-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
                    <span className="inline-block text-6xl">
                      <img src="/img/profile.jpg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Crafting Digital Experiences
              </h3>

              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Hello! My name is Phisit. I am a passionate Web Developer with a
                strong focus on UI/UX design and modern frontend technologies.
                With 1 year of experience in software development, I have built
                a solid foundation in creating efficient, user-friendly, and
                visually appealing applications.
              </p>

              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                I enjoy exploring new tools and frameworks to stay current and
                constantly improve my skills. I believe in continuous learning
                and growth, always dedicated to delivering high-quality work.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My goal is to create meaningful solutions that make a positive
                impact, combining technical expertise with creative design to
                build exceptional digital experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                  Web Development
                </div>
                <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
                  UI/UX Design
                </div>
                <div className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full font-medium">
                  Problem Solving
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      2{/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Skills & <span className="text-blue-600">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-code text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Programming
              </h3>
              <p className="text-gray-600 mb-6">
                Experienced in Node.js with a focus on clean, efficient code and
                modern development practices.
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-purple-500">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-paint-brush text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Design</h3>
              <p className="text-gray-600 mb-6">
                Skilled in UI/UX design, creating visually appealing and
                user-friendly interfaces with attention to detail.
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-cyan-500">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-language text-3xl text-cyan-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Languages
              </h3>
              <p className="text-gray-600 mb-6">
                Fluent in both Thai and English, enabling effective
                communication with diverse audiences and global teams.
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-gray-100 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Let's connect and create something amazing together!
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-10">
            <Link
              href="https://www.facebook.com/pisit.supradit.56?locale=th_TH"
              target="_blank"
              className="flex flex-col items-center p-8 rounded-2xl bg-white hover:bg-blue-500 hover:text-white transition-all duration-500 w-48 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <i className="fab fa-facebook text-3xl text-blue-600 group-hover:text-white transition-colors duration-300"></i>
              </div>
              <span className="text-2xl font-bold">Facebook</span>
              <p className="mt-2 text-gray-600 group-hover:text-blue-100 transition-colors duration-300">
                Connect with me
              </p>
            </Link>
            <Link
              href="https://www.instagram.com/leo_not_zzz/"
              className="group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors duration-300">
                <i className="fab fa-instagram text-3xl text-pink-600 group-hover:text-white transition-colors duration-300"></i>
              </div>
              <span className="text-2xl font-bold">Instagram</span>
              <p className="mt-2 text-gray-600 group-hover:text-pink-100 transition-colors duration-300">
                Follow me
              </p>
            </Link>
            <Link
              href="https://github.com/ntzf47"
              target="_blank"
              className="flex flex-col items-center p-8 rounded-2xl bg-white hover:bg-gray-800 hover:text-white transition-all duration-500 w-48 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                <i className="fab fa-github text-3xl text-gray-800 group-hover:text-white transition-colors duration-300"></i>
              </div>
              <span className="text-2xl font-bold">Github</span>
              <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                View my work
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Phisit</h3>
              <p className="text-gray-400 mt-2">
                Web Developer & UI/UX Designer
              </p>
            </div>

            <div className="flex gap-6">
              <Link
                href="https://www.facebook.com/pisit.supradit.56?locale=th_TH"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </Link>
              <Link
                href="https://www.instagram.com/leo_not_zzz/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </Link>
              <Link
                href="https://github.com/ntzf47"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Phisit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
