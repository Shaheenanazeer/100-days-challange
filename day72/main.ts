// / Interface definitions for Book and Game

interface Book {
    itemType: string;
    title: string;
    isbn: number;
  }
  
  interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
  }
  
  // Generic Class Collection
  class Collection<T> {
    public data: T[] = [];
  
    // Method to add an item of type T to the collection
    add(item: T): void {
      this.data.push(item);
    }
  }
  
  // Creating an instance of Collection with type parameter Book
  let itemOne = new Collection<Book>();
  itemOne.add({ itemType: "Book", title: "The Holy Quran", isbn: 139789675062006  });
  itemOne.add({ itemType: "Book", title: "Sahih Muslim", isbn:  139789694281686  });
  console.log(itemOne);
  
  // Creating an instance of Collection with type parameter Game
  let itemTwo = new Collection<Game>();
  itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
  console.log(itemTwo);
