import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
	table: {
		top: '3rem',
		position: 'relative',
		backgroundColor: '#f5f5f5',
		marginBottom: '5rem',
	},
	dmTable: {
		top: '3rem',
		position: 'relative',
		backgroundColor: '#777777',
		marginBottom: '5rem',
	},
	cell: {
		color: "black",
	},
	dmCell: {
		color: "white",
	},
	media: {
		height: '50px',
		width: '50px',
	},
	dmText: {
		color: 'white',
	},
	headRow: {
		color: 'black',
		fontWeight: 600,
		height: '2.7rem'
	},
	dmHeadRow: {
		color: 'white',
		fontWeight: 600,
		height: '2.7rem'
	}
}))

export default function ItemTable(props) {
	const classes = useStyles();

	return (
		<div>
			<TableContainer className={props.isDarkMode ? classes.dmTable : classes.table} component={Paper}>
				<Table sx={{ minWidth: 700 }}>
					<TableHead>
						<TableRow>
							<TableCell className={props.isDarkMode ? classes.dmHeadRow : classes.headRow}>Item</TableCell>
							<TableCell className={props.isDarkMode ? classes.dmHeadRow : classes.headRow} align="center">Per Chara</TableCell>
							<TableCell className={props.isDarkMode ? classes.dmHeadRow : classes.headRow} align="center">Character</TableCell>
							<TableCell className={props.isDarkMode ? classes.dmHeadRow : classes.headRow} align="center">Total Amount</TableCell>
						</TableRow>
					</TableHead>

					{/* Ascension Materials */}
					<TableBody>
						{props.list.map((item, index) => (
							<TableRow key={item.item}>
								<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" scope="item">
									<CardMedia square="true" component="img" 
										className={classes.media}
										image={props.url + '/Items/' + item.item + '.png'}
										title={item.item} />
								</TableCell>

								{/* CELL FOR AMOUNT PER CHARACTER 
								Completing checks for different values based off of the item material type:
									- gem
									- common items
									- local specialties, etc
								Displaying a different value depending on that to accurately display amount of item per character */}
								
								{(props.mat == "gems") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{(item.item.includes(props.strCheck1)) ? 1 :
										(item.item.includes(props.strCheck2)) ? 6 : 9}
									</TableCell> : null }
									
								{(props.mat == "specialties") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										168
									</TableCell> : null }

								{(props.mat == "commons") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{(((index + 3) % 3 ) == 0) ? 18 :
										(((index + 3) % 3) == 1) ? 30 : 36}
									</TableCell>
								: null}

								{(props.mat == "boss") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										46
									</TableCell>
								: null}

								{(props.mat == "crown") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										3
									</TableCell>
								: null}

								{(props.mat == "books") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{(((index + 3) % 3 ) == 0) ? 9 :
										(((index + 3) % 3) == 1) ? 63 : 114}
									</TableCell>
								: null}

								{(props.mat == "talCommon") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{(((index + 3) % 3 ) == 0) ? 18 :
										(((index + 3) % 3) == 1) ? 66 : 93}
									</TableCell>
								: null}

								{(props.mat == "talBoss") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										18
									</TableCell>
								: null}

								<TableCell style={{display: 'flex', justifyContent: "space-evenly", flexFlow: "wrap"}} className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="left">
									{props.typeList.map((type) => (
										(item.item == type.item) ?
										type.chars.map((char) => (
											<CardMedia key={char} square="true" component="img" 
											className={classes.media}
											image={props.url + '/Characters/' + char.toLowerCase() + '.png'}
											title={char} />
										)) : null
									))}
								</TableCell>


								{/* CELL FOR TOTAL AMOUNT OF ITEMS
									Completing checks for different values based off of the item material type:
										- gem
										- common items
										- local specialties, etc
									Displaying a different value depending on that to accurately display total amount */}
								{(props.mat == "gems") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{props.typeList.map((type) => (
											// creating checks for traveler values
											(item.item.includes("Brilliant") && (item.item == type.item)) ?
												(item.item.includes(props.strCheck1)) ? 1 :
												(item.item.includes(props.strCheck2)) ? 6 : 9
											: (item.item == type.item) ?
												(item.item.includes(props.strCheck1)) ? (1 * type.chars.length) :
												(item.item.includes(props.strCheck2)) ? (6 * type.chars.length) : (9 * type.chars.length)
											: ""
										))}
									</TableCell> : null }

								{(props.mat == "specialties") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{props.typeList.map((type) => (
											// Creating checks for traveler values
											(item.item == "Windwheel Aster" && (item.item == type.item)) ?
												168 * (type.chars.length - 1)
											: (item.item == type.item) ?
												168 * type.chars.length 
											: ""
										))}
									</TableCell> : null }
								
								{(props.mat == "commons") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{props.typeList.map((type) => (
											// creating checks for traveler values
											(item.item.includes("Mask") && item.item == type.item) ?
												(((index + 3) % 3 ) == 0) ? 18 * (type.chars.length - 1) :
												(((index + 3) % 3) == 1) ? 30 * (type.chars.length - 1) : 36 * (type.chars.length - 1)
											: (item.item == type.item) ?
												(((index + 3) % 3 ) == 0) ? 18 * type.chars.length :
												(((index + 3) % 3) == 1) ? 30 * type.chars.length : 36 * type.chars.length
											: ""
										))}
									</TableCell> : null }

								{(props.mat == "boss") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{props.typeList.map((type) => (
											(item.item == type.item) ?
												46 * type.chars.length 
											: ""
										))}
									</TableCell> : null }

								{(props.mat == "crown") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{props.typeList.map((type) => (
											(item.item == type.item) ?
												3 * (type.chars.length - 2) + 3 * 3
											: ""
										))}
									</TableCell> : null }
									
								{(props.mat == "books") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{props.typeList.map((type) => (
											// Creating checks for traveler values
											(item.item.includes("Freedom") && item.item == type.item) ?
												item.item.includes("Teaching") ? 12 + 9 * (type.chars.length - 2)
												: item.item.includes("Guide") ? 24 + 63 * (type.chars.length - 2) : 24 + 114 * (type.chars.length - 2)
											: (item.item.includes("Resistance") && item.item == type.item) ?
												item.item.includes("Teaching") ? 9 * type.chars.length
												: item.item.includes("Guide") ? 44 + 63 * (type.chars.length - 2) : 48 + 114 * (type.chars.length - 2)
											: (item.item.includes("Ballad") && item.item == type.item) ?
												item.item.includes("Teaching") ? 9 * type.chars.length
												: item.item.includes("Guide") ? 16 + 63 * (type.chars.length - 2) : 80 + 114 * (type.chars.length - 2)
											: (item.item.includes("Prosperity") && item.item == type.item) ?
												item.item.includes("Teaching") ? 9 * type.chars.length
												: item.item.includes("Guide") ? 12 + 63 * (type.chars.length - 2) : 12 + 114 * (type.chars.length - 2)
											: (item.item.includes("Diligence") && item.item == type.item) ?
												item.item.includes("Teaching") ? 6 + 9 * (type.chars.length - 2)
												: item.item.includes("Guide") ? 22 + 63 * (type.chars.length - 2) : 24 + 114 * (type.chars.length - 2)
											: (item.item.includes("Gold") && item.item == type.item) ?
												item.item.includes("Teaching") ? 9 * type.chars.length
												: item.item.includes("Guide") ? 8 + 63 * (type.chars.length - 2) : 40 + 114 * (type.chars.length - 2)
											:  (item.item.includes("Transience") && item.item == type.item) ?
												item.item.includes("Teaching") ? 9 * (type.chars.length - 1)
												: item.item.includes("Guide") ? 18 + 63 * (type.chars.length - 2) : 18 + 114 * (type.chars.length - 2)
											: (item.item.includes("Elegance") && item.item == type.item) ?
												item.item.includes("Teaching") ? 9 * type.chars.length
												: item.item.includes("Guide") ? 33 + 63 * (type.chars.length - 2) : 36 + 114 * (type.chars.length - 2)
											: (item.item.includes("Light") && item.item == type.item) ?
												item.item.includes("Teaching") ? 9 * type.chars.length
												: item.item.includes("Guide") ? 12 + 63 * (type.chars.length - 2) : 60 + 114 * (type.chars.length - 2)
											: (item.item == type.item) ?
												(((index + 3) % 3 ) == 0) ? 9 * type.chars.length :
												(((index + 3) % 3) == 1) ? 63 * type.chars.length : 114 * type.chars.length
											: ""
										))}
									</TableCell> : null }

								{(props.mat == "talCommon") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{props.typeList.map((type) => (
											// Creating checks for traveler values
											(item.item.includes("Arrowhead") && item.item == type.item) ?
												item.item.includes("Firm") ? 12 + 18 * (type.chars.length - 2)
												: item.item.includes("Sharp") ? 44 + 66 * (type.chars.length - 2) : 62 + 93 * (type.chars.length - 2)
											: (item.item.includes("Scroll") && item.item == type.item) ?
												item.item.includes("Divining") ? 24 + 18 * (type.chars.length - 2)
												: item.item.includes("Sealed") ? 88 + 66 * (type.chars.length - 2) : 124 + 93 * (type.chars.length - 2)
											: (item.item.includes("Handguard") && item.item == type.item) ?
												item.item.includes("Old") ? 18 + 18 * (type.chars.length - 2)
												: item.item.includes("Kageuchi") ? 66 + 66 * (type.chars.length - 2) : 93 + 93 * (type.chars.length - 2)
											: (item.item == type.item) ?
												(((index + 3) % 3 ) == 0) ? 18 * type.chars.length :
												(((index + 3) % 3) == 1) ? 66 * type.chars.length : 93 * type.chars.length
											: ""
										))}
									</TableCell> : null }

								{(props.mat == "talBoss") ? 
									<TableCell className={props.isDarkMode ? classes.dmCell : classes.cell} component="th" align="center">
										{props.typeList.map((type) => (
											(item.item == "Dvalin's Sigh" && item.item == type.item) ?
												24 + 18 * (type.chars.length - 2) 
											: (item.item == "Tail of Boreas" && item.item == type.item) ?
												12 + 18 * (type.chars.length - 2) 
											: (item.item == "Dragon Lord's Crown" && item.item == type.item) ?
												18 * (type.chars.length - 1) 
											: (item.item == type.item) ?
												18 * type.chars.length 
											: ""
										))}
									</TableCell> : null }
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}