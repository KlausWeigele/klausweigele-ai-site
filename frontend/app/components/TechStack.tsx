const STACK = [
  {
    category: "Industrial Data & Infrastructure",
    tools: ["Time-Series Pipelines", "IIoT Integration", "Data Lakehouse", "Feature Stores"],
  },
  {
    category: "Machine Learning & LLMs",
    tools: ["PyTorch / Scikit-Learn", "OpenAI & Azure OpenAI", "RAG-Orchestrierung", "Prompt Guardrails"],
  },
  {
    category: "Application Layer",
    tools: ["Next.js Interfaces", "FastAPI & GraphQL", "Edge & Cloud Deployments", "Real-time Dashboards"],
  },
  {
    category: "MLOps & Governance",
    tools: ["GitHub Actions", "Terraform & Bicep", "Model Monitoring", "Audit & Compliance"],
  },
];

export function TechStack() {
  return (
    <section className="relative" id="capabilities">
      <div className="container-boundary space-y-8">
        <div className="space-y-3">
          <span className="subheading">Capabilities</span>
          <h2 className="text-3xl font-display text-white md:text-4xl">
            Bewährte Komponenten, kombiniert für Geschwindigkeit & Sicherheit.
          </h2>
          <p className="max-w-3xl text-lg text-slate-300">
            Jede Lösung greift auf moderne, industrieerprobte Tools zurück – von IIoT-Datenpipelines bis zu abgesicherten LLM-Integrationen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STACK.map((group) => (
            <article key={group.category} className="card-surface rounded-3xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {group.tools.map((tool) => (
                  <li key={tool} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" aria-hidden />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
