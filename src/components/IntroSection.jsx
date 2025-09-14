import React from 'react'

// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">Igor Zemskov</h1>
//       <h3 className="centered" style={{ color: '#666' }}>
//         Backend Developer
//       </h3>
//     </section>
//   )
// }

const e = React.createElement

export default function IntroSection() {
  return e('section', null, [
    e('h1', { className: 'centered', key: 1 }, 'Igor Zemskov'),
    e(
      'h3',
      { className: 'centered', style: { color: '#666' }, key: 2 },
      'Backend Developer'
    ),
  ])
}
