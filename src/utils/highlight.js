import PrismJS from 'prismjs';
import 'prismjs/components/prism-scss';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default function highlight(source, lang, line) {
	const highlighted = PrismJS.highlight(
		source,
		PrismJS.languages[lang],
		lang,
	);

	let lineNumbers = line === false ? false : true || true;

	return `<pre class="language-${lang}${lineNumbers ? ' line-numbers' : ''}"><code>${highlighted}</code></pre>`;
}