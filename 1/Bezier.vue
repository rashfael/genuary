<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
const props = defineProps({})
const emit = defineEmits([])

const canvas = ref(null)


// wikipedia def
// function cubicBezier (t, p0, p1, p2, p3) {
// 	return {
// 		x: (1 - t) ** 3 * p0.x + 3 * (1 - t) ** 2 * t * p1.x + 3 * (1 - t) * t ** 2 * p2.x + t ** 3 * p3.x,
// 		y: (1 - t) ** 3 * p0.y + 3 * (1 - t) ** 2 * t * p1.y + 3 * (1 - t) * t ** 2 * p2.y + t ** 3 * p3.y
// 	}
// }


// WHERE DOES THIS COME FROM?
function cubicBezier (t, p0, p1, p2, p3) {
	const cX = 3 * (p1.x - p0.x)
	const bX = 3 * (p2.x - p1.x) - cX
	const aX = p3.x - p0.x - cX - bX
	const cY = 3 * (p1.y - p0.y)
	const bY = 3 * (p2.y - p1.y) - cY
	const aY = p3.y - p0.y - cY - bY
	return {
		x: (aX * t ** 3) + (bX * t ** 2) + (cX * t) + p0.x,
		y: (aY * t ** 3) + (bY * t ** 2) + (cY * t) + p0.y
	}
}


onMounted(() => {
	canvas.value.width = document.body.offsetWidth
	canvas.value.height = document.body.offsetHeight
	const ctx = canvas.value.getContext('2d')
	const p = [
		{x: 100, y: 100},
		{x: 150, y: 20},
		{x: 300, y: 300},
		{x: 300, y: 100}
	]
	
	for (let t=0; t<=1; t+=0.01) {
		const b = cubicBezier(t, p[0], p[1], p[2], p[3])
		ctx.beginPath()
		ctx.arc(b.x, b.y, 2, 0, 2 * Math.PI)
		ctx.stroke()

		// sanity check
		// ctx.beginPath()
		// ctx.moveTo(p[0].x, p[0].y)
		// ctx.bezierCurveTo(p[1].x, p[1].y, p[2].x, p[2].y, p[3].x, p[3].y)
		// ctx.stroke()
	}
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
	