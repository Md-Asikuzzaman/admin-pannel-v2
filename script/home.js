window.addEventListener('load', () => {
  app();
  zoom();
  chart();
  tab();
});

const app = () => {
  const menu__bar = document.querySelector('.menu__bar');
  const nav = document.querySelector('nav');
  const search__bar = document.querySelector('.search__bar-mobile');
  const mobile__input = document.querySelector('.mobile__input');

  menu__bar.addEventListener('click', () => {
    nav.classList.toggle('active');
    nav.classList.toggle('nav--active');
  });

  search__bar.addEventListener('click', () => {
    mobile__input.classList.toggle('mobile__input--active');
  });
};

const zoom = () => {
  const html = document.querySelector('html');
  const zoom_in = document.querySelector('#zoom-in');
  const zoom_out = document.querySelector('#zoom-out');
  const zoom_plus = document.querySelector('#zoom-plus');
  const zoom_reset = document.querySelector('#zoom-reset');

  let fontSize = 16;

  zoom_in.addEventListener('click', () => {
    fontSize += 2;
    html.style.fontSize = `${fontSize}px`;
  });

  zoom_out.addEventListener('click', () => {
    fontSize -= 1;
    html.style.fontSize = `${fontSize}px`;
  });

  zoom_reset.addEventListener('click', () => {
    fontSize = 16;
    html.style.fontSize = `${fontSize}px`;
  });

  zoom_plus.addEventListener('click', () => {
    fontSize += 4;
    html.style.fontSize = `${fontSize}px`;
  });
};

const tab = () => {
  const day = document.querySelector('#day');
  const week = document.querySelector('#week');
  const month = document.querySelector('#month');
  const year = document.querySelector('#year');

  // all items
  const dayItem = document.querySelector('.day-item');
  const weekItem = document.querySelector('.week-item');
  const monthItem = document.querySelector('.month-item');
  const yearItem = document.querySelector('.year-item');

  week?.addEventListener('click', () => {
    week.classList.add('day-active');
    day.classList.remove('day-active');
    month.classList.remove('day-active');
    year.classList.remove('day-active');
    // item showing
    weekItem.style.display = 'block';
    dayItem.style.display = 'none';
    monthItem.style.display = 'none';
    yearItem.style.display = 'none';
  });

  month?.addEventListener('click', () => {
    month.classList.add('day-active');
    day.classList.remove('day-active');
    week.classList.remove('day-active');
    year.classList.remove('day-active');
    // item showing
    weekItem.style.display = 'none';
    dayItem.style.display = 'none';
    monthItem.style.display = 'block';
    yearItem.style.display = 'none';
  });

  year?.addEventListener('click', () => {
    year.classList.add('day-active');
    day.classList.remove('day-active');
    week.classList.remove('day-active');
    month.classList.remove('day-active');
    // item showing
    weekItem.style.display = 'none';
    dayItem.style.display = 'none';
    monthItem.style.display = 'none';
    yearItem.style.display = 'block';
  });

  day?.addEventListener('click', () => {
    day.classList.add('day-active');
    week.classList.remove('day-active');
    month.classList.remove('day-active');
    year.classList.remove('day-active');
    // item showing
    weekItem.style.display = 'none';
    dayItem.style.display = 'block';
    monthItem.style.display = 'none';
    yearItem.style.display = 'none';
  });
};

