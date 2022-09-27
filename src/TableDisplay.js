import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { gemChars, localSpecialties, commons, bossMats, crowns, books, talBossMats, talCommon, gems, bookList, localSpecialtyList, crownList, commonList, talBossList, bossList } from './Backend/table';

import Table from './Table'

const useStyles = makeStyles((theme) => ({
	dmText: {
		color: 'white',
	},
	firstHeader: {
		color: "black",
		top: '1rem',
		[theme.breakpoints.up('sm')]: {
			top: "4rem",
		},
	},
	dmFirstHeader: {
		color: "white",
		top: '1rem',
		[theme.breakpoints.up('sm')]: {
			top: "4rem",
		},
	}
}))

export default function TableDisplay(props) {
	const classes = useStyles();

	// // Notes: Take character array
	// // 		  Filter character array with the item in question in cell
	// //        Return list of all characters who have that item in their info sheet
	// // 		  Then, map all characters in array to display media img

	return (
		<div>
			<h2 className={props.isDarkMode ? classes.dmFirstHeader : classes.firstHeader} 
				style={{display: 'inline-flex', marginBottom: "0px", position: "relative",}}>
					Character Ascension Material
			</h2>
			<div style={{top: '3rem', position: "relative"}}>
				<Table isDarkMode={props.isDarkMode} 
					url={props.url}
					mat={"gems"} 
					typeList={gemChars} 
					list={gems} 
					strCheck1="Sliver" strCheck2="Gemstone" />
			</div>

			<h2 className={props.isDarkMode ? classes.dmText : ""} 
				style={{display: 'inline-flex', marginBottom: "0px", position: "relative", top: "1rem"}}>
					Local Specialties
			</h2>
			<Table isDarkMode={props.isDarkMode} 
				first={true}
				url={props.url}
				mat={"specialties"} 
				typeList={localSpecialties} 
				list={localSpecialtyList} />

			<h2 className={props.isDarkMode ? classes.dmText : ""} 
				style={{display: 'inline-flex', marginBottom: "0px", position: "relative", top: "1rem"}}>
					Common Materials
			</h2>
			<Table isDarkMode={props.isDarkMode} 
				url={props.url}
				mat={"commons"} 
				typeList={commons} 
				list={commonList} />

			<h2 className={props.isDarkMode ? classes.dmText : ""} 
				style={{display: 'inline-flex', marginBottom: "0px", position: "relative", top: "1rem"}}>
					Boss Materials
			</h2>
			<Table isDarkMode={props.isDarkMode} 
				url={props.url}
				mat={"boss"}
				typeList={bossMats} 
				list={bossList} />

			<h2 className={props.isDarkMode ? classes.dmText : ""} 
				style={{display: 'inline-flex', marginBottom: "0px", position: "relative", top: "1rem"}}>
					Crown Materials
			</h2>
			<Table isDarkMode={props.isDarkMode} 
				url={props.url}
				mat={"crown"}
				typeList={crowns} 
				list={crownList} />

			<h2 className={props.isDarkMode ? classes.dmText : ""} 
				style={{display: 'inline-flex', marginBottom: "0px", position: "relative", top: "1rem"}}>
					Talent Book Materials
			</h2>
			<Table isDarkMode={props.isDarkMode} 
				url={props.url}
				mat={"books"}
				typeList={books} 
				list={bookList} />

			<h2 className={props.isDarkMode ? classes.dmText : ""} 
				style={{display: 'inline-flex', marginBottom: "0px", position: "relative", top: "1rem"}}>
					Talent Common Materials
			</h2>
			<Table isDarkMode={props.isDarkMode} 
				url={props.url}
				mat={"talCommon"} 
				typeList={talCommon} 
				list={commonList} />

			<h2 className={props.isDarkMode ? classes.dmText : ""} 
				style={{display: 'inline-flex', marginBottom: "0px", position: "relative", top: "1rem"}}>
					Talent Boss Materials
			</h2>
			<Table isDarkMode={props.isDarkMode} 
				url={props.url}
				mat={"talBoss"}
				typeList={talBossMats} 
				list={talBossList} />
		</div>
	)
}