import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">Experience</h2>

      {PAST_ROLES.map((role, id) => (
        <div className="mb-8" key={id}>
          <h3 className="font-heading text-lg sm:text-xl">
            {role.role} @{role.company}
          </h3>

          <p className="mt-0.5 mb-4 text-sm">
            {role.startDate} - {role.endDate}
          </p>

          <ul className="list-outside list-disc space-y-1 pl-6">
            {role.description.map((point, idx) => (
              <li key={idx} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
