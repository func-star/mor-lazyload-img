import Watcher from 'mor-scroll-watcher'
import Item from './item'

export default class ScrollWatcher {
	static item = Item
	
	static init (options) {
		options.initEmit = true
		options.monaId="mor_lazyload_img_all"
		new Watcher(options)
	}
}
