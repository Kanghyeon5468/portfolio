const clusterDefinitions = [
  { name: "Web", color: "#16cce9", center: [-0.72, 0.12, -0.05] },
  { name: "AI / ML", color: "#a77bff", center: [-0.46, 0.28, 0.08] },
  { name: "Mobile Apps", color: "#2bd4a2", center: [-0.48, -0.2, -0.1] },
  { name: "Robotics", color: "#ffad36", center: [-0.05, 0.02, 0.12] },
  { name: "Quant", color: "#ff648f", center: [0.2, 0.3, -0.08] },
  { name: "Distributed Systems", color: "#56a1ff", center: [0.55, 0.16, 0.05] },
  { name: "Quantum", color: "#c27bff", center: [0.72, -0.18, -0.12] },
  { name: "DeFi / Blockchain", color: "#16d5d0", center: [0.42, -0.3, 0.12] },
];

const projectDefinitions = [
  {
    id: "lifo",
    name: "Lifo",
    cluster: "Mobile Apps",
    description: "Cross-platform revision app for active recall, spaced practice, and course sharing.",
    repo: "https://github.com/TumCucTom/lifo",
    tech: ["React Native", "TypeScript", "Firebase", "Cloud Functions", "FSRS", "iOS", "Android"],
  },
  {
    id: "property-matching-ai",
    name: "Property Matching AI",
    cluster: "Web",
    description: "Rental matching MVP with tenant profiles, listing enrichment, and explainable ranking.",
    tech: ["Cloudflare Workers", "D1", "JavaScript", "Authentication", "Property Market Intel"],
  },
  {
    id: "veritas",
    name: "Veritas",
    cluster: "AI / ML",
    description: "Federated fraud intelligence for banks using graph learning and privacy controls.",
    repo: "https://github.com/Kanghyeon5468/Veritas",
    tech: ["Federated Learning", "Graph Neural Networks", "Differential Privacy", "Python", "Next.js"],
  },
  {
    id: "ml-trading",
    name: "ML Trading",
    cluster: "Quant",
    description: "SPY intraday trading research with GBDT models and macro/FX features.",
    project: true,
    tech: ["Python", "GBDT", "Alpaca", "FRED", "pandas", "Backtesting"],
  },
  {
    id: "portfolio-optimisation",
    name: "Real-time Portfolio Optimisation",
    cluster: "Quantum",
    description: "EncodeAI project exploring quantum-enhanced DeFi portfolio optimisation.",
    repo: "https://github.com/Kanghyeon5468/Quantum-AI-DeFi-Portfolio-Optimisation",
    tech: ["Wormhole", "Solana", "Kernel Methods", "Explainable AI"],
  },
  {
    id: "game-of-life",
    name: "Game of Life",
    cluster: "Distributed Systems",
    description: "Parallel and distributed Conway's Game of Life implementations in Go.",
    repo: "https://github.com/Kanghyeon5468/Distributed-Vs-Parallel-GoL",
    tech: ["Go", "Goroutines", "Halo Exchange", "HPC", "AWS"],
  },
  {
    id: "industrial-hazard-detector",
    name: "Industrial Hazard Detector",
    cluster: "AI / ML",
    description: "Computer-vision safety platform for fire, smoke, and oil-leak detection.",
    repo: "https://github.com/Kanghyeon5468/u3core",
    tech: ["Computer Vision", "Roboflow", "OpenCV", "IoT Edge", "Twilio"],
  },
  {
    id: "adaptive-vr",
    name: "Adaptive VR",
    cluster: "Robotics",
    description: "Immersive interaction and adaptive experience tooling for robotics workflows.",
    repo: "https://github.com/Kanghyeon5468/robokit",
    tech: ["VR", "Robotics", "JavaScript", "Node.js", "Interaction Design"],
  },
  {
    id: "robot-arm",
    name: "Robot Arm",
    cluster: "Robotics",
    description: "Calibration-friendly arm control with Arduino firmware and Python serial tools.",
    repo: "https://github.com/Kanghyeon5468/robot-arm-agent",
    tech: ["Python", "Arduino", "Serial Control", "Calibration"],
  },
  {
    id: "ai-travel-planner",
    name: "AI Travel Planner",
    cluster: "Web",
    description: "Cloudflare chat app that researches destinations and builds itineraries.",
    repo: "https://github.com/Kanghyeon5468/cf_ai_travel_planner",
    tech: ["TypeScript", "Cloudflare Workers", "Durable Objects", "Workers AI", "React"],
  },
  {
    id: "blackswan",
    name: "BlackSwan",
    cluster: "DeFi / Blockchain",
    description: "Biometric event attestation and proof-of-affect concepts on Flare.",
    repo: "https://github.com/TumCucTom/black-swan",
    tech: ["Flare FDC", "Solidity", "Go", "RISC0", "Smart Contracts"],
  },
  {
    id: "ionq-remote-challenge",
    name: "IonQ Remote Challenge",
    cluster: "Quantum",
    description: "Remote quantum computing challenge work using qBraid and Python.",
    repo: "https://github.com/Kanghyeon5468/2024_IonQ_Remote",
    tech: ["Quantum Computing", "IonQ", "qBraid", "Python"],
  },
];

