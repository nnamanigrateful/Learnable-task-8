class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            console.log("Dialing", phoneNumber);
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found");
        }
    }
}

class PhoneNumberObserver {
    update(phoneNumber) {
        console.log("Dialed:", phoneNumber);
    }
}

class CustomObserver {
    update(phoneNumber) {
        console.log("Now Dialing", phoneNumber);
    }
}


const telephone = new Telephone();

const observer1 = new PhoneNumberObserver();
const observer2 = new CustomObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("1234567890");
telephone.dialPhoneNumber("1234567890");

telephone.removePhoneNumber("1234567890");
telephone.dialPhoneNumber("1234567890");
