import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    id: 1,
    company: 'Launchpad Technologies Pvt. Ltd.',
    companyUrl: 'https://www.golaunchpad.io//',
    position: 'Web developer',
    duration: 'May 2021 – Oct 2025',
    location: 'Vancouver, Canada',
    achievements: [
      'Developed and maintained web applications using React.js and backend RESTful APIs.',
      'Integrated frontend components with Node.js and Java backend services.',
      'Worked with SQL databases, writing and optimizing queries for application features.',
      'Fixed bugs, improved performance, and enhanced application stability.',
    ]
  },
  {
    id: 2,
    company: 'Innovatech Solutions Inc.',
    companyUrl: 'https://www.innovatech-solutions.com/',
    position: 'Web developer',
    duration: 'Jun 2018 – Feb 2021',
    location: 'Vancouver, Canada',
    achievements: [
      'Built and maintained web applications for client projects using React and JavaScript.',
      'Worked on backend services and API integrations using Node.js and Python.',
      'Performed debugging, bug fixes, and code updates to improve reliability.',
      'Assisted with third-party service integrations and deployment support.',
    ]
  },
  // {
  //   id: 3,
  //   company: 'Hashthink Technologies',
  //   companyUrl: 'https://www.hashthink.com',
  //   position: 'Web developer',
  //   duration: 'Aug 2018 – Mar 2020',
  //   location: 'Toronto, Canada',
  //   achievements: [
  //     'Developed and maintained backend services using Node.js and TypeScript',
  //     'Built and optimized RESTful APIs for web and mobile applications.',
  //     'Collaborated with cross-functional teams to ensure smooth integration and deployment.',
  //     'Assisted in improving system performance and reliability through testing and monitoring.',
  //   ]
  // },
  // {
  //   id: 4,
  //   company: 'Metarootz',
  //   companyUrl: 'https://www.metarootz.io/',
  //   position: 'Software Development Engineer — Contract',
  //   duration: 'December 2022 — February 2023',
  //   location: 'Dubai, UAE (Remote)',
  //   achievements: [
  //     'Developed a social media platform using Node.js/Express.js, Next.js, and MongoDB, scaled it to 10,000+ active users, and integrated WebSocket-based voice/video calling to boost user engagement and interaction.'
  //   ]
  // }
]

const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            My professional journey spans across diverse industries and technologies, ranging from enterprise web platforms to modern digital applications. Each experience has strengthened my skills as a web developer and broadened my perspective in building reliable, scalable, and user-centered solutions.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
