import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { gemChars, localSpecialties, commons, bossMats, crowns, books, talBossMats, talCommon } from './Backend/table';

import Table from './Table'

// Creating all the table data
function createData(item, amount, character, total) {
	return { item, amount, character, total };
}

const gems = [
	createData("Agate Sliver", 0, 0, 0),
	createData("Agate Fragment", 0, 0, 0),
	createData("Agate Chunk", 0, 0, 0),
	createData("Agate Gemstone", 0, 0, 0),
	createData("Lazurite Sliver", 0, 0, 0),
	createData("Lazurite Fragment", 0, 0, 0),
	createData("Lazurite Chunk", 0, 0, 0),
	createData("Lazurite Gemstone", 0, 0, 0),
	createData("Amethyst Sliver", 0, 0, 0),
	createData("Amethyst Fragment", 0, 0, 0),
	createData("Amethyst Chunk", 0, 0, 0),
	createData("Amethyst Gemstone", 0, 0, 0),
	createData("Turquoise Sliver", 0, 0, 0),
	createData("Turquoise Fragment", 0, 0, 0),
	createData("Turquoise Chunk", 0, 0, 0),
	createData("Turquoise Gemstone", 0, 0, 0),
	createData("Jade Sliver", 0, 0, 0),
	createData("Jade Fragment", 0, 0, 0),
	createData("Jade Chunk", 0, 0, 0),
	createData("Jade Gemstone", 0, 0, 0),
	createData("Topaz Sliver", 0, 0, 0),
	createData("Topaz Fragment", 0, 0, 0),
	createData("Topaz Chunk", 0, 0, 0),
	createData("Topaz Gemstone", 0, 0, 0),
	// createData("Emerald Sliver", 0, 0, 0),
	// createData("Emerald Fragment", 0, 0, 0),
	// createData("Emerald Chunk", 0, 0, 0),
	// createData("Emerald Gemstone", 0, 0, 0),
	createData("Brilliant Diamond Sliver", 0, 0, 0),
	createData("Brilliant Diamond Fragment", 0, 0, 0),
	createData("Brilliant Diamond Chunk", 0, 0, 0),
	createData("Brilliant Diamond Gemstone", 0, 0, 0),
];

const localSpecialtyList = [
	createData("Calla Lily", 0, 0, 0),
	createData("Wolfhook", 0, 0, 0),
	createData("Valberry", 0, 0, 0),
	createData("Cecilia", 0, 0, 0),
	createData("Windwheel Aster", 0, 0, 0),
	createData("Philanemo Mushroom", 0, 0, 0),
	createData("Jueyun Chili", 0, 0, 0),
	createData("Noctilucous Jade", 0, 0, 0),
	createData("Silk Flower", 0, 0, 0),
	createData("Glaze Lily", 0, 0, 0),
	createData("Qingxin", 0, 0, 0),
	createData("Starconch", 0, 0, 0),
	createData("Violetgrass", 0, 0, 0),
	createData("Small Lamp Grass", 0, 0, 0),
	createData("Dandelion Seed", 0, 0, 0),
	createData("Cor Lapis", 0, 0, 0),
	createData("Onikabuto", 0, 0, 0),
	createData("Sakura Bloom", 0, 0, 0),
	createData("Crystal Marrow", 0, 0, 0),
	createData("Dendrobrium", 0, 0, 0),
	createData("Naku Weed", 0, 0, 0),
	createData("Sea Ganoderma", 0, 0, 0),
	createData("Sango Pearl", 0, 0, 0),
	createData("Amakumo Fruit", 0, 0, 0),
	createData("Fluorescent Fungus", 0, 0, 0),
];

