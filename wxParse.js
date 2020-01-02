Component({
	properties: {
		nodes: {
			type: Object,
			value: {},
			observer: function (nodes) {
				if (nodes.node == 'text') {
					console.log(nodes)
				}
			}
		}
	}
})
