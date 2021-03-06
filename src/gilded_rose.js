function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = []

items.push(new Item('Sword', 12, 3));
items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));


function normal(item) {
    item.sell_in -= 1;

    if (item.quality != 0) {

        item.quality -= 1
        if (item.sell_in < 0) {
            item.quality -= 1
        }

    }
}

function brie(item) {
    item.sell_in -= 1;

    if (item.quality < 50) {

        item.quality += 1
        if (item.sell_in < 0) {
            if (item.quality < 50) {
                item.quality += 1
            }
        }
    }
}


function backStage(item) {
    item.sell_in -= 1
    item.quality += 1
    if (item.sell_in < 10) {
        item.quality += 1
    }

    if (item.sell_in < 5) {
        item.quality += 1
    }

    if (item.sell_in < 0) {
        item.quality = 0
    }

}

function update_quality() {
    for (var i = 0; i < items.length; i++) {

        switch (items[i].name) {
            case 'Aged Brie':
                brie(items[i])
                break
            case 'Backstage passes to a TAFKAL80ETC concert':
                backStage(items[i])
                break
            case 'Sulfuras, Hand of Ragnaros':
                break
            default:
                normal(items[i])
        }
    }
}
