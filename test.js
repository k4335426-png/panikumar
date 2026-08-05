let show = "this is panikumar sivala";
class poultry {
    constructor(chicks, feed, medicine) {
        this.chicks = chicks;
        this.feed = feed;
        this.medicine = medicine;
    }
    forming() {
        console.log('type of chicks ' + this.chicks);
        console.log('total feed bags ' + this.feed);
        console.log('medicine cost  ' + this.medicine);
    }
}
alert("its very dangerus place")
poultryMenagement = new poultry('broilar ', 250, 2);
poultryMenagement.forming();