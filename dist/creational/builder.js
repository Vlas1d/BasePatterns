class Village {
    outputInfo() {
        return `Village created`;
    }
    ;
}
class VillageBuilder {
    reset() {
        this.product = new Village();
    }
    createSmallHouse(num) {
        this.product.small_house = num;
    }
    ;
    createBigHouse(num) {
        this.product.big_house = num;
    }
    ;
    createLibrary() {
        this.product.library = true;
    }
    ;
    createShop(num) {
        this.product.shop = num;
    }
    ;
    createFarm(num) {
        this.product.farm = num;
    }
    ;
    createWell(num) {
        this.product.well = num;
    }
    ;
    createSmithy(num) {
        this.product.smithy = num;
    }
    ;
    createChurch() {
        this.product.church = true;
    }
    ;
    createDungeon() {
        this.product.dungeon = true;
    }
    ;
    getVillage() {
        return this.product;
    }
}
class Director {
    createDefoultVillage(builder, type) {
        builder.reset();
        if (type == 'small') {
            builder.createSmallHouse(2);
            builder.createBigHouse(1);
            builder.createWell(1);
            builder.createFarm(1);
        }
        else if (type == 'middle') {
            builder.createSmallHouse(4);
            builder.createBigHouse(2);
            builder.createWell(2);
            builder.createFarm(2);
            builder.createChurch();
            builder.createSmithy(1);
        }
        else if (type == 'big') {
            builder.createSmallHouse(7);
            builder.createBigHouse(5);
            builder.createLibrary();
            builder.createWell(3);
            builder.createFarm(4);
            builder.createChurch();
            builder.createShop(2);
            builder.createSmithy(2);
            builder.createDungeon();
        }
    }
    createUserVillage(builder, ...arr) {
        builder.reset();
        if (arr.includes('small house'))
            builder.createSmallHouse(1);
        if (arr.includes('big house'))
            builder.createBigHouse(1);
        if (arr.includes('library'))
            builder.createLibrary();
        if (arr.includes('shop'))
            builder.createShop(1);
        if (arr.includes('farm'))
            builder.createFarm(1);
        if (arr.includes('well'))
            builder.createWell(1);
        if (arr.includes('smithy'))
            builder.createSmithy(1);
        if (arr.includes('shurch'))
            builder.createChurch();
        if (arr.includes('dungeon'))
            builder.createDungeon();
    }
}
const director = new Director();
const builder = new VillageBuilder();
director.createDefoultVillage(builder, 'middle');
const middleVillage = builder.getVillage();
director.createDefoultVillage(builder, 'big');
const bigVillage = builder.getVillage();
director.createUserVillage(builder, 'small house', 'big house', 'library', 'dungeon');
const userVillage = builder.getVillage();
console.log(middleVillage);
console.log(bigVillage);
console.log(userVillage);
//# sourceMappingURL=builder.js.map