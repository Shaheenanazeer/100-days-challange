// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


let book: { title: string; author: string; yearPublished: number } = {
    title: "Al- Kitaab AL-Asasi",
    author: "Abbas AL-Tonsi",
    yearPublished: 2002
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);
