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

    outputInfo(num): string {
        return `Village has: `;
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

class VillageBuilder implements VillageBuilderI {
    private product: Village;

    createVillage(type: string): void {
        this.product = new Village();

        if (type == 'small') {
            this.createSmallHouse(2);
            this.createBigHouse(1);
            this.createWell(1);
            this.createFarm(1);
        }
        else if (type == 'middle') {
            this.createSmallHouse(4);
            this.createBigHouse(2);
            this.createWell(2);
            this.createFarm(2);
            this.createChurch();
            this.createSmithy(1);
        }
        else if (type == 'big') {
            this.createSmallHouse(7);
            this.createBigHouse(5);
            this.createLibrary();
            this.createWell(3);
            this.createFarm(4);
            this.createChurch();
            this.createShop(2);
            this.createSmithy(2);
            this.createDungeon();
        }
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

    getVillage(type: string): Village {
        this.createVillage(type)
        return this.product;
    }
}

//--------------------------------------------------------------------------------

const builder = new VillageBuilder();

console.log(builder.getVillage('small'));
console.log(builder.getVillage('middle'));
console.log(builder.getVillage('big'));