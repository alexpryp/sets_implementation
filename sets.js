'use strict'

class mySet {
	constructor() {
		this.collection = [];
	}

	has(element) {
		return (this.collection.indexOf(element) !== -1 );
	}

	values() {
		return this.collection;
	}

	add(element) {
		if(!this.has(element)) {
			this.collection.push(element);
			return true;
		}
		return false;
	}

	remove(element) {
		if(this.has(element)) {
			let index = this.collection.indexOf(element);
			this.collection.splice(index, 1);
			return true;
		}
		return false;
	}

	size() {
		return this.collection.length;
	}

	union(otherSet) {
		let unionSet = new mySet();
		let firstSet = this.values();
		let secondSet = otherSet.values();
		firstSet.forEach(function(e){
			unionSet.add(e);
		});
		secondSet.forEach(function(e){
			unionSet.add(e);
		});
		return unionSet;
	}

	intersection(otherSet) {
		let intersectionSet = new mySet();
		let firstSet = this.values();
		firstSet.forEach(function(e){
			if(otherSet.has(e)){
				intersectionSet.add(e);
			}
		});
		return intersectionSet;
	}

	difference(otherSet) {
		let differenceSet = new mySet();
		let firstSet = this.values();
		firstSet.forEach(function(e){
			if(!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});
		return differenceSet;
	}

	subset(otherSet) {
		let firstSet = this.values();
		return firstSet.every(function(value) {
            return otherSet.has(value);
        });
	}
}

/*Tests*/
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new mySet();
var setD = new mySet();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.remove("a");
console.log(setD.has("a"));
console.log(setD.add("d"));