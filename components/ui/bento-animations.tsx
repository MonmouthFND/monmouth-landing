"use client"

import { motion } from "framer-motion"

const MINT = "hsl(var(--mint))"
const ROSE = "hsl(var(--rose))"
const NAVY = "hsl(var(--navy))"
const MUTED = "hsl(var(--muted-foreground))"
const MUTED_BG = "hsl(var(--muted))"

// 1. IdentityAnimation — central hex with orbiting satellite nodes
export function IdentityAnimation() {
  const satellites = [
    { angle: 0, delay: 0 },
    { angle: 72, delay: 0.4 },
    { angle: 144, delay: 0.8 },
    { angle: 216, delay: 1.2 },
    { angle: 288, delay: 1.6 },
  ]
  const radius = 60

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {satellites.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180
          const cx = 150 + radius * Math.cos(rad)
          const cy = 100 + radius * Math.sin(rad)
          return (
            <g key={i}>
              <motion.line
                x1="150" y1="100" x2={cx} y2={cy}
                stroke={MINT}
                strokeWidth="1.5"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: s.delay }}
              />
              <motion.circle
                cx={cx} cy={cy} r="6"
                fill={MINT}
                initial={{ opacity: 0.4, scale: 0.8 }}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: s.delay }}
              />
            </g>
          )
        })}
        {/* Center hexagon */}
        <motion.polygon
          points="150,75 170,87.5 170,112.5 150,125 130,112.5 130,87.5"
          fill="none"
          stroke={MINT}
          strokeWidth="2.5"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.circle cx="150" cy="100" r="8" fill={MINT}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </svg>
    </div>
  )
}

