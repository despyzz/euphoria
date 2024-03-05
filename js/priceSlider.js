const slider = document.getElementById('priceSlider');

const from = document.getElementById('inputFrom')
const to = document.getElementById('inputTo')

noUiSlider.create(slider, {
  start: [0, 9999],
  connect: true,
  step: 1,
  range: {
    'min': 0,
    'max': 9999
  }
});

slider.noUiSlider.on(
  'update',
  function (values, handle) {
    let fromValue = values[0]
    let toValue = values[1]

    from.value = fromValue
    to.value = toValue
});