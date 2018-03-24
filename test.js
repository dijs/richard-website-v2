function test(moves) {
	let x = 0;
	let y = 0;
	return moves.map(move => {
		x += Math.cos(move.dir * 0.0174533) * move.len;
		y += Math.sin(move.dir * 0.0174533) * move.len;
		return `transform: translateX(${x.toFixed(0)}vw) translateY(${y.toFixed(0)}vw) rotateZ(${move.dir}deg);`;
	});
}

console.log(test([
	{ dir: -45, len: 10 },
	{ dir: 90, len: 30 }
]).join('\n'));

const rx = (dir, len) => (Math.cos(dir * 0.0174533) * len).toFixed(0);
const ry = (dir, len) => (Math.sin(dir * 0.0174533) * len).toFixed(0);

function createZoom (size, dir, dist) {
	return `
@keyframes zoom {
  0% {
    transform: translateX(0) translateY(0) rotateZ(0);
    width: ${size}px;
  }
  25% {
    transform: translateX(${rx(dir, dist * 0.25)}vw) translateY(${ry(dir, dist * 0.25)}vh) rotateZ(${dir}deg);
    width: ${size * 1.2}px;
  }
  50% {
    transform: translateX(${rx(dir, dist * 0.5)}vw) translateY(${ry(dir, dist * 0.5)}vh) rotateZ(${dir}deg);
    width: ${size * 1.5}px;
  }
  75% {
    transform: translateX(${rx(dir, dist * 0.75)}vw) translateY(${ry(dir, dist * 0.75)}vh) rotateZ(${dir}deg);
    width: ${size * 1.2}px;
  }
  100% {
    transform: translateX(${rx(dir, dist * 1)}vw) translateY(${ry(dir, dist * 1)}vh) rotateZ(${dir}deg);
    width: ${size}px;
  }
}
	`;
}

console.log(createZoom(25, 45, 20));