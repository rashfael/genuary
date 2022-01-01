<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
const props = defineProps({})
const emit = defineEmits([])

const canvas = ref(null)


// wikipedia def
function cubicBezier (t, p0, p1, p2, p3) {
	return {
		x: (1 - t) ** 3 * p0.x + 3 * (1 - t) ** 2 * t * p1.x + 3 * (1 - t) * t ** 2 * p2.x + t ** 3 * p3.x,
		y: (1 - t) ** 3 * p0.y + 3 * (1 - t) ** 2 * t * p1.y + 3 * (1 - t) * t ** 2 * p2.y + t ** 3 * p3.y
	}
}


// WHERE DOES THIS COME FROM?
// function cubicBezier (t, p0, p1, p2, p3) {
// 	const cX = 3 * (p1.x - p0.x)
// 	const bX = 3 * (p2.x - p1.x) - cX
// 	const aX = p3.x - p0.x - cX - bX
// 	const cY = 3 * (p1.y - p0.y)
// 	const bY = 3 * (p2.y - p1.y) - cY
// 	const aY = p3.y - p0.y - cY - bY
// 	return {
// 		x: (aX * t ** 3) + (bX * t ** 2) + (cX * t) + p0.x,
// 		y: (aY * t ** 3) + (bY * t ** 2) + (cY * t) + p0.y
// 	}
// }


onMounted(() => {
	canvas.value.width = document.body.offsetWidth
	canvas.value.height = document.body.offsetHeight
	const ctx = canvas.value.getContext('2d')
	let count = 0

	function renderPoints (p) {
		for (let t=0; t<=1; t+=0.0025) {
			const b = cubicBezier(t, p[0], p[1], p[2], p[3])
			ctx.beginPath()
			ctx.arc(b.x, b.y, 4, 0, 2 * Math.PI)
			ctx.stroke()
			count++
		}
	}

	function render2 (originX, originY) {
		renderPoints ([
		{x: originX + 20, y: originY + 130},
		{x: originX + 250, y: originY - 50},
		{x: originX + 350, y: originY + 200},
		{x: originX, y: originY + 400}
	])

	renderPoints ([
		{x: originX, y: originY + 400},
		{x: originX + 100, y: originY + 350},
		{x: originX + 100, y: originY + 500},
		{x: originX + 250, y: originY + 400}
	])
	}

	render2(100, 300)
	
	// 0

	renderPoints ([
		{x: 400, y: 550},
		{x: 400, y: 300},
		{x: 600, y: 300},
		{x: 600, y: 550}
	])

	renderPoints ([
		{x: 400, y: 550},
		{x: 400, y: 780},
		{x: 600, y: 780},
		{x: 600, y: 550}
	])


	render2(630, 300)

	render2(950, 300)

	
	console.log(count)
})
</script>
<template lang="pug">
canvas.bezier(ref="canvas")
</template>
<style lang="stylus">
html, body
	width: 100%
	height: 100%
	margin: 0
</style>
	