const chart = () => {
  const ctxOne = document?.getElementById('myChartOne')?.getContext('2d');
  const ctxTwo = document?.getElementById('myChartTwo')?.getContext('2d');
  const ctxThree = document?.getElementById('myChartThree')?.getContext('2d');
  const ctxFour = document?.getElementById('myChartFour')?.getContext('2d');

  // Gradient fill
  let gradientOne = ctxOne?.createLinearGradient(0, 0, 0, 700);
  let gradientTwo = ctxTwo?.createLinearGradient(0, 0, 0, 700);
  let gradientThree = ctxTwo?.createLinearGradient(0, 0, 0, 700);
  let gradientFour = ctxTwo?.createLinearGradient(0, 0, 0, 700);

  gradientOne?.addColorStop(0, '#DEEFE9');
  gradientOne?.addColorStop(1, '#deefe933');

  gradientTwo?.addColorStop(0, '#DEEFE9');
  gradientTwo?.addColorStop(1, '#deefe933');

  gradientThree?.addColorStop(0, '#DEEFE9');
  gradientThree?.addColorStop(1, '#deefe933');

  gradientFour?.addColorStop(0, '#DEEFE9');
  gradientFour?.addColorStop(1, '#deefe933');

  const labels = [
    '15k',
    '10k',
    '20k',
    '25k',
    '30K',
    '35K',
    '40K',
    '45K',
    '50K',
    '55K',
    '60K',
  ];

  const data1 = {
    labels,
    datasets: [
      {
        data: [
          20, 40, 60, 30, 50, 30, 40, 60, 60, 100, 20, 40, 60, 60, 60, 20, 40,
          60, 60, 50, 80, 40, 60, 60, 100, 20, 40,
        ],
        label: 'chart label',
        fill: true,
        backgroundColor: gradientOne,
        borderColor: '#229269',
        pointBackgroundColor: '#229269',
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        data: [
          20, 40, 60, 60, 50, 80, 40, 60, 60, 100, 80, 40, 60, 60, 60, 100, 40,
          60, 60, 50, 80, 40, 60, 60, 30, 70, 40,
        ],
        label: 'chart label',
        fill: true,
        backgroundColor: gradientOne,
        borderColor: '#229269',
        pointBackgroundColor: '#229269',
      },
    ],
  };

  const data3 = {
    labels,
    datasets: [
      {
        data: [
          20, 40, 60, 60, 50, 80, 90, 60, 60, 100, 80, 40, 60, 60, 60, 100, 40,
          60, 60, 50, 80, 40, 60, 60, 70, 70, 0,
        ],
        label: 'chart label',
        fill: true,
        backgroundColor: gradientOne,
        borderColor: '#229269',
        pointBackgroundColor: '#229269',
      },
    ],
  };

  const data4 = {
    labels,
    datasets: [
      {
        data: [
          60, 40, 60, 60, 50, 80, 10, 60, 60, 50, 80, 40, 60, 60, 60, 30, 40,
          60, 60, 50, 80, 40, 60, 60, 100, 70, 80,
        ],
        label: 'chart label',
        fill: true,
        backgroundColor: gradientOne,
        borderColor: '#229269',
        pointBackgroundColor: '#229269',
      },
    ],
  };

  const labelTooltip1 = (tooltipItems) => {
    return '';
  };

  const config1 = {
    type: 'line',
    data: data1,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#229269',
          yAlign: 'bottom',
          callbacks: {
            label: labelTooltip1,
          },
        },
      },

      radius: 5,
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value + '%';
            },
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };

  const config2 = {
    type: 'line',
    data: data2,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#229269',
          yAlign: 'bottom',
          callbacks: {
            label: labelTooltip1,
          },
        },
      },
      radius: 5,
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value + '%';
            },
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };

  const config3 = {
    type: 'line',
    data: data3,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#229269',
          yAlign: 'bottom',
          callbacks: {
            label: labelTooltip1,
          },
        },
      },

      radius: 5,
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value + '%';
            },
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };

  const config4 = {
    type: 'line',
    data: data4,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          backgroundColor: '#229269',
          yAlign: 'bottom',
          callbacks: {
            label: labelTooltip1,
          },
        },
      },

      radius: 5,
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value + '%';
            },
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };

  new Chart(ctxOne, config1);
  new Chart(ctxTwo, config2);
  new Chart(ctxThree, config3);
  new Chart(ctxFour, config4);
};


