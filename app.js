const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d"); //getContext, used to obtain the rendering context and its drawing functions. This function takes one parameter, the type of context 2d.

const input = document.getElementById("input");
const circleradius = 200;

// context.stroke()

function show() {
  const n = input.value;
  n = Math.round(n)
  if (n > 2) {
    context.clearRect(0, 0, 450, 430)
    var angle = (2 * Math.PI) / n

    context.beginPath()
    context.moveTo(210 + circleradius, 210) //Starting point of line with x and y co-ordinates.
    for (let i = 1; i < n; i++) {
      context.lineTo(
        //Ending point of line with x and y co-ordinates
        210 + circleradius * Math.cos(angle * i),
        210 - circleradius * Math.sin(angle * i)
      )
    }

    context.closePath()
    context.strokeStyle = 'green'
    context.lineWidth = '4'
    context.stroke()
    context.closePath()
  } else {
    alert('No. of sides should be greater than 2')
  }
}

