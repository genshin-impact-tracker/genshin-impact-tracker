import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';

import Star from '@material-ui/icons/Star'
import OutlineStar from '@material-ui/icons/StarOutline'
import MoreIcon from '@material-ui/icons/ExpandMore'

import { makeStyles, styled } from '@material-ui/core/styles'

import { values, traveler } from './Backend/values'
import { travelerChar } from './Backend/traveler'

import CardItemDisplay from './CardItemDisplay'

const useStyles = makeStyles((theme) => ({
	element: {
		backgroundColor: '#ffffff',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	active: {
		backgroundColor: '#e6b948',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	cardContent: {
		flexGrow: 1,
	},
	media: {
		height: '100px',
		width: '100px',
		padding: '0px 5%',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	root: {
		'& .MuiTextField-root': {
		  	margin: theme.spacing(1),
			width: '25ch',
		},
	},
	talent: {
		width: '100px',
	},
	grid: {
		justifyContent: 'center',
	},
	dmText: {
		color: 'white',
	},
	card: {
		backgroundColor: '#f5f5f5',
	},
	dmCard: {
		backgroundColor: '#777777'
	},
	dmStar: {
		color: 'white',
	},
}));

export default function Traveler(props) {
	const classes = useStyles();

	const char = JSON.parse(localStorage.getItem(props.chara.name + " " + props.chara.element))

	// making sure the default values are not null from local storage
	const tall1 = ((char == null || char.talent1 == null) ? 1 : char.talent1)
	const tall2 = ((char == null || char.talent2 == null) ? 1 : char.talent2)
	const tall3 = ((char == null || char.talent3 == null) ? 1 : char.talent3)

	props.chara.ascension = (char === null) ? 0 : char.ascension;
	props.chara.talent1 = tall1;
	props.chara.talent2 = tall2;
	props.chara.talent3 = tall3;

	const ascLevels = [ 1, 2, 3, 4, 5, 6];

	const activeIcon = props.url + '/Icons/' + props.chara.element + '.png';
	const inactiveIcon = props.url + '/Icons/' + props.chara.element + '-b.png';
	const [ talentState, setTalentState ] = useState({ talent1: tall1, talent2: tall2, talent3: tall3 });

	const elementStyles = {
		"pyro": "#f85d5d",
		"cryo": "#6ddef3",
		"geo": "#f3bd6d",
		"hydro": "#6d92f3",
		"electro": "#ad6df3",
		"anemo": "#6df3bd",
		"dendro": "#77f36d",
		"element": "#f5f5f5"
	}

	const dmElementStyles = {
		"dmpyro": "#801717",
		"dmcryo": "#177380",
		"dmgeo": "#804e17",
		"dmhydro": "#172c80",
		"dmelectro": "#491780",
		"dmanemo": "#178067",
		"dmdendro": "#17801b",
		"dmelement": "#777777"
	}

	// Set card asc expand as expanded or not
	const handleAscExpandClick = () => {
		setExpandedAsc(!expandedAsc);
	};

	// Set card tal expand as expanded or not
	const handleTalExpandClick = () => {
		setExpandedTal(!expandedTal);
	};

	const onAscensionChange = (level) => {
		addValues(level);
		props.setLevelState({ level: level, prevLevel: props.chara.ascension})
		props.chara.ascension = level;

		// taking the current changed traveler version and setting all traveler levels
		// required to do as all ascension levels are equal across all trav types
		setCharacter(props.chara.ascension);
	}

	const setCharacter = (level) => {
		// setting all travelers to the same ascension
		// saving updated version to local storage
		for (let i = 0; i < travelerChar.length; i++) {
			travelerChar[i].ascension = level;
			localStorage.setItem(travelerChar[i].name + " " + travelerChar[i].element, JSON.stringify(travelerChar[i]))
		}
	}

	// Sets all the ascension values corresponding to ascension level
	const addValues = (level) => {
		if (level != props.level.prevLevel) {
			// setting character ascension item values
			setValues(props.chara, level)
		}
	}

	// One function to set all property values
	const setValues = (char, level) => {
		// setting ascension gem values
		char.properties.ascension.twoStar.value = values.ascension.asc.twoStar.value[level]
		char.properties.ascension.threeStar.value = values.ascension.asc.threeStar.value[level]
		char.properties.ascension.fourStar.value = values.ascension.asc.fourStar.value[level]
		char.properties.ascension.fiveStar.value = values.ascension.asc.fiveStar.value[level]

		// setting ascension common items values
		char.properties.common.oneStar.value = values.ascension.common.oneStar.value[level]
		char.properties.common.twoStar.value = values.ascension.common.twoStar.value[level]
		char.properties.common.threeStar.value = values.ascension.common.threeStar.value[level]

		// setting region values
		char.properties.region.value = values.ascension.region.value[level]
	}

	const setTalentValues = (char, tal, level) => {
		// if it is the second or third talent && element is geo
		if ((tal === "tal2" || tal === "tal3") && char.element === "geo") {
			// setting talent book values
			char.properties.talentGeo.twoStar.value[tal] = traveler.talent.twoStar.value[level]
			char.properties.talentGeo.levelThreeSix.value[tal] = traveler.talent.levelThreeSix.value[level]
			char.properties.talentGeo.levelFour.value[tal] = traveler.talent.levelFour.value[level]
			char.properties.talentGeo.levelFive.value[tal] = traveler.talent.levelFive.value[level]
			char.properties.talentGeo.levelSevenTen.value[tal] = traveler.talent.levelSevenTen.value[level]
			char.properties.talentGeo.levelEight.value[tal] = traveler.talent.levelEight.value[level]
			char.properties.talentGeo.levelNine.value[tal] = traveler.talent.levelNine.value[level]

			// setting talent common items values
			char.properties.talCommonGeo.oneStar.value[tal] = values.talent.common.oneStar.value[level]
			char.properties.talCommonGeo.twoStar.value[tal] = values.talent.common.twoStar.value[level]
			char.properties.talCommonGeo.threeStar.value[tal] = values.talent.common.threeStar.value[level]

			// setting crown and boss values
			char.properties.talBossGeo.value[tal] = values.talent.boss.value[level]
		} else {
			// setting talent book values
			char.properties.talent.twoStar.value[tal] = traveler.talent.twoStar.value[level]
			char.properties.talent.levelThreeSix.value[tal] = traveler.talent.levelThreeSix.value[level]
			char.properties.talent.levelFour.value[tal] = traveler.talent.levelFour.value[level]
			char.properties.talent.levelFive.value[tal] = traveler.talent.levelFive.value[level]
			char.properties.talent.levelSevenTen.value[tal] = traveler.talent.levelSevenTen.value[level]
			char.properties.talent.levelEight.value[tal] = traveler.talent.levelEight.value[level]
			char.properties.talent.levelNine.value[tal] = traveler.talent.levelNine.value[level]

			// setting talent common items values
			char.properties.talCommon.oneStar.value[tal] = values.talent.common.oneStar.value[level]
			char.properties.talCommon.twoStar.value[tal] = values.talent.common.twoStar.value[level]
			char.properties.talCommon.threeStar.value[tal] = values.talent.common.threeStar.value[level]

			// setting crown and boss values
			char.properties.talBoss.value[tal] = values.talent.boss.value[level]
		} 

		char.properties.crown.value[tal] = values.talent.crown.value[level]
	}

	// when talent input value gets changed
	const onTalentChange = (event) => {
		// length of both Name and Element for ID
		const num = props.chara.name.length + props.chara.element.length
		const talentNum = event.target.id.substring(num);

		let level = Number(event.target.value);
		
		if (isNaN(level))
			level = 0;

		if (talentNum == "talent1") {
			addTalentValues("tal1", level)
			setTalentState({ ...talentState, talent1: level})
			props.chara.talent1 = level;
		} else if (talentNum == "talent2") {
			addTalentValues("tal2", level)
			setTalentState({ ...talentState, talent2: level})
			props.chara.talent2 = level;
		} else if (talentNum == "talent3") {
			addTalentValues("tal3", level)
			setTalentState({ ...talentState, talent3: level})
			props.chara.talent3 = level;
		}

		localStorage.setItem(props.chara.name + " " + props.chara.element, JSON.stringify(props.chara))
	}

	// setting talent values to character props
	const addTalentValues = (tal, level) => {
		setTalentValues(props.chara, tal, level)
	}

	// resetting all talent values to base number
	const resetTalentValues = (chara, tal, element) => {
		setTalentValues(chara, tal, 1)

		// setting the base values of the chara talent to 1 so that it saves
		// properly in the local storage
		chara.talent1 = 1;
		chara.talent2 = 1;
		chara.talent3 = 1;
	}

	const setInputToOnes = (element) => {
		const tal1 = document.getElementById(props.chara.name + element + "talent1")
		const tal2 = document.getElementById(props.chara.name + element + "talent2")
		const tal3 = document.getElementById(props.chara.name + element + "talent3")

		tal1.value = 1;
		tal2.value = 1;
		tal3.value = 1;
	}

	// when the checked status of the toggle button changes
	const onToggleChange = (event) => {
		props.setChecked(!props.checked)
		
		if (props.checked) {
			props.setLevelState({ level: 0, prevLevel: props.level.level})

			for (let i = 0; i < travelerChar.length; i++) {
				resetTalentValues(travelerChar[i], "tal1", travelerChar[i].element)
				resetTalentValues(travelerChar[i], "tal2", travelerChar[i].element)
				resetTalentValues(travelerChar[i], "tal3", travelerChar[i].element)

				// set all input values to 1
				setInputToOnes(travelerChar[i].element)
			}

			// setting talent state
			setTalentState({ talent1: 1, talent2: 1, talent3: 1})
			setCharacter(0);

			// may need to set both values to 0
			props.setLevelState({ level: 0, prevLevel: props.level.level})
		}
	}

	const IconSwitch = () => {
		return (
			<CardMedia component="img"
				style={{height: '30px', width: '30px'}}
				image={inactiveIcon} />
		)
	}

	const CheckedIconSwitch = () => {
		return (
			<CardMedia component="img"
				style={{height: '30px', width: '30px'}}
				image={activeIcon} /> 
		)
	}

	return (
		<div>
			<Card className={props.isDarkMode ? classes.dmCard : classes.card} 
				style={(!props.isDarkMode && !props.checked) ? { backgroundColor: elementStyles["element"] } :
						(props.isDarkMode && props.checked) ? { backgroundColor: dmElementStyles["dm" + props.chara.element] } :
						(props.checked) ? { backgroundColor: elementStyles[props.chara.element] }	:
						{ backgroundColor: dmElementStyles["dmelement"] }
				} 
				id={props.chara.name}
			>
				<Checkbox checked={props.checked}
					id={props.chara.name}
					onChange={onToggleChange}
					name="owned"
					checkedIcon={<CheckedIconSwitch />}
					icon={<IconSwitch />}
				 />

				<Grid container className={classes.grid}>
					<CardMedia 
						onClick={onToggleChange} 
						square="true" component="img" 
						className={classes.media}
						image={props.url+'/Characters/aether.png'}
						title={props.chara.name+"A"} />
					
					<CardMedia 
						onClick={onToggleChange} 
						square="true" component="img" 
						className={classes.media}
						image={props.url+'/Characters/lumine.png'}
						title={props.chara.name + "B"} />
				</Grid>

				<CardContent className={classes.cardContent}>
					<h2 className={props.isDarkMode ? classes.dmText : ""} style={{textTransform:"capitalize"}}>{props.chara.name} ({props.chara.element})</h2>
					<FormControl component="fieldset">
						{/* Ascension Stars */}
						<RadioGroup row name="ascension">
							{ascLevels.map((level) => (
								<FormControlLabel key={level} 
									value={level} 
									control={
										<IconButton disabled={!props.checked} 
											style={{height: '20px', width: '20px'}} 
											onClick={() => onAscensionChange(level)}>
												{ props.level.level >= level ? 
													<Star className={props.isDarkMode ? classes.dmStar : ""}/> 
													: <OutlineStar className={props.isDarkMode ? classes.dmStar : ""}/>
												}
										</IconButton>
									}>
								</FormControlLabel>
							))}
						</RadioGroup>
					</FormControl>

					{/* Talents */}
					<form className={classes.root} noValidate>
						<TextField disabled={!props.checked} 
							InputProps={props.isDarkMode ? { className: classes.dmText, inputProps: { min: 1, max: 10 }} : {inputProps: { min: 1, max: 10 }}} 
							InputLabelProps={props.isDarkMode ? {style: {color: 'white'}} : {}}
							className={classes.talent} 
							onChange={onTalentChange} 
							style={{width: '4rem', textAlign: 'center'}} 
							id={props.chara.name+props.chara.element+"talent1"} 
							label="Talent 1" 
							defaultValue={talentState.talent1} 
							type="number" />

						<TextField disabled={!props.checked} 
							InputProps={props.isDarkMode ? { className: classes.dmText, inputProps: { min: 1, max: 10 }} : {inputProps: { min: 1, max: 10 }}} 
							InputLabelProps={props.isDarkMode ? {style: {color: 'white'}} : {}}
							className={classes.talent} 
							onChange={onTalentChange} 
							style={{width: '4rem', textAlign: 'center'}} 
							id={props.chara.name+props.chara.element+"talent2"} 
							label="Talent 2" 
							defaultValue={talentState.talent2} 
							type="number" />

						<TextField disabled={!props.checked} 
							InputProps={props.isDarkMode ? { className: classes.dmText, inputProps: { min: 1, max: 10 }} : {inputProps: { min: 1, max: 10 }}} 
							InputLabelProps={props.isDarkMode ? {style: {color: 'white'}} : {}}
							className={classes.talent} 
							onChange={onTalentChange} 
							style={{width: '4rem', textAlign: 'center'}} 
							id={props.chara.name+props.chara.element+"talent3"} 
							label="Talent 3" 
							defaultValue={talentState.talent3} 
							type="number" />
					</form>
					
					<span>
						<h2 className={props.isDarkMode ? classes.dmText : ""} style={{display: 'inline-flex', marginBottom: "0px"}}>Ascension Items</h2>
						<ExpandMore expand={expandedAsc}
							onClick={handleAscExpandClick}
							aria-expanded={expandedAsc}
							aria-label="show more">
								<MoreIcon />
						</ExpandMore>
					</span>

					{/* Collapsable ascension material content on character card */}
					<Collapse in={expandedAsc} timeout="auto" unmountOnExit>
						<CardContent style={{paddingTop: '0px'}}>
							<Grid container style={{display: 'inline-flex'}}>
								{/* Gem Items */}
								<CardItemDisplay url={props.url} display={true} isDarkMode={props.isDarkMode} item={props.chara.properties.ascension.fiveStar.item} />

								{/* Common Enemy Items */}
								<CardItemDisplay url={props.url} display={true} isDarkMode={props.isDarkMode} item={props.chara.properties.common.oneStar.item} />

								{/* Regional Item */}
								<CardItemDisplay url={props.url} display={true} isDarkMode={props.isDarkMode} item={props.chara.properties.region.item} />
							</Grid>
						</CardContent>
					</Collapse>

					<span>
						<h2 className={props.isDarkMode ? classes.dmText : ""} style={{display: 'inline-flex', marginBottom: "0px"}}>Talent Items</h2>
						<ExpandMore expand={expandedTal}
							onClick={handleTalExpandClick}
							aria-expanded={expandedTal}
							aria-label="show more">
								<MoreIcon />
						</ExpandMore>
					</span>

					{/* Collapsable ascension material content on character card */}
					<Collapse in={expandedTal} timeout="auto" unmountOnExit>
						<CardContent style={{paddingTop: '0px'}}>
							<Grid container style={{display: 'inline-flex'}}>
								{/* Crown Items */}
								<CardItemDisplay url={props.url} display={true} isDarkMode={props.isDarkMode} item={props.chara.properties.crown.item} />

								{/* Common Talent Items */}
								<CardItemDisplay url={props.url} display={true} isDarkMode={props.isDarkMode} item={props.chara.properties.talCommon.oneStar.item} />

								{/* Talent Book Item */}
								{ props.chara.element == "geo" ? 
									<span>
										<Grid container style={{display: 'inline-flex'}}>
											<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talent.twoStar.item} />
											<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talent.levelThreeSix.item} />
											<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talent.levelFour.item} />
											<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talBoss.item} />
										</Grid>
										<Grid container style={{display: 'inline-flex'}}>
											<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talentGeo.twoStar.item} />
											<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talentGeo.levelThreeSix.item} />
											<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talentGeo.levelFour.item} /> 
											<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talBossGeo.item} />
										</Grid>
									</span>
								: 	<Grid container style={{display: 'inline-flex'}}>
										<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talent.twoStar.item} />
										<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talent.levelThreeSix.item} />
										<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talent.levelFour.item} />
										<CardItemDisplay url={props.url} isDarkMode={props.isDarkMode} item={props.chara.properties.talBoss.item} />
									</Grid> }
							</Grid>
						</CardContent>
					</Collapse>
				</CardContent>
			</Card>
		</div>
	)
}