import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { list } from './Backend/list'
import { characters } from './Backend/characters'
import { travelerChar } from './Backend/traveler'
import { totalOwned } from './Backend/totals'
import ItemList from './ItemList'
import CharacterList from './CharacterList'
import About from './About'

import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import StarIcon from '@material-ui/icons/Star'
import ClearIcon from '@material-ui/icons/Clear'
import InputBase from '@material-ui/core/InputBase'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
			<Box p={3}>
				<Typography component={'span'}>{children}</Typography>
			</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardGrid: {
		paddingTop: theme.spacing(12),
		paddingBottom: theme.spacing(8),
	},
	divMain: {
		padding: theme.spacing(8,0,6)
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	  display: 'none',
	  [theme.breakpoints.up('sm')]: {
		display: 'block',
	  },
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
	  	},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	clearIcon: {
		padding: '0px 12px 0px 0px',
		cursor: 'pointer',
	},
	inputRoot: {
	  	color: 'inherit',
	},
	inputInput: {
	  	padding: theme.spacing(1, 1, 1, 0),
	  	// vertical padding + font size from searchIcon
	  	paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
	  	transition: theme.transitions.create('width'),
	  	width: '100%',
	  	[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
		  		width: '20ch',
			},
	  	},
	},
	appbar: {
		flexGrow: 1,
		marginBottom: '2rem',
	},
	secAppBar: {
		marginTop: '4.03rem',
		height: '3rem',
	},
	tabsBar: {
		flexGrow: 1,
		display: "none",
		margin: "auto",
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
		},
	},
	toolbarItems: {
		margin: "0px 10px",
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
	},
}));

export default function Display() {
	const classes = useStyles();

	const [tab, setTab] = useState(0);
	const [searchVal, setSearchVal] = useState("");

	const handleChange = (event, newValue) => {
		// console.log(newValue)
		setTab(newValue);
		window.scrollTo(top)
	}

	// updates search value state
	const handleSearch = (event) => {
		setSearchVal(event.target.value.toLowerCase().trim())
	}

	// filtered character list
	let updateCharacters = travelerChar.concat(characters).filter((chara) => {
		return chara.name.indexOf(searchVal) > -1 || chara.element.indexOf(searchVal) > -1;
	}, [])

	// filtered item list
	let updateItems = totalOwned.filter((item) => {
		return item.item.toLowerCase().indexOf(searchVal) > -1;
	}, [])

	const clearSearch = (event) => {
		const search = document.getElementById("charSearch");
		search.value = "";
		setSearchVal("")
	}

	return (
		<div>
			{/* This div must exist for space */}
			<div className={classes.appbar}>
				{/* Appbar */}
				<AppBar style={{backgroundColor: "#3f92c1"}} position="fixed">
					{/* Search toolbar */}
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
						>
							<StarIcon />
						</IconButton>
							<Typography className={classes.title} variant="h6">Genshin Impact Tracker</Typography>

						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase id="charSearch" edge="end"
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								onChange={handleSearch}
								inputProps={{ 'aria-label': 'search' }}
							/>

							{ (searchVal != "") ? 
								// <div className={classes.clearIcon}>
									<IconButton className={classes.clearIcon} onClick={clearSearch}>
										<ClearIcon style={{ color: '#ffffff' }} />
									</IconButton>
								: null
							}
						</div>
					</Toolbar>

					{/* Pseudo page bar */}
					<Tabs className={classes.tabsBar} 
						value={tab} 
						onChange={handleChange}
						TabIndicatorProps={{style: { backgroundColor: "#f5e200" }}}
						// inkBarStyle={{background: "#f5e200"}} 
						aria-label="characters">
							<Tab className={classes.toolbarItems} index={0} label="Characters" {...a11yProps(0)}></Tab>
							<Tab className={classes.toolbarItems} index={1} label="Totals" {...a11yProps(1)}></Tab>
							<Tab className={classes.toolbarItems} index={2} label="About" {...a11yProps(2)}></Tab>
					</Tabs>
				</AppBar>
			</div>

			{/* Characters */}
			<TabPanel value={tab} index={0}>
				<CharacterList search={searchVal} updateCharacters={updateCharacters} />
			</TabPanel>

			{/* Items */}
			<TabPanel value={tab} index={1}>
				<ItemList search={searchVal} updateItems={updateItems} />
			</TabPanel>

			{/* About */}
			<TabPanel value={tab} index={2}>
				<About />
			</TabPanel>
		</div>
	);
}