// 2. ReputationAnimation — bar chart with floating scores
export function ReputationAnimation() {
  const bars = [
    { x: 50, height: 80, delay: 0 },
    { x: 90, height: 110, delay: 0.3 },
    { x: 130, height: 60, delay: 0.6 },
    { x: 170, height: 130, delay: 0.9 },
    { x: 210, height: 95, delay: 1.2 },
  ]

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {bars.map((bar, i) => (
          <g key={i}>
            <motion.rect
              x={bar.x} width="24" rx="4"
              fill={ROSE}
              initial={{ y: 180, height: 0, opacity: 0.4 }}
              animate={{
                y: [180, 180 - bar.height, 180 - bar.height * 0.6, 180 - bar.height],
                height: [0, bar.height, bar.height * 0.6, bar.height],
                opacity: [0.4, 0.9, 0.5, 0.9],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: bar.delay }}
            />
            <motion.text
              x={bar.x + 12} textAnchor="middle"
              fill={ROSE}
              fontSize="10"
              fontFamily="monospace"
              initial={{ y: 180 - bar.height - 5, opacity: 0 }}
              animate={{
                y: [180 - bar.height - 5, 180 - bar.height - 25],
                opacity: [0, 0.8, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: bar.delay + 1 }}
            >
              {(70 + i * 6).toString()}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  )
}

// 3. ValidationAnimation — grid of circles with a scanning line
export function ValidationAnimation() {
  const grid = Array.from({ length: 16 }, (_, i) => ({
    x: 90 + (i % 4) * 35,
    y: 50 + Math.floor(i / 4) * 30,
    delay: (i % 4) * 0.15 + Math.floor(i / 4) * 0.6,
  }))

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {/* Scanning line */}
        <motion.line
          x1="70" x2="230" strokeWidth="2"
          stroke={MINT}
          initial={{ y1: 40, y2: 40, opacity: 0.3 }}
          animate={{ y1: [40, 170, 40], y2: [40, 170, 40], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        {grid.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x} cy={dot.y} r="7"
            initial={{ fill: MUTED_BG, opacity: 0.4 }}
            animate={{
              fill: [MUTED_BG, MINT, MINT, MUTED_BG],
              opacity: [0.4, 1, 0.8, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: dot.delay }}
          />
        ))}
      </svg>
    </div>
  )
}

// 4. ClassificationAnimation — stream of dots splitting into 3 colored lanes
export function ClassificationAnimation() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    delay: i * 0.5,
    lane: i % 3,
  }))

  const laneColors = [MINT, ROSE, NAVY]
  const laneY = [70, 100, 130]

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {/* Classifier diamond */}
        <motion.polygon
          points="150,80 170,100 150,120 130,100"
          fill="none"
          stroke={MUTED}
          strokeWidth="1.5"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Lane lines */}
        {laneY.map((y, i) => (
          <line key={i} x1="170" y1={y} x2="270" y2={y}
            stroke={laneColors[i]} strokeWidth="0.5" opacity="0.3" />
        ))}
        {/* Flowing particles */}
        {particles.map((p, i) => (
          <motion.circle
            key={i}
            r="4"
            fill={laneColors[p.lane]}
            initial={{ cx: 30, cy: 100, opacity: 0 }}
            animate={{
              cx: [30, 130, 170, 270],
              cy: [100, 100, laneY[p.lane], laneY[p.lane]],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  )
}

// 5. PrecompilesAnimation — hexagonal honeycomb that pulses
export function PrecompilesAnimation() {
  const hexSize = 22
  const hexPositions = [
    { x: 150, y: 75 },   // top
    { x: 112, y: 97 },   // top-left
    { x: 188, y: 97 },   // top-right
    { x: 131, y: 125 },  // bottom-left
    { x: 169, y: 125 },  // bottom-right
  ]
  const colors = [MINT, ROSE, NAVY, MINT, ROSE]

  function hexPoints(cx: number, cy: number, s: number) {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6
      return `${cx + s * Math.cos(angle)},${cy + s * Math.sin(angle)}`
    }).join(" ")
  }

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {hexPositions.map((pos, i) => (
          <motion.polygon
            key={i}
            points={hexPoints(pos.x, pos.y, hexSize)}
            fill="none"
            stroke={colors[i]}
            strokeWidth="2"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              fill: ["transparent", colors[i], "transparent"],
              fillOpacity: [0, 0.15, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>
    </div>
  )
}

// 6. IntentAnimation — speech bubble morphing into arrow path to target
export function IntentAnimation() {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {/* Speech bubble */}
        <motion.rect
          x="30" y="70" width="60" height="40" rx="8"
          fill="none" stroke={MINT} strokeWidth="2"
          animate={{ opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.rect x="42" y="80" width="36" height="3" rx="1.5" fill={MINT}
          animate={{ opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.rect x="42" y="87" width="28" height="3" rx="1.5" fill={MINT}
          animate={{ opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
        />
        <motion.rect x="42" y="94" width="32" height="3" rx="1.5" fill={MINT}
          animate={{ opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}
        />

        {/* Flowing path */}
        <motion.path
          d="M 100 90 Q 140 60 170 90 Q 200 120 230 90"
          fill="none"
          stroke={MINT}
          strokeWidth="2"
          strokeDasharray="8 4"
          animate={{ strokeDashoffset: [40, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Waypoints */}
        {[140, 170, 200].map((x, i) => (
          <motion.circle
            key={i}
            cx={x} cy={i === 1 ? 90 : i === 0 ? 75 : 105} r="3"
            fill={MINT}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        {/* Target */}
        <motion.circle
          cx="250" cy="90" r="14"
          fill="none" stroke={MINT} strokeWidth="2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle cx="250" cy="90" r="5" fill={MINT}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </div>
  )
}

// 7. PurposeBuiltAnimation — side-by-side: bolt-on (messy) vs built-in (unified)
export function PurposeBuiltAnimation() {
  // Left side: "bolt-on" — scattered plugin blocks with dashed connections
  const boltOnBlocks = [
    { x: 40, y: 40, w: 50, h: 22, label: "ID" },
    { x: 110, y: 75, w: 55, h: 22, label: "REP" },
    { x: 35, y: 110, w: 60, h: 22, label: "INTENT" },
    { x: 130, y: 130, w: 45, h: 22, label: "COORD" },
    { x: 95, y: 25, w: 48, h: 22, label: "POLICY" },
  ]
  const boltOnLinks = [
    [0, 1], [1, 2], [0, 4], [2, 3], [1, 3],
  ]

  // Right side: "built-in" — clean layered stack, all connected
  const builtInLayers = [
    { x: 365, y: 30, w: 200, h: 26, label: "IDENTITY", color: MINT },
    { x: 365, y: 62, w: 200, h: 26, label: "REPUTATION", color: MINT },
    { x: 365, y: 94, w: 200, h: 26, label: "INTENTS", color: MINT },
    { x: 365, y: 126, w: 200, h: 26, label: "COORDINATION", color: MINT },
    { x: 365, y: 158, w: 200, h: 26, label: "POLICIES", color: MINT },
  ]

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Left label */}
        <text x="95" y="178" textAnchor="middle" fill={MUTED} fontSize="9" fontFamily="monospace" opacity="0.5">
          BOLT-ON
        </text>

        {/* Dashed connections (bolt-on) */}
        {boltOnLinks.map(([a, b], i) => (
          <motion.line
            key={`bl-${i}`}
            x1={boltOnBlocks[a].x + boltOnBlocks[a].w / 2}
            y1={boltOnBlocks[a].y + 11}
            x2={boltOnBlocks[b].x + boltOnBlocks[b].w / 2}
            y2={boltOnBlocks[b].y + 11}
            stroke={ROSE}
            strokeWidth="1"
            strokeDasharray="4 3"
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* Bolt-on blocks (scattered, slightly rotated) */}
        {boltOnBlocks.map((block, i) => (
          <g key={`bo-${i}`}>
            <motion.rect
              x={block.x} y={block.y} width={block.w} height={block.h} rx="4"
              fill="none" stroke={ROSE} strokeWidth="1.5"
              strokeDasharray="6 3"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
            <motion.text
              x={block.x + block.w / 2} y={block.y + 14} textAnchor="middle"
              fill={ROSE} fontSize="8" fontFamily="monospace"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            >
              {block.label}
            </motion.text>
          </g>
        ))}

        {/* Divider */}
        <line x1="300" y1="20" x2="300" y2="180" stroke={MUTED} strokeWidth="0.5" opacity="0.2" />
        <motion.text x="300" y="105" textAnchor="middle" fill={MUTED} fontSize="16" fontFamily="monospace"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          vs
        </motion.text>

        {/* Right label */}
        <text x="465" y="195" textAnchor="middle" fill={MUTED} fontSize="9" fontFamily="monospace" opacity="0.5">
          BUILT-IN
        </text>

        {/* Built-in layers (clean stack) */}
        {builtInLayers.map((layer, i) => (
          <g key={`bi-${i}`}>
            <motion.rect
              x={layer.x} y={layer.y} width={layer.w} height={layer.h} rx="5"
              fill="none" stroke={layer.color} strokeWidth="1.5"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
            />
            <motion.rect
              x={layer.x} y={layer.y} width={layer.w} height={layer.h} rx="5"
              fill={layer.color}
              animate={{ opacity: [0.02, 0.08, 0.02] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
            />
            <motion.text
              x={layer.x + layer.w / 2} y={layer.y + 16} textAnchor="middle"
              fill={layer.color} fontSize="9" fontFamily="monospace" fontWeight="bold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
            >
              {layer.label}
            </motion.text>
            {/* Solid connectors between layers */}
            {i < builtInLayers.length - 1 && (
              <motion.line
                x1={layer.x + 15} y1={layer.y + layer.h}
                x2={layer.x + 15} y2={layer.y + layer.h + 6}
                stroke={layer.color} strokeWidth="1.5"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
              />
            )}
            {i < builtInLayers.length - 1 && (
              <motion.line
                x1={layer.x + layer.w - 15} y1={layer.y + layer.h}
                x2={layer.x + layer.w - 15} y2={layer.y + layer.h + 6}
                stroke={layer.color} strokeWidth="1.5"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

// 8. KnowAgentsAnimation — network of agents with identity reveals on scan
export function KnowAgentsAnimation() {
  // Agent nodes spread across canvas
  const agents = [
    { x: 55, y: 55, score: 98, delay: 0 },
    { x: 155, y: 90, score: 87, delay: 0.6 },
    { x: 260, y: 45, score: 94, delay: 1.2 },
    { x: 360, y: 100, score: 91, delay: 0.3 },
    { x: 110, y: 145, score: 76, delay: 0.9 },
    { x: 310, y: 155, score: 82, delay: 1.5 },
    { x: 430, y: 60, score: 96, delay: 0.5 },
  ]

  // Network connections
  const links = [[0,1],[1,2],[2,3],[0,4],[4,5],[3,5],[2,6],[3,6],[1,4]]

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Network connections */}
        {links.map(([a, b], i) => (
          <motion.line
            key={`link-${i}`}
            x1={agents[a].x} y1={agents[a].y}
            x2={agents[b].x} y2={agents[b].y}
            stroke={MINT} strokeWidth="0.8"
            animate={{ opacity: [0.08, 0.25, 0.08] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Agent nodes with identity reveal */}
        {agents.map((agent, i) => (
          <g key={i}>
            {/* Base node circle */}
            <motion.circle
              cx={agent.x} cy={agent.y} r="12"
              fill="none" stroke={MINT} strokeWidth="1.5"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: agent.delay }}
            />
            {/* Inner avatar dot */}
            <motion.circle
              cx={agent.x} cy={agent.y} r="4"
              fill={MINT}
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: agent.delay }}
            />

            {/* Identity reveal card (appears on scan) */}
            <motion.rect
              x={agent.x + 16} y={agent.y - 20} width="55" height="40" rx="5"
              fill="none" stroke={agent.score > 90 ? MINT : ROSE} strokeWidth="1"
              animate={{ opacity: [0, 0, 0.7, 0.7, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: agent.delay }}
            />
            {/* DID label */}
            <motion.text
              x={agent.x + 22} y={agent.y - 8} fill={MINT}
              fontSize="6" fontFamily="monospace"
              animate={{ opacity: [0, 0, 0.8, 0.8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: agent.delay }}
            >
              did:mm:...
            </motion.text>
            {/* Trust score */}
            <motion.text
              x={agent.x + 22} y={agent.y + 2} fill={agent.score > 90 ? MINT : ROSE}
              fontSize="10" fontFamily="monospace" fontWeight="bold"
              animate={{ opacity: [0, 0, 0.9, 0.9, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: agent.delay }}
            >
              {agent.score}
            </motion.text>
            {/* Score bar background */}
            <motion.rect
              x={agent.x + 22} y={agent.y + 7} width="40" height="3" rx="1.5"
              fill={MUTED_BG}
              animate={{ opacity: [0, 0, 0.4, 0.4, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: agent.delay }}
            />
            {/* Score bar fill */}
            <motion.rect
              x={agent.x + 22} y={agent.y + 7} height="3" rx="1.5"
              fill={agent.score > 90 ? MINT : ROSE}
              animate={{ width: [0, 0, agent.score * 0.4, agent.score * 0.4, 0], opacity: [0, 0, 0.7, 0.7, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: agent.delay }}
            />
            {/* Verified badge */}
            {agent.score > 90 && (
              <motion.circle
                cx={agent.x + 64} cy={agent.y - 15} r="5"
                fill={MINT}
                animate={{ opacity: [0, 0, 0.8, 0.8, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, delay: agent.delay }}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

// 9. ShipFasterAnimation — code blocks compress into one, rocket trail
export function ShipFasterAnimation() {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {/* Stack of code blocks that compress */}
        <motion.rect x="100" y="40" width="80" height="30" rx="5"
          fill="none" stroke={NAVY} strokeWidth="1.5"
          animate={{ y: [40, 80, 40], opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.rect x="100" y="80" width="80" height="30" rx="5"
          fill="none" stroke={NAVY} strokeWidth="1.5"
          animate={{ opacity: [0.8, 0.8, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.rect x="100" y="120" width="80" height="30" rx="5"
          fill="none" stroke={NAVY} strokeWidth="1.5"
          animate={{ y: [120, 80, 120], opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Code lines inside blocks */}
        {[50, 58, 90, 98, 130, 138].map((y, i) => (
          <motion.rect key={i}
            x="112" y={y} width={30 + (i % 3) * 10} height="2.5" rx="1"
            fill={NAVY}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}

        {/* Rocket trail */}
        <motion.path
          d="M 195 95 L 260 95"
          stroke={MINT}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        />
        {/* Rocket head */}
        <motion.polygon
          points="260,88 275,95 260,102"
          fill={MINT}
          animate={{ x: [0, 10, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    </div>
  )
}

// 10. RegisterAnimation — agents joining a network, DID assigned, connections form
export function RegisterAnimation() {
  const agents = [
    { x: 60, y: 70, delay: 0 },
    { x: 170, y: 50, delay: 0.8 },
    { x: 280, y: 90, delay: 1.6 },
    { x: 390, y: 55, delay: 0.4 },
    { x: 115, y: 145, delay: 1.2 },
    { x: 230, y: 155, delay: 2.0 },
    { x: 340, y: 140, delay: 0.6 },
    { x: 450, y: 110, delay: 1.4 },
  ]

  // Connections form between nearby agents
  const connections = [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[6,7],[3,7],[2,6],[1,4]]

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Network connections that form after agents register */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={`conn-${i}`}
            x1={agents[a].x} y1={agents[a].y}
            x2={agents[b].x} y2={agents[b].y}
            stroke={ROSE} strokeWidth="1"
            animate={{ opacity: [0, 0, 0, 0.3, 0.3, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: Math.max(agents[a].delay, agents[b].delay) + 0.5 }}
          />
        ))}

        {agents.map((agent, i) => (
          <g key={i}>
            {/* Step 1: Empty circle appears */}
            <motion.circle
              cx={agent.x} cy={agent.y} r="16"
              fill="none" stroke={ROSE} strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 1, 1, 1, 0], opacity: [0, 0.8, 0.8, 0.8, 0.8, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: agent.delay }}
            />

            {/* Step 2: DID text fills in */}
            <motion.text
              x={agent.x} y={agent.y - 2} textAnchor="middle"
              fill={ROSE} fontSize="6" fontFamily="monospace"
              animate={{ opacity: [0, 0, 0.7, 0.7, 0.7, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: agent.delay + 0.3 }}
            >
              did:mm
            </motion.text>
            <motion.text
              x={agent.x} y={agent.y + 6} textAnchor="middle"
              fill={ROSE} fontSize="5" fontFamily="monospace"
              animate={{ opacity: [0, 0, 0.5, 0.5, 0.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: agent.delay + 0.3 }}
            >
              :0x{(0xa3 + i * 0x1b).toString(16)}...
            </motion.text>

            {/* Step 3: Checkmark badge */}
            <motion.circle
              cx={agent.x + 12} cy={agent.y - 12} r="5"
              fill={MINT}
              animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0], scale: [0, 0, 0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: agent.delay }}
            />
            <motion.path
              d={`M ${agent.x + 9.5} ${agent.y - 12} L ${agent.x + 11.5} ${agent.y - 10} L ${agent.x + 15} ${agent.y - 14}`}
              fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: agent.delay }}
            />

            {/* Small wallet connection dots */}
            {[- 20, 20].map((offset, j) => (
              <motion.circle
                key={j}
                cx={agent.x + offset} cy={agent.y + (j === 0 ? 18 : -18)} r="3"
                fill="none" stroke={ROSE} strokeWidth="1"
                animate={{ opacity: [0, 0, 0, 0, 0.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: agent.delay }}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}

// 11. IntentsFlowAnimation — text block transforms to arrow diagram
export function IntentsFlowAnimation() {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {/* Natural language text (left) */}
        <motion.g
          animate={{ opacity: [0.8, 0.8, 0.2, 0.2, 0.8] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <rect x="30" y="60" width="90" height="80" rx="8" fill="none" stroke={MUTED} strokeWidth="1" />
          {[72, 82, 92, 102, 112, 122].map((y, i) => (
            <rect key={i} x="40" y={y} width={50 + (i % 3) * 12} height="3" rx="1.5"
              fill={MINT} opacity="0.5" />
          ))}
        </motion.g>

        {/* Arrow */}
        <motion.path
          d="M 130 100 L 165 100"
          stroke={MINT}
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
          animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8" fill="none" stroke={MINT} strokeWidth="1.5" />
          </marker>
        </defs>

        {/* Structured diagram (right) */}
        <motion.g
          animate={{ opacity: [0.2, 0.2, 0.8, 0.8, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {/* Intent box */}
          <rect x="180" y="55" width="50" height="24" rx="6" fill="none" stroke={MINT} strokeWidth="1.5" />
          <rect x="190" y="63" width="30" height="3" rx="1.5" fill={MINT} opacity="0.6" />
          {/* Arrow down */}
          <line x1="205" y1="79" x2="205" y2="92" stroke={MINT} strokeWidth="1.5" />
          {/* Route box */}
          <rect x="180" y="92" width="50" height="24" rx="6" fill="none" stroke={MINT} strokeWidth="1.5" />
          <rect x="190" y="100" width="30" height="3" rx="1.5" fill={MINT} opacity="0.6" />
          {/* Arrow down */}
          <line x1="205" y1="116" x2="205" y2="128" stroke={MINT} strokeWidth="1.5" />
          {/* Execution box */}
          <rect x="180" y="128" width="50" height="24" rx="6" fill="none" stroke={MINT} strokeWidth="1.5" />
          <rect x="190" y="136" width="30" height="3" rx="1.5" fill={MINT} opacity="0.6" />
          {/* Right-side target */}
          <line x1="230" y1="104" x2="248" y2="104" stroke={MINT} strokeWidth="1.5" />
          <motion.circle cx="258" cy="104" r="8" fill="none" stroke={MINT} strokeWidth="1.5"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <circle cx="258" cy="104" r="3" fill={MINT} />
        </motion.g>
      </svg>
    </div>
  )
}

// 12. GuardrailsAnimation — particles bouncing inside a bounded box
export function GuardrailsAnimation() {
  const particles = [
    { delay: 0, path: "M 90 80 L 200 65 L 170 140 L 100 130 L 210 80 L 90 120 L 180 70" },
    { delay: 1, path: "M 200 120 L 100 80 L 190 140 L 110 70 L 180 130 L 95 100 L 200 90" },
    { delay: 2, path: "M 150 60 L 90 130 L 210 90 L 120 60 L 190 140 L 100 100 L 200 70" },
    { delay: 0.5, path: "M 110 100 L 200 60 L 150 140 L 90 90 L 210 120 L 130 60 L 180 130" },
  ]

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="absolute inset-0">
        {/* Boundary box */}
        <motion.rect
          x="80" y="50" width="140" height="100" rx="10"
          fill="none" stroke={NAVY} strokeWidth="2.5"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Bouncing particles */}
        {particles.map((p, i) => (
          <motion.circle
            key={i}
            r="5"
            fill={i === 0 ? MINT : i === 1 ? ROSE : NAVY}
            opacity="0.7"
          >
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              begin={`${p.delay}s`}
              path={p.path}
            />
          </motion.circle>
        ))}

        {/* Wall flash effects */}
        {[
          { x: 80, y: 50, w: 2, h: 100 },
          { x: 218, y: 50, w: 2, h: 100 },
          { x: 80, y: 50, w: 140, h: 2 },
          { x: 80, y: 148, w: 140, h: 2 },
        ].map((wall, i) => (
          <motion.rect
            key={`w-${i}`}
            x={wall.x} y={wall.y} width={wall.w} height={wall.h}
            fill={NAVY}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>
    </div>
  )
}

// 13. SettleAnimation — pipeline: transactions flow through classify → validate → score → settle
export function SettleAnimation() {
  const stages = [
    { x: 60, label: "CLASSIFY", color: ROSE },
    { x: 175, label: "VALIDATE", color: MINT },
    { x: 290, label: "SCORE", color: MINT },
    { x: 405, label: "SETTLE", color: MINT },
  ]

  // Transaction packets flowing through the pipeline
  const packets = [
    { delay: 0 },
    { delay: 1.5 },
    { delay: 3 },
  ]

  const stageW = 80
  const stageH = 50
  const stageY = 55

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-muted/30 items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Stage boxes */}
        {stages.map((stage, i) => (
          <g key={`stage-${i}`}>
            <rect
              x={stage.x} y={stageY} width={stageW} height={stageH} rx="8"
              fill="none" stroke={stage.color} strokeWidth="1.5" opacity="0.3"
            />
            <text
              x={stage.x + stageW / 2} y={stageY + stageH / 2 + 3} textAnchor="middle"
              fill={stage.color} fontSize="8" fontFamily="monospace" opacity="0.5"
            >
              {stage.label}
            </text>
            {/* Arrow between stages */}
            {i < stages.length - 1 && (
              <g>
                <line
                  x1={stage.x + stageW + 4} y1={stageY + stageH / 2}
                  x2={stages[i + 1].x - 4} y2={stageY + stageH / 2}
                  stroke={MUTED} strokeWidth="1" opacity="0.2"
                />
                <polygon
                  points={`${stages[i + 1].x - 4},${stageY + stageH / 2 - 3} ${stages[i + 1].x - 4},${stageY + stageH / 2 + 3} ${stages[i + 1].x},${stageY + stageH / 2}`}
                  fill={MUTED} opacity="0.2"
                />
              </g>
            )}
          </g>
        ))}

        {/* Flowing transaction packets */}
        {packets.map((packet, pi) => (
          <g key={`packet-${pi}`}>
            {/* The packet dot */}
            <motion.circle
              r="6"
              fill={MINT}
              animate={{
                cx: [20, ...stages.map(s => s.x + stageW / 2), 500],
                cy: [stageY + stageH / 2, ...stages.map(() => stageY + stageH / 2), stageY + stageH / 2],
                opacity: [0, 0.8, 0.8, 0.8, 0.8, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: packet.delay, ease: "easeInOut" }}
            />

            {/* Confidence bar that grows under packet */}
            <motion.rect
              y={stageY + stageH + 12} height="4" rx="2"
              fill={MINT}
              animate={{
                x: [20, ...stages.map(s => s.x + 10), 480],
                width: [0, 15, 30, 50, 60, 0],
                opacity: [0, 0.5, 0.6, 0.7, 0.8, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: packet.delay, ease: "easeInOut" }}
            />

            {/* Confidence percentage */}
            <motion.text
              y={stageY + stageH + 28}
              textAnchor="middle"
              fill={MINT} fontSize="8" fontFamily="monospace"
              animate={{
                x: [20, ...stages.map(s => s.x + stageW / 2), 500],
                opacity: [0, 0.5, 0.6, 0.7, 0.9, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: packet.delay, ease: "easeInOut" }}
            >
              <motion.tspan
                animate={{
                  children: ["", "25%", "60%", "88%", "97%", ""],
                }}
                transition={{ duration: 6, repeat: Infinity, delay: packet.delay }}
              />
            </motion.text>

            {/* Stage highlight as packet passes through */}
            {stages.map((stage, si) => (
              <motion.rect
                key={`highlight-${pi}-${si}`}
                x={stage.x} y={stageY} width={stageW} height={stageH} rx="8"
                fill={stage.color}
                animate={{ opacity: [0, 0, 0, 0, 0, 0].map((_, k) => k === si + 1 ? 0.1 : 0) }}
                transition={{ duration: 6, repeat: Infinity, delay: packet.delay }}
              />
            ))}

            {/* Checkmarks that appear at each stage */}
            {stages.map((stage, si) => (
              <motion.path
                key={`check-${pi}-${si}`}
                d={`M ${stage.x + stageW / 2 - 4} ${stageY - 8} L ${stage.x + stageW / 2 - 1} ${stageY - 5} L ${stage.x + stageW / 2 + 5} ${stageY - 12}`}
                fill="none" stroke={stage.color} strokeWidth="2" strokeLinecap="round"
                animate={{
                  opacity: Array.from({ length: 6 }, (_, k) => k > si && k < 5 ? 0.7 : 0),
                }}
                transition={{ duration: 6, repeat: Infinity, delay: packet.delay }}
              />
            ))}
          </g>
        ))}

        {/* Bottom label */}
        <text x="260" y="190" textAnchor="middle" fill={MUTED} fontSize="8" fontFamily="monospace" opacity="0.4">
          TRANSACTION PIPELINE
        </text>
      </svg>
    </div>
  )
}
