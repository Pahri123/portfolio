import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:nabilfakhrie123@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/Pahri123',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/fakhrie-n/',
    },
  ]

  return (
    <div className="mr-auto mt-10 flex w-full flex-wrap items-center gap-5">
      {links.map((link, id) => {
        return (
          <a className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base" 
          target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
