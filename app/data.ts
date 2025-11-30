type Project = {
  name: string
  description: string
  link: string
  imageSource: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Lynx/Mountain-UI',
    description:
    'iOS/Electron snowboarding analytics platform',
    link: 'https://github.com/matthewfernst/Lynx',
    imageSource:
    '/Lynx.png',
    id: 'project1',
  },
  {
    name: 'Chord | Peer2Peer',
    description: 'Distributed Chord-based key-value system',
    link: 'https://github.com/matthewfernst/Chord-Peer2Peer',
    imageSource:
    'Chord-Peer2Peer.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Apple',
    title: 'Softwate Engineer | Foundation Models Framework',
    start: '2025',
    end: 'Present',
    link: 'https://developer.apple.com/documentation/FoundationModels',
    id: 'work1',
  },
  {
    company: 'Apple',
    title: 'Software Engineer',
    start: '2024',
    end: '2025',
    link: '',
    id: 'work2',
  },
  {
    company: 'Qualcomm',
    title: 'Senior Machine Learning Engineer | AIMET',
    start: '2022',
    end: '2024',
    link: 'https://github.com/quic/aimet',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/matthewfernst',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ErnstMatthew',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/matthew-f-ernst/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/matthew.f.ernst/',
  },
]

export const EMAIL = 'matthew.f.ernst@gmail.com'
