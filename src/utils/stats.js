export const baseStats = {
  human: {hp:10,power:5,speed:4,def:3},
  bird: {hp:7,power:2,speed:7,def:2},
  cat: {hp:5,power:5,speed:6,def:0},
  elephant: {hp:10,power:3,speed:1,def:9},
  coca: {hp:12,power:7,speed:5,def:2}
}

export function applyLevel(stats, level){
  const factor = 1 + (level-1)*0.1
  return {
    hp: Math.round(stats.hp * factor),
    power: Math.round(stats.power * factor),
    speed: Math.round(stats.speed * factor),
    def: Math.round(stats.def * factor)
  }
}