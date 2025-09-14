import Button from './Button/Button'
import { about } from '../data'
import { useState } from 'react'

export default function AboutSection() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <section style={{ width: '600px', height: '150px' }}>
      <h3>👨‍💻 Обо мне</h3>

      <Button
        isActive={contentType === 'education'}
        onClick={() => handleClick('education')}
      >
        🎓 Образование
      </Button>
      <Button
        isActive={contentType === 'backend'}
        onClick={() => handleClick('backend')}
      >
        ⚡ Бэкенд
      </Button>
      <Button
        isActive={contentType === 'frontend'}
        onClick={() => handleClick('frontend')}
      >
        🎨 Фронтенд
      </Button>

      {!contentType && <p>Нажми на кнопку, чтобы узнать подробнее</p>}

      {contentType && <p>{about[contentType]}</p>}
    </section>
  )
}
