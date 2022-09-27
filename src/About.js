import React from 'react'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(12),
		},
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
		fontWeight: 400,
	},
	darkModeText: {
		color: 'white',
		justifyContent: 'center',
		display: 'block',
		margin: 'auto',
		fontWeight: 400,
	},
	darkModeTitle: {
		color: 'white',
		justifyContent: 'center',
		display: 'block',
		margin: 'auto',
		fontWeight: 600,
		paddingBottom: "10px",
	},
	a: {
		'&:link': {
			color: 'pink',
		},
		'&:visited': {
			color: '#c7bef5',
		},
		'&:hover': {
			color: 'pink',
		},
		'&:active': {
			color: '#c7bef5',
		}
	}
}))

export default function About(props) {
	const classes = useStyles();

	return (
		<div>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid container styles={{margin: 'auto'}} spacing={1}>

					<Grid item xs={12} sm={12} md={12}>
						<Typography className={props.isDarkMode ? classes.darkModeTitle : classes.title} variant="h6">About Genshin Impact Tracker</Typography>

						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text}>This project was made by enmae through the desire of knowing exactly 
							how many items you need left after ascending both a character and their talents.
							You can find the full code <a className={props.isDarkMode ? classes.a : ""} target="_" href="https://github.com/genshin-impact-tracker/genshin-impact-tracker">here</a>.</Typography> <br />
						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text} component={'span'}>This web app was made entirely from React.js and is not affiliated
						 with Mihoyo or Genshin Impact in any way.</Typography><br />
					</Grid>

					<Grid item xs={12} sm={12} md={12}>
						<Typography className={props.isDarkMode ? classes.darkModeTitle : classes.title} variant="h6">Contact</Typography>
						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text}>Spot a bug, found an issue, or want to get in touch with me? Please reach out to me on&nbsp;
							<a className={props.isDarkMode ? classes.a : ""} target="_" href="https://twitter.com/enmaedev">Twitter</a>, or through contact.enmae@gmail.com. I'll
							 respond as soon as I can. I hope that you can enjoy this web app, and that it helps you track your character
							 ascensions! :)</Typography><br />
					</Grid>

					<Grid item xs={12} sm={12} md={12}>
						<Typography className={props.isDarkMode ? classes.darkModeTitle : classes.title} variant="h6">Currently Working On</Typography>
						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text}>Soon: To add filters and favourites</Typography><br />
					</Grid>

					<Grid item xs={12} sm={12} md={12}>
						<Typography className={props.isDarkMode ? classes.darkModeTitle : classes.title} variant="h6">Known Issues</Typography>
						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text}>Displaying characters enabled first does not reliably work 100% of the time. Working on fixing this issue.</Typography><br />
					</Grid>
				
					<Grid item xs={12} sm={12} md={12}>
						<Typography className={props.isDarkMode ? classes.darkModeTitle : classes.title} variant="h6">Credits</Typography>
						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text}>Character Drawn Icons: <a className={props.isDarkMode ? classes.a : ""} target="_" href="https://twitter.com/FateTempest">FateTempest</a></Typography>
						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text}>Official Character Icons: <a className={props.isDarkMode ? classes.a : ""} target="_" href="https://genshin-impact.fandom.com/wiki/Characters/List">Genshin Impact Wiki</a></Typography>
						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text}>Official Item Icons: <a className={props.isDarkMode ? classes.a : ""} target="_" href="https://genshin-impact.fandom.com/wiki/Materials">Genshin Impact Wiki</a></Typography>
						<Typography className={props.isDarkMode ? classes.darkModeText : classes.text}>Elemental Vector Icons: <a className={props.isDarkMode ? classes.a : ""} target="_" href="https://twitter.com/hollichoo">Hollichoo</a></Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}