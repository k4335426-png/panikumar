let show = 'this is pani kumar sivala ';
class mango {
    constructor(typesOfTrees, noOfTress, totalExtent) {
        this.typesOfTrees = typesOfTrees;
        this.noOfTress = noOfTress;
        this.totalExtent = totalExtent;

    }
    show() {
        console.log('type of trees', +this.typesOfTrees);
        console.log('total trees', +this.noOfTress);
        console.log('extent ', +this.totalExtent);
    }

}
alert(show);

mangoGarden = new mango(4, 563, 2);
mangoGarden.show();
console.log(show);