import {
  type IconType,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiPython,
  SiTensorflow,
  SiTableau,
  SiLooker,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Web Development',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'bootstrap', icon: SiBootstrap },
        { skill: 'mysql', icon: SiMysql },
        { skill: 'php', icon: SiPhp },
        { skill: 'laravel', icon: SiLaravel },
        { skill: 'nodejs', icon: SiNodedotjs },
      ],
    },
    {
      field: 'Data Science',
      skills: [
        { skill: 'python', icon: SiPython },
        { skill: 'tensorflow', icon: SiTensorflow },
        { skill: 'tableau', icon: SiTableau },
        { skill: 'looker', icon: SiLooker },
      ],
    },
  ]

export default SKILLS
