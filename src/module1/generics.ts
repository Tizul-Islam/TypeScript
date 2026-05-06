// generics 

// generic interface

interface Developer<T, U> {
    name: string;
    salary: number;
    device: {
        brand: string,
        model: string,
        releasedYear: string;
    }

    smartWatch: {
        heartRate: "200bpm",
        GPS: true,
    }


}


const poorDeveloper:   Developer <{heartRate:string,GPS:boolean}> = {
    name: "John",
    salary: 10,
    device: {
        brand: "Samsung",
        model: "S21",
        releasedYear: "2021"
    },
    smartWatch: {
        heartRate: "200bpm",
        GPS: true,
    }

} 