const commonList = [
	createData("Slime Condensate", 0, 0, 0),
	createData("Slime Secretions", 0, 0, 0),
	createData("Slime Concentrate", 0, 0, 0),
	createData("Damaged Mask", 0, 0, 0),
	createData("Stained Mask", 0, 0, 0),
	createData("Ominous Mask", 0, 0, 0),
	createData("Divining Scroll", 0, 0, 0),
	createData("Sealed Scroll", 0, 0, 0),
	createData("Forbidden Scroll", 0, 0, 0),
	createData("Firm Arrowhead", 0, 0, 0),
	createData("Sharp Arrowhead", 0, 0, 0),
	createData("Weathered Arrowhead", 0, 0, 0),
	createData("Recruit's Insignia", 0, 0, 0),
	createData("Sergeant's Insignia", 0, 0, 0),
	createData("Lieutenant's Insignia", 0, 0, 0),
	createData("Treasure Hoarder Insignia", 0, 0, 0),
	createData("Silver Raven Insignia", 0, 0, 0),
	createData("Golden Raven Insignia", 0, 0, 0),
	createData("Whopperflower Nectar", 0, 0, 0),
	createData("Shimmering Nectar", 0, 0, 0),
	createData("Energy Nectar", 0, 0, 0),
	createData("Old Handguard", 0, 0, 0),
	createData("Kageuchi Handguard", 0, 0, 0),
	createData("Famed Handguard", 0, 0, 0),
	createData("Spectral Husk", 0, 0, 0),
	createData("Spectral Heart", 0, 0, 0),
	createData("Spectral Nucleus", 0, 0, 0),
]

const bossList = [
	createData("Hurricane Seed", 0, 0, 0),
	createData("Lightning Prism", 0, 0, 0),
	createData("Basalt Pillar", 0, 0, 0),
	createData("Hoarfrost Core", 0, 0, 0),
	createData("Everflame Seed", 0, 0, 0),
	createData("Cleansing Heart", 0, 0, 0),
	createData("Juvenile Jade", 0, 0, 0),
	createData("Crystalline Bloom", 0, 0, 0),
	createData("Marionette Core", 0, 0, 0),
	createData("Perpetual Heart", 0, 0, 0),
	createData("Smoldering Pearl", 0, 0, 0),
	createData("Dew of Repudiation", 0, 0, 0),
	createData("Storm Beads", 0, 0, 0),
	createData("Riftborn Regalia", 0, 0, 0),
	// createData("Dragonheir's False Fin"	, 0, 0, 0),
]

const bookList = [
	createData("Teachings of Freedom", 0, 0, 0),
	createData("Guide to Freedom", 0, 0, 0),
	createData("Philosophies of Freedom", 0, 0, 0),
	createData("Teachings of Resistance", 0, 0, 0),
	createData("Guide to Resistance", 0, 0, 0),
	createData("Philosophies of Resistance", 0, 0, 0),
	createData("Teachings of Ballad", 0, 0, 0),
	createData("Guide to Ballad", 0, 0, 0),
	createData("Philosophies of Ballad", 0, 0, 0),
	createData("Teachings of Prosperity", 0, 0, 0),
	createData("Guide to Prosperity", 0, 0, 0),
	createData("Philosophies of Prosperity", 0, 0, 0),
	createData("Teachings of Diligence", 0, 0, 0),
	createData("Guide to Diligence", 0, 0, 0),
	createData("Philosophies of Diligence", 0, 0, 0),
	createData("Teachings of Gold", 0, 0, 0),
	createData("Guide to Gold", 0, 0, 0),
	createData("Philosophies of Gold", 0, 0, 0),
	createData("Teachings of Transience", 0, 0, 0),
	createData("Guide to Transience", 0, 0, 0),
	createData("Philosophies of Transience", 0, 0, 0),
	createData("Teachings of Elegance", 0, 0, 0),
	createData("Guide to Elegance", 0, 0, 0),
	createData("Philosophies of Elegance", 0, 0, 0),
	createData("Teachings of Light", 0, 0, 0),
	createData("Guide to Light", 0, 0, 0),
	createData("Philosophies of Light", 0, 0, 0),
]

const talBossList = [
	createData("Dvalin's Plume", 0, 0, 0),
	createData("Dvalin's Claw", 0, 0, 0),
	createData("Dvalin's Sigh", 0, 0, 0),
	createData("Tail of Boreas", 0, 0, 0),
	createData("Ring of Boreas", 0, 0, 0),
	createData("Spirit Locket of Boreas", 0, 0, 0),
	createData("Tusk of Monoceros Caeli", 0, 0, 0),
	createData("Shard of a Foul Legacy", 0, 0, 0),
	createData("Shadow of the Warrior", 0, 0, 0),
	createData("Dragon Lord's Crown", 0, 0, 0),
	createData("Bloodjade Branch", 0, 0, 0),
	createData("Gilded Scale", 0, 0, 0),
	createData("Molten Moment", 0, 0, 0),
	createData("Hellfire Butterfly", 0, 0, 0),
	createData("Ashen Heart", 0, 0, 0),
]

const crownList = [
	createData("Crown of Sagehood", 0, 0, 0)
]

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