const portfolioMilestones = [
  {
    type: "achievements",
    name: "EncodeAI Wormhole Bounty Winner",
    cluster: "Quantum",
    description: "Awarded for a quantum-enhanced DeFi portfolio optimisation project.",
    target: "portfolio-optimisation",
  },
  {
    type: "achievements",
    name: "Top-ranked Computer Systems A project",
    cluster: "Distributed Systems",
    description: "Recognition for parallel and distributed Game of Life work.",
    target: "game-of-life",
  },
  {
    type: "experiences",
    name: "Industrial AI Safety Platform",
    cluster: "AI / ML",
    description: "Computer-vision and IoT safety work for industrial environments.",
    target: "industrial-hazard-detector",
  },
  {
    type: "timelines",
    name: "2025 · EncodeAI Wormhole bounty",
    cluster: "Quantum",
    description: "Hackathon milestone for the portfolio optimisation project.",
    target: "portfolio-optimisation",
  },
  {
    type: "timelines",
    name: "2024 · Computer Systems A",
    cluster: "Distributed Systems",
    description: "Parallel and distributed systems project.",
    target: "game-of-life",
  },
  {
    type: "timelines",
    name: "2024–25 · Industrial AI",
    cluster: "AI / ML",
    description: "Industrial safety platform work.",
    target: "industrial-hazard-detector",
  },
];

const mapCanvas = document.getElementById("portfolio-map-canvas");

