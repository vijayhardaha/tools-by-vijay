import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data for the css-inliner tool.
 * Each example loads a predefined pair of HTML and CSS inputs.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      htmlInput:
        '<div class="container">\n<h1>Welcome!</h1>\n<p>Thank you for signing up.</p>\n<a href="#" class="btn">Get Started</a>\n</div>',
      cssInput:
        '.container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; }\nh1 { color: #333; font-size: 24px; }\np { color: #666; font-size: 16px; line-height: 1.5; }\n.btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; }',
    },
  },
  {
    label: 'Load Example 2',
    data: {
      htmlInput:
        '<table>\n<tr>\n<td class="header">\n<img src="logo.png" alt="Logo" />\n</td>\n</tr>\n<tr>\n<td class="content">\n<h2>Monthly Update</h2>\n<p>Here are the latest news and updates.</p>\n</td>\n</tr>\n</table>',
      cssInput:
        '.header { background: #f8f9fa; padding: 20px; text-align: center; }\n.content { padding: 30px; }\nh2 { color: #2c3e50; font-size: 22px; }\np { color: #555; font-size: 14px; line-height: 1.6; }',
    },
  },
  {
    label: 'Load Example 3',
    data: {
      htmlInput:
        '<div class="promo">\n<h2>Special Offer!</h2>\n<p class="discount">50% OFF</p>\n<p>Limited time offer. Shop now!</p>\n<a href="#" class="cta">Shop Sale</a>\n</div>',
      cssInput:
        '.promo { max-width: 400px; border: 2px solid #e74c3c; border-radius: 8px; padding: 20px; text-align: center; }\nh2 { color: #e74c3c; font-size: 28px; margin: 0 0 10px; }\n.discount { font-size: 36px; font-weight: bold; color: #27ae60; margin: 10px 0; }\n.cta { display: inline-block; padding: 12px 30px; background: #e74c3c; color: white; text-decoration: none; border-radius: 4px; }',
    },
  },
  {
    label: 'Load Example 4',
    data: {
      htmlInput:
        '<div class="invoice">\n<div class="header">\n<h1>Invoice</h1>\n<p>Invoice #: INV-2025-001</p>\n</div>\n<table class="items">\n<tr><th>Item</th><th>Qty</th><th>Price</th></tr>\n<tr><td>Web Design</td><td>1</td><td>$500</td></tr>\n<tr><td>Hosting</td><td>12</td><td>$120</td></tr>\n</table>\n<p class="total">Total: $620</p>\n</div>',
      cssInput:
        '.invoice { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px; }\n.header { border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }\nh1 { color: #333; font-size: 24px; margin: 0; }\n.items { width: 100%; border-collapse: collapse; }\n.items th { background: #f5f5f5; padding: 8px; text-align: left; }\n.items td { padding: 8px; border-bottom: 1px solid #ddd; }\n.total { font-size: 18px; font-weight: bold; text-align: right; margin-top: 20px; }',
    },
  },
];
