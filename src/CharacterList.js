import React, { Suspense, useState } from 'react'

import { characters } from './Backend/characters'
import { travelerChar } from './Backend/traveler'
const Card = React.lazy(() => import('./Card'))
import Traveler from './Traveler'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(12),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	divMain: {
		padding: theme.spacing(8,0,6)
	},
}))

const newCharacters = travelerChar.concat(characters)
console.log(newCharacters)

export default function CharacterList(props) {
	const classes = useStyles();

	const travelerAnemo = JSON.parse(localStorage.getItem("traveler anemo"))
	const travelerGeo = JSON.parse(localStorage.getItem("traveler geo"))

	// Basically, if both traveler anemo and geo are null, set the ascension to 0
	// if traveler geo is not null but traveler anemo is, set asc to traveler geo.asc
	// if they're both not null, pick the largest number out of the two
	const isAnemoNull = (travelerAnemo == null)
	const isGeoNull = (travelerGeo == null)

	let asc = null;

	if (isAnemoNull && isGeoNull)
		asc = 0;
	else if (isAnemoNull && !isGeoNull)
		asc = travelerGeo.ascension
	else if (isGeoNull && !isAnemoNull)
		asc = travelerAnemo.ascension
	else if (travelerAnemo.ascension > travelerGeo.ascension)
		asc = travelerAnemo.ascension
	else
		asc = travelerGeo.ascension
		
	const travAscChecked = (asc > 0 ? true : false)

	const [ levelState, setLevelState ] = useState({ level: asc, prevLevel: asc })
	const [ travChecked, setTravChecked ] = useState(travAscChecked);

	return (
		<div>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid container spacing={4}>
					{(props.search === "" ? newCharacters : props.updateCharacters)
						.map((chara) => (
							<Grid item key={chara.name+"-"+chara.element} xs={12} sm={6} md={4}>
								{(chara.name === "traveler" ? 
									<Traveler chara={chara} 
										checked={travChecked} 
										setChecked={(bool) => setTravChecked(bool)} 
										level={levelState} 
										url={props.url}
										setLevelState={(level) => setLevelState(level)} 
										className={classes.card} />
								:
									<Suspense fallback={<div>Loading...</div>}>
										<Card chara={chara} url={props.url} className={classes.card} />
									</Suspense>
								)}
							</Grid>
						))}
				</Grid>
			</Container>
		</div>
	)
}
