import PrismJS from 'prismjs';
import 'prismjs/components/prism-scss';
// import 'prismjs/plugins/line-numbers/prism-line-numbers';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default function highlight(source, lang, className) {
	const highlighted = PrismJS.highlight(
		source,
		PrismJS.languages[lang],
		lang,
	);

	let classes = className || false;

	return `<pre class="language-${lang}${classes ? ` ${classes}` : ''}"><code>${highlighted}</code></pre>`;
}