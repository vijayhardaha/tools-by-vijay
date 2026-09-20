import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the html-cleaner tool.
 * Each example loads a realistic messy input plus the preset that best handles it,
 * which fills in the corresponding option controls.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Google Docs Example',
    data: {
      input:
        '<div class="c0 c1" id="docs-internal-guid-9f3" style="line-height:1.38;margin-top:0pt">\n  <p dir="ltr" style="margin-top:0"><span style="font-size:11pt"><b>Quarterly Report</b></span></p>\n  <p style="margin-top:0"><span style="font-size:11pt">&nbsp;&nbsp;</span></p>\n  <p><span style="font-size:11pt">Revenue is up <i>18%</i> this quarter.</span></p>\n  <p>&nbsp;</p>\n  <!-- google docs end -->\n</div>',
      preset: 'clean',
    },
  },
  {
    label: 'Load Article Example',
    data: {
      input:
        '<article>\n  <h1><span style="font-weight:700">Newsletter</span></h1>\n  <p><span>Welcome back!</span> Read the <a href="/blog" style="color:#c00">latest post</a> and see the chart below.</p>\n  <img src="/chart.png" alt="Revenue chart">\n  <p>&nbsp;</p>\n</article>',
      preset: 'article',
    },
  },
  {
    label: 'Load Aggressive Example',
    data: {
      input:
        '<div class="wrapper" data-id="42" style="padding:1rem">\n  <table border="1">\n    <tbody>\n      <tr><td class="cell">Region</td><td>Q1</td></tr>\n      <tr><td>North</td><td>1,200</td></tr>\n    </tbody>\n  </table>\n  <p>&nbsp;</p>\n</div>',
      preset: 'aggressive',
    },
  },
  {
    label: 'Load Text Example',
    data: {
      input:
        '<h2 style="font-size:20px">Release Notes</h2>\n<p>Version <b>2.0</b> ships today.<br>It includes faster builds and a smaller bundle.</p>\n<ul>\n  <li>Faster builds</li>\n  <li>Smaller bundle</li>\n</ul>',
      preset: 'text',
    },
  },
  {
    label: 'Load Safe Example',
    data: {
      input:
        '<section>\n  <h2>About Us</h2>\n  <p>We build <b>useful</b> and <i>fast</i> tools for developers.</p>\n  <!-- internal note -->\n</section>',
      preset: 'safe',
    },
  },
];
