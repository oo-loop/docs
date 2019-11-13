import PrismJS from 'prismjs';
import 'prismjs/components/prism-scss';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default function highlight(source, lang) {
	const highlighted = PrismJS.highlight(
		source,
		PrismJS.languages[lang],
		lang,
	);

	return `<pre class="language-${lang} line-numbers"><code>${highlighted}</code></pre>`;
}