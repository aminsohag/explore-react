import React, { useState } from 'react'

export default function Team() {

    const [team, setTeam] = useState(11)

    const styles = {
        border : '2px solid purple',
        margin : '16px',
        padding: '16px',
        borderRadius : '16px'
    }

    const addEvent = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const reduceEvent = () => {
        const newTeam = team - 1;
        setTeam(newTeam)
    }

  return (
    <div style={styles}>
      <h3>Players: {team}</h3>
      <button onClick={addEvent}>Add</button>
      <button onClick={reduceEvent}>Reduce</button>
    </div>
  )
}
