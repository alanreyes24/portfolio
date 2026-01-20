import "./Experience.css";

function Experience() {
  return (
    <>
      <div className="experience-container">
        <div className="experience">
          <div className="experience-date">2025 - Present</div>
          <div className="experience-name-description">
            <div className="experience-name">
              Web Development Intern · Nomad eCommerce{" "}
            </div>
            <div>
              {" "}
              Contributed to full-cycle web development projects by
              collaborating with engineers, SQL specialists, project managers,
              and UX/UI designers to build and improve client-facing and
              internal web tools. Supported development using HTML5, CSS3,
              JavaScript (ES6+), and databases; assisted with testing, QA,
              troubleshooting, and customer support. Gained hands-on experience
              with API integrations, performance and accessibility best
              practices, and modern web workflows while delivering solutions
              aligned with business goals in a fast-paced, team-driven
              environment.
            </div>
            <div className="experience-languages">javascript</div>
          </div>
        </div>
        <div className="experience">
          <div className="experience-date">January - August 2025</div>
          <div className="experience-name-description">
            <div className="experience-name">
              LLM Research Assistant · Washington University in St. Louis
            </div>
            <div>
              Designed and implemented fine-tuning pipelines for large language
              models (LLMs) on 50,000+ multi-state foster care regulatory
              documents, improving model performance on domain-specific legal
              text interpretation tasks.Optimized data ingestion, preprocessing,
              and training protocols, reducing pipeline runtime by 20% and
              enhancing accuracy, scalability, and reproducibility of
              experiments.
            </div>
            <div className="experience-languages">javascript</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
