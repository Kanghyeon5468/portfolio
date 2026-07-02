const projects = {
  "ml-trading": {
    title: "ML Trading",
    category: "Quant / Machine Learning",
    thumb: "ml-trading",
    summary:
      "A SPY 5-minute trading system that combines intraday market data with inflation, breakeven, FX, and USD-strength macro features.",
    links: [
      { label: "Local README", href: "../quant/spy-5m-gbdt-trader/README.md" },
    ],
    stack: [
      "Python",
      "pandas",
      "GBDT",
      "Alpaca",
      "FRED",
      "Inflation Data",
      "FX Rates",
      "Backtesting",
      "machine learning"
    ],
    overview: [
      "This project separates the trading workflow into training, live execution, and daily dataset maintenance.",
      "The dataset uses Alpaca 5-minute OHLCV bars for SPY, QQQ, IWM, VXX, TLT, and GLD, then adds technical, volume, VWAP, opening-range, and cross-asset features.",
      "Macro features come from FRED, including CPI, core CPI, 5-year and 10-year breakeven inflation, and major currency exchange rates such as EUR/USD, USD/JPY, GBP/USD, USD/CAD, USD/CHF, USD/CNY, AUD/USD, USD/KRW, and USD/MXN.",
      "The system derives FX returns, z-scores, inflation changes, and a USD-strength composite so the model can learn from broader macro and currency conditions.",
      "The training script trains separate up/down GBDT models, selects useful features, searches trading thresholds, and saves a reusable model bundle.",
      "The live trader loads that bundle and can run as a dry run or submit Alpaca paper-trading orders on a 5-minute rebalance cycle.",
    ],
    highlights: [
      "Combines intraday equity/ETF data with inflation and global FX signals.",
      "Uses CPI, core CPI, breakeven inflation, currency returns, FX z-scores, and USD-strength features.",
      "Clear separation between research, live trading, and daily data updates.",
      "Supports full dataset rebuilds and incremental after-market updates.",
      "Designed so intraday trading does not retrain unexpectedly during a session.",
    ],
    media: [
      {
        src: "./assets/projects/output.png",
        label: "Live trading vs buy and hold return chart",
        type: "image/png",
      },
    ],
    content: [
      {
        type: "text",
        text: "The model combines intraday equity and ETF signals with inflation and global FX features to capture both market microstructure and broader macro conditions.",
      },
      {
        type: "image",
        src: "./assets/projects/output.png",
        alt: "Live trading vs buy and hold return chart",
      },
      {
        type: "text",
        text: "The plotted comparison uses the gathered dataset period and compares SPY buy-and-hold returns against the live-trading logic without trading fees.",
      },
    ],
  },
  "portfolio-optimisation": {
    title: "Real-time Portfolio Optimisation",
    category: "Quantum Finance / DeFi",
    thumb: "portfolio-optimisation",
    summary:
      "EncodeAI Wormhole bounty winning project for quantum-enhanced DeFi portfolio optimisation with explainable AI.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kanghyeon5468/Quantum-AI-DeFi-Portfolio-Optimisation",
      },
    ],
    stack: ["Quantum Finance", "Wormhole", "Solana", "XAI", "Kernel Methods"],
    overview: [
      "CertAInty Quantum is a suite of tools for quantum-enhanced portfolio optimisation and AI-assisted execution.",
      "The project combines Wormhole data, quantum topological data analysis, quantum Monte Carlo concepts, and an explainable assistant.",
      "It was built for the EncodeAI hackathon and won the Wormhole bounty.",
    ],
    highlights: [
      "Built a DeFi portfolio workflow around live data and quantum-inspired analysis.",
      "Used AI explanations to make complex quantum finance tools easier to understand.",
      "Explored Solana-based portfolio rebalancing for lower transaction costs.",
    ],
  },
  "game-of-life": {
    title: "Game of Life",
    category: "Distributed Systems",
    thumb: "game-of-life",
    summary:
      "Top-ranked Computer Systems A project comparing parallel and distributed Conway's Game of Life implementations in Go.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kanghyeon5468/Distributed-Vs-Parallel-GoL",
      },
    ],
    stack: ["Go", "Goroutines", "Halo Exchange", "Distributed Systems"],
    overview: [
      "This project implemented, optimised, and compared parallel and distributed versions of Conway's Game of Life.",
      "The work focused on concurrency, halo exchange, communication overhead, and architecture-level performance tradeoffs.",
      "It was top in cohort for Computer Systems A.",
    ],
    highlights: [
      "Implemented parallel simulation using Go concurrency primitives.",
      "Built a distributed version and analysed communication costs.",
      "Documented optimisation findings in a detailed report.",
    ],
  },
  "industrial-hazard-detector": {
    title: "Industrial Hazard Detector",
    category: "Computer Vision / IoT",
    thumb: "hazard-detector",
    summary:
      "u3Core industrial safety platform for detecting fire, smoke, and oil leaks from camera feeds across cloud and edge deployments.",
    links: [{ label: "GitHub", href: "https://github.com/Kanghyeon5468/u3core" }],
    stack: ["Computer Vision", "Roboflow", "OpenCV", "Twilio", "AWS", "IoT Edge"],
    overview: [
      "u3Core is an ML/AI microservice layer integrated with an existing IoT platform for industrial anomaly detection.",
      "The system targets fire, smoke, and oil leak detection from CCTV feeds, with camera-independent deployment options.",
      "It includes alerting concepts for SMS, email, and WhatsApp, plus reporting and future third-party integrations.",
    ],
    highlights: [
      "Designed cloud and AI-edge deployment architectures.",
      "Used Roboflow/OpenCV-style computer vision workflows for hazard detection.",
      "Connected detection events to operational alert and incident-tracking requirements.",
    ],
  },
  "adaptive-vr": {
    title: "Adaptive VR",
    category: "VR / Robotics Interaction",
    thumb: "adaptive-vr",
    summary:
      "A VR and robotics interaction project around immersive control workflows, adaptive experiences, and evaluation tooling.",
    links: [{ label: "GitHub", href: "https://github.com/Kanghyeon5468/robokit" }],
    stack: ["VR", "Robotics", "JavaScript", "Node.js", "Evaluation"],
    overview: [
      "This project combines robotics interaction and immersive interface experimentation.",
      "The repository includes JavaScript app logic, model assets, deployment files, and an evaluation receiver server.",
      "It is presented as one portfolio project because the Adaptive VR and robotic work are part of the same effort.",
    ],
    highlights: [
      "Built around robot interaction workflows and evaluation support.",
      "Includes model and deployment assets for prototyping.",
      "Connects immersive UI ideas with robotics control contexts.",
    ],
  },
  "robot-arm": {
    title: "Robot Arm",
    category: "Robotics Control",
    thumb: "robot-arm",
    summary:
      "A calibration-friendly robot arm control stack with Arduino firmware, Python serial tooling, and named primitives.",
    links: [
      { label: "GitHub", href: "https://github.com/Kanghyeon5468/robot-arm-agent" },
    ],
    stack: ["Python", "Arduino", "Serial Control", "Calibration", "Robotics"],
    overview: [
      "The robot primitives folder is a first step toward a safer, calibration-friendly control stack for a physical robot arm.",
      "It includes Arduino firmware for serial control with joint limits and Python tools for sending commands and running named primitives.",
      "The documentation is structured around discovering safe angles and useful real-world poses.",
    ],
    highlights: [
      "Includes firmware, serial client code, primitive definitions, and CLI tooling.",
      "Focuses on safe joint ranges and hardware calibration.",
      "Documents expected tuning for directions, min/max values, gripper states, and coordinated poses.",
    ],
  },
  "ai-travel-planner": {
    title: "AI Travel Planner",
    category: "Cloud AI App",
    thumb: "ai-travel",
    summary:
      "A Cloudflare Worker chat app that researches destinations, estimates context, stores preferences, and generates day-by-day itineraries.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kanghyeon5468/cf_ai_travel_planner",
      },
      {
        label: "Live Demo",
        href: "https://trip-planner.rkdgus5468.workers.dev",
      },
    ],
    stack: ["TypeScript", "Cloudflare Workers", "Durable Objects", "Workers AI", "React"],
    overview: [
      "This is a small AI chat app for planning trips from natural-language prompts.",
      "The assistant can research destination context, sketch weather and budget information, remember preferences, and write full day-by-day itineraries.",
      "Conversation state and itinerary memory live in a Durable Object, while the model runs on Workers AI.",
    ],
    highlights: [
      "Built with Vite, React, Tailwind, Cloudflare Workers, and Durable Objects.",
      "Supports active itinerary creation, modification, saved trips, and preference memory.",
      "Includes optional admin logging for inspecting recent chat sessions.",
    ],
  },
  blackswan: {
    title: "BlackSwan",
    category: "Blockchain / Biometric Data",
    thumb: "blackswan",
    summary:
      "A Flare Coston2 project for a bio-sovereign data market using biometric event attestation and proof-of-affect mechanics.",
    links: [{ label: "GitHub", href: "https://github.com/TumCucTom/black-swan" }],
    stack: ["Flare FDC", "Solidity", "Go", "RISC0", "Biometrics"],
    overview: [
      "BlackSwan explores a speculative bio-sovereign data market where real-time biometric reactions become attestable data.",
      "The project uses Flare Data Connector concepts to attest to real-world biometric events and connect backend verification to on-chain logic.",
      "It includes smart contracts, backend setup, RISC0 prover notes, and a demo app path.",
    ],
    highlights: [
      "Built on the Flare Coston2 testnet with FDC integration.",
      "Includes a TrustlessAffectVerifier smart contract and escrow mechanics.",
      "Frames proof-of-affect as a primitive for biometric reaction markets.",
    ],
  },
  "ionq-remote-challenge": {
    title: "IonQ Remote Challenge",
    category: "Quantum Computing",
    thumb: "ionq",
    summary:
      "IonQ iQuHACK remote challenge work with qBraid notebooks and Python wrappers for probing and attacking challenge vaults.",
    links: [
      { label: "GitHub", href: "https://github.com/Kanghyeon5468/2024_IonQ_Remote" },
    ],
    stack: ["Quantum", "IonQ", "qBraid", "Python"],
    overview: [
      "This repository contains IonQ iQuHACK 2024 remote challenge materials.",
      "The server script provides wrapper functions for probe, attack, and related challenge calls.",
      "The notebook demonstrates basic usage for interacting with the challenge workflow.",
    ],
    highlights: [
      "Worked with qBraid-hosted quantum challenge infrastructure.",
      "Used Python wrappers to interact with challenge vaults.",
      "Combined notebooks, challenge documentation, and auto-graded attack workflows.",
    ],
  },
  "veritas": {
    title: "Veritas",
    category: "Federated Learning / Banking",
    thumb: "veritas",
    summary:
      "Federated fraud intelligence for UK banking—a cross-bank fraud detection model trained across multiple banks' records using federated learning to catch scam campaigns in hours.",
    links: [
      { label: "GitHub", href: "https://github.com/Kanghyeon5468/Veritas" },
      { label: "Project Deck", href: "../Veritas/docs/" },
    ],
    stack: [
      "Federated Learning",
      "Python",
      "Graph Neural Networks",
      "Differential Privacy",
      "Banking",
      "NextJS",
      "TypeScript",
      "EdDSA",
      "Zero-Knowledge Proofs",
    ],
    overview: [
      "Veritas is a federated fraud detection platform designed to help multiple UK banks collaborate on detecting cross-bank scam and mule campaigns without sharing customer records.",
      "The system trains a shared fraud-detection model across many banks' data using federated learning, allowing each bank to keep sensitive data on-premises while benefiting from aggregated intelligence.",
      "The tech stack includes a Python federated-learning engine with multiple model architectures (logistic regression, MLP, GRU, GraphSAGE GNN, embeddings, federated GBDT + stacked ensemble), secure aggregation, differential privacy (RDP accountant), and VSA zero-knowledge proofs.",
      "A tier-2 control plane manages enrolment, authentication (EdDSA JWTs), federation rounds, model registry, node attestation, and signed tamper-evident transparency logs.",
      "Bank nodes run identity, attestation, feature-map connectors, and federation clients. A Next.js demo console visualizes the live siloed-vs-federated race and includes an 'Under the hood' gallery showing real model visualizations.",
    ],
    highlights: [
      "Federated learning across multiple banks without sharing customer data.",
      "Multiple model architectures (logistic, MLP, GRU, GraphSAGE GNN, ensembles).",
      "Differential privacy and secure aggregation for data protection.",
      "Zero-knowledge proofs and tamper-evident transparency logs.",
      "Live demo console with model visualizations.",
      "Production-ready node runtime and control-plane infrastructure.",
    ],
    content: [
      {
        type: "text",
        text: "Veritas solves the cross-bank fraud detection problem by allowing multiple banks to train a shared model on their local data without ever transmitting customer records. Each bank runs a secure node that participates in federation rounds, sending only model gradients (not raw data) to the control plane.",
      },
      {
        type: "text",
        text: "The federated engine supports multiple architectures: standard logistic regression and MLP for baseline comparison, GRU recurrent models for temporal fraud patterns, GraphSAGE for graph-based account-network analysis, and stacked ensembles that combine multiple models for robust predictions.",
      },
      {
        type: "text",
        text: "Differential privacy is baked in via RDP (Rényi differential privacy) accounting, allowing banks to guarantee privacy budgets. Secure aggregation ensures that the control plane never sees individual gradients. VSA (Verifiable Secret Aggregation) with zero-knowledge proofs enables auditable, tamper-evident federation.",
      },
      {
        type: "text",
        text: "The demo includes a live race view showing how the federated model out-detects siloed models, and an 'Under the hood' gallery of precomputed real model visualizations. Bank nodes can be spun up locally or deployed to production with full governance, attestation, and transparency log support.",
      },
    ],
  },
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("project") || "ml-trading";
const project = projects[projectId] || projects["ml-trading"];

