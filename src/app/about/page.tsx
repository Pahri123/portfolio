import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>
<div className="mb-10 text-base sm:text-lg">
  <p>
    I&apos;m an Information Systems graduate from UNIKOM with a GPA of 3.9,
    my academic journey and hands-on projects have given me experience in building web applications, 
    managing large-scale data, and applying machine learning for practical solutions.
  </p>
  <br />
  <p>
    Beyond technical skills, I also enjoy collaborating in teams, learning from challenges, and 
    contributing to projects that create meaningful impact. I&apos;m eager to keep growing and 
    exploring how technology and data can shape better solutions for the future.
  </p>
</div>
      <Skills />

      <Experience />
    </div>
  )
}
