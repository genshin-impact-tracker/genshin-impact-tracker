import React, { useState, useEffect } from 'react'

import MCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import RadioGroup from '@material-ui/core/RadioGroup'
import Star from '@material-ui/icons/Star'
import OutlineStar from '@material-ui/icons/StarOutline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'

// import { totalAscended, totalTalents } from './Backend/totals'
import { values } from './Backend/values'

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
	geo: {
		backgroundColor: '#f6b03c',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	pyro: {
		backgroundColor: '#ed4637',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	dendro: {
		backgroundColor: '#6eac21',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	electro: {
		backgroundColor: '#7454c1',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	anemo: {
		backgroundColor: '#60d5b4',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	hydro: {
		backgroundColor: '#40abdd',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	cryo: {
		backgroundColor: '#8db1dd',
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
		justifyContent:'center'
	},
}));

// Card.js
export default function Card(props) {
	const classes = useStyles();

	// const ascChecked = props.chara.ascension === 0 ? false : true;
	const char = JSON.parse(localStorage.getItem(props.chara.name))

	// making sure the default values are not null from local storage
	const asc = (char == null || char.ascension == null) ? 0 : char.ascension
	const tall1 = (char == null || char.talent1 == null) ? 1 : char.talent1
	const tall2 = (char == null || char.talent1 == null) ? 1 : char.talent2
	const tall3 = (char == null || char.talent1 == null) ? 1 : char.talent3
	const ascChecked = (asc > 0 ? true : false)

	props.chara.talent1 = tall1;
	props.chara.talent2 = tall2;
	props.chara.talent3 = tall3;

	const [ levelState, setLevelState ] = useState({ level: asc, prevLevel: 0 })
	const [ checked, setChecked ] = useState(ascChecked);
	const [ talentState, setTalentState ] = useState({ talent1: tall1, talent2: tall2, talent3: tall3 });

	const ascLevels = [ 1, 2, 3, 4, 5, 6];

	const activeIcon = props.url + '/Icons/' + props.chara.element + '.png';
	const inactiveIcon = props.url + '/Icons/' + props.chara.element + '-b.png';

	const onAscensionChange = (level) => {
		addValues(level);
		setLevelState({ level: level, prevLevel: props.chara.ascension})
		props.chara.ascension = level;

		localStorage.setItem(props.chara.name, JSON.stringify(props.chara))
	}

	// Sets all the ascension values corresponding to ascension level
	const addValues = (level) => {
		if (level != levelState.prevLevel) {
			// setting ascension gem values
			props.chara.properties.ascension.twoStar.value = values.ascension.asc.twoStar.value[level]
			props.chara.properties.ascension.threeStar.value = values.ascension.asc.threeStar.value[level]
			props.chara.properties.ascension.fourStar.value = values.ascension.asc.fourStar.value[level]
			props.chara.properties.ascension.fiveStar.value = values.ascension.asc.fiveStar.value[level]

			// setting ascension common items values
			props.chara.properties.common.oneStar.value = values.ascension.common.oneStar.value[level]
			props.chara.properties.common.twoStar.value = values.ascension.common.twoStar.value[level]
			props.chara.properties.common.threeStar.value = values.ascension.common.threeStar.value[level]

			// setting region and boss values
			props.chara.properties.boss.value = values.ascension.boss.value[level]
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

		// setting region and boss values
		props.chara.properties.boss.value = values.ascension.boss.value[0]
		props.chara.properties.region.value = values.ascension.region.value[0]

		// may need to change to both at 0
		setLevelState({ level: 0, prevLevel: levelState.level})
	}

	// when talent input value gets changed
	const onTalentChange = (event) => {
		const talentNum = event.target.id.substring(props.chara.name.length);

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

		localStorage.setItem(props.chara.name, JSON.stringify(props.chara))
	}

	// setting talent values to character props
	const addTalentValues = (tal, level) => {
		// setting talent book values
		props.chara.properties.talent.twoStar.value[tal] = values.talent.book.twoStar.value[level]
		props.chara.properties.talent.threeStar.value[tal] = values.talent.book.threeStar.value[level]
		props.chara.properties.talent.fourStar.value[tal] = values.talent.book.fourStar.value[level]

		// setting talent common items values
		props.chara.properties.talCommon.oneStar.value[tal] = values.talent.common.oneStar.value[level]
		props.chara.properties.talCommon.twoStar.value[tal] = values.talent.common.twoStar.value[level]
		props.chara.properties.talCommon.threeStar.value[tal] = values.talent.common.threeStar.value[level]

		// setting crown and boss values
		props.chara.properties.talBoss.value[tal] = values.talent.boss.value[level]
		props.chara.properties.crown.value[tal] = values.talent.crown.value[level]
	}

	// resetting all talent values to base number
	const resetTalentValues = (talent) => {
		// setting talent book values
		props.chara.properties.talent.twoStar.value[talent] = values.talent.book.twoStar.value[1]
		props.chara.properties.talent.threeStar.value[talent] = values.talent.book.threeStar.value[1]
		props.chara.properties.talent.fourStar.value[talent] = values.talent.book.fourStar.value[1]
		
		// setting talent common items values
		props.chara.properties.talCommon.oneStar.value[talent] = values.talent.common.oneStar.value[1]
		props.chara.properties.talCommon.twoStar.value[talent] = values.talent.common.twoStar.value[1]
		props.chara.properties.talCommon.threeStar.value[talent] = values.talent.common.threeStar.value[1]

		// setting crown and boss values
		props.chara.properties.talBoss.value[talent] = values.talent.boss.value[1]
		props.chara.properties.crown.value[talent] = values.talent.crown.value[1]
		setTalentState({ talent1: 1, talent2: 1, talent3: 1 })
	}

	// when the checked status of the toggle button changes
	const onToggleChange = (event) => {
		setChecked(!checked)
		if (checked) {
			// Need to set character values as 0
			resetValues();
			props.chara.ascension = 0;

			// getting the input elements
			const tal1 = document.getElementById(props.chara.name+"talent1")
			const tal2 = document.getElementById(props.chara.name+"talent2")
			const tal3 = document.getElementById(props.chara.name+"talent3")
			tal1.value = 1;
			tal2.value = 1;
			tal3.value = 1;

			resetTalentValues("tal1");
			resetTalentValues("tal2");
			resetTalentValues("tal3");

			// setting talent state
			setTalentState({ talent1: 1, talent2: 1, talent3: 1})
			console.log(levelState, talentState, props.chara)
			localStorage.setItem(props.chara.name, JSON.stringify(props.chara))
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
			<MCard id={props.chara.name}>
				<Checkbox checked={checked}
					id={props.chara.name}
					onChange={onToggleChange}
					name="owned"
					checkedIcon={<CheckedIconSwitch />}
					icon={<IconSwitch />}
				 />

				<Grid container className={classes.grid}>
					<CardMedia onClick={onToggleChange} square="true" component="img" 
						className={classes.media}
						image={props.url+'/Characters/' + props.chara.name + '.png'}
						title={props.chara.name} />
				</Grid>

				<CardContent className={classes.cardContent}>
					<h2 style={{textTransform:"capitalize"}}>{props.chara.name}</h2>
					<FormControl component="fieldset">
						{/* Ascension Stars */}
						<RadioGroup row name="ascension">
							{ascLevels.map((level) => (
								<FormControlLabel key={level} 
									value={level} 
									control={
										<IconButton disabled={!checked} 
											style={{height: '20px', width: '20px'}} 
											onClick={() => onAscensionChange(level)}>
												{ levelState.level >= level ? <Star /> : <OutlineStar />}
										</IconButton>
									}>
								</FormControlLabel>
							))}
						</RadioGroup>
					</FormControl>

					{/* Talents */}
					<form className={classes.root} noValidate >
						<TextField disabled={!checked} 
							InputProps={{ inputProps: { min: 1, max: 10 } }} 
							className={classes.talent} 
							onChange={onTalentChange} 
							style={{width: '4rem', textAlign: 'center'}} 
							id={props.chara.name+"talent1"} 
							label="Talent 1" 
							defaultValue={talentState.talent1} 
							type="number" />

						<TextField disabled={!checked} 
							InputProps={{ inputProps: { min: 1, max: 10 } }} 
							className={classes.talent} 
							onChange={onTalentChange} 
							style={{width: '4rem', textAlign: 'center'}} 
							id={props.chara.name+"talent2"} 
							label="Talent 2" 
							defaultValue={talentState.talent2} 
							type="number" />

						<TextField disabled={!checked} 
							InputProps={{ inputProps: { min: 1, max: 10 } }} 
							className={classes.talent} 
							onChange={onTalentChange} 
							style={{width: '4rem', textAlign: 'center'}} 
							id={props.chara.name+"talent3"} 
							label="Talent 3" 
							defaultValue={talentState.talent3} 
							type="number" />
					</form>
				</CardContent>
			</MCard>
		</div>
	)
}