if (mapCanvas) {
  const context = mapCanvas.getContext("2d");
  const mapFrame = mapCanvas.parentElement;
  const mapTooltip = document.getElementById("map-tooltip");
  const clusterList = document.getElementById("map-cluster-list");
  const clusterTotal = document.getElementById("map-cluster-total");
  const countLabel = document.getElementById("map-count");
  const selectionPanel = document.getElementById("map-selection");
  const typeButtons = [...document.querySelectorAll(".map-type-filter")];
  const allTypes = new Set(["repos", "projects", "achievements", "experiences", "timelines", "techs"]);
  const selectedTypes = new Set(allTypes);
  const visibleClusters = new Set(clusterDefinitions.map((cluster) => cluster.name));
  const clustersByName = new Map(clusterDefinitions.map((cluster) => [cluster.name, cluster]));
  const nodes = [];
  let visibleNodes = [];
  let projectedNodes = [];
  let hoveredNode = null;
  let yaw = -0.2;
  let pitch = -0.12;
  let zoom = 1;
  let dragState = null;
  let focusIndex = -1;
  let width = 0;
  let height = 0;

  function addNode(type, name, cluster, description, target, repoHref) {
    const definition = clustersByName.get(cluster);
    if (!definition) return;
    const groupIndex = nodes.filter((node) => node.cluster === cluster).length;
    const angle = groupIndex * 2.399963229728653;
    const radius = 0.035 + Math.sqrt(groupIndex + 1) * 0.048;
    const depth = Math.sin(groupIndex * 1.71) * 0.2;
    const [centerX, centerY, centerZ] = definition.center;

    nodes.push({
      type,
      name,
      cluster,
      color: definition.color,
      description,
      target,
      repoHref,
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius * 0.7,
      z: centerZ + depth,
    });
  }

  projectDefinitions.forEach((project) => {
    const target = project.id;
    addNode("projects", project.name, project.cluster, project.description, target);
    if (project.repo) {
      addNode("repos", `${project.name} · repository`, project.cluster, `GitHub repository for ${project.name}.`, target, project.repo);
    }
    project.tech.forEach((technology) => {
      addNode("techs", technology, project.cluster, `${technology} used in ${project.name}.`, target);
    });
  });

  portfolioMilestones.forEach((milestone) => {
    addNode(
      milestone.type,
      milestone.name,
      milestone.cluster,
      milestone.description,
      milestone.target,
    );
  });

  function createClusterFilters() {
    clusterTotal.textContent = String(clusterDefinitions.length);
    clusterDefinitions.forEach((cluster) => {
      const button = document.createElement("button");
      button.className = "map-cluster-toggle";
      button.type = "button";
      button.setAttribute("aria-pressed", "true");
      button.setAttribute("aria-label", `Toggle ${cluster.name} cluster`);

      const dot = document.createElement("span");
      dot.className = "map-cluster-dot";
      dot.style.backgroundColor = cluster.color;

      const name = document.createElement("span");
      name.className = "map-cluster-name";
      name.textContent = cluster.name;

      const count = document.createElement("span");
      count.className = "map-cluster-count";
      count.textContent = String(nodes.filter((node) => node.cluster === cluster.name).length);

      button.append(dot, name, count);
      button.addEventListener("click", () => {
        if (visibleClusters.has(cluster.name)) {
          visibleClusters.delete(cluster.name);
        } else {
          visibleClusters.add(cluster.name);
        }
        button.setAttribute("aria-pressed", String(visibleClusters.has(cluster.name)));
        updateVisibleNodes();
      });
      clusterList.append(button);
    });
  }

  function setSelection(node) {
    selectionPanel.replaceChildren();
    const label = document.createElement("span");
    label.className = "map-selection-label";
    label.textContent = node ? `${node.type} · ${node.cluster}` : "Selected point";
    const title = document.createElement("strong");
    title.textContent = node ? node.name : "Hover a point to explore";
    const description = document.createElement("p");
    description.textContent = node
      ? node.description
      : "Click a project or technology point to open its project details.";
    selectionPanel.append(label, title, description);
    if (node?.target) {
      const action = document.createElement("a");
      action.className = "map-selection-link";
      action.href = node.repoHref || `./project.html?project=${encodeURIComponent(node.target)}`;
      action.textContent = node.repoHref ? "Open repository ↗" : "Open project →";
      if (node.repoHref) {
        action.target = "_blank";
        action.rel = "noreferrer";
      }
      selectionPanel.append(action);
    }
  }

  function updateVisibleNodes() {
    visibleNodes = nodes.filter((node) => (
      visibleClusters.has(node.cluster) && selectedTypes.has(node.type)
    ));
    if (hoveredNode && !visibleNodes.includes(hoveredNode)) {
      hoveredNode = null;
      mapTooltip.hidden = true;
      setSelection(null);
    }
    const count = visibleNodes.length;
    countLabel.textContent = `${count} / ${nodes.length} points visible`;
    drawMap();
  }

  function updateTypeButtons() {
    typeButtons.forEach((button) => {
      const type = button.dataset.mapType;
      const active = type === "all"
        ? allTypes.size === selectedTypes.size
        : selectedTypes.has(type);
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  typeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.mapType;
      if (type === "all") {
        if (selectedTypes.size === allTypes.size) {
          selectedTypes.clear();
        } else {
          allTypes.forEach((item) => selectedTypes.add(item));
        }
      } else if (selectedTypes.has(type)) {
        selectedTypes.delete(type);
      } else {
        selectedTypes.add(type);
      }
      updateTypeButtons();
      updateVisibleNodes();
    });
  });

  document.getElementById("map-select-all").addEventListener("click", () => {
    clusterDefinitions.forEach((cluster) => visibleClusters.add(cluster.name));
    clusterList.querySelectorAll(".map-cluster-toggle").forEach((button) => {
      button.setAttribute("aria-pressed", "true");
    });
    updateVisibleNodes();
  });

  document.getElementById("map-select-none").addEventListener("click", () => {
    visibleClusters.clear();
    clusterList.querySelectorAll(".map-cluster-toggle").forEach((button) => {
      button.setAttribute("aria-pressed", "false");
    });
    updateVisibleNodes();
  });

  function projectPoint(node) {
    const rotatedX = node.x * Math.cos(yaw) - node.z * Math.sin(yaw);
    const rotatedZ = node.x * Math.sin(yaw) + node.z * Math.cos(yaw);
    const rotatedY = node.y * Math.cos(pitch) - rotatedZ * Math.sin(pitch);
    const depth = node.y * Math.sin(pitch) + rotatedZ * Math.cos(pitch);
    const perspective = 1 / (1.8 - depth);
    const scale = Math.min(width, height) * 0.72 * zoom;
    return {
      x: width / 2 + rotatedX * scale * perspective,
      y: height / 2 + rotatedY * scale * perspective,
      depth,
      radius: Math.max(1.3, (2 + perspective * 1.4) * Math.sqrt(zoom)),
    };
  }

  function drawMap() {
    if (!context || !width || !height) return;
    context.clearRect(0, 0, width, height);
    projectedNodes = visibleNodes
      .map((node) => ({ node, ...projectPoint(node) }))
      .sort((a, b) => a.depth - b.depth);

    projectedNodes.forEach((point) => {
      const isHovered = point.node === hoveredNode;
      const depthOpacity = Math.max(0.42, Math.min(1, 0.72 + point.depth * 0.5));
      context.globalAlpha = isHovered ? 1 : depthOpacity;
      context.fillStyle = point.node.color;
      context.beginPath();
      context.arc(point.x, point.y, point.radius + (isHovered ? 1.8 : 0), 0, Math.PI * 2);
      context.fill();

      if (isHovered) {
        context.globalAlpha = 0.28;
        context.beginPath();
        context.arc(point.x, point.y, point.radius * 4.5, 0, Math.PI * 2);
        context.fill();
        context.globalAlpha = 1;
        context.font = "12px SFMono-Regular, Consolas, monospace";
        context.fillStyle = "#f3f4f6";
        context.fillText(point.node.name, point.x + 10, point.y - 10);
      }
    });
    context.globalAlpha = 1;
  }

  function resizeMap() {
    const bounds = mapFrame.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = bounds.width;
    height = bounds.height;
    mapCanvas.width = Math.round(width * pixelRatio);
    mapCanvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    drawMap();
  }

  function findNearestNode(x, y) {
    let nearest = null;
    let nearestDistance = Infinity;
    projectedNodes.forEach((point) => {
      const distance = Math.hypot(point.x - x, point.y - y);
      if (distance < Math.max(12, point.radius + 6) && distance < nearestDistance) {
        nearest = point.node;
        nearestDistance = distance;
      }
    });
    return nearest;
  }

  function setHoveredNode(node, x, y) {
    if (hoveredNode !== node) {
      hoveredNode = node;
      setSelection(node);
      drawMap();
    }
    if (node) {
      mapTooltip.textContent = node.name;
      mapTooltip.hidden = false;
      const left = Math.min(x + 14, mapFrame.clientWidth - 250);
      const top = Math.max(8, Math.min(y + 12, mapFrame.clientHeight - 38));
      mapTooltip.style.left = `${Math.max(8, left)}px`;
      mapTooltip.style.top = `${top}px`;
    } else {
      mapTooltip.hidden = true;
    }
  }

  function openNode(node) {
    if (!node?.target) return;
    if (node.repoHref) {
      window.open(node.repoHref, "_blank", "noopener,noreferrer");
      return;
    }
    window.location.href = `./project.html?project=${encodeURIComponent(node.target)}`;
  }

  mapCanvas.addEventListener("pointerdown", (event) => {
    dragState = { x: event.clientX, y: event.clientY, moved: false };
    mapCanvas.setPointerCapture(event.pointerId);
  });

  mapCanvas.addEventListener("pointermove", (event) => {
    const bounds = mapCanvas.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    if (dragState) {
      const deltaX = event.clientX - dragState.x;
      const deltaY = event.clientY - dragState.y;
      if (Math.abs(deltaX) + Math.abs(deltaY) > 3) dragState.moved = true;
      yaw += deltaX * 0.008;
      pitch = Math.max(-1.25, Math.min(1.25, pitch + deltaY * 0.008));
      dragState.x = event.clientX;
      dragState.y = event.clientY;
      drawMap();
      mapTooltip.hidden = true;
      return;
    }
    setHoveredNode(findNearestNode(x, y), x, y);
  });

  mapCanvas.addEventListener("pointerup", (event) => {
    if (dragState && !dragState.moved) {
      const bounds = mapCanvas.getBoundingClientRect();
      const node = findNearestNode(event.clientX - bounds.left, event.clientY - bounds.top);
      if (node) openNode(node);
    }
    dragState = null;
  });

  mapCanvas.addEventListener("pointercancel", () => {
    dragState = null;
  });

  mapCanvas.addEventListener("pointerleave", () => {
    if (!dragState) setHoveredNode(null);
  });

  mapCanvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoom = Math.max(0.55, Math.min(2.4, zoom * (event.deltaY < 0 ? 1.08 : 0.92)));
    drawMap();
  }, { passive: false });

  mapCanvas.addEventListener("keydown", (event) => {
    if (event.key === "Home") {
      yaw = -0.2;
      pitch = -0.12;
      zoom = 1;
    } else if (event.key === "+" || event.key === "=") {
      zoom = Math.min(2.4, zoom * 1.12);
    } else if (event.key === "-") {
      zoom = Math.max(0.55, zoom * 0.9);
    } else if (event.key.startsWith("Arrow")) {
      if (!visibleNodes.length) return;
      event.preventDefault();
      const direction = event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1;
      focusIndex = (focusIndex + direction + visibleNodes.length) % visibleNodes.length;
      setHoveredNode(visibleNodes[focusIndex], width / 2, height / 2);
    } else if (event.key === "Enter" && hoveredNode) {
      openNode(hoveredNode);
    } else {
      return;
    }
    drawMap();
  });

  createClusterFilters();
  updateTypeButtons();
  updateVisibleNodes();
  resizeMap();
  if ("ResizeObserver" in window) {
    new ResizeObserver(resizeMap).observe(mapFrame);
  } else {
    window.addEventListener("resize", resizeMap);
  }
}
