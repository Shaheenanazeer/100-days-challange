
//  CLASS ACCESS MODIFIERS: 
 

class MyClassPublic {
    public fullName: string;

    constructor(name: string) {
        this.fullName = name;
    }
}

const instancePublic = new MyClassPublic("haniya");
console.log(instancePublic.fullName); // Accessing the public property


class MyClassPrivate {
    private secretPhrase: string;

    constructor(secret: string) {
        this.secretPhrase = secret;
    }

    revealSecret() {
        console.log(this.secretPhrase); // Accessing the private property from within the class
    }
}

const instancePrivate = new MyClassPrivate("My private message");
// console.log(instance.secretPhrase); // This would result in an error because secretPhrase is private
instancePrivate.revealSecret(); // This is a valid way to access the private property


class Parent {
    protected surname: string;

    constructor(name: string) {
        this.surname = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.surname}`);
    }
}

const parentEx = new Parent("kainat");
const childEx = new Child("alishba");

// console.log(parentEx.surname); // This would result in an error because surname is protected
childEx.introduceFamily(); // This is a valid way to access the protected property.



