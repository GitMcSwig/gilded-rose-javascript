describe("Gilded Rose", function() {

  // it("should do something", function() {
  //   update_quality();
  //   expect(true).toEqual(false)
  // });


  it("We can access the array of items", function() {
    expect(items).toBeDefined()
  })


   it('NORMAL A  magic wand item with sell_in 10 and quality 5, will be reduced to sell_in 9 and quality 4 after update_quality is ran ', function() {
     items = []
     items.push(new Item('Magic Wand', 10, 5));
     update_quality()
     expect(items[0].name).toEqual('Magic Wand')
     expect(items[0].sell_in).toEqual(9)
     expect(items[0].quality).toEqual(4)
   })
   it('"Aged Brie" actually increases in quality the older it gets', function() {
     items = []
     items.push(new Item('Aged Brie', 10, 5));
     var qualityPrior  = items[0].quality
     update_quality()
     expect(items[0].quality).toEqual(qualityPrior+1)
   })
   it('NORMAL The quality of an item is never negative ', function() {
    items = []
     items.push(new Item('Sword', 1, 0));
     update_quality()
     expect(items[0].name).toEqual('Sword')
     expect(items[0].sell_in).toEqual(0)
     expect(items[0].quality).toEqual(0)
   })

   it('NORMAL Once the sell_in days is less then zero, quality degrades twice as fast', function() {
     items = []
     items.push(new Item('Broomstick', 0, 10));
     update_quality()
     expect(items[0].name).toEqual('Broomstick')
     expect(items[0].sell_in).toEqual(-1)
     expect(items[0].quality).toEqual(8)
   })
   it('The quality of an item is never more than 50', function() {
    items = []
     items.push(new Item('Aged Brie', 5, 50));
     update_quality()


    expect(items[0].quality).toEqual(50)
   })
   it('Aged Brie at 0 0, quality increases twices as fast when sell_in less that zero', function() {
    items = []
     items.push(new Item('Aged Brie', 0, 0));
     update_quality()

     expect(items[0].sell_in).toEqual(-1)
     expect(items[0].quality).toEqual(2)

     update_quality()

     expect(items[0].sell_in).toEqual(-2)
     expect(items[0].quality).toEqual(4)
   })

   it('NORMAL item with sell_in 0 quality 0, quality is never negative', function() {
    items = []
     items.push(new Item('Sword', 0, 0));
     update_quality()

     expect(items[0].sell_in).toEqual(-1)
     expect(items[0].quality).toEqual(0)



   })


   it('"Sulfuras", being a legendary item, never has to be sold nor does it decrease in quality', function() {
     items = []
     items.push(new Item('Sulfuras, Hand of Ragnaros', 10, 80));
     update_quality()
     expect(items[0].sell_in).toEqual(10)
     expect(items[0].quality).toEqual(80)
   })
   it('"Backstage passes", like aged brie, increases in quality as its sell_in value decreases; quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but quality drops to 0 after the concert', function() {
     items = []
     items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 12, 23));

     update_quality()
     expect(items[0].sell_in).toEqual(11)
     expect(items[0].quality).toEqual(24)

     update_quality()
     expect(items[0].sell_in).toEqual(10)
     expect(items[0].quality).toEqual(25)

     update_quality()
     expect(items[0].sell_in).toEqual(9)
     expect(items[0].quality).toEqual(27)

     update_quality()
     expect(items[0].sell_in).toEqual(8)
     expect(items[0].quality).toEqual(29)

     update_quality()
     expect(items[0].sell_in).toEqual(7)
     expect(items[0].quality).toEqual(31)

     update_quality()
     expect(items[0].sell_in).toEqual(6)
     expect(items[0].quality).toEqual(33)

     update_quality()
     expect(items[0].sell_in).toEqual(5)
     expect(items[0].quality).toEqual(35)

     update_quality()
     expect(items[0].sell_in).toEqual(4)
     expect(items[0].quality).toEqual(38)

     update_quality()
     expect(items[0].sell_in).toEqual(3)
     expect(items[0].quality).toEqual(41)

     update_quality()
     expect(items[0].sell_in).toEqual(2)
     expect(items[0].quality).toEqual(44)

     update_quality()
     expect(items[0].sell_in).toEqual(1)
     expect(items[0].quality).toEqual(47)

     update_quality()
     expect(items[0].sell_in).toEqual(0)
     expect(items[0].quality).toEqual(50)

     update_quality()
     expect(items[0].sell_in).toEqual(-1)
     expect(items[0].quality).toEqual(0)


   })
});
