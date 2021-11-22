import React, { Suspense, useState } from 'react'

import { characters } from './Backend/characters'
import { travelerChar } from './Backend/traveler'
const Card = React.lazy(() => import('./Card'))
import Traveler from './Traveler'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(7),
		paddingBottom: theme.spacing(8),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(12),
		},
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	divMain: {
		padding: theme.spacing(8,0,6)
	},
	circle: {
		color: 'white',
	}
}))

const newCharacters = travelerChar.concat(characters)
console.log(newCharacters)

export default function CharacterList(props) {
	const classes = useStyles();

	const travelerAnemo = JSON.parse(localStorage.getItem("traveler anemo"))
	const travelerGeo = JSON.parse(localStorage.getItem("traveler geo"))
	const travelerElectro = JSON.parse(localStorage.getItem("traveler electro"))

	// Basically, if both traveler anemo and geo are null, set the ascension to 0
	// if traveler geo is not null but traveler anemo is, set asc to traveler geo.asc
	// if they're both not null, pick the largest number out of the two
	const isAnemoNull = (travelerAnemo == null)
	const isGeoNull = (travelerGeo == null)
	const isElectroNull = (travelerElectro == null)

	let asc = null;

	if (isAnemoNull && isGeoNull && isElectroNull)
		asc = 0;
	else if (isAnemoNull && !isGeoNull)
		asc = travelerGeo.ascension
	else if (isGeoNull && !isAnemoNull)
		asc = travelerAnemo.ascension
	else if (travelerAnemo.ascension > travelerGeo.ascension)
		asc = travelerAnemo.ascension
	else
		asc = travelerGeo.ascension

	// then set the ascension number to the electro ascension value
	// if the electro ascension value is greater than the current ascension
	// value set by the previous checks
	if (!isElectroNull)
		if(asc < travelerElectro.ascension)
			asc = travelerElectro.ascension
		
	const travAscChecked = (asc > 0 ? true : false)

	const [ levelState, setLevelState ] = useState({ level: asc, prevLevel: asc })
	const [ travChecked, setTravChecked ] = useState(travAscChecked);

	return (
		<div>
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={4}>
					{(props.search === "" ? newCharacters : props.updateCharacters)
						.map((chara) => (
							<Grid item key={chara.name+"-"+chara.element} xs={12} sm={6} md={4} lg={4}>
								{(chara.name === "traveler" ? 
									<Traveler chara={chara} 
										isDarkMode={props.isDarkMode}
										checked={travChecked} 
										setChecked={(bool) => setTravChecked(bool)} 
										level={levelState} 
										url={props.url}
										setLevelState={(level) => setLevelState(level)} 
										className={classes.card} />
								:
									<Suspense fallback={<CircularProgress className={props.isDarkMode ? classes.circle : ""} disableShrink />}>
										<Card isDarkMode={props.isDarkMode} chara={chara} url={props.url} className={classes.card} />
									</Suspense>
								)}
							</Grid>
						))}
				</Grid>
			</Container>
		</div>
	)
}
