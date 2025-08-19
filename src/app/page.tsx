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
      <div className="fixed inset-0 bg-gray-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-80 h-6 bg-gray-700 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white text-xl">Loading... {progress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm Phisit
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Welcome to my personal portfolio
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
            About Me
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 flex justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                <span className="inline-block">
                  <img src="/img/profile.jpg" alt="Profile Image" />
                </span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg mb-6 text-gray-700">
                Hello! My name is Phisit. I am a Web Developer with a strong
                passion for UI/UX design and modern frontend technologies. With
                1 years of experience in software development, I have built a
                solid foundation in creating efficient, user-friendly, and
                visually appealing applications. I enjoy exploring new tools and
                frameworks to stay current and constantly improve my skills.
              </p>
              <p className="text-lg text-gray-700">
                I believe in continuous learning and growth. I'm dedicated to
                delivering high-quality work and always strive for excellence in
                everything I do. My goal is to create meaningful solutions that
                make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
            Skills & Expertise
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl text-blue-500 mb-6">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Programming
              </h3>
              <p className="text-gray-600">
                Experienced in NodeJs
                with a focus on clean, efficient code.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl text-blue-500 mb-6">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Design</h3>
              <p className="text-gray-600">
                Skilled in UI/UX design, creating visually appealing and
                user-friendly interfaces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl text-blue-500 mb-6">
                <i className="fas fa-language"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Languages
              </h3>
              <p className="text-gray-600">
                Fluent in both Thai and English, enabling effective
                communication with diverse audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
            Contact with Me!!
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
          </h2>

          <div className="flex justify-center flex-wrap gap-8">
            <Link
              href="https://www.facebook.com/pisit.supradit.56?locale=th_TH"
              target="_blank"
              className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-blue-500 hover:text-white transition-all duration-300 w-40"
            >
              <i className="fab fa-facebook text-5xl mb-4"></i>
              <span className="text-xl font-bold">Facebook</span>
            </Link>

            <Link
              href="https://www.instagram.com/ntz_me_n/"
              target="_blank"
              className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-pink-500 hover:text-white transition-all duration-300 w-40"
            >
              <i className="fab fa-instagram text-5xl mb-4"></i>
              <span className="text-xl font-bold">Instagram</span>
            </Link>

            <Link
              href="https://github.com/ntzf47"
              target="_blank"
              className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gray-800 hover:text-white transition-all duration-300 w-40"
            >
              <i className="fab fa-github text-5xl mb-4"></i>
              <span className="text-xl font-bold">Github</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Phisit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
