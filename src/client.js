import * as sapper from '@sapper/app';
import './scss/index.scss';

sapper.start({
	target: document.getElementsByTagName('body')[0]
});