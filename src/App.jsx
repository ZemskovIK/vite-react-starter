import Header from './components/Header/Header'
import SiteStackSection from './components/SiteStackSection'
import AboutSection from './components/AboutSection'
import IntroSection from './components/IntroSection'
import Footer from './components/Footer/Footer'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'
import EffectSection from './components/EffectSection'

export default function App() {
  const [tab, setTab] = useState('main')

  return (
    <>
      {<Header />}
      <main>
        <IntroSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <SiteStackSection />
            <AboutSection />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}

        {tab === 'effect' && <EffectSection />}
      </main>
      <Footer />
    </>
  )
}