document.title = `${project.title} | Kanghyeon`;
document.getElementById("project-category").textContent = project.category;
document.getElementById("project-title").textContent = project.title;
document.getElementById("project-summary").textContent = project.summary;
document.getElementById("project-thumb").className = `detail-thumb project-thumb ${project.thumb}`;

const actions = document.getElementById("project-actions");
project.links.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.className = "button secondary";
  anchor.href = link.href;
  anchor.textContent = link.label;
  if (link.href.startsWith("https://")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  actions.append(anchor);
});

const overview = document.getElementById("project-overview");
project.overview.forEach((text) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  overview.append(paragraph);
});

const stack = document.getElementById("project-stack");
project.stack.forEach((text) => {
  const item = document.createElement("li");
  item.textContent = text;
  stack.append(item);
});

const projectContent = document.getElementById("project-content");

function appendTextBlock(text) {
  const paragraph = document.createElement("p");
  paragraph.className = "content-text";
  paragraph.textContent = text;
  projectContent.append(paragraph);
}

function appendMediaBlock(source, label, type = "") {
  const card = document.createElement("figure");
  card.className = "content-media";

  const isVideo = type.startsWith("video/") || /\.(mp4|mov|webm)$/i.test(source);
  const preview = isVideo ? document.createElement("video") : document.createElement("img");

  preview.src = source;
  preview.alt = label;
  if (isVideo) {
    preview.controls = true;
  }

  card.append(preview);
  projectContent.append(card);
}

function renderProjectContent() {
  const fallbackContent = [
    ...(project.highlights || []).map((text) => ({ type: "text", text })),
    ...(project.media || []).map((item) => ({
      type: item.type?.startsWith("video/") ? "video" : "image",
      src: item.src,
      alt: item.label,
      label: item.label,
      mediaType: item.type,
    })),
  ];
  const content = project.content || fallbackContent;

  if (!content.length) {
    appendTextBlock("More details will be added soon.");
    return;
  }

  content.forEach((item) => {
    if (item.type === "image" || item.type === "video") {
      appendMediaBlock(item.src, item.alt || item.label || project.title, item.mediaType || item.type);
      return;
    }

    appendTextBlock(item.text);
  });
}

renderProjectContent();
