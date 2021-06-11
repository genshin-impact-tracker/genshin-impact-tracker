// START OF OLD CODE
	// const onAscensionChange = (level) => {
	// 	console.log(level)

	// 	// When the level is different than the previous state, add values to the file
	// 	if (level != levelState.prevLevel) {
	// 		// console.log("Before resetting vals", totalAscended)
	// 		// Resetting the values to have accurate numbers
	// 		// if (level != 0) 
	// 		resetValues(levelState.prevLevel);

	// 		// Declaring strings for matching
	// 		const sliver = props.chara.properties.ascension + ' Sliver';
	// 		const frag = props.chara.properties.ascension + ' Fragment';
	// 		const chunk = props.chara.properties.ascension + ' Chunk';
	// 		const gem = props.chara.properties.ascension + ' Gemstone';
	// 		const common = props.chara.properties.common;
	// 		const boss = props.chara.properties.boss;
	// 		const region = props.chara.properties.region;

	// 		// RegEx that gets all types of items in totals.js
	// 		const commonOneRegEx = /\w+\s(Slime|Mask|Scroll|Arrowhead|Coin|Nectar)|\w+[\.']\w+\sInsignia/g;

	// 		let itemCount = 0;

	// 		totalAscended.forEach((item, index) => {
	// 			let stringA = item.item.replace(/\w+\s|\w+[\.']\w+\s/g, '')

	// 			if (item.item == sliver) 
	// 				item.amount += values.ascension.asc.twoStar.value[level] / 2
	// 			if (item.item == frag)
	// 				item.amount += values.ascension.asc.threeStar.value[level] / 2
	// 			if (item.item == chunk)
	// 				item.amount += values.ascension.asc.fourStar.value[level] / 2
	// 			if (item.item == gem)
	// 				item.amount += values.ascension.asc.fiveStar.value[level] / 2
	// 			if (stringA == common && commonOneRegEx.test(item.item) && itemCount < 1) {
	// 				item.amount += values.ascension.common.oneStar.value[level] / 2
	// 				// Updating values of the next two levels of the common item
	// 				totalAscended[index + 1].amount += values.ascension.common.twoStar.value[level] / 2
	// 				totalAscended[index + 2].amount += values.ascension.common.threeStar.value[level] / 2

	// 				// Updating the count so that it marks all of the common items as complete
	// 				itemCount++;
	// 			}
	// 			if (item.item == boss)
	// 				item.amount += values.ascension.boss.value[level] / 2
	// 			if (item.item == region)
	// 				item.amount += values.ascension.region.value[level] / 2
	// 		})
	// 	}

	// 	console.log(totalAscended)

	// 	// setting level states
	// 	setLevelState({ ...levelState, level: level, prevLevel: props.chara.ascension })
	// 	// saving the ascension value to the file
	// 	props.chara.ascension = level;
	// }

	// const resetValues = (level) => {
	// 	// Only reset values if the level is over 0
	// 	if (level > 0) {
	// 		const sliver = props.chara.properties.ascension + ' Sliver';
	// 		const frag = props.chara.properties.ascension + ' Fragment';
	// 		const chunk = props.chara.properties.ascension + ' Chunk';
	// 		const gem = props.chara.properties.ascension + ' Gemstone';
	// 		const common = props.chara.properties.common;
	// 		const boss = props.chara.properties.boss;
	// 		const region = props.chara.properties.region;

	// 		// RegEx that gets all items in totals.js
	// 		const commonOneRegEx = /\w+\s(Slime|Mask|Scroll|Arrowhead|Coin|Nectar)|\w+[\.']\w+\sInsignia/g;

	// 		let itemCount = 0;

	// 		// Subtract the values, and not set to 0, since other characters affect the total values
	// 		totalAscended.forEach((item, index) => {
	// 			let stringA = item.item.replace(/\w+\s|\w+[\.']\w+\s/g, '')

	// 			if (item.item == sliver) 
	// 				item.amount -= values.ascension.asc.twoStar.value[level]
	// 			if (item.item == frag)
	// 				item.amount -= values.ascension.asc.threeStar.value[level]
	// 			if (item.item == chunk)
	// 				item.amount -= values.ascension.asc.fourStar.value[level]
	// 			if (item.item == gem)
	// 				item.amount -= values.ascension.asc.fiveStar.value[level]
	// 			if (stringA == common && commonOneRegEx.test(item.item) && itemCount < 1) {
	// 				item.amount -= values.ascension.common.oneStar.value[level]
	// 				// Updating values of the next two levels of the common item
	// 				totalAscended[index + 1].amount -= values.ascension.common.twoStar.value[level]
	// 				totalAscended[index + 2].amount -= values.ascension.common.threeStar.value[level]

	// 				// Updating the count so that it marks all of the common items as complete
	// 				itemCount++;
	// 			}
	// 			if (item.item == boss)
	// 				item.amount -= values.ascension.boss.value[level]
	// 			if (item.item == region)
	// 				item.amount -= values.ascension.region.value[level]
	// 		})
	// 	}
	// }

	// const onTalentChange = (event) => {
	// 	const talentNum = event.target.id.substring(props.chara.name.length);

	// 	const talBooks = { 
	// 		book1: "Teachings of " + props.chara.properties.talent,
	// 		book2: "Guide to " + props.chara.properties.talent,
	// 		book3: "Philosophies of " + props.chara.properties.talent
	// 	}

	// 	if (talentNum == "talent1") {
	// 		// reset before updating the total, so it works fine going up and down between numbers
	// 		resetTalentValues(talBooks, talentState.talent1);
	// 		resetCommonTalentValue(talentState.talent1)

	// 		addTalentValues(talBooks, event.target.value)
	// 		console.log(totalTalents)
	// 		setTalentState({ ...talentState, talent1: event.target.value})
	// 	} else if (talentNum == "talent2") {
	// 		// resetting before updating total
	// 		resetTalentValues(talBooks, talentState.talent2);
	// 		resetCommonTalentValue(talentState.talent2)

	// 		addTalentValues(talBooks, event.target.value)
	// 		console.log(totalTalents)
	// 		setTalentState({ ...talentState, talent2: event.target.value})
	// 	} else if (talentNum == "talent3") {
	// 		// resetting before updating total
	// 		resetTalentValues(talBooks, talentState.talent3);
	// 		resetCommonTalentValue(talentState.talent3)

	// 		addTalentValues(talBooks, event.target.value)
	// 		console.log(totalTalents)
	// 		setTalentState({ ...talentState, talent3: event.target.value})
	// 	}

	// 	// setting up the common values added from talent ascension
	// 	addCommonTalentValue(event.target.value);
	// 	console.log(totalAscended)
	// }

	// // adding the value onto the total
	// const addTalentValues = (book, level) => {
	// 	const obnoxious = /\w+[\.']\w\s(Plume|Claw|Sigh)|(Gilded|Bloodjade)\s\w+|(Tail|Ring)\s\w+\s\w+|(Dragon)\s\w+[\.']\w\s\w+|(Spirit|Tusk|Shadow)\s\w+\s\w+\s\w+|Shard of a Foul Legacy/g
		
	// 	level = Number(level);

	// 	if (isNaN(level))
	// 		level = 0;

	// 	totalTalents.forEach(item => {
	// 		// Regex to make item name one word to match the props
	// 		let dvalinStr = item.item.replace(/\w+[\.']\w+\s/g, '')
	// 		let twoWords = item.item.replace(/\s\w+/g, '')
	// 		let dragon = item.item.replace(/\s\w+?([\.']\w+\s\w+)/g, '')

	// 		if (item.item == "Crown of Sagehood")
	// 			item.amount += values.talent.crown.value[level]
	// 		if ((props.chara.properties.talBoss == dvalinStr || props.chara.properties.talBoss == dragon || props.chara.properties.talBoss == twoWords) && obnoxious.test(item.item))
	// 			item.amount += values.talent.boss.value[level]
	// 		if (item.item == book.book1)
	// 			item.amount += values.talent.book.oneStar.value[level]
	// 		else if (item.item == book.book2)
	// 			item.amount += values.talent.book.twoStar.value[level]
	// 		else if (item.item == book.book3)
	// 			item.amount += values.talent.book.threeStar.value[level]
	// 	})
	// }

	// // to reset the value before updating the total
	// const resetTalentValues = (book, level) => {
	// 	const obnoxious = /\w+[\.']\w\s(Plume|Claw|Sigh)|(Gilded|Bloodjade)\s\w+|(Tail|Ring)\s\w+\s\w+|(Dragon)\s\w+[\.']\w\s\w+|(Spirit|Tusk|Shadow)\s\w+\s\w+\s\w+|Shard of a Foul Legacy/g
		
	// 	level = Number(level);

	// 	if (isNaN(level))
	// 		level = 0;

	// 	totalTalents.forEach(item => {
	// 		// Regex to make item name one word to match the props
	// 		let dvalinStr = item.item.replace(/\w+[\.']\w+\s/g, '')
	// 		let twoWords = item.item.replace(/\s\w+/g, '')
	// 		let dragon = item.item.replace(/\s\w+?([\.']\w+\s\w+)/g, '')

	// 		if (item.item == "Crown of Sagehood")
	// 			item.amount -= values.talent.crown.value[level]
	// 		if ((props.chara.properties.talBoss == dvalinStr || props.chara.properties.talBoss == dragon || props.chara.properties.talBoss == twoWords) && obnoxious.test(item.item))
	// 			item.amount -= values.talent.boss.value[level]
	// 		if (item.item == book.book1)
	// 			item.amount -= values.talent.book.oneStar.value[level]
	// 		else if (item.item == book.book2)
	// 			item.amount -= values.talent.book.twoStar.value[level]
	// 		else if (item.item == book.book3)
	// 			item.amount -= values.talent.book.threeStar.value[level]
	// 	})
	// }

	// const addCommonTalentValue = (level) => {
	// 	// RegEx that gets all items in totals.js
	// 	// One regex for each of them since the array was not working :)
	// 	const commonOneRegEx = /(Condensate Slime|Damaged Mask|Divining Scroll|Firm Arrowhead|Treasure Coin|Whopperflower Nectar|Recruit's Insignia)/g;
	// 	const commonTwoRegEx = /(Secretions Slime|Stained Mask|Sealed Scroll|Sharp Arrowhead|Silver Coin|Shimmering Nectar|Sergeant's Insignia)/g
	// 	const commonThreeRegEx = /(Concentrate Slime|Ominous Mask|Forbidden Scroll|Weathered Arrowhead|Golden Coin|Energy Nectar|Lieutenant's Insignia)/g

	// 	totalAscended.forEach(item => {
	// 		let stringA = item.item.replace(/\w+\s|\w+[\.']\w+\s/g, '')

	// 		if (stringA == props.chara.properties.common && commonOneRegEx.test(item.item))
	// 			item.amount += values.talent.common.oneStar.value[level];
	// 		else if (stringA == props.chara.properties.common && commonTwoRegEx.test(item.item))
	// 			item.amount += values.talent.common.twoStar.value[level]
	// 		else if (stringA == props.chara.properties.common && commonThreeRegEx.test(item.item))
	// 			item.amount += values.talent.common.threeStar.value[level]
	// 	})
	// }

	// const resetCommonTalentValue = (level) => {
	// 	// RegEx that gets all items in totals.js
	// 	// One regex for each of them since the array was not working :)
	// 	const commonOneRegEx = /(Condensate Slime|Damaged Mask|Divining Scroll|Firm Arrowhead|Treasure Coin|Whopperflower Nectar|Recruit's Insignia)/g;
	// 	const commonTwoRegEx = /(Secretions Slime|Stained Mask|Sealed Scroll|Sharp Arrowhead|Silver Coin|Shimmering Nectar|Sergeant's Insignia)/g
	// 	const commonThreeRegEx = /(Concentrate Slime|Ominous Mask|Forbidden Scroll|Weathered Arrowhead|Golden Coin|Energy Nectar|Lieutenant's Insignia)/g

	// 	totalAscended.forEach(item => {
	// 		let stringA = item.item.replace(/\w+\s|\w+[\.']\w+\s/g, '')

	// 		if (stringA == props.chara.properties.common && commonOneRegEx.test(item.item))
	// 			item.amount -= values.talent.common.oneStar.value[level];
	// 		else if (stringA == props.chara.properties.common && commonTwoRegEx.test(item.item))
	// 			item.amount -= values.talent.common.twoStar.value[level]
	// 		else if (stringA == props.chara.properties.common && commonThreeRegEx.test(item.item))
	// 			item.amount -= values.talent.common.threeStar.value[level]
	// 	})	
	// }

	// END OF OLD CODE