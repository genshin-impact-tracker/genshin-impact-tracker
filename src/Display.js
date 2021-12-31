import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
import ClearIcon from '@material-ui/icons/Clear'
import PeopleIcon from '@material-ui/icons/People'
import ListIcon from '@material-ui/icons/ListAlt'
import AboutIcon from '@material-ui/icons/Info'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'

import InputBase from '@material-ui/core/InputBase'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import Moon from '@material-ui/icons/Brightness2';
import Drawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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

const url = "https://genshin-impact-tracker.github.io/genshin-impact-tracker"

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
		display: 'flex',
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
	darkMode: {
		marginTop: '2rem',
		right: '0.75rem',
		position: 'fixed',
		[theme.breakpoints.up('sm')]: {
			position: 'fixed',
			marginTop: '6.2rem',
			right: '0.75rem',
		},
	},
	dmBackground: {
		backgroundColor: '#464646',
		// height: '100vh'
	},
	notDMBackground: {
		backgroundColor: 'white',
		// height: '100vh'
	},
	switchBase: {
		"&$checked": {
			color: "white",
			'& + $track': {
				backgroundColor: 'white',
			},
		},
	},
	switch: {
		"&$checked": {
			color: "white",
			'& + $track': {
				backgroundColor: 'white',
			},
		},
	},
	phoneMenu: {
		display: 'flex',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	list: {
		width: '75',
		height: '100%',
		color: 'white',
		backgroundColor: '#464646'
	},
	span: {
		height: '3.5rem', 
		display: 'flex',
		backgroundColor: "#224a61",
		justifyContent: "flex-start"
	},
}));

export default function Display() {
	const classes = useStyles();

	const [tab, setTab] = useState(0);
	const [searchVal, setSearchVal] = useState("");
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const dm = JSON.parse(localStorage.getItem("darkMode"));
	const [isDarkMode, setDarkMode] = useState((dm != null) ? dm : false);

	const handleChange = (event, newValue) => {
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

	// toggling dark mode
	const onToggleDarkMode = (event) => {
		setDarkMode(event.target.checked)
		localStorage.setItem("darkMode", JSON.stringify(event.target.checked))
	}

	const onHomeButtonClick = (val) => {
		setDrawerOpen(val)
	}

	const toggleDrawer = (open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}	
	
		setDrawerOpen(open)
	};

	const onListItemClick = (index) => {
		setTab(index)
		toggleDrawer(false);
	}

	const list = () => (
		<div className={classes.list}
			styles={isDarkMode ? { backgroundColor: "#464646" }  : { backgroundColor: "#ebebeb"}}
			// role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<span className={classes.span} 
				styles={isDarkMode ? { backgroundColor: "#224a61" } : { backgroundColor: "white"}}>
				<ListItem key="Menu">
					<ListItemIcon><MenuIcon style={{color: 'white'}} /></ListItemIcon>
					<ListItemText primary={"Menu"} />
				</ListItem>
			</span>
			<List>
				{['Characters', 'Totals', 'About'].map((text, index) => (
					<ListItem button key={text} onClick={() => onListItemClick(index)}>
						<ListItemIcon>{(index == 0) ? <PeopleIcon style={{color: 'white'}} /> : 
							(index == 2) ? <AboutIcon style={{color: 'white'}} /> : 
							<ListIcon style={{color: 'white'}} />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	return (
		<div>
			{/* This div must exist for space */}
			<div className={classes.appbar}>
				{/* Appbar */}
				<AppBar style={isDarkMode ? { backgroundColor: "#224a61" } : {backgroundColor: "#3f92c1"}} position="fixed">
					{/* Search toolbar */}
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
							onClick={() => onHomeButtonClick(!isDrawerOpen)}
						>
							<HomeIcon />
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
						aria-label="characters">
							<Tab className={classes.toolbarItems} index={0} label="Characters" {...a11yProps(0)}></Tab>
							<Tab className={classes.toolbarItems} index={1} label="Totals" {...a11yProps(1)}></Tab>
							<Tab className={classes.toolbarItems} index={2} label="About" {...a11yProps(2)}></Tab>
					</Tabs>

					<Drawer className={classes.phoneMenu} anchor={'left'} 
						open={isDrawerOpen}
						onClose={toggleDrawer(false)}
						onOpen={toggleDrawer(true)}>
							{list()}
					</Drawer>
				</AppBar>
			</div>
		
			<div className={classes.darkMode}>
				<Switch checked={isDarkMode} checkedIcon={<Moon style={{color: "white"}} />} className={classes.switch} onChange={onToggleDarkMode} />
			</div>

			{/* Characters */}
			<TabPanel style={{overflowY: 'auto'}} className={isDarkMode ? classes.dmBackground : classes.notDMBackground} value={tab} index={0}>
				<CharacterList isDarkMode={isDarkMode} search={searchVal} url={url} updateCharacters={updateCharacters} />
			</TabPanel>

			{/* Items */}
			<TabPanel style={{overflowY: 'auto'}} className={isDarkMode ? classes.dmBackground : classes.notDMBackground} value={tab} index={1}>
				<ItemList isDarkMode={isDarkMode} search={searchVal} url={url} updateItems={updateItems} />
			</TabPanel>

			{/* About */}
			<TabPanel style={{overflowY: 'auto'}} className={isDarkMode ? classes.dmBackground : classes.notDMBackground} value={tab} index={2}>
				<About isDarkMode={isDarkMode} />
			</TabPanel>
		</div>
	);
}