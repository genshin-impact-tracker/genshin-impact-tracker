import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import RadioGroup from '@material-ui/core/RadioGroup'
import Star from '@material-ui/icons/Star'
import OutlineStar from '@material-ui/icons/StarOutline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles'

import { values, traveler } from './Backend/values'
import { travelerChar } from './Backend/traveler'

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

	props.chara.ascension = char.ascension;
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

	const onAscensionChange = (level) => {
		addValues(level);
		props.setLevelState({ level: level, prevLevel: props.chara.ascension})
		props.chara.ascension = level;

		// setting traveller levels since it's important
		let char = null;
		let char1 = null;
		if (props.chara.element === "anemo"){
			char = travelerChar[1];
			char1 = travelerChar[2];
		} else if (props.chara.element === "geo") {
			char = travelerChar[0];
			char1 = travelerChar[2];
		} else if (props.chara.element === "electro") {
			char = travelerChar[0]
			char1 = travelerChar[1];
		}
		
		char.ascension = level;
		char1.ascension = level;

		localStorage.setItem(props.chara.name + " " + props.chara.element, JSON.stringify(props.chara))
		localStorage.setItem(char.name + " " + char.element, JSON.stringify(char))
		localStorage.setItem(char1.name + " " + char1.element, JSON.stringify(char1))
	}

	// Sets all the ascension values corresponding to ascension level
	const addValues = (level) => {
		if (level != props.level.prevLevel) {
			// setting ascension gem values
			props.chara.properties.ascension.twoStar.value = values.ascension.asc.twoStar.value[level]
			props.chara.properties.ascension.threeStar.value = values.ascension.asc.threeStar.value[level]
			props.chara.properties.ascension.fourStar.value = values.ascension.asc.fourStar.value[level]
			props.chara.properties.ascension.fiveStar.value = values.ascension.asc.fiveStar.value[level]

			// setting ascension common items values
			props.chara.properties.common.oneStar.value = values.ascension.common.oneStar.value[level]
			props.chara.properties.common.twoStar.value = values.ascension.common.twoStar.value[level]
			props.chara.properties.common.threeStar.value = values.ascension.common.threeStar.value[level]

			// setting region values
			props.chara.properties.region.value = values.ascension.region.value[level]
		}
	}

	// Sets all ascension item values to 0
	const resetValues = () => {
		// setting ascension gem values
		props.chara.properties.ascension.twoStar.value = values.ascension.asc.twoStar.value[0]
		props.chara.properties.ascension.threeStar.value = values.ascension.asc.threeStar.value[0]
		props.chara.properties.ascension.fourStar.value = values.ascension.asc.fourStar.value[0]
		props.chara.properties.ascension.fiveStar.value = values.ascension.asc.fiveStar.value[0]

		// setting ascension common items values
		props.chara.properties.common.oneStar.value = values.ascension.common.oneStar.value[0]
		props.chara.properties.common.twoStar.value = values.ascension.common.twoStar.value[0]
		props.chara.properties.common.threeStar.value = values.ascension.common.threeStar.value[0]

		// setting region values
		props.chara.properties.region.value = values.ascension.region.value[0]

		// may need to change to both at 0
		props.setLevelState({ level: 0, prevLevel: props.level.level})
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
		// if it is the second or third talent && element is geo
		if ((tal === "tal2" || tal === "tal3") && props.chara.element === "geo") {
			// setting talent book values
			props.chara.properties.talentGeo.twoStar.value[tal] = traveler.talent.twoStar.value[level]
			props.chara.properties.talentGeo.levelThreeSix.value[tal] = traveler.talent.levelThreeSix.value[level]
			props.chara.properties.talentGeo.levelFour.value[tal] = traveler.talent.levelFour.value[level]
			props.chara.properties.talentGeo.levelFive.value[tal] = traveler.talent.levelFive.value[level]
			props.chara.properties.talentGeo.levelSevenTen.value[tal] = traveler.talent.levelSevenTen.value[level]
			props.chara.properties.talentGeo.levelEight.value[tal] = traveler.talent.levelEight.value[level]
			props.chara.properties.talentGeo.levelNine.value[tal] = traveler.talent.levelNine.value[level]

			// setting talent common items values
			props.chara.properties.talCommonGeo.oneStar.value[tal] = values.talent.common.oneStar.value[level]
			props.chara.properties.talCommonGeo.twoStar.value[tal] = values.talent.common.twoStar.value[level]
			props.chara.properties.talCommonGeo.threeStar.value[tal] = values.talent.common.threeStar.value[level]

			// setting crown and boss values
			props.chara.properties.talBossGeo.value[tal] = values.talent.boss.value[level]
		} else {
			// setting talent book values
			props.chara.properties.talent.twoStar.value[tal] = traveler.talent.twoStar.value[level]
			props.chara.properties.talent.levelThreeSix.value[tal] = traveler.talent.levelThreeSix.value[level]
			props.chara.properties.talent.levelFour.value[tal] = traveler.talent.levelFour.value[level]
			props.chara.properties.talent.levelFive.value[tal] = traveler.talent.levelFive.value[level]
			props.chara.properties.talent.levelSevenTen.value[tal] = traveler.talent.levelSevenTen.value[level]
			props.chara.properties.talent.levelEight.value[tal] = traveler.talent.levelEight.value[level]
			props.chara.properties.talent.levelNine.value[tal] = traveler.talent.levelNine.value[level]

			// setting talent common items values
			props.chara.properties.talCommon.oneStar.value[tal] = values.talent.common.oneStar.value[level]
			props.chara.properties.talCommon.twoStar.value[tal] = values.talent.common.twoStar.value[level]
			props.chara.properties.talCommon.threeStar.value[tal] = values.talent.common.threeStar.value[level]

			// setting crown and boss values
			props.chara.properties.talBoss.value[tal] = values.talent.boss.value[level]
		} 

		props.chara.properties.crown.value[tal] = values.talent.crown.value[level]
	}

	// resetting all talent values to base number
	const resetTalentValues = (chara, talent, element) => {
		if ((talent === "tal2" || talent === "tal3") && element === "geo") {
			// setting talent book values
			chara.properties.talentGeo.twoStar.value[talent] = traveler.talent.twoStar.value[1]
			chara.properties.talentGeo.levelThreeSix.value[talent] = traveler.talent.levelThreeSix.value[1]
			chara.properties.talentGeo.levelFour.value[talent] = traveler.talent.levelFour.value[1]
			chara.properties.talentGeo.levelFive.value[talent] = traveler.talent.levelFive.value[1]
			chara.properties.talentGeo.levelSevenTen.value[talent] = traveler.talent.levelSevenTen.value[1]
			chara.properties.talentGeo.levelEight.value[talent] = traveler.talent.levelEight.value[1]
			chara.properties.talentGeo.levelNine.value[talent] = traveler.talent.levelNine.value[1]
			
			// setting talent common items values
			chara.properties.talCommonGeo.oneStar.value[talent] = values.talent.common.oneStar.value[1]
			chara.properties.talCommonGeo.twoStar.value[talent] = values.talent.common.twoStar.value[1]
			chara.properties.talCommonGeo.threeStar.value[talent] = values.talent.common.threeStar.value[1]
	
			// setting crown and boss values
			chara.properties.talBossGeo.value[talent] = values.talent.boss.value[1]

		} else {
			// setting talent book values
			chara.properties.talent.twoStar.value[talent] = traveler.talent.twoStar.value[1]
			chara.properties.talent.levelThreeSix.value[talent] = traveler.talent.levelThreeSix.value[1]
			chara.properties.talent.levelFour.value[talent] = traveler.talent.levelFour.value[1]
			chara.properties.talent.levelFive.value[talent] = traveler.talent.levelFive.value[1]
			chara.properties.talent.levelSevenTen.value[talent] = traveler.talent.levelSevenTen.value[1]
			chara.properties.talent.levelEight.value[talent] = traveler.talent.levelEight.value[1]
			chara.properties.talent.levelNine.value[talent] = traveler.talent.levelNine.value[1]
			
			// setting talent common items values
			chara.properties.talCommon.oneStar.value[talent] = values.talent.common.oneStar.value[1]
			chara.properties.talCommon.twoStar.value[talent] = values.talent.common.twoStar.value[1]
			chara.properties.talCommon.threeStar.value[talent] = values.talent.common.threeStar.value[1]
	
			// setting crown and boss values
			chara.properties.talBoss.value[talent] = values.talent.boss.value[1]
		}

		chara.properties.crown.value[talent] = values.talent.crown.value[1]

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
			props.setLevelState({...props.level, level: 0})

			let char = null;
			let char1 = null;
			if (props.chara.element === "anemo"){
				char = travelerChar[1];
				char1 = travelerChar[2];
			} else if (props.chara.element === "geo") {
				char = travelerChar[0];
				char1 = travelerChar[2];
			} else if (props.chara.element === "electro") {
				char = travelerChar[0]
				char1 = travelerChar[1];
			}

			// Need to set character values as 0
			resetValues();
			props.chara.ascension = 0;
			char.ascension = 0;
			char1.ascension = 0;

			// one for current mc's element
			resetTalentValues(props.chara, "tal1", props.chara.element);
			resetTalentValues(props.chara, "tal2", props.chara.element);
			resetTalentValues(props.chara, "tal3", props.chara.element);

			// one for other mc element
			resetTalentValues(char, "tal1", char.element);
			resetTalentValues(char, "tal2", char.element);
			resetTalentValues(char, "tal3", char.element);

			// one for third mc element
			resetTalentValues(char1, "tal1", char1.element);
			resetTalentValues(char1, "tal2", char1.element);
			resetTalentValues(char1, "tal3", char1.element);

			// setting all input values to one
			setInputToOnes("anemo")
			setInputToOnes("geo")
			setInputToOnes("electro")

			// setting talent state
			setTalentState({ talent1: 1, talent2: 1, talent3: 1})
			localStorage.setItem(props.chara.name + " " + props.chara.element, JSON.stringify(props.chara))
			localStorage.setItem(char.name + " " + char.element, JSON.stringify(char));
			localStorage.setItem(char1.name + " " + char1.element, JSON.stringify(char1));
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
				</CardContent>
			</Card>
		</div>
	)
}