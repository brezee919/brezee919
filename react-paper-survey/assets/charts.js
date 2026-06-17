(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: HotpotQA ---
  var chartHotpot = echarts.init(document.getElementById('chart-hotpotqa'), null, { renderer: 'svg' });
  chartHotpot.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    grid: { left: 120, right: 40, top: 30, bottom: 40 },
    xAxis: { type: 'value', max: 40, axisLabel: { color: muted, formatter: '{value}%' }, splitLine: { lineStyle: { color: rule } } },
    yAxis: {
      type: 'category',
      data: ['Standard', 'Act-only', 'CoT', 'CoT-SC (21)', 'ReAct', 'ReAct + CoT-SC', 'CoT-SC + ReAct'],
      axisLabel: { color: ink, fontSize: 12 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 20.7, itemStyle: { color: muted + '88' } },
        { value: 25.7, itemStyle: { color: muted + '88' } },
        { value: 29.4, itemStyle: { color: muted + '88' } },
        { value: 34.2, itemStyle: { color: accent + 'aa' } },
        { value: 27.4, itemStyle: { color: accent } },
        { value: 35.4, itemStyle: { color: accent2 } },
        { value: 33.9, itemStyle: { color: accent + 'cc' } }
      ],
      barWidth: 22,
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      itemStyle: { borderRadius: [0, 4, 4, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartHotpot.resize(); });

  // --- Chart: Fever ---
  var chartFever = echarts.init(document.getElementById('chart-fever'), null, { renderer: 'svg' });
  chartFever.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    grid: { left: 120, right: 40, top: 30, bottom: 40 },
    xAxis: { type: 'value', max: 70, axisLabel: { color: muted, formatter: '{value}%' }, splitLine: { lineStyle: { color: rule } } },
    yAxis: {
      type: 'category',
      data: ['Standard', 'CoT', 'Act-only', 'CoT-SC (21)', 'ReAct', 'ReAct + CoT-SC', 'CoT-SC + ReAct'],
      axisLabel: { color: ink, fontSize: 12 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 53.4, itemStyle: { color: muted + '88' } },
        { value: 56.3, itemStyle: { color: muted + '88' } },
        { value: 58.6, itemStyle: { color: muted + '88' } },
        { value: 60.0, itemStyle: { color: accent + 'aa' } },
        { value: 60.9, itemStyle: { color: accent } },
        { value: 60.7, itemStyle: { color: accent + 'cc' } },
        { value: 64.1, itemStyle: { color: accent2 } }
      ],
      barWidth: 22,
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      itemStyle: { borderRadius: [0, 4, 4, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartFever.resize(); });

  // --- Chart: Error Analysis ---
  var chartError = echarts.init(document.getElementById('chart-error'), null, { renderer: 'svg' });
  chartError.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true },
    legend: { data: ['ReAct', 'CoT'], top: 0, textStyle: { color: ink } },
    grid: { left: 140, right: 40, top: 40, bottom: 40 },
    xAxis: { type: 'value', max: 60, axisLabel: { color: muted, formatter: '{value}%' }, splitLine: { lineStyle: { color: rule } } },
    yAxis: {
      type: 'category',
      data: ['推理错误（含重复步骤）', '搜索结果为空/无用', '事实幻觉', '标签歧义'],
      axisLabel: { color: ink, fontSize: 12 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [
      {
        name: 'ReAct',
        type: 'bar',
        data: [47, 23, 0, 29],
        barWidth: 16,
        itemStyle: { color: accent, borderRadius: [0, 4, 4, 0] },
        label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 }
      },
      {
        name: 'CoT',
        type: 'bar',
        data: [16, 0, 56, 28],
        barWidth: 16,
        itemStyle: { color: accent2, borderRadius: [0, 4, 4, 0] },
        label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 }
      }
    ]
  });
  window.addEventListener('resize', function() { chartError.resize(); });

  // --- Chart: ALFWorld ---
  var chartAlf = echarts.init(document.getElementById('chart-alfworld'), null, { renderer: 'svg' });
  chartAlf.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    grid: { left: 100, right: 40, top: 30, bottom: 40 },
    xAxis: { type: 'value', max: 100, axisLabel: { color: muted, formatter: '{value}%' }, splitLine: { lineStyle: { color: rule } } },
    yAxis: {
      type: 'category',
      data: ['BUTLER (模仿学习)', 'Act-only (PaLM-540B)', 'ReAct (PaLM-540B)', '人类专家'],
      axisLabel: { color: ink, fontSize: 12 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 37, itemStyle: { color: muted + '88' } },
        { value: 45, itemStyle: { color: muted + '88' } },
        { value: 71, itemStyle: { color: accent } },
        { value: 97, itemStyle: { color: accent2 } }
      ],
      barWidth: 24,
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      itemStyle: { borderRadius: [0, 4, 4, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartAlf.resize(); });

  // --- Chart: WebShop ---
  var chartWeb = echarts.init(document.getElementById('chart-webshop'), null, { renderer: 'svg' });
  chartWeb.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
    grid: { left: 100, right: 40, top: 30, bottom: 40 },
    xAxis: { type: 'value', max: 65, axisLabel: { color: muted, formatter: '{value}%' }, splitLine: { lineStyle: { color: rule } } },
    yAxis: {
      type: 'category',
      data: ['行为克隆基线', '强化学习基线', 'ReAct (PaLM-540B)', '人类专家'],
      axisLabel: { color: ink, fontSize: 12 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 24.5, itemStyle: { color: muted + '88' } },
        { value: 25.6, itemStyle: { color: muted + '88' } },
        { value: 35.5, itemStyle: { color: accent } },
        { value: 60, itemStyle: { color: accent2 } }
      ],
      barWidth: 24,
      label: { show: true, position: 'right', formatter: '{c}%', color: ink, fontSize: 11 },
      itemStyle: { borderRadius: [0, 4, 4, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartWeb.resize(); });

  // --- Chart: Fine-tuning Scaling ---
  var chartFt = echarts.init(document.getElementById('chart-finetune'), null, { renderer: 'svg' });
  chartFt.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true },
    legend: { data: ['Prompting', '微调'], top: 0, textStyle: { color: ink } },
    grid: { left: 80, right: 40, top: 40, bottom: 50 },
    xAxis: {
      type: 'category',
      data: ['PaLM-8B', 'PaLM-62B', 'PaLM-540B'],
      axisLabel: { color: ink, fontSize: 12 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      name: 'HotpotQA EM (%)',
      nameTextStyle: { color: muted, fontSize: 11 },
      max: 40,
      axisLabel: { color: muted, formatter: '{value}%' },
      splitLine: { lineStyle: { color: rule } }
    },
    series: [
      {
        name: 'Prompting',
        type: 'bar',
        data: [
          { value: 10, itemStyle: { color: muted + '88' } },
          { value: 22, itemStyle: { color: muted + '88' } },
          { value: 27.4, itemStyle: { color: accent + 'cc' } }
        ],
        barWidth: 28,
        label: { show: true, position: 'top', formatter: '{c}%', color: ink, fontSize: 11 },
        itemStyle: { borderRadius: [4, 4, 0, 0] }
      },
      {
        name: '微调',
        type: 'bar',
        data: [
          { value: 28, itemStyle: { color: accent } },
          { value: 36, itemStyle: { color: accent } },
          { value: null, itemStyle: { color: accent } }
        ],
        barWidth: 28,
        label: { show: true, position: 'top', formatter: function(p) { return p.value !== null ? p.value + '%' : 'N/A'; }, color: ink, fontSize: 11 },
        itemStyle: { borderRadius: [4, 4, 0, 0] }
      }
    ]
  });
  window.addEventListener('resize', function() { chartFt.resize(); });

})();
