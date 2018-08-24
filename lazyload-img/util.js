class Util {
	addClass (dom, cls) {
		let className = dom.className
		let cArr = className.split(' ')
		let addArr = cls.split(' ')
		addArr.forEach((v) => {
			if (cArr.indexOf(v) < 0) {
				cArr.push(v)
			}
		})
		dom.className = cArr.join(' ')
	}
	
	removeClass (dom, cls) {
		let className = dom.className
		let cArr = className.split(' ')
		let removeArr = cls.split(' ')
		cArr = cArr.filter((v) => {
			return removeArr.indexOf(v) < 0
		})
		dom.className = cArr.join(' ')
	}
}

export default new Util
