export const BREAK_POINTS = {
  pc: 1025,
  tablet: 600,
  sp: 599,
} as const;

export const mq = {
  pc: `@media (min-width: ${BREAK_POINTS.pc}px)`,
  tablet: `@media (max-width: ${BREAK_POINTS.pc - 1}px)`,
  sp: `@media (max-width: ${BREAK_POINTS.tablet - 1}px)`,
} as const;
