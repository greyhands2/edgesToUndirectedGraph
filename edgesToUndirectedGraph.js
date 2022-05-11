const edgesToUndirectedGraph = (edges) => {
	let graph = {};

	edges.forEach(elem=> elem.forEach((e,i,arr)=>{
				let dupArr = [...arr];
				current = dupArr.splice(i,1);

				if(Array.isArray(graph[current])){
					graph[current]=[...graph[current], ...dupArr]
				} else {
					graph[current] = [...dupArr];
				}
				
			}));

	return graph;
}
