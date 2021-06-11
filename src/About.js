import React from 'react'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(12),
		paddingBottom: theme.spacing(8),
	},
	title: {
		justifyContent: 'center',
		display: 'flex',
		margin: 'auto',
		fontWeight: 600,
		paddingBottom: "10px"
	},
	text: {
		justifyContent: 'center',
		display: 'block',
		margin: 'auto',    
		width: '45rem',
		fontWeight: 400,
	}
}))

export default function About() {
	const classes = useStyles();

	return (
		<div>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid container styles={{margin: 'auto'}} spacing={1}>

					<Grid item xs={12} sm={12} md={12}>
						<Typography className={classes.title} variant="h6">About Genshin Impact Tracker</Typography>

						<Typography className={classes.text} component={'span'}>This project was made by enmae through the desire of knowing exactly 
							how many items you need left after ascending both a character and their talents.
							You can find the full code [here].</Typography> <br />
						<Typography className={classes.text} component={'span'}>This web app was made entirely from React.js.</Typography><br />
					</Grid>

					<Grid item xs={12} sm={12} md={12}>
						<Typography className={classes.title} variant="h6">Contact</Typography>
						<Typography>Spot a bug, found an issue, or want to get in touch with me? Please reach out to me on&nbsp;
							<a target="_" href="https://twitter.com/enmaedev">Twitter</a>, or through contact.enmae@gmail.com. I'll
							 respond as soon as I can. I hope that you can enjoy this web app, and that it helps you track your character
							 ascensions! :)</Typography><br />
					</Grid>
				
					<Grid item xs={12} sm={12} md={12}>
						<Typography className={classes.title} variant="h6">Credits</Typography>
						<Typography>Character Drawn Icons: <a target="_" href="https://twitter.com/FateTempest">@FateTempest</a></Typography>
						<Typography>Official Character icons: <a target="_" href="https://genshin-impact.fandom.com/wiki/Characters/List">Genshin Impact Wiki</a></Typography>
						<Typography>Official Item Icons: <a target="_" href="https://genshin-impact.fandom.com/wiki/Materials">Genshin Impact Wiki</a></Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}