class Village {
    small_house: number;
    big_house: number;
    library: boolean;
    shop: number;
    farm: number;
    well: number;
    smithy: number;
    church: boolean;
    dungeon: boolean;

    outputInfo(): string {
        return `Village created`;
    };
}

interface VillageBuilderI {
    createSmallHouse(num: number): void;
    createBigHouse(num: number): void;
    createLibrary(): void;
    createShop(num: number): void;
    createFarm(num: number): void;
    createWell(num: number): void;
    createSmithy(num: number): void;
    createChurch(): void;
    createDungeon(): void;
}

class VillageBuilder implements VillageBuilder {
    private product: Village;

    reset(): void {
        this.product = new Village();
    }

    createSmallHouse(num: number) {
        this.product.small_house = num;
    };
    createBigHouse(num: number) {
        this.product.big_house = num;
    };
    createLibrary() {
        this.product.library = true;
    };
    createShop(num: number) {
        this.product.shop = num;
    };
    createFarm(num: number) {
        this.product.farm = num;
    };
    createWell(num: number) {
        this.product.well = num;
    };
    createSmithy(num: number) {
        this.product.smithy = num;
    };
    createChurch() {
        this.product.church = true;
    };
    createDungeon() {
        this.product.dungeon = true;
    };

    getVillage(): Village {
        return this.product;
    }
}

class Director {

    createDefoultVillage(builder: VillageBuilder, type: string): void {
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
    createUserVillage(builder: VillageBuilder, ...arr: string[]): void {
        builder.reset();
        if (arr.includes('small house')) builder.createSmallHouse(1);
        if (arr.includes('big house')) builder.createBigHouse(1);
        if (arr.includes('library')) builder.createLibrary();
        if (arr.includes('shop')) builder.createShop(1);
        if (arr.includes('farm')) builder.createFarm(1);
        if (arr.includes('well')) builder.createWell(1);
        if (arr.includes('smithy')) builder.createSmithy(1);
        if (arr.includes('shurch')) builder.createChurch();
        if (arr.includes('dungeon')) builder.createDungeon();
    }
}

//--------------------------------------------------------------------------------

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