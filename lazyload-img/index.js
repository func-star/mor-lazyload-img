import Watcher from 'mor-scroll-watcher'
import Item from './item'

export default class ScrollWatcher {
	static item = Item
	
	static init (options) {
		Watcher.init(options)
	}
}
