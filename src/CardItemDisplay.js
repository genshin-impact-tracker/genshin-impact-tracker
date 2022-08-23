import React from 'react'

import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	dmText: {
		color: 'white',
	},
}));

export default function CardItemDisplay(props) {
	const classes = useStyles();
	
	return (
		<div>
			<Grid item style={{display: 'inline-flex'}}>
				<CardMedia square="true" component="img"
					image={props.url + '/Items/' + props.item + '.png'}
					title={props.item}
					style={{display: 'inline-flex', height: '50px', width: '50px'}}/>
				{ props.display ? 
					<h4 className={props.isDarkMode ? classes.dmText : ""} 
						style={{display: 'inline-flex', margin: "12px 0px"}}>
							{props.item}
					</h4> : null }
			</Grid>
		</div>
	)
}