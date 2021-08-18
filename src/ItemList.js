import React, { Suspense } from 'react'

import { totalOwned } from './Backend/totals'
import { characters } from './Backend/characters'
import { values, traveler } from './Backend/values'
const Item = React.lazy(() => import('./Item'))
import { travelerChar } from './Backend/traveler'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(7),
		paddingBottom: theme.spacing(8),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(12),
		},
	},
	circle: {
		color: 'white',
	}
}));

export default function ItemList(props) {
	const classes = useStyles();

	// CHARACTER PROCESS - MUST HAVE THESE THREE FUNCTIONS
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

	const travelerItems = travelerChar.map((ele) => {
		const char = (JSON.parse(localStorage.getItem(ele.name + " " + ele.element)) == null) ? ele : JSON.parse(localStorage.getItem(ele.name + " " + ele.element))

		// Only track ascension items for anemo to avoid multiple items popping up
		let item = {["item"]: char.properties.ascension.twoStar.item, ["value"]: 0};
		let item2 = {["item"]: char.properties.ascension.threeStar.item, ["value"]: 0};
		let item3 = {["item"]: char.properties.ascension.fourStar.item, ["value"]: 0};
		let item4 = {["item"]: char.properties.ascension.fiveStar.item, ["value"]: 0};
		let item5 = {["item"]: char.properties.common.oneStar.item, ["value"]: 0};
		let item6 = {["item"]: char.properties.common.twoStar.item, ["value"]: 0};
		let item7 = {["item"]: char.properties.common.threeStar.item, ["value"]: 0};
		let item8 = {["item"]: char.properties.region.item, ["value"]: 0};

		if (char.element == "anemo") {
			// Ascension items
			item.value = char.properties.ascension.twoStar.value;
			item2.value = char.properties.ascension.threeStar.value;
			item3.value = char.properties.ascension.fourStar.value;
			item4.value = char.properties.ascension.fiveStar.value;
			item5.value = char.properties.common.oneStar.value;
			item6.value = char.properties.common.twoStar.value;
			item7.value = char.properties.common.threeStar.value;
			item8.value = char.properties.region.value;
		}

		// TALENTS
		// setting up additions for talents so the value is one number for the array
		// Having a conditional for geo to be different values
		const crown = char.properties.crown.value.tal1 + char.properties.crown.value.tal2 + char.properties.crown.value.tal3;

		// All the different talent + geo talent variables
		let talent2Star = null;
		let talent3Six = null;
		let talentFour = null;
		let talentFive = null;
		let talent7Ten = null;
		let talentEight = null;
		let talentNine = null;
		let talentGeo2Star = null;
		let talentGeo3Six = null;
		let talentGeoFour = null;
		let talentGeoFive = null;
		let talentGeo7Ten = null;
		let talentGeoEight = null;
		let talentGeoNine = null;
		let talBoss = null;
		let talCommon1Star = null;
		let talCommon2Star = null;
		let talCommon3Star = null;
		let talGeoBoss = null;
		let talGeoCommon1Star = null;
		let talGeoCommon2Star = null;
		let talGeoCommon3Star = null;

		if (char.element == "geo") {
			// Only one talent is under talBoss, the other two are under talGeoBoss etc
			// This is for the single talent that is different
			talent2Star = char.properties.talent.twoStar.value.tal1;
			talent3Six = char.properties.talent.levelThreeSix.value.tal1;
			talentFour = char.properties.talent.levelFour.value.tal1;
			talentFive = char.properties.talent.levelFive.value.tal1;
			talent7Ten = char.properties.talent.levelSevenTen.value.tal1;
			talentEight = char.properties.talent.levelEight.value.tal1;
			talentNine = char.properties.talent.levelNine.value.tal1;

			talBoss = char.properties.talBoss.value.tal1;
			talCommon1Star = char.properties.talCommon.oneStar.value.tal1;
			talCommon2Star = char.properties.talCommon.twoStar.value.tal1;
			talCommon3Star = char.properties.talCommon.threeStar.value.tal1;

			// This is for the talents that functions with the geo elemental value expectations
			talentGeo2Star = char.properties.talentGeo.twoStar.value.tal2 + char.properties.talentGeo.twoStar.value.tal3;
			talentGeo3Six = char.properties.talentGeo.levelThreeSix.value.tal2 + char.properties.talentGeo.levelThreeSix.value.tal3;
			talentGeoFour = char.properties.talentGeo.levelFour.value.tal2 + char.properties.talentGeo.levelFour.value.tal3;
			talentGeoFive = char.properties.talentGeo.levelFive.value.tal2 + char.properties.talentGeo.levelFive.value.tal3;
			talentGeo7Ten = char.properties.talentGeo.levelSevenTen.value.tal2 + char.properties.talentGeo.levelSevenTen.value.tal3;
			talentGeoEight = char.properties.talentGeo.levelEight.value.tal2 + char.properties.talentGeo.levelEight.value.tal3;
			talentGeoNine = char.properties.talentGeo.levelNine.value.tal2 + char.properties.talentGeo.levelNine.value.tal3;

			talGeoBoss = char.properties.talBossGeo.value.tal2 + char.properties.talBossGeo.value.tal3;
			talGeoCommon1Star = char.properties.talCommonGeo.oneStar.value.tal2 + char.properties.talCommonGeo.oneStar.value.tal3;
			talGeoCommon2Star = char.properties.talCommonGeo.twoStar.value.tal2 + char.properties.talCommonGeo.twoStar.value.tal3;
			talGeoCommon3Star = char.properties.talCommonGeo.threeStar.value.tal2 + char.properties.talCommonGeo.threeStar.value.tal3;
		} else {
			talent2Star = char.properties.talent.twoStar.value.tal1 + char.properties.talent.twoStar.value.tal2 + char.properties.talent.twoStar.value.tal3;
			talent3Six = char.properties.talent.levelThreeSix.value.tal1 + char.properties.talent.levelThreeSix.value.tal2 + char.properties.talent.levelThreeSix.value.tal3;
			talentFour = char.properties.talent.levelFour.value.tal1 + char.properties.talent.levelFour.value.tal2 + char.properties.talent.levelFour.value.tal3;
			talentFive = char.properties.talent.levelFive.value.tal1 + char.properties.talent.levelFive.value.tal2 + char.properties.talent.levelFive.value.tal3;
			talent7Ten = char.properties.talent.levelSevenTen.value.tal1 + char.properties.talent.levelSevenTen.value.tal2 + char.properties.talent.levelSevenTen.value.tal3;
			talentEight = char.properties.talent.levelEight.value.tal1 + char.properties.talent.levelEight.value.tal2 + char.properties.talent.levelEight.value.tal3;
			talentNine = char.properties.talent.levelNine.value.tal1 + char.properties.talent.levelNine.value.tal2 + char.properties.talent.levelNine.value.tal3;

			talBoss = char.properties.talBoss.value.tal1 + char.properties.talBoss.value.tal2 + char.properties.talBoss.value.tal3;
			talCommon1Star = char.properties.talCommon.oneStar.value.tal1 + char.properties.talCommon.oneStar.value.tal2 + char.properties.talCommon.oneStar.value.tal3;
			talCommon2Star = char.properties.talCommon.twoStar.value.tal1 + char.properties.talCommon.twoStar.value.tal2 + char.properties.talCommon.twoStar.value.tal3;
			talCommon3Star = char.properties.talCommon.threeStar.value.tal1 + char.properties.talCommon.threeStar.value.tal2 + char.properties.talCommon.threeStar.value.tal3;
		}

		// Continuing array items
		const item9 = {["item"]: char.properties.crown.item, ["value"]: crown};
		const item10 = {["item"]: char.properties.talent.twoStar.item, ["value"]: talent2Star};
		const item11 = {["item"]: char.properties.talent.levelThreeSix.item, ["value"]: talent3Six};
		const item12 = {["item"]: char.properties.talent.levelFour.item, ["value"]: talentFour};
		const item13 = {["item"]: char.properties.talent.levelFive.item, ["value"]: talentFive};
		const item14 = {["item"]: char.properties.talent.levelSevenTen.item, ["value"]: talent7Ten};
		const item15 = {["item"]: char.properties.talent.levelEight.item, ["value"]: talentEight};
		const item16 = {["item"]: char.properties.talent.levelNine.item, ["value"]: talentNine};
		const item17 = {["item"]: char.properties.talBoss.item, ["value"]: talBoss};
		const item18 = {["item"]: char.properties.talCommon.oneStar.item, ["value"]: talCommon1Star};
		const item19 = {["item"]: char.properties.talCommon.twoStar.item, ["value"]: talCommon2Star};
		const item20 = {["item"]: char.properties.talCommon.threeStar.item, ["value"]: talCommon3Star};

		// Geo Talent Items
		const item21 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.twoStar.item, ["value"]: talentGeo2Star} : null;
		const item22 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelThreeSix.item, ["value"]: talentGeo3Six} : null;
		const item23 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelFour.item, ["value"]: talentGeoFour} : null;
		const item24 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelFive.item, ["value"]: talentGeoFive} : null;
		const item25 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelSevenTen.item, ["value"]: talentGeo7Ten} : null;
		const item26 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelEight.item, ["value"]: talentGeoEight} : null;
		const item27 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelNine.item, ["value"]: talentGeoNine} : null;
		const item28 = (char.element == "geo") ? {["item"]: char.properties.talBossGeo.item, ["value"]: talGeoBoss} : null;
		const item29 = (char.element == "geo") ? {["item"]: char.properties.talCommonGeo.oneStar.item, ["value"]: talGeoCommon1Star} : null;
		const item30 = (char.element == "geo") ? {["item"]: char.properties.talCommonGeo.twoStar.item, ["value"]: talGeoCommon2Star} : null;
		const item31 = (char.element == "geo") ? {["item"]: char.properties.talCommonGeo.threeStar.item, ["value"]: talGeoCommon3Star} : null;

		// Separating norm from geo trav
		let array = null;
		if (char.element == "geo") 
			array = [item, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29, item30, item31]
		else
			array = [item, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20]

		return array
	})

	// for ascension + talents
	// to append all of those values of the previous array list of arrays to a new value
	const charItems = totalOwned.map((item) => {
		let val = 0;

		for (var i = 0; i < ascendedItems.length; i++)
			for (var j = 0; j < ascendedItems[i].length; j++) {
				if (item.item == ascendedItems[i][j].item)
					val += ascendedItems[i][j].value;
			}

		// add the traveler items on top of the character values
		for (var i = 0; i < travelerItems.length; i++)
			for (var j = 0; j < travelerItems[i].length; j++) {
				if (item.item && (item.item == travelerItems[i][j].item))
					val += travelerItems[i][j].value;
			}

		return {["item"]: item.item, ["value"]: val}
	})

	console.log(charItems)

	// This is to have the maximum number of all items needed for every character
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

	// max traveler item values
	const maxTravItems = travelerChar.map((char) => {
		// Only track ascension items for anemo to avoid multiple items popping up for traveler ascension
		let item = {["item"]: char.properties.ascension.twoStar.item, ["value"]: 0};
		let item2 = {["item"]: char.properties.ascension.threeStar.item, ["value"]: 0};
		let item3 = {["item"]: char.properties.ascension.fourStar.item, ["value"]: 0};
		let item4 = {["item"]: char.properties.ascension.fiveStar.item, ["value"]: 0};
		let item5 = {["item"]: char.properties.common.oneStar.item, ["value"]: 0};
		let item6 = {["item"]: char.properties.common.twoStar.item, ["value"]: 0};
		let item7 = {["item"]: char.properties.common.threeStar.item, ["value"]: 0};
		let item8 = {["item"]: char.properties.region.item, ["value"]: 0};

		if (char.element == "anemo") {
			// Ascension items
			item.value = values.ascension.asc.twoStar.value[6];
			item2.value = values.ascension.asc.threeStar.value[6];
			item3.value = values.ascension.asc.fourStar.value[6];
			item4.value = values.ascension.asc.fiveStar.value[6];
			item5.value = values.ascension.common.oneStar.value[6];
			item6.value = values.ascension.common.twoStar.value[6];
			item7.value = values.ascension.common.threeStar.value[6];
			item8.value = values.ascension.region.value[6];
		}

		// TALENTS
		const crown = values.talent.crown.value[10] * 3;

		// All the different talent + geo talent variables
		let talent2Star = traveler.talent.twoStar.value[10] * 2;
		let talent3Six = traveler.talent.levelThreeSix.value[10] * 2;
		let talentFour = traveler.talent.levelFour.value[10] * 2;
		let talentFive = traveler.talent.levelFive.value[10] * 2;
		let talent7Ten = traveler.talent.levelSevenTen.value[10] * 2;
		let talentEight = traveler.talent.levelEight.value[10] * 2;
		let talentNine = traveler.talent.levelNine.value[10] * 2;
		let talentGeo2Star = traveler.talent.twoStar.value[10];
		let talentGeo3Six = traveler.talent.levelThreeSix.value[10];
		let talentGeoFour = traveler.talent.levelFour.value[10];
		let talentGeoFive = traveler.talent.levelFive.value[10];
		let talentGeo7Ten = traveler.talent.levelSevenTen.value[10];
		let talentGeoEight = traveler.talent.levelEight.value[10];
		let talentGeoNine = traveler.talent.levelNine.value[10];
		let talBoss = values.talent.boss.value[10] * 2;
		let talCommon1Star = values.talent.common.oneStar.value[10] * 2;
		let talCommon2Star = values.talent.common.twoStar.value[10] * 2;
		let talCommon3Star = values.talent.common.threeStar.value[10] * 2;
		let talGeoBoss = values.talent.boss.value[10];
		let talGeoCommon1Star = values.talent.common.oneStar.value[10];
		let talGeoCommon2Star = values.talent.common.twoStar.value[10];
		let talGeoCommon3Star = values.talent.common.threeStar.value[10];

		// Continuing array items
		const item9 = {["item"]: char.properties.crown.item, ["value"]: crown};
		const item10 = {["item"]: char.properties.talent.twoStar.item, ["value"]: talent2Star};
		const item11 = {["item"]: char.properties.talent.levelThreeSix.item, ["value"]: talent3Six};
		const item12 = {["item"]: char.properties.talent.levelFour.item, ["value"]: talentFour};
		const item13 = {["item"]: char.properties.talent.levelFive.item, ["value"]: talentFive};
		const item14 = {["item"]: char.properties.talent.levelSevenTen.item, ["value"]: talent7Ten};
		const item15 = {["item"]: char.properties.talent.levelEight.item, ["value"]: talentEight};
		const item16 = {["item"]: char.properties.talent.levelNine.item, ["value"]: talentNine};
		const item17 = {["item"]: char.properties.talBoss.item, ["value"]: talBoss};
		const item18 = {["item"]: char.properties.talCommon.oneStar.item, ["value"]: talCommon1Star};
		const item19 = {["item"]: char.properties.talCommon.twoStar.item, ["value"]: talCommon2Star};
		const item20 = {["item"]: char.properties.talCommon.threeStar.item, ["value"]: talCommon3Star};

		// Geo Talent Items
		const item21 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.twoStar.item, ["value"]: talentGeo2Star} : null;
		const item22 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelThreeSix.item, ["value"]: talentGeo3Six} : null;
		const item23 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelFour.item, ["value"]: talentGeoFour} : null;
		const item24 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelFive.item, ["value"]: talentGeoFive} : null;
		const item25 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelSevenTen.item, ["value"]: talentGeo7Ten} : null;
		const item26 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelEight.item, ["value"]: talentGeoEight} : null;
		const item27 = (char.element == "geo") ? {["item"]: char.properties.talentGeo.levelNine.item, ["value"]: talentGeoNine} : null;
		const item28 = (char.element == "geo") ? {["item"]: char.properties.talBossGeo.item, ["value"]: talGeoBoss} : null;
		const item29 = (char.element == "geo") ? {["item"]: char.properties.talCommonGeo.oneStar.item, ["value"]: talGeoCommon1Star} : null;
		const item30 = (char.element == "geo") ? {["item"]: char.properties.talCommonGeo.twoStar.item, ["value"]: talGeoCommon2Star} : null;
		const item31 = (char.element == "geo") ? {["item"]: char.properties.talCommonGeo.threeStar.item, ["value"]: talGeoCommon3Star} : null;

		// Separating norm from geo trav
		let array = null;
		if (char.element == "geo") 
			array = [item, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29, item30, item31]
		else
			array = [item, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20]

		return array
	})

	const maxItems = totalOwned.map((item) => {
		let val = 0;

		// Adds characters max item values to new array
		for (var i = 0; i < maxVals.length; i++)
			for (var j = 0; j < maxVals[i].length; j++) {
				if (item.item == maxVals[i][j].item)
					val += maxVals[i][j].value;
			}

		// Adds traveler max item values to new array
		for (var i = 0; i < maxTravItems.length; i++)
			for (var j = 0; j < maxTravItems[i].length; j++) {
				if (item.item == maxTravItems[i][j].item)
					val += maxTravItems[i][j].value;
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
								<Suspense fallback={<CircularProgress className={props.isDarkMode ? classes.circle : ""} disableShrink />}>
									<Item isDarkMode={props.isDarkMode} item={ite.item} array={charItems} maxItems={maxItems} url={props.url} className={classes.item} />
								</Suspense>
							</Grid>))
					}
				</Grid>
			</Container>
		</div>
	)
}