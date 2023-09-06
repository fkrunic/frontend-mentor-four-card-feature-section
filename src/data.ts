export interface CardDetails {
  title: string,
  content: string, 
  tag: string,
  borderClass: string  
}

const getURL = (url: string) => {
  return new URL(url, import.meta.url).href
}

export const cards: Array<CardDetails> = [
  {
    title: 'Supervisor',
    content: 'Monitors activity to identify project roadblocks',
    tag: 'supervisor',
    borderClass: 'border-t-cyan'
  },
  {
    title: 'Team Builder',
    content: 'Scans our talent network to create the optimal team for your project',
    tag: 'team-builder',
    borderClass: 'border-t-red'
  },
  {
    title: 'Karma',
    content: 'Regularly evaluates our talent to ensure quality',
    tag: 'karma',
    borderClass: 'border-t-orange'
  },
  {
    title: 'Calculator',
    content: 'Uses data from past projects to provide better delivery estimates',
    tag: 'calculator',
    borderClass: 'border-t-blue'
  }
]