'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetTime = new Date()
    targetTime.setDate(targetTime.getDate() + 7)

    const updateTimer = () => {
      const now = new Date()
      const timeDifference = Number(targetTime) - Number(now)

      if (timeDifference <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timerInterval)
        return
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })
    }

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000)

    // Call updateTimer immediately to initialize the timer display
    updateTimer()

    // Clean up the interval on component unmount
    return () => clearInterval(timerInterval)
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Next Restock!</h3>
        <p>
          Intorudcing our new dalgona inspired keycap set. From a calming and refreshing whipped
          coffee to a fun Korean childhood favorite, dalgona is a popular confectionary based from
          South Korea. 
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
      <img src="Landing page/dalgona.png" alt="dalgona" className={classes.img} />
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
