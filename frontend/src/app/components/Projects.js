const projects = [
  {
    title: "Interactive AI/ML Web App",
    description: "Developed and deployed an interactive AI application using Streamlit, allowing users to interact with a machine learning model in real-time.",
    skills: "Python, Streamlit, Pandas, Scikit-learn",
    link: "https://github.com/yogithaprasad" // Change this to the specific project link
  },
  {
    title: "Comparative Analysis for Predicting Lung Cancer",
    description: "Engineered an end-to-end system to evaluate and compare multiple ML models (Logistic Regression, Random Forest, SVM). Achieved 93.5% accuracy.",
    skills: "Python, Scikit-learn, Pandas, Model Comparison",
    link: "https://github.com/yogithaprasad/Comparative-Analysis-of-ML-Algorithms-for-Predicting-Lung-Cancer"
  },
  {
    title: "Movie Review Sentiment Analysis",
    description: "Developed a classification model to determine sentiment of IMDB movie reviews using Natural Language Processing (NLP) techniques.",
    skills: "Python, Scikit-learn, NLP, Naive Bayes",
    link: "https://github.com/yogithaprasad/Movie-Review-Sentiment-Analysis"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-800 p-6 rounded-lg hover:shadow-cyan-500/50 shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4"><strong>Skills:</strong> {project.skills}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              View on GitHub &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}