import React, { useState } from 'react'

// import { totalAscended, totalTalents, totalOwned } from './Backend/totals'
// import { characters } from './Backend/characters'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	media: {
		height: '100px',
		width: '100px',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	cardContent: {
		flexGrow: 1,
	},
	grid: {
		justifyContent:'center'
	},
}))

export default function Item(props) {
	const classes = useStyles();
	
	// retrieving itemOwned
	let itemOwned = localStorage.getItem(props.item + " owned")
	
	// Checking if it is nothing to set it to 0 prematurely
	if(itemOwned == null)
		itemOwned = 0;

	// setting state owned with local storage :D
	const [ owned, setOwned ] = useState(itemOwned)

	const onOwnedChange = (event) => {
		let val = Number(event.target.value);

		if(isNaN(val))
			val = 0;

		setOwned(val)
		localStorage.setItem(props.item + " owned", val)

		// this doesn't make sense based off of how state is set up
		// but it works ig
		const needed = document.getElementById(props.item + '-total-needed')
		const newMax = maxVal - (val + itemNum);
		needed.value = newMax;
	}

	// When the ascension value changes,
	// hopefully change the number of items needed.
	const onAscendedChange = (event) => {
		const needed = document.getElementById(props.item + '-total-needed')
		const newMax = maxVal - (owned + itemNum);
		needed.value = newMax;
	}

	// finding the current item being displayed
	const thisItem = props.array.filter((item) => {
		if (item.item == props.item)
			return item;
	})

	// setting the number of times the item was used to ascend
	const itemNum = thisItem[0].value;

	// finding props.item to get the max value
	const maxValue = props.maxItems.filter((item) => {
		if (item.item == props.item)
			return item;
	})

	// the maximum number of items needed to ascend
	const maxItemNum = maxValue[0].value;

	const [ maxVal, setMaxVal ] = useState(maxItemNum)

	return (
		<div>
			<Card id={props.item}>
				{/* To be the item image later */}
				<Grid container className={classes.grid}>
					<CardMedia square="true" component="img" 
						className={classes.media}
						image={url+'/Items/' + props.item + '.png'}
						title={props.item} />
				</Grid>

				<CardContent className={classes.cardContent}>
					<h2>{props.item}</h2>

					<FormControl component="fieldset">
						<TextField id={props.item + "-total-owned"}
							InputProps={{ inputProps: { min: 0 }}}
							onChange={onOwnedChange}
							label="Total Owned"
							defaultValue={owned}
							type="number" />

						<TextField id={props.item + "-total-ascended"}
							disabled={true}
							onChange={onAscendedChange}
							label="Total Ascended"
							defaultValue={itemNum}
							type="number" />

						{/* Input for total number of items needed for full ascension
							Has the default value like this to initially set upon loading
							to accurately display the amount needed */}
						<TextField id={props.item + "-total-needed"}
							disabled={true}
							label="Total Needed"
							defaultValue={maxVal - itemNum - owned}
							type="number" />
					</FormControl>
				</CardContent>
			</Card>
		</div>
	)
}