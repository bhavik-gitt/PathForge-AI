export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6">
      <div className="max-w-4xl text-center">
        <span className="px-4 py-2 rounded-full border border-slate-700 text-sm text-slate-300">
          🚀 AI-Powered Career Roadmap Platform
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
          Build Your Future with
          <span className="block text-blue-500">
            PathForge AI
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Personalized AI-driven learning roadmaps, skill-gap analysis,
          project recommendations, and career guidance to help students
          and professionals achieve their goals faster.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition">
            Learn More
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold">🎯 AI Roadmaps</h3>
            <p className="mt-2 text-slate-400">
              Generate personalized learning paths based on your goals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold">📊 Skill Analysis</h3>
            <p className="mt-2 text-slate-400">
              Identify strengths, weaknesses, and growth opportunities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold">💼 Career Guidance</h3>
            <p className="mt-2 text-slate-400">
              Get project ideas, certifications, and job-ready plans.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}