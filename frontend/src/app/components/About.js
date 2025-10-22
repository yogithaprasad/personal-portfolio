export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Me</h2>
      <div className="text-gray-300 leading-relaxed space-y-4">
        <p>
          A driven and adaptive AI & Machine Learning engineer with a passion for building intelligent, real-world solutions. My experience is highlighted by a recent internship at <strong>Infosys</strong>, where I developed practical skills in designing, building, and training neural networks.
        </p>
        <p>
          I specialize in the end-to-end data science lifecycle, from data wrangling and feature engineering to model deployment. With a strong foundation in <strong>Agile Scrum</strong> methodologies and clear communication, I excel in collaborative environments, translating complex technical concepts into tangible results.
        </p>
        <p>
          I am always exploring the cutting edge of AI, with a growing interest in computer vision and experience with advanced frameworks like <strong>PyTorch</strong> and architectures such as <strong>YOLO and ResNet</strong>.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Core Competencies</h3>
        <div className="flex flex-wrap gap-4">
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Python</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">SQL</span>
                        <span className="bg-gray-700 px-4 py-2 rounded-lg">Flask</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Machine Learning</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Agile Scrum</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Git & GitHub</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Scikit-learn</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Pandas & NumPy</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">PyTorch</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Deep Learning</span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">Computer Vision (YOLO, ResNet)</span>

        
        </div>
      </div>
    </section>
  );
}