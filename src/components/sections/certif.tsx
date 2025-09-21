import CERTIF from '@/data/certif'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'

export default function Certif() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">Certification</h2>

      {CERTIF.map((cert: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }, id: Key | null | undefined) => (
        <div className="mb-8" key={id}>
          <h3 className="font-heading text-lg sm:text-xl">
            {cert.name}
          </h3>

          <p className="mt-0.5 mb-4 text-sm">
            {cert.date}
          </p>

          <p className="leading-relaxed">
            {cert.description}
          </p>
        </div>
      ))}
    </div>
  )
}