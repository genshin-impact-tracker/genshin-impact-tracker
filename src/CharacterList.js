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

	// defining asc outside of if statement
	let asc = null;

	// If none of the travelers are null (since this runs before data is loaded)
	if (!isAnemoNull && !isGeoNull && !isElectroNull) {
		// Checking setting biggestVal to be greatest value
		let biggestVal = (travelerAnemo.ascension > travelerGeo.ascension) ? travelerAnemo.ascension : travelerGeo.ascension;
		biggestVal = (travelerElectro.ascension > biggestVal) ? travelerElectro.ascension : biggestVal;

		// Sum all ascension values together
		let sum = travelerAnemo.ascension + travelerGeo.ascension + travelerElectro.ascension;
		// Average the sum by the greatest value (so we can see what multiple of the biggest value the sum is)
		// ie: 5+5+5 = 15, biggest val is 5, 15 / 5 = 3
		let avg = sum / biggestVal;
		console.log(sum, avg, biggestVal)
		
		// If the average equals the amount of element traveler types
		if (avg == 3)
			asc = biggestVal;
		else {
			// Else: set all values to be biggestVal and update the travelers
			travelerAnemo.ascension = biggestVal;
			travelerGeo.ascension = biggestVal;
			travelerElectro.ascension = biggestVal;
			asc = biggestVal;

			// setting biggestVal into local storage
			localStorage.setItem("traveler anemo", JSON.stringify(travelerAnemo))
			localStorage.setItem("traveler geo", JSON.stringify(travelerGeo))
			localStorage.setItem("traveler electro", JSON.stringify(travelerElectro))
		}
	} else if (isAnemoNull && isGeoNull && isElectroNull) {
		asc = 0;
	}
		
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
