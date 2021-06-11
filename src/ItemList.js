import React from 'react'

import { totalAscended, totalTalents, totalOwned } from './Backend/totals'
import { characters } from './Backend/characters'
import { values } from './Backend/values'
import Item from './Item'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(12),
		paddingBottom: theme.spacing(8),
	},
}));

export default function ItemList(props) {
	const classes = useStyles();

	// to make a list of characters' items and values
	const ascendedItems = characters.map((chara) => {
		// jsx to determine using ascended values from local storage or the character from the list
		const char = (JSON.parse(localStorage.getItem(chara.name)) == null) ? chara : JSON.parse(localStorage.getItem(chara.name))

		const item = {["item"]: char.properties.ascension.twoStar.item, ["value"]: char.properties.ascension.twoStar.value};
		const item2 = {["item"]: char.properties.ascension.threeStar.item, ["value"]: char.properties.ascension.threeStar.value};
		const item3 = {["item"]: char.properties.ascension.fourStar.item, ["value"]: char.properties.ascension.fourStar.value};
		const item4 = {["item"]: char.properties.ascension.fiveStar.item, ["value"]: char.properties.ascension.fiveStar.value};
		const item5 = {["item"]: char.properties.boss.item, ["value"]: char.properties.boss.value};
		const item6 = {["item"]: char.properties.common.oneStar.item, ["value"]: char.properties.common.oneStar.value};
		const item7 = {["item"]: char.properties.common.twoStar.item, ["value"]: char.properties.common.twoStar.value};
		const item8 = {["item"]: char.properties.common.threeStar.item, ["value"]: char.properties.common.threeStar.value};
		const item9 = {["item"]: char.properties.region.item, ["value"]: char.properties.region.value};

		// TALENTS
		// setting up additions for talents so the value is one number for the array
		const crown = char.properties.crown.value.tal1 + char.properties.crown.value.tal2 + char.properties.crown.value.tal3;
		const talent2Star = char.properties.talent.twoStar.value.tal1 + char.properties.talent.twoStar.value.tal2 + char.properties.talent.twoStar.value.tal3;
		const talent3Star = char.properties.talent.threeStar.value.tal1 + char.properties.talent.threeStar.value.tal2 + char.properties.talent.threeStar.value.tal3;
		const talent4Star = char.properties.talent.fourStar.value.tal1 + char.properties.talent.fourStar.value.tal2 + char.properties.talent.fourStar.value.tal3;
		const talBoss = char.properties.talBoss.value.tal1 + char.properties.talBoss.value.tal2 + char.properties.talBoss.value.tal3;
		const talCommon1Star = char.properties.talCommon.oneStar.value.tal1 + char.properties.talCommon.oneStar.value.tal2 + char.properties.talCommon.oneStar.value.tal3;
		const talCommon2Star = char.properties.talCommon.twoStar.value.tal1 + char.properties.talCommon.twoStar.value.tal2 + char.properties.talCommon.twoStar.value.tal3;
		const talCommon3Star = char.properties.talCommon.threeStar.value.tal1 + char.properties.talCommon.threeStar.value.tal2 + char.properties.talCommon.threeStar.value.tal3;

		// Continuing array items
		const item10 = {["item"]: char.properties.crown.item, ["value"]: crown};
		const item11 = {["item"]: char.properties.talent.twoStar.item, ["value"]: talent2Star};
		const item12 = {["item"]: char.properties.talent.threeStar.item, ["value"]: talent3Star};
		const item13 = {["item"]: char.properties.talent.fourStar.item, ["value"]: talent4Star};
		const item14 = {["item"]: char.properties.talBoss.item, ["value"]: talBoss};
		const item15 = {["item"]: char.properties.talCommon.oneStar.item, ["value"]: talCommon1Star};
		const item16 = {["item"]: char.properties.talCommon.twoStar.item, ["value"]: talCommon2Star};
		const item17 = {["item"]: char.properties.talCommon.threeStar.item, ["value"]: talCommon3Star};

		const array = [item, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17]

		return array
	})

	// for ascension + talents
	// to append all of those values of the previous array list of arrays to a new value
	const itemss = totalOwned.map((item) => {
		let val = 0;

		for (var i = 0; i < ascendedItems.length; i++)
			for (var j = 0; j < ascendedItems[i].length; j++) {
				if (item.item == ascendedItems[i][j].item)
					val += ascendedItems[i][j].value;
			}

		return {["item"]: item.item, ["value"]: val}
	})

	console.log(itemss)

	// making array of total number of items
	// this is big sad ;w;
	const maxVals = characters.map((chara) => {
		const item = {["item"]: chara.properties.ascension.twoStar.item, ["value"]: values.ascension.asc.twoStar.value[6]};
		const item2 = {["item"]: chara.properties.ascension.threeStar.item, ["value"]: values.ascension.asc.threeStar.value[6]};
		const item3 = {["item"]: chara.properties.ascension.fourStar.item, ["value"]: values.ascension.asc.fourStar.value[6]};
		const item4 = {["item"]: chara.properties.ascension.fiveStar.item, ["value"]: values.ascension.asc.fiveStar.value[6]};
		const item5 = {["item"]: chara.properties.boss.item, ["value"]: values.ascension.boss.value[6]};
		const item6 = {["item"]: chara.properties.common.oneStar.item, ["value"]: values.ascension.common.oneStar.value[6]};
		const item7 = {["item"]: chara.properties.common.twoStar.item, ["value"]: values.ascension.common.twoStar.value[6]};
		const item8 = {["item"]: chara.properties.common.threeStar.item, ["value"]: values.ascension.common.threeStar.value[6]};
		const item9 = {["item"]: chara.properties.region.item, ["value"]: values.ascension.region.value[6]};

		// TALENTS
		// setting up additions for talents so the value is one number for the array
		const crown = values.talent.crown.value[10] * 3;
		const talent2Star = values.talent.book.twoStar.value[10] * 3;
		const talent3Star = values.talent.book.threeStar.value[10] * 3;
		const talent4Star = values.talent.book.fourStar.value[10] * 3;
		const talBoss = values.talent.boss.value[10] * 3;
		const talCommon1Star = values.talent.common.oneStar.value[10] * 3;
		const talCommon2Star = values.talent.common.twoStar.value[10] * 3;
		const talCommon3Star = values.talent.common.threeStar.value[10] * 3;

		// Continuing array items
		const item10 = {["item"]: chara.properties.crown.item, ["value"]: crown};
		const item11 = {["item"]: chara.properties.talent.twoStar.item, ["value"]: talent2Star};
		const item12 = {["item"]: chara.properties.talent.threeStar.item, ["value"]: talent3Star};
		const item13 = {["item"]: chara.properties.talent.fourStar.item, ["value"]: talent4Star};
		const item14 = {["item"]: chara.properties.talBoss.item, ["value"]: talBoss};
		const item15 = {["item"]: chara.properties.talCommon.oneStar.item, ["value"]: talCommon1Star};
		const item16 = {["item"]: chara.properties.talCommon.twoStar.item, ["value"]: talCommon2Star};
		const item17 = {["item"]: chara.properties.talCommon.threeStar.item, ["value"]: talCommon3Star};

		const array = [item, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17]

		return array
	})

	const maxItems = totalOwned.map((item) => {
		let val = 0;

		for (var i = 0; i < maxVals.length; i++)
			for (var j = 0; j < maxVals[i].length; j++) {
				if (item.item == maxVals[i][j].item)
					val += maxVals[i][j].value;
			}

		return {["item"]: item.item, ["value"]: val}
	})

	return (
		<div className={classes.body}>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid container spacing={4}>
					{(props.search === "" ? totalOwned : props.updateItems)
						.map((ite) => (
							<Grid item key={ite.item} xs={12} sm={6} md={4}>
								<Item item={ite.item} url={props.url} array={itemss} maxItems={maxItems} className={classes.item} />
							</Grid>))
					}
				</Grid>
			</Container>
		</div>
	)
}