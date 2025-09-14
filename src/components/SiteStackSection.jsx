import ListStack from './ListStack'
import { siteStack } from '../data'

export default function SiteStackSection() {
  return (
    <section>
      <h3>⚙️ Этот сайт сделан с помощью</h3>

      <ul>
        {siteStack.map((item, index) => (
          <ListStack key={index} {...item} />
        ))}
      </ul>
    </section>
